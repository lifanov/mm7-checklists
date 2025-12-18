
import React from 'react';
import { useApp } from '../hooks/useApp';
import { ALCHEMY_RECIPES } from '../data/alchemy';

export const AlchemyView = () => {
  const { activeProfile, toggleChecklist } = useApp();

  if (!activeProfile) return null;

  const categories = ['Basic', 'Complex', 'Layered', 'White', 'Black'];

  return (
    <div>
      <h2>Alchemy & Stat Enhancements</h2>
      <p className="hint">Track which character has consumed the permanent black potions (Pure stats).</p>

      <div style={{ overflowX: 'auto' }}>
        <table className="checklist-table">
          <thead>
            <tr>
              <th>Potion Name</th>
              <th>Recipe</th>
              <th>Effect</th>
              {activeProfile.party.map((char, i) => (
                <th key={char.id} style={{ textAlign: 'center' }}>{char.name || `Char ${i+1}`}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {categories.map(cat => (
              <React.Fragment key={cat}>
                <tr className="category-header">
                  <td colSpan={3 + activeProfile.party.length} style={{ background: '#3e3226', fontWeight: 'bold' }}>{cat} Potions</td>
                </tr>
                {ALCHEMY_RECIPES.filter(r => r.type === cat).map(r => (
                  <tr key={r.name}>
                    <td>{r.name}</td>
                    <td>{r.recipe}</td>
                    <td>{r.effect}</td>
                    {activeProfile.party.map((char, i) => {
                      // Only show checkboxes for Black potions (Permanent) usually?
                      // The user said "keep track of all checklists".
                      // The original alchemy checklist (chklistalchemy.html) was specifically for "Stat Enhancements" (Black Potion Formulae).
                      // It had a grid for Name x 4.
                      // For other potions, it might not be necessary to track "Have I made this?".
                      // But the user said "track all checklists".
                      // I will allow tracking for all, but it makes most sense for Black potions.
                      // Let's just render checkboxes for all.
                      // Wait, for temporary potions (Haste, etc.) it doesn't make sense to "check it off" permanently.
                      // Maybe only for Black potions?
                      // The URL `chklistalchemy.html` title is "Statistics Enhancements".
                      // It LISTS only Black Potions.
                      // So I should only show checkboxes for Black Potions.
                      // The other potions are just reference.
                      const isBlack = r.type === 'Black';
                      if (!isBlack) return <td key={char.id} style={{ background: 'rgba(0,0,0,0.1)' }}></td>;

                      const key = `alchemy_${i}_${r.name}`;
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
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
