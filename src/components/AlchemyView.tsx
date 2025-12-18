
import React from 'react';
import { useApp } from '../hooks/useApp';
import { ALCHEMY_RECIPES } from '../data/alchemy';

export const AlchemyView = () => {
  const { activeProfile, toggleChecklist } = useApp();

  if (!activeProfile) return null;

  const purePotions = ALCHEMY_RECIPES.filter(r => r.isPure);
  const categories = ['Basic', 'Complex', 'Layered', 'White', 'Black'];

  return (
    <div>
      <h2>Alchemy Checklist & Reference</h2>

      <div className="section" style={{ marginBottom: '2rem' }}>
        <h3>Permanent Stat Boosts (Pure Potions)</h3>
        <p className="hint">Each character can only consume one of each Pure potion type permanently.</p>
        <table className="checklist-table">
          <thead>
            <tr>
              <th>Potion</th>
              <th>Recipe</th>
              <th>Effect</th>
              {activeProfile.party.map((char, i) => (
                <th key={char.id} style={{ textAlign: 'center', minWidth: '80px' }}>{char.name || `Char ${i+1}`}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {purePotions.map(r => (
              <tr key={r.name}>
                <td>{r.name}</td>
                <td>{r.recipe}</td>
                <td>{r.effect}</td>
                {activeProfile.party.map((char, i) => {
                  const key = `alchemy_pure_${i}_${r.name}`;
                  return (
                    <td key={char.id} style={{ textAlign: 'center' }}>
                      <input
                        type="checkbox"
                        checked={!!activeProfile.alchemy[key]}
                        onChange={() => toggleChecklist('alchemy', key)}
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="section">
        <h3>Recipe Reference</h3>
        <table className="checklist-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Recipe</th>
              <th>Effect</th>
            </tr>
          </thead>
          <tbody>
            {categories.map(cat => (
              <React.Fragment key={cat}>
                <tr className="category-header">
                  <td colSpan={3} style={{ background: '#3e3226', fontWeight: 'bold', textTransform: 'uppercase' }}>{cat} Potions</td>
                </tr>
                {ALCHEMY_RECIPES.filter(r => r.type === cat).map(r => (
                  <tr key={r.name}>
                    <td>{r.name}</td>
                    <td>{r.recipe}</td>
                    <td>{r.effect}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
