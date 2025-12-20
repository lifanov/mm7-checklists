
import { useState } from 'react';
import { useApp } from '../hooks/useApp';
import { CLASSES } from '../data/classes';
import { PROMOTIONS } from '../data/promotions';
import type { Path, PromotionType } from '../context/MM7Context';

export const PartyConfig = () => {
  const { activeProfile, updateProfile, updateCharacter } = useApp();
  const [promoModal, setPromoModal] = useState<{
    show: boolean;
    title: string;
    npc: string;
    location: string;
    region: string;
  } | null>(null);

  if (!activeProfile) return null;

  const handlePathChange = (path: Path) => {
    updateProfile({ path });
  };

  const showPromotionInfo = (charClassId: string, promotion: PromotionType) => {
    const promoData = PROMOTIONS[charClassId];
    if (!promoData) return;

    // Determine which promotion info to show based on the current promotion status
    if (promotion === 'base') {
      alert(`Base Class: ${PROMOTIONS[charClassId].base}`);
      return;
    }

    let questInfo = promoData.first;

    if (promotion === 'first') {
      questInfo = promoData.first;
    } else if (promotion === 'light') {
      questInfo = promoData.light;
    } else if (promotion === 'dark') {
      questInfo = promoData.dark;
    }

    setPromoModal({
      show: true,
      title: questInfo.title,
      npc: questInfo.npc,
      location: questInfo.location,
      region: questInfo.region
    });
  };

  // Helper to determine if a character's current promotion is valid for the current global path
  const isPromotionValid = (promo: PromotionType, path: Path) => {
    if (promo === 'base' || promo === 'first') return true;
    if (path === 'Neutral') return false; // Tier 2 not allowed in Neutral
    if (promo === 'light' && path === 'Light') return true;
    if (promo === 'dark' && path === 'Dark') return true;
    return false;
  };

  return (
    <div className="party-config">
      <h2>Party Configuration</h2>

      <div className="config-section">
        <h3>Global Path</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <label>
            <input
              type="radio"
              name="globalPath"
              value="Neutral"
              checked={activeProfile.path === 'Neutral'}
              onChange={() => handlePathChange('Neutral')}
            /> Neutral
          </label>
          <label>
            <input
              type="radio"
              name="globalPath"
              value="Light"
              checked={activeProfile.path === 'Light'}
              onChange={() => handlePathChange('Light')}
            /> Light
          </label>
          <label>
            <input
              type="radio"
              name="globalPath"
              value="Dark"
              checked={activeProfile.path === 'Dark'}
              onChange={() => handlePathChange('Dark')}
            /> Dark
          </label>
        </div>
        <p className="hint">
          {activeProfile.path === 'Neutral' && 'No path chosen yet. Second promotions unavailable.'}
          {activeProfile.path === 'Light' && 'Following the Path of Light. Light promotions available.'}
          {activeProfile.path === 'Dark' && 'Following the Path of Dark. Dark promotions available.'}
        </p>
      </div>

      <div className="party-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
        {activeProfile.party.map((char, index) => {
          const classPromotions = PROMOTIONS[char.classId];
          const isValid = isPromotionValid(char.promotion, activeProfile.path);

          return (
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
                  onChange={(e) => updateCharacter(index, {
                    classId: e.target.value,
                    promotion: 'base' // Reset to Base on class change
                  })}
                  style={{ width: '100%' }}
                >
                  {Object.values(CLASSES).map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>
              <div style={{ marginTop: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Rank:</label>
                <select
                  value={char.promotion}
                  onChange={(e) => updateCharacter(index, { promotion: e.target.value as PromotionType })}
                  style={{
                    width: '100%',
                    border: isValid ? '1px solid #ccc' : '2px solid red',
                    color: isValid ? undefined : 'red'
                  }}
                >
                  {/* Always show Base and First */}
                  <option value="base">{classPromotions.base}</option>
                  <option value="first">{classPromotions.first.title}</option>

                  {/* Show Light option if path is Light or if currently selected (even if invalid) */}
                  {(activeProfile.path === 'Light' || char.promotion === 'light') && (
                    <option value="light">{classPromotions.light.title}</option>
                  )}

                  {/* Show Dark option if path is Dark or if currently selected (even if invalid) */}
                  {(activeProfile.path === 'Dark' || char.promotion === 'dark') && (
                    <option value="dark">{classPromotions.dark.title}</option>
                  )}
                </select>
              </div>
              <div style={{ marginTop: '0.5rem', fontSize: '0.9em', textAlign: 'right' }}>
                <button
                  className="link-button"
                  onClick={() => showPromotionInfo(char.classId, char.promotion)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    color: '#ffd700',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    fontSize: '0.9em'
                  }}
                  title="Click for promotion info"
                >
                  Promotion Info
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {promoModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1000
        }} onClick={() => setPromoModal(null)}>
          <div style={{
            background: '#2c241b', padding: '2rem', border: '2px solid #ffd700',
            maxWidth: '500px', width: '90%', position: 'relative'
          }} onClick={e => e.stopPropagation()}>
            <h3 style={{ marginTop: 0, color: '#ffd700' }}>Promotion: {promoModal.title}</h3>
            <p><strong>NPC:</strong> {promoModal.npc}</p>
            <p><strong>Location:</strong> {promoModal.location}</p>
            <p><strong>Region:</strong> {promoModal.region}</p>
            <button onClick={() => setPromoModal(null)} style={{ marginTop: '1rem' }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};
