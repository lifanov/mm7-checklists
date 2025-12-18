
export interface AlchemyRecipe {
  name: string;
  recipe: string;
  effect: string;
  type: 'Basic' | 'Complex' | 'Layered' | 'White' | 'Black';
}

export const ALCHEMY_RECIPES: AlchemyRecipe[] = [
  // Basic
  { name: 'Cure Wounds', recipe: 'Berry/Herb + Bottle', effect: 'Restore HP', type: 'Basic' },
  { name: 'Magic Potion', recipe: 'Herb/Root + Bottle', effect: 'Restore SP', type: 'Basic' },
  { name: 'Cure Weakness', recipe: 'Poppy/Dust + Bottle', effect: 'Cures Weakness', type: 'Basic' },

  // Complex
  { name: 'Cure Disease', recipe: 'Red + Yellow', effect: 'Cures Diseased', type: 'Complex' },
  { name: 'Cure Poison', recipe: 'Red + Blue', effect: 'Cures Poisoned', type: 'Complex' },
  { name: 'Awaken', recipe: 'Blue + Yellow', effect: 'Cures Asleep', type: 'Complex' },

  // Layered (Expert)
  { name: 'Haste', recipe: 'Red + Orange', effect: 'Cast Haste', type: 'Layered' },
  { name: 'Heroism', recipe: 'Red + Purple', effect: 'Cast Heroism', type: 'Layered' },
  { name: 'Bless', recipe: 'Red + Green', effect: 'Cast Bless', type: 'Layered' },
  { name: 'Preservation', recipe: 'Blue + Orange', effect: 'Cast Preservation', type: 'Layered' },
  { name: 'Shield', recipe: 'Blue + Purple', effect: 'Cast Shield', type: 'Layered' },
  { name: 'Recharge Item', recipe: 'Blue + Green', effect: 'Cast Recharge Item', type: 'Layered' },
  { name: 'Stoneskin', recipe: 'Yellow + Orange', effect: 'Cast Stoneskin', type: 'Layered' },
  { name: 'Water Breathing', recipe: 'Yellow + Purple', effect: 'Prevents drowning', type: 'Layered' },
  { name: 'Harden Item', recipe: 'Yellow + Green', effect: 'Item durability', type: 'Layered' },
  { name: 'Remove Fear', recipe: 'Orange + Purple', effect: 'Cures Afraid', type: 'Layered' },
  { name: 'Remove Curse', recipe: 'Purple + Green', effect: 'Cures Cursed', type: 'Layered' },
  { name: 'Cure Insanity', recipe: 'Orange + Green', effect: 'Cures Insane', type: 'Layered' },

  // White (Master)
  { name: 'Might Boost', recipe: 'Purple + Heroism', effect: 'Boost Might', type: 'White' },
  { name: 'Intellect Boost', recipe: 'Green + Harden Item', effect: 'Boost Intellect', type: 'White' },
  { name: 'Personality Boost', recipe: 'Green + Recharge Item', effect: 'Boost Personality', type: 'White' },
  { name: 'Endurance Boost', recipe: 'Purple + Shield', effect: 'Boost Endurance', type: 'White' },
  { name: 'Speed Boost', recipe: 'Orange + Haste', effect: 'Boost Speed', type: 'White' },
  { name: 'Accuracy Boost', recipe: 'Orange + Stoneskin', effect: 'Boost Accuracy', type: 'White' },
  { name: 'Luck Boost', recipe: 'Heroism + Shield', effect: 'Boost Luck', type: 'White' },
  { name: 'Flaming Potion', recipe: 'Green + Haste', effect: 'Add Fire damage to weapon', type: 'White' }, // Or Purple + Stoneskin
  { name: 'Freezing Potion', recipe: 'Orange + Shield', effect: 'Add Cold damage to weapon', type: 'White' },
  { name: 'Noxious Potion', recipe: 'Orange + Recharge Item', effect: 'Add Poison damage to weapon', type: 'White' },
  { name: 'Shocking Potion', recipe: 'Purple + Haste', effect: 'Add Lightning damage to weapon', type: 'White' },
  { name: 'Swift Potion', recipe: 'Purple + Recharge Item', effect: 'Add Speed to weapon', type: 'White' },
  { name: 'Cure Paralysis', recipe: 'Orange + Harden Item', effect: 'Cures Paralyzed', type: 'White' },
  { name: 'Divine Restoration', recipe: 'Haste + Recharge Item', effect: 'Cure All (except Dead/Stone/Erad)', type: 'White' },
  { name: 'Divine Cure', recipe: 'Haste + Stoneskin', effect: 'Restore HP+', type: 'White' },
  { name: 'Divine Power', recipe: 'Recharge Item + Harden Item', effect: 'Restore SP+', type: 'White' },
  { name: 'Fire Resistance', recipe: 'Haste + Harden Item', effect: 'Boost Fire Res', type: 'White' },
  { name: 'Air Resistance', recipe: 'Haste + Shield', effect: 'Boost Air Res', type: 'White' },
  { name: 'Water Resistance', recipe: 'Shield + Harden Item', effect: 'Boost Water Res', type: 'White' },
  { name: 'Earth Resistance', recipe: 'Heroism + Stoneskin', effect: 'Boost Earth Res', type: 'White' },
  { name: 'Mind Resistance', recipe: 'Heroism + Recharge Item', effect: 'Boost Mind Res', type: 'White' },
  { name: 'Body Resistance', recipe: 'Recharge Item + Stoneskin', effect: 'Boost Body Res', type: 'White' },

  // Black (Grandmaster)
  { name: 'Pure Might', recipe: 'Orange + Might Boost', effect: '+50 Might (Perm)', type: 'Black' },
  { name: 'Pure Intellect', recipe: 'Orange + Intellect Boost', effect: '+50 Intellect (Perm)', type: 'Black' },
  { name: 'Pure Personality', recipe: 'Purple + Personality Boost', effect: '+50 Personality (Perm)', type: 'Black' },
  { name: 'Pure Endurance', recipe: 'Green + Endurance Boost', effect: '+50 Endurance (Perm)', type: 'Black' },
  { name: 'Pure Speed', recipe: 'Purple + Speed Boost', effect: '+50 Speed (Perm)', type: 'Black' },
  { name: 'Pure Accuracy', recipe: 'Green + Accuracy Boost', effect: '+50 Accuracy (Perm)', type: 'Black' },
  { name: 'Pure Luck', recipe: 'Stoneskin + Swift', effect: '+50 Luck (Perm)', type: 'Black' },
  { name: 'Stone to Flesh', recipe: 'Heroism + Cure Paralysis', effect: 'Cures Stoned', type: 'Black' },
  { name: 'Slaying Potion', recipe: 'Shield + Flaming', effect: 'Dragon Slaying Weapon', type: 'Black' },
  { name: 'Rejuvenation', recipe: 'Bless + Recharge Item', effect: 'Restore True Age', type: 'Black' }
];
