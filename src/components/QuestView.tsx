
import { useApp } from '../hooks/useApp';
import { QUESTS } from '../data/quests';

export const QuestView = () => {
  const { activeProfile, toggleChecklist } = useApp();

  if (!activeProfile) return null;

  // Group quests by region
  const regions = Array.from(new Set(QUESTS.map(q => q.region)));

  // Helper to determine alignment from stage
  const currentAlignment =
    activeProfile.stage === 'Light' ? 'Light' :
    activeProfile.stage === 'Dark' ? 'Dark' : 'Neutral';

  const filteredQuests = QUESTS.filter(q => {
    // Hide quests that don't match alignment if specified
    if (q.requiredAlign && currentAlignment !== 'Neutral') {
      if (q.requiredAlign !== currentAlignment) return false;
    }
    return true;
  });

  return (
    <div>
      <h2>Quests</h2>
      {regions.map(region => {
        const regionQuests = filteredQuests.filter(q => q.region === region);
        if (regionQuests.length === 0) return null;

        return (
          <div key={region} style={{ marginBottom: '2rem' }}>
            <h3 style={{ borderBottom: '1px solid #5a4a35' }}>{region}</h3>
            <table className="checklist-table">
              <thead>
                <tr>
                  <th style={{ width: '50px' }}>Done</th>
                  <th>Quest</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {regionQuests.map(q => (
                  <tr key={q.id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={!!activeProfile.quests[q.id]}
                        onChange={() => toggleChecklist('quests', q.id)}
                      />
                    </td>
                    <td>
                      {q.name}
                      {q.promotionClass && <span style={{ color: '#aaa', marginLeft: '0.5rem', fontSize: '0.8em' }}>({q.promotionClass})</span>}
                    </td>
                    <td>
                      {q.isEssential ? <span style={{ color: '#ff6b6b' }}>Essential</span> : 'Side'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};
