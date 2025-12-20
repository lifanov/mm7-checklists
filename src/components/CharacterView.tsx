
import { useState } from 'react';
import { useApp } from '../hooks/useApp';
import { CLASSES, type SkillLevel, type SkillLimits } from '../data/classes';
import { PROMOTIONS } from '../data/promotions';
import { SPELLS, type MasteryLevel } from '../data/spells';
import { TRAINERS, type Trainer } from '../data/trainers';
import type { PromotionType } from '../context/MM7Context';

interface CharacterViewProps {
  charIndex: number;
}

export const CharacterView = ({ charIndex }: CharacterViewProps) => {
  const { activeProfile, updateCharacter } = useApp();
  const [trainerModal, setTrainerModal] = useState<{ skill: string; trainers: Trainer[] } | null>(null);

  if (!activeProfile) return null;

  const character = activeProfile.party[charIndex];
  const classDef = CLASSES[character.classId];
  const currentPromotion = character.promotion;

  const getLimitForPromotion = (limits: SkillLimits): SkillLevel => {
    switch (currentPromotion) {
      case 'base': return limits.base;
      case 'first': return limits.first;
      case 'light': return limits.light;
      case 'dark': return limits.dark;
      default: return limits.base;
    }
  };

  // Helper to get display title for current rank
  const getPromotionTitle = (classId: string, promo: PromotionType) => {
    const p = PROMOTIONS[classId];
    if (!p) return 'Unknown';
    switch (promo) {
        case 'base': return p.base;
        case 'first': return p.first.title;
        case 'light': return p.light.title;
        case 'dark': return p.dark.title;
        default: return p.base;
    }
  };

  const toggleSkill = (skillName: string, level: string) => {
    const key = `${skillName}:${level}`;
    const newVal = !character.skills[key];

    const updates: Record<string, boolean> = { [key]: newVal };
    // Auto-check lower levels
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

  const showTrainers = (skillName: string) => {
    const trainers = TRAINERS[skillName] || [];
    // Sort trainers: Basic, Expert, Master, Grandmaster
    const sortedTrainers = [...trainers].sort((a, b) => {
      const order = { 'Basic': 0, 'Expert': 1, 'Master': 2, 'Grandmaster': 3 };
      return order[a.level] - order[b.level];
    });
    setTrainerModal({ skill: skillName, trainers: sortedTrainers });
  };

  const renderSkillRow = (skill: string, limits: SkillLimits) => {
    const maxLevel = getLimitForPromotion(limits);

    if (maxLevel === '-') return null;

    const levels = ['B', 'E', 'M', 'GM'];
    const maxIdx = levels.indexOf(maxLevel);

    return (
      <tr key={skill}>
        <td>
          <button
            onClick={() => showTrainers(skill)}
            className="link-button"
            style={{
              background: 'none', border: 'none', color: '#ffd700',
              textDecoration: 'underline', cursor: 'pointer',
              fontWeight: 'inherit', padding: 0
            }}
          >
            {skill}
          </button>
        </td>
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

  // Determine available schools and spells
  const magicSkills = classDef.skills.magic;
  const availableSchools = Object.keys(SPELLS).filter(school => {
    const limits = magicSkills[school as keyof typeof magicSkills];
    const maxLevel = getLimitForPromotion(limits);
    if (!maxLevel || maxLevel === '-') return false;

    return true;
  });

  const getMasteryRank = (lvl: SkillLevel): number => {
      switch(lvl) {
          case 'B': return 1;
          case 'E': return 2;
          case 'M': return 3;
          case 'GM': return 4;
          default: return 0;
      }
  };

  const getSpellRank = (lvl: MasteryLevel): number => {
      switch(lvl) {
          case 'Normal': return 1;
          case 'Expert': return 2;
          case 'Master': return 3;
          case 'Grandmaster': return 4;
          default: return 99;
      }
  };

  return (
    <div>
      <h2>{character.name || `Character ${charIndex + 1}`} - {classDef.name}</h2>
      <p className="hint" style={{ marginTop: '-1rem', marginBottom: '1rem' }}>
        Current Rank: {getPromotionTitle(character.classId, currentPromotion)}
      </p>

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
              {Object.entries(classDef.skills.weapons).map(([s, limits]) => renderSkillRow(s, limits))}

              <tr><td colSpan={5} style={{background: '#3e3226', fontWeight: 'bold'}}>Armor</td></tr>
              {Object.entries(classDef.skills.armor).map(([s, limits]) => renderSkillRow(s, limits))}

              <tr><td colSpan={5} style={{background: '#3e3226', fontWeight: 'bold'}}>Magic</td></tr>
              {Object.entries(classDef.skills.magic).map(([s, limits]) => renderSkillRow(s, limits))}

              <tr><td colSpan={5} style={{background: '#3e3226', fontWeight: 'bold'}}>Misc</td></tr>
              {Object.entries(classDef.skills.misc).map(([s, limits]) => renderSkillRow(s, limits))}
            </tbody>
          </table>
        </div>

        {/* Spell Book */}
        {availableSchools.length > 0 && (
          <div style={{ flex: '1 1 300px' }}>
            <h3>Spell Book</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {availableSchools.map(school => {
                const limits = magicSkills[school as keyof typeof magicSkills];
                const maxSkillLevel = getLimitForPromotion(limits);
                const maxRank = getMasteryRank(maxSkillLevel);
                const spells = SPELLS[school as keyof typeof SPELLS];

                // Filter spells based on max skill level
                const learnableSpells = spells.filter(spell => getSpellRank(spell.level) <= maxRank);

                if (learnableSpells.length === 0) return null;

                return (
                  <div key={school} style={{ background: 'rgba(0,0,0,0.1)', padding: '1rem', border: '1px solid #5a4a35' }}>
                    <h4 style={{ borderBottom: '1px solid #5a4a35', marginTop: 0 }}>{school} (Max: {maxSkillLevel})</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.5rem' }}>
                      {learnableSpells.map(spell => (
                        <label key={spell.name} className="checkbox-label" style={{ fontSize: '0.9em' }}>
                          <input
                            type="checkbox"
                            checked={!!character.spells[spell.name]}
                            onChange={() => toggleSpell(spell.name)}
                          />
                          {spell.name} <span style={{color: '#888', fontSize: '0.8em'}}>({spell.level[0]})</span>
                        </label>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {trainerModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1000
        }} onClick={() => setTrainerModal(null)}>
          <div style={{
            background: '#2c241b', padding: '2rem', border: '2px solid #ffd700',
            maxWidth: '600px', width: '90%', maxHeight: '80vh', overflowY: 'auto'
          }} onClick={e => e.stopPropagation()}>
            <h3 style={{ marginTop: 0, color: '#ffd700' }}>Trainers for {trainerModal.skill}</h3>
            {trainerModal.trainers.length === 0 ? (
              <p>No specific trainers found (or all can teach Basic).</p>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #5a4a35', textAlign: 'left' }}>
                    <th style={{ padding: '0.5rem' }}>Level</th>
                    <th style={{ padding: '0.5rem' }}>Name</th>
                    <th style={{ padding: '0.5rem' }}>Location</th>
                    <th style={{ padding: '0.5rem' }}>Region</th>
                  </tr>
                </thead>
                <tbody>
                  {trainerModal.trainers.map((t, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? 'rgba(0,0,0,0.1)' : 'transparent' }}>
                      <td style={{ padding: '0.5rem' }}>{t.level}</td>
                      <td style={{ padding: '0.5rem' }}>{t.name}</td>
                      <td style={{ padding: '0.5rem' }}>{t.location}</td>
                      <td style={{ padding: '0.5rem' }}>{t.region}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            <button onClick={() => setTrainerModal(null)} style={{ marginTop: '1rem' }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};
