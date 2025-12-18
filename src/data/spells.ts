
export interface Spell {
  name: string;
  school: string;
}

export const SPELLS = {
  Fire: [
    'Torch Light', 'Fire Bolt', 'Fire Resistance', 'Fire Aura',
    'Haste', 'Fireball', 'Fire Spike', 'Immolation',
    'Meteor Shower', 'Inferno', 'Incinerate'
  ],
  Air: [
    'Wizard Eye', 'Feather Fall', 'Air Resistance', 'Sparks',
    'Jump', 'Shield', 'Lightning Bolt', 'Invisibility',
    'Implosion', 'Fly', 'Starburst'
  ],
  Water: [
    'Awaken', 'Poison Spray', 'Water Resistance', 'Ice Bolt',
    'Water Walk', 'Recharge Item', 'Acid Burst', 'Enchant Item',
    'Town Portal', 'Ice Blast', 'Lloyd’s Beacon'
  ],
  Earth: [
    'Stun', 'Slow', 'Earth Resistance', 'Deadly Swarm',
    'Stone Skin', 'Blades', 'Stone to Flesh', 'Rock Blast',
    'Telekinesis', 'Death Blossom', 'Mass Distortion'
  ],
  Spirit: [
    'Detect Life', 'Bless', 'Fate', 'Turn Undead',
    'Remove Curse', 'Preservation', 'Heroism', 'Spirit Lash',
    'Raise Dead', 'Shared Life', 'Resurrection'
  ],
  Mind: [
    'Remove Fear', 'Mind Blast', 'Mind Resistance', 'Telepathy',
    'Charm', 'Cure Paralysis', 'Berserk', 'Mass Fear',
    'Cure Insanity', 'Psychic Shock', 'Enslave'
  ],
  Body: [
    'Cure Weakness', 'Heal', 'Body Resistance', 'Harm',
    'Regeneration', 'Cure Poison', 'Hammerhands', 'Cure Disease',
    'Protection from Magic', 'Flying Fist', 'Power Cure'
  ],
  Light: [
    'Light Bolt', 'Destroy Undead', 'Dispel Magic', 'Paralyze',
    'Summon Elemental', 'Day of the Gods', 'Prismatic Light', 'Day of Protection',
    'Hour of Power', 'Sunray', 'Divine Intervention'
  ],
  Dark: [
    'Reanimate', 'Toxic Cloud', 'Vampiric Weapon', 'Shrinking Ray',
    'Shrapmetal', 'Control Undead', 'Pain Reflection', 'Sacrifice',
    'Dragon Breath', 'Armageddon', 'Soul Drinker'
  ]
};
