export type MasteryLevel = 'Normal' | 'Expert' | 'Master' | 'Grandmaster';

export interface SpellDefinition {
  name: string;
  level: MasteryLevel;
}

const spellList = (names: string[]): SpellDefinition[] => {
  return names.map((name, index) => {
    let level: MasteryLevel = 'Normal';
    if (index >= 4) level = 'Expert';
    if (index >= 7) level = 'Master';
    if (index >= 10) level = 'Grandmaster';
    return { name, level };
  });
};

export const SPELLS: Record<string, SpellDefinition[]> = {
  Fire: spellList([
    'Torch Light', 'Fire Bolt', 'Fire Resistance', 'Fire Aura',
    'Haste', 'Fireball', 'Immolation', 'Meteor Shower',
    'Inferno', 'Fire Spike', 'Incinerate'
  ]),
  Air: spellList([
    'Wizard Eye', 'Feather Fall', 'Air Resistance', 'Sparks',
    'Jump', 'Shield', 'Lightning Bolt', 'Invisibility',
    'Implosion', 'Fly', 'Starburst'
  ]),
  Water: spellList([
    'Awaken', 'Poison Spray', 'Water Resistance', 'Ice Bolt',
    'Water Walk', 'Recharge Item', 'Acid Burst', 'Enchant Item',
    'Town Portal', 'Ice Blast', 'Lloyd’s Beacon'
  ]),
  Earth: spellList([
    'Stun', 'Slow', 'Earth Resistance', 'Deadly Swarm',
    'Stone Skin', 'Blades', 'Stone to Flesh', 'Rock Blast',
    'Telekinesis', 'Death Blossom', 'Mass Distortion'
  ]),
  Spirit: spellList([
    'Detect Life', 'Bless', 'Fate', 'Turn Undead',
    'Remove Curse', 'Preservation', 'Heroism', 'Spirit Lash',
    'Raise Dead', 'Shared Life', 'Resurrection'
  ]),
  Mind: spellList([
    'Remove Fear', 'Mind Blast', 'Mind Resistance', 'Telepathy',
    'Charm', 'Cure Paralysis', 'Berserk', 'Mass Fear',
    'Cure Insanity', 'Psychic Shock', 'Enslave'
  ]),
  Body: spellList([
    'Cure Weakness', 'Heal', 'Body Resistance', 'Harm',
    'Regeneration', 'Cure Poison', 'Hammerhands', 'Cure Disease',
    'Protection from Magic', 'Flying Fist', 'Power Cure'
  ]),
  Light: spellList([
    'Light Bolt', 'Destroy Undead', 'Dispel Magic', 'Paralyze',
    'Summon Elemental', 'Day of the Gods', 'Prismatic Light', 'Day of Protection',
    'Hour of Power', 'Sunray', 'Divine Intervention'
  ]),
  Dark: spellList([
    'Reanimate', 'Toxic Cloud', 'Vampiric Weapon', 'Shrinking Ray',
    'Shrapmetal', 'Control Undead', 'Pain Reflection', 'Sacrifice',
    'Dragon Breath', 'Armageddon', 'Soul Drinker'
  ])
};
