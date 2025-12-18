
import { useState } from 'react';
import { useApp } from '../hooks/useApp';
import { CLASSES } from '../data/classes';
import { PROMOTIONS } from '../data/promotions';
import type { PartyStage } from '../context/MM7Context';

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

  const handleStageChange = (stage: PartyStage) => {
    updateProfile({ stage });
  };

  const showPromotionInfo = (charClassId: string) => {
    const promoData = PROMOTIONS[charClassId];
    if (!promoData) return;

    let questInfo = promoData.first;
    let isBase = false;

    if (activeProfile.stage === 'Base') {
      isBase = true;
    } else if (activeProfile.stage === 'First') {
      questInfo = promoData.first;
    } else if (activeProfile.stage === 'Light') {
      questInfo = promoData.light;
    } else if (activeProfile.stage === 'Dark') {
      questInfo = promoData.dark;
    }

    if (isBase) {
      alert(`Base Class: ${PROMOTIONS[charClassId].base}`);
      return;
    }

    setPromoModal({
      show: true,
      title: questInfo.title,
      npc: questInfo.npc,
      location: questInfo.location,
      region: questInfo.region
    });
  };

  const getCurrentTitle = (charClassId: string) => {
    const p = PROMOTIONS[charClassId];
    if (!p) return 'Unknown';
    switch (activeProfile.stage) {
      case 'Base': return p.base;
      case 'First': return p.first.title;
      case 'Light': return p.light.title;
      case 'Dark': return p.dark.title;
      default: return p.base;
    }
  };

  return (
    <div className="party-config">
      <h2>Party Configuration</h2>

      <div className="config-section">
        <label>
          <strong>Party Stage:</strong>
          <select
            value={activeProfile.stage}
            onChange={(e) => handleStageChange(e.target.value as PartyStage)}
            style={{ marginLeft: '1rem', padding: '0.5rem' }}
          >
            <option value="Base">Base Classes (Start)</option>
            <option value="First">First Promotion (Neutral)</option>
            <option value="Light">Light Path (Second Promotion)</option>
            <option value="Dark">Dark Path (Second Promotion)</option>
          </select>
        </label>
        <p className="hint">
          {activeProfile.stage === 'Base' && 'Starting classes. Prepare for your first promotion.'}
          {activeProfile.stage === 'First' && 'First promotion achieved. Choose your path wisely.'}
          {activeProfile.stage === 'Light' && 'Following the Path of Light.'}
          {activeProfile.stage === 'Dark' && 'Following the Path of Dark.'}
        </p>
      </div>

      <div className="party-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
        {activeProfile.party.map((char, index) => {
          const title = getCurrentTitle(char.classId);
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
                  onChange={(e) => updateCharacter(index, { classId: e.target.value })}
                  style={{ width: '100%' }}
                >
                  {Object.values(CLASSES).map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>
              <div style={{ marginTop: '1rem', fontSize: '0.9em', color: '#aaa' }}>
                Current Title: <br/>
                <button
                  className="link-button"
                  onClick={() => showPromotionInfo(char.classId)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    color: '#ffd700',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    fontSize: '1.1em',
                    fontWeight: 'bold',
                    marginTop: '0.5rem'
                  }}
                  title="Click for promotion info"
                >
                  {title}
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
