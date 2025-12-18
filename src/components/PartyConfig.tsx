
import { useApp } from '../hooks/useApp';
import { CLASSES } from '../data/classes';

export const PartyConfig = () => {
  const { activeProfile, updateProfile, updateCharacter } = useApp();

  if (!activeProfile) return null;

  return (
    <div className="party-config">
      <h2>Party Configuration</h2>

      <div className="config-section">
        <label>
          <strong>Alignment Path:</strong>
          <select
            value={activeProfile.alignment}
            onChange={(e) => updateProfile({ alignment: e.target.value as import('../context/MM7Context').Alignment })}
            style={{ marginLeft: '1rem' }}
          >
            <option value="Neutral">Neutral (Start)</option>
            <option value="Light">Light Path</option>
            <option value="Dark">Dark Path</option>
          </select>
        </label>
        <p className="hint">This determines available spells and promotion titles.</p>
      </div>

      <div className="party-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
        {activeProfile.party.map((char, index) => (
          <div key={char.id} className="char-card" style={{ background: '#3e3226', padding: '1rem', border: '1px solid #5a4a35' }}>
            <h3>Character {index + 1}</h3>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Name:</label>
              <input
                type="text"
                value={char.name}
                onChange={(e) => updateCharacter(index, { name: e.target.value })}
                placeholder="Enter Name"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Class:</label>
              <select
                value={char.classId}
                onChange={(e) => updateCharacter(index, { classId: e.target.value })}
                style={{ width: '100%' }}
              >
                {Object.values(CLASSES).map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>
            <div style={{ marginTop: '1rem', fontSize: '0.9em', color: '#aaa' }}>
              Current Title: <span style={{ color: '#ffd700' }}>
                {activeProfile.alignment === 'Neutral' ? CLASSES[char.classId].promotions.neutral :
                 activeProfile.alignment === 'Light' ? CLASSES[char.classId].promotions.light :
                 CLASSES[char.classId].promotions.dark}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
