
import { useApp } from '../hooks/useApp';
import { CLASSES } from '../data/classes';
import { SPELLS } from '../data/spells';

interface CharacterViewProps {
  charIndex: number;
}

export const CharacterView = ({ charIndex }: CharacterViewProps) => {
  const { activeProfile, updateCharacter } = useApp();

  if (!activeProfile) return null;

  const character = activeProfile.party[charIndex];
  const classDef = CLASSES[character.classId];
  const alignment = activeProfile.alignment;

  const toggleSkill = (skillName: string, level: string) => {
    // Logic: If I click "Master", I also have "Expert" and "Basic".
    // Or just toggle the specific checkbox?
    // User wants "keep track". Usually checking off "Master" implies you have it.
    // I'll implementing independent toggles but visually it might look like a progression.
    // Actually, checking "M" should probably check "B" and "E".
    // But let's keep it simple: just toggle what is clicked.
    const key = `${skillName}:${level}`;
    const newVal = !character.skills[key];

    const updates: Record<string, boolean> = { [key]: newVal };
    // Auto-check lower levels?
    if (newVal) {
        if (level === 'GM') { updates[`${skillName}:M`] = true; updates[`${skillName}:E`] = true; updates[`${skillName}:B`] = true; }
        if (level === 'M') { updates[`${skillName}:E`] = true; updates[`${skillName}:B`] = true; }
        if (level === 'E') { updates[`${skillName}:B`] = true; }
    }

    updateCharacter(charIndex, {
      skills: { ...character.skills, ...updates }
    });
  };

  const toggleSpell = (spellName: string) => {
    updateCharacter(charIndex, {
      spells: { ...character.spells, [spellName]: !character.spells[spellName] }
    });
  };

  const renderSkillRow = (skill: string, maxLevel: string) => {
    if (maxLevel === '-') return null;

    // Levels: B, E, M, GM
    const levels = ['B', 'E', 'M', 'GM'];
    // Find index of maxLevel
    const maxIdx = levels.indexOf(maxLevel);

    return (
      <tr key={skill}>
        <td>{skill}</td>
        {levels.map((lvl, idx) => {
          const isAvailable = idx <= maxIdx;
          const key = `${skill}:${lvl}`;
          const isChecked = !!character.skills[key];

          return (
            <td key={lvl} style={{ textAlign: 'center', background: isAvailable ? 'transparent' : 'rgba(0,0,0,0.2)' }}>
              {isAvailable && (
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleSkill(skill, lvl)}
                />
              )}
            </td>
          );
        })}
      </tr>
    );
  };

  // Determine available spells
  // Filter spell schools based on Class capabilities
  const availableSchools = Object.keys(SPELLS).filter(school => {
    // Check if class has this magic school
    const level = classDef.skills.magic[school as keyof typeof classDef.skills.magic];
    if (!level || level === '-') return false;

    // Check alignment restriction for Light/Dark
    if (school === 'Light' && alignment === 'Dark') return false;
    if (school === 'Dark' && alignment === 'Light') return false;
    // Neutral can't learn Light/Dark usually until promotion?
    // Actually in MM7, you choose path then get access.
    // If Neutral, usually neither? Or both pending?
    // Let's hide Light/Dark if Neutral.
    if ((school === 'Light' || school === 'Dark') && alignment === 'Neutral') return false;

    return true;
  });

  return (
    <div>
      <h2>{character.name || `Character ${charIndex + 1}`} - {classDef.name}</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        {/* Skills Matrix */}
        <div style={{ flex: '1 1 400px' }}>
          <h3>Skills Progress</h3>
          <table className="checklist-table skill-matrix">
            <thead>
              <tr>
                <th>Skill</th>
                <th>B</th>
                <th>E</th>
                <th>M</th>
                <th>GM</th>
              </tr>
            </thead>
            <tbody>
              <tr><td colSpan={5} style={{background: '#3e3226', fontWeight: 'bold'}}>Weapons</td></tr>
              {Object.entries(classDef.skills.weapons).map(([s, l]) => renderSkillRow(s, l))}

              <tr><td colSpan={5} style={{background: '#3e3226', fontWeight: 'bold'}}>Armor</td></tr>
              {Object.entries(classDef.skills.armor).map(([s, l]) => renderSkillRow(s, l))}

              <tr><td colSpan={5} style={{background: '#3e3226', fontWeight: 'bold'}}>Magic</td></tr>
              {Object.entries(classDef.skills.magic).map(([s, l]) => {
                  // Filter Light/Dark based on alignment
                  if ((s === 'Light' || s === 'Dark') && alignment === 'Neutral') return null;
                  if (s === 'Light' && alignment === 'Dark') return null;
                  if (s === 'Dark' && alignment === 'Light') return null;
                  return renderSkillRow(s, l);
              })}

              <tr><td colSpan={5} style={{background: '#3e3226', fontWeight: 'bold'}}>Misc</td></tr>
              {Object.entries(classDef.skills.misc).map(([s, l]) => renderSkillRow(s, l))}
            </tbody>
          </table>
        </div>

        {/* Spell Book */}
        {availableSchools.length > 0 && (
          <div style={{ flex: '1 1 300px' }}>
            <h3>Spell Book</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {availableSchools.map(school => (
                <div key={school} style={{ background: 'rgba(0,0,0,0.1)', padding: '1rem', border: '1px solid #5a4a35' }}>
                  <h4 style={{ borderBottom: '1px solid #5a4a35', marginTop: 0 }}>{school}</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                    {SPELLS[school as keyof typeof SPELLS].map(spell => (
                      <label key={spell} className="checkbox-label" style={{ fontSize: '0.9em' }}>
                        <input
                          type="checkbox"
                          checked={!!character.spells[spell]}
                          onChange={() => toggleSpell(spell)}
                        />
                        {spell}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
