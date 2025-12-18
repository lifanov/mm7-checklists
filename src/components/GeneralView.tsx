
import { useApp } from '../hooks/useApp';

const GENERAL_ITEMS = [
  {
    category: 'Barrows Searched',
    items: [
      'Barrow I', 'Barrow II', 'Barrow III', 'Barrow IV', 'Barrow V',
      'Barrow VI', 'Barrow VII', 'Barrow VIII', 'Barrow IX', 'Barrow X',
      'Barrow XI', 'Barrow XII', 'Barrow XIII', 'Barrow XIV', 'Barrow XV',
      'Tomb (Ankh)'
    ]
  },
  {
    category: 'Assembling a Golem',
    items: [
      'Head (good)', 'Torso', 'Right Arm', 'Left Arm', 'Right Leg', 'Left Leg'
    ]
  },
  {
    category: 'Statuettes',
    items: ['Knight', 'Eagle', 'Angel']
  },
  {
    category: 'Pictures',
    items: ['Angel Statue', 'Archibald Ironfist', 'Roland Ironfist']
  },
  {
    category: 'Obelisks',
    items: [
      '#1 Harmondale', '#2 Erathia', '#3 Tularean Forest', '#4 Deyja',
      '#5 Bracada Desert', '#6 Celeste', '#7 The Pit', '#8 Evenmorn Islands',
      '#9 Nighon', '#10 Barrow Downs', '#11 Land of the Giants', '#12 Tatalia',
      '#13 Avlee', '#14 Stone City'
    ]
  },
  {
    category: 'Altars & Wells',
    items: [
      'Avlee, well +2 Endurance', 'Harmondale, well +2 Accuracy',
      'Deyja, well +5 Fire Resistance', 'Nighon, well +2 Personality',
      'Deyja, well +2 Intellect', 'Nighon, well +2 skill points',
      'Emerald Island, well +2 Luck', 'Tatalia, well +2 Speed',
      'Erathia, well +2 Might',
      'Barrow Downs, altar +10 Might & Endurance',
      'Deyja, altar +10 Mind, Earth, & Body Res',
      'Erathia, altar +10 Luck',
      'Evenmorn Isles, altar +10 Accuracy & Speed',
      'Nighon, altar +10 Personality & Intelligence',
      'Tularean Forest, altar +10 Water, Fire, & Air Res'
    ]
  },
  {
    category: 'ArcoMage Tournament',
    items: [
      '1. Harmondale (30/100)', '2. Tularean Forest (50/150)',
      '3. Erathia (50/150)', '4. Bracada Desert (75/200)',
      '5. Deyja (75/200)', '6. Stone City (100/300)',
      '7. Celeste (100/300)', '8. Barrow Downs (100/300)',
      '9. The Pit (100/300)', '10. Avlee (125/350)',
      '11. Tatalia (125/350)', '12. Evenmorn Islands (150/400)',
      '13. Nighon (200/500)'
    ]
  }
];

export const GeneralView = () => {
  const { activeProfile, toggleChecklist } = useApp();

  if (!activeProfile) return null;

  return (
    <div>
      <h2>General Checklist</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {GENERAL_ITEMS.map(section => (
          <div key={section.category} style={{ background: 'rgba(0,0,0,0.1)', padding: '1rem', border: '1px solid #5a4a35' }}>
            <h3 style={{ marginTop: 0, borderBottom: '1px solid #5a4a35' }}>{section.category}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {section.items.map(item => (
                <label key={item} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={!!activeProfile.general[`${section.category}_${item}`]}
                    onChange={() => toggleChecklist('general', `${section.category}_${item}`)}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
