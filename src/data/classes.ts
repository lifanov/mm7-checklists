
export type SkillLevel = '-' | 'B' | 'E' | 'M' | 'GM';

export interface SkillLimits {
  base: SkillLevel;
  first: SkillLevel;
  light: SkillLevel;
  dark: SkillLevel;
}

export interface ClassSkill {
  name: string;
  limits: SkillLimits;
}

export interface ClassDefinition {
  id: string;
  name: string;
  promotions: {
    neutral: string;
    light: string;
    dark: string;
  };
  skills: {
    weapons: Record<string, SkillLimits>;
    armor: Record<string, SkillLimits>;
    magic: Record<string, SkillLimits>;
    misc: Record<string, SkillLimits>;
  };
}

// Helper to create limits
// Standard progression: E -> M -> GM (depending on max)
// But caps apply:
// If max is GM: Base=E, First=M, Second=GM
// If max is M: Base=E, First=M, Second=M
// If max is E: Base=E, First=E, Second=E
// If max is B: Base=B, First=B, Second=B
// If max is -: All -
const createLimits = (maxLight: SkillLevel, maxDark: SkillLevel, baseOverride?: SkillLevel, firstOverride?: SkillLevel): SkillLimits => {
  const resolve = (targetMax: SkillLevel, promotionTier: 0 | 1 | 2): SkillLevel => {
    if (targetMax === '-') return '-';
    if (targetMax === 'B') return 'B';

    // For Expert cap, you can usually reach it at Base
    if (targetMax === 'E') return 'E';

    // For Master cap:
    // Base: E, First: M, Second: M
    if (targetMax === 'M') {
      if (promotionTier === 0) return 'E';
      return 'M';
    }

    // For GM cap:
    // Base: E, First: M, Second: GM
    if (targetMax === 'GM') {
      if (promotionTier === 0) return 'E';
      if (promotionTier === 1) return 'M';
      return 'GM';
    }

    return '-';
  };

  const limits: SkillLimits = {
    base: baseOverride || resolve(maxLight === 'GM' || maxDark === 'GM' ? 'GM' : (maxLight === 'M' || maxDark === 'M' ? 'M' : (maxLight === 'E' || maxDark === 'E' ? 'E' : (maxLight === 'B' || maxDark === 'B' ? 'B' : '-'))), 0),
    first: firstOverride || resolve(maxLight === 'GM' || maxDark === 'GM' ? 'GM' : (maxLight === 'M' || maxDark === 'M' ? 'M' : (maxLight === 'E' || maxDark === 'E' ? 'E' : (maxLight === 'B' || maxDark === 'B' ? 'B' : '-'))), 1),
    light: maxLight,
    dark: maxDark
  };

  return limits;
};

// Special helper for Monk Magic: Base -, First B, Light E, Dark B
const monkMagic: SkillLimits = { base: '-', first: 'B', light: 'E', dark: 'B' };

export const CLASSES: Record<string, ClassDefinition> = {
  archer: {
    id: 'archer',
    name: 'Archer',
    promotions: {
      neutral: 'Warrior Mage',
      light: 'Master Archer',
      dark: 'Sniper'
    },
    skills: {
      weapons: {
        Axe: createLimits('E', 'E'),
        Bow: createLimits('GM', 'GM'),
        Dagger: createLimits('E', 'E'),
        Spear: createLimits('M', 'M'),
        Staff: createLimits('B', 'B'),
        Sword: createLimits('E', 'E'),
        Mace: createLimits('-', '-'),
        Blaster: createLimits('GM', 'GM') // Everyone gets Blaster GM typically
      },
      armor: {
        Leather: createLimits('M', 'M'),
        Chain: createLimits('GM', 'GM'),
        Plate: createLimits('-', '-'),
        Shield: createLimits('-', '-')
      },
      magic: {
        Fire: createLimits('M', 'M', 'E', 'E'),
        Air: createLimits('M', 'M', 'E', 'E'),
        Water: createLimits('M', 'M', 'E', 'E'),
        Earth: createLimits('M', 'M', 'E', 'E'),
        Spirit: createLimits('-', '-'),
        Mind: createLimits('-', '-'),
        Body: createLimits('-', '-'),
        Light: createLimits('B', '-', '-', '-'), // Delayed to Tier 3 (Master Archer)
        Dark: createLimits('-', 'B', '-', '-')  // Delayed to Tier 3 (Sniper)
      },
      misc: {
        'Armsmaster': createLimits('E', 'E'),
        'Body Building': createLimits('E', 'E'),
        'Disarm Trap': createLimits('E', 'E'),
        'Identify Item': createLimits('-', '-'),
        'Identify Monster': createLimits('-', 'GM'), // Dark gets GM
        'Learning': createLimits('M', 'M'),
        'Meditation': createLimits('-', 'E'), // Dark gets Expert
        'Merchant': createLimits('E', 'E'),
        'Perception': createLimits('GM', 'GM'),
        'Repair Item': createLimits('E', 'E'),
        'Stealing': createLimits('-', '-'),
        'Alchemy': createLimits('-', '-'),
        'Dodging': createLimits('E', 'E')
      }
    }
  },
  cleric: {
    id: 'cleric',
    name: 'Cleric',
    promotions: {
      neutral: 'Priest',
      light: 'Priest of Light',
      dark: 'Priest of Dark'
    },
    skills: {
      weapons: {
        Axe: createLimits('-', '-'),
        Bow: createLimits('E', 'E'),
        Dagger: createLimits('-', '-'),
        Spear: createLimits('-', '-'),
        Staff: createLimits('B', 'B'),
        Sword: createLimits('-', '-'),
        Mace: createLimits('M', 'M'),
        Blaster: createLimits('GM', 'GM')
      },
      armor: {
        Leather: createLimits('E', 'E'),
        Chain: createLimits('E', 'E'),
        Plate: createLimits('-', '-'),
        Shield: createLimits('M', 'M')
      },
      magic: {
        Fire: createLimits('-', '-'),
        Air: createLimits('-', '-'),
        Water: createLimits('-', '-'),
        Earth: createLimits('-', '-'),
        Spirit: createLimits('GM', 'GM'),
        Mind: createLimits('GM', 'GM'),
        Body: createLimits('GM', 'GM'),
        Light: createLimits('GM', '-'),
        Dark: createLimits('-', 'GM')
      },
      misc: {
        'Alchemy': createLimits('E', 'E'),
        'Learning': createLimits('M', 'M'),
        'Meditation': createLimits('M', 'M'),
        'Merchant': createLimits('M', 'GM'), // Base E, First M, Light M, Dark GM
        'Perception': createLimits('E', 'E'),
        'Repair Item': createLimits('M', 'M'),
        'Body Building': createLimits('B', 'B'),
        'Armsmaster': createLimits('-', '-'),
        'Dodging': createLimits('-', '-'),
        'Identify Item': createLimits('-', '-'),
        'Identify Monster': createLimits('E', 'E'),
        'Disarm Trap': createLimits('-', '-'),
        'Stealing': createLimits('-', '-')
      }
    }
  },
  druid: {
    id: 'druid',
    name: 'Druid',
    promotions: {
      neutral: 'Great Druid',
      light: 'Arch Druid',
      dark: 'Warlock'
    },
    skills: {
      weapons: {
        Axe: createLimits('-', '-'),
        Bow: createLimits('E', 'E'),
        Dagger: createLimits('M', 'M'),
        Spear: createLimits('-', '-'),
        Staff: createLimits('B', 'B'),
        Sword: createLimits('-', '-'),
        Mace: createLimits('E', 'E'),
        Blaster: createLimits('GM', 'GM')
      },
      armor: {
        Leather: createLimits('E', 'E'),
        Chain: createLimits('-', '-'),
        Plate: createLimits('-', '-'),
        Shield: createLimits('E', 'E')
      },
      magic: {
        Fire: createLimits('M', 'M'),
        Air: createLimits('M', 'M'),
        Water: createLimits('M', 'M'),
        Earth: createLimits('M', 'M'),
        Spirit: createLimits('M', 'M'),
        Mind: createLimits('M', 'M'),
        Body: createLimits('M', 'M'),
        Light: createLimits('-', '-'),
        Dark: createLimits('-', '-')
      },
      misc: {
        'Alchemy': createLimits('GM', 'GM'),
        'Learning': createLimits('M', 'M'),
        'Meditation': createLimits('GM', 'GM'),
        'Merchant': createLimits('E', 'E'),
        'Perception': createLimits('E', 'E'),
        'Identify Item': createLimits('E', 'E'),
        'Identify Monster': createLimits('E', 'E'),
        'Armsmaster': createLimits('B', 'B'),
        'Repair Item': createLimits('-', '-'),
        'Body Building': createLimits('-', '-'),
        'Disarm Trap': createLimits('-', '-'),
        'Stealing': createLimits('-', '-'),
        'Dodging': createLimits('-', '-')
      }
    }
  },
  knight: {
    id: 'knight',
    name: 'Knight',
    promotions: {
      neutral: 'Cavalier',
      light: 'Champion',
      dark: 'Black Knight'
    },
    skills: {
      weapons: {
        Axe: createLimits('M', 'M'),
        Bow: createLimits('E', 'E'),
        Dagger: createLimits('E', 'E'),
        Spear: createLimits('GM', 'GM'),
        Staff: createLimits('E', 'E'),
        Sword: createLimits('GM', 'GM'),
        Mace: createLimits('M', 'M'),
        Blaster: createLimits('GM', 'GM')
      },
      armor: {
        Leather: createLimits('M', 'M'),
        Chain: createLimits('M', 'M'),
        Plate: createLimits('GM', 'GM'),
        Shield: createLimits('GM', 'GM')
      },
      magic: {
        Fire: createLimits('-', '-'),
        Air: createLimits('-', '-'),
        Water: createLimits('-', '-'),
        Earth: createLimits('-', '-'),
        Spirit: createLimits('-', '-'),
        Mind: createLimits('-', '-'),
        Body: createLimits('-', '-'),
        Light: createLimits('-', '-'),
        Dark: createLimits('-', '-')
      },
      misc: {
        'Armsmaster': createLimits('GM', 'GM'),
        'Body Building': createLimits('GM', 'GM'),
        'Repair Item': createLimits('GM', 'GM'),
        'Disarm Trap': createLimits('B', 'B'),
        'Perception': createLimits('E', 'E'),
        'Learning': createLimits('B', 'B'),
        'Merchant': createLimits('E', 'E'),
        'Alchemy': createLimits('-', '-'),
        'Dodging': createLimits('E', 'E'),
        'Identify Item': createLimits('-', '-'),
        'Identify Monster': createLimits('-', '-'),
        'Stealing': createLimits('-', '-'),
        'Meditation': createLimits('-', '-')
      }
    }
  },
  monk: {
    id: 'monk',
    name: 'Monk',
    promotions: {
      neutral: 'Initiate',
      light: 'Master',
      dark: 'Ninja'
    },
    skills: {
      weapons: {
        Axe: createLimits('-', '-'),
        Bow: createLimits('B', 'B'),
        Dagger: createLimits('E', 'E'),
        Spear: createLimits('E', 'E'),
        Staff: createLimits('GM', 'M'), // Light GM, Dark Master
        Sword: createLimits('E', 'E'),
        Mace: createLimits('-', '-'),
        Blaster: createLimits('GM', 'GM')
      },
      armor: {
        Leather: createLimits('M', 'M'),
        Chain: createLimits('-', '-'),
        Plate: createLimits('-', '-'),
        Shield: createLimits('-', '-')
      },
      magic: {
        Spirit: monkMagic,
        Mind: monkMagic,
        Body: monkMagic,
        Fire: createLimits('-', '-'),
        Air: createLimits('-', '-'),
        Water: createLimits('-', '-'),
        Earth: createLimits('-', '-'),
        Light: createLimits('-', '-'),
        Dark: createLimits('-', '-')
      },
      misc: {
        'Unarmed': createLimits('GM', 'M'), // Light GM, Dark Master
        'Dodging': createLimits('GM', 'M'), // Light GM, Dark Master
        'Armsmaster': createLimits('M', 'M'),
        'Body Building': createLimits('GM', 'GM'),
        'Learning': createLimits('GM', 'GM'),
        'Perception': createLimits('E', 'E'),
        'Disarm Trap': createLimits('E', 'M', 'B', 'E'), // Base B, First E, Light E, Dark M
        'Stealing': createLimits('B', 'E', 'B', 'B'), // Base B, First B, Light B, Dark E
        'Identify Monster': createLimits('E', 'E'),
        'Identify Item': createLimits('-', '-'),
        'Repair Item': createLimits('-', '-'),
        'Merchant': createLimits('-', '-'),
        'Alchemy': createLimits('-', '-'),
        'Meditation': createLimits('-', '-')
      }
    }
  },
  paladin: {
    id: 'paladin',
    name: 'Paladin',
    promotions: {
      neutral: 'Crusader',
      light: 'Hero',
      dark: 'Villain'
    },
    skills: {
      weapons: {
        Axe: createLimits('E', 'E'),
        Bow: createLimits('E', 'E'),
        Dagger: createLimits('E', 'E'),
        Spear: createLimits('E', 'E'),
        Staff: createLimits('B', 'B'),
        Sword: createLimits('M', 'M'),
        Mace: createLimits('GM', 'GM'),
        Blaster: createLimits('GM', 'GM')
      },
      armor: {
        Leather: createLimits('E', 'E'),
        Chain: createLimits('E', 'E'),
        Plate: createLimits('M', 'M'),
        Shield: createLimits('GM', 'GM')
      },
      magic: {
        Spirit: createLimits('M', 'M', 'E', 'E'), // Base E, First E, Light/Dark M
        Mind: createLimits('M', 'M', 'E', 'E'),
        Body: createLimits('M', 'M', 'E', 'E'),
        Light: createLimits('B', '-', '-', '-'), // Delayed to Tier 3 (Hero)
        Dark: createLimits('-', 'B', '-', '-'), // Delayed to Tier 3 (Villain)
        Fire: createLimits('-', '-'),
        Air: createLimits('-', '-'),
        Water: createLimits('-', '-'),
        Earth: createLimits('-', '-')
      },
      misc: {
        'Armsmaster': createLimits('E', 'E'),
        'Body Building': createLimits('M', 'M'),
        'Repair Item': createLimits('GM', 'GM'),
        'Merchant': createLimits('E', 'E'),
        'Learning': createLimits('E', 'E'),
        'Perception': createLimits('B', 'B'),
        'Meditation': createLimits('E', 'E'),
        'Dodging': createLimits('B', 'B'),
        'Disarm Trap': createLimits('-', '-'),
        'Identify Item': createLimits('-', '-'),
        'Identify Monster': createLimits('-', '-'),
        'Stealing': createLimits('-', '-'),
        'Alchemy': createLimits('-', '-')
      }
    }
  },
  ranger: {
    id: 'ranger',
    name: 'Ranger',
    promotions: {
      neutral: 'Hunter',
      light: 'Ranger Lord',
      dark: 'Bounty Hunter'
    },
    skills: {
      weapons: {
        Axe: createLimits('GM', 'GM'),
        Bow: createLimits('M', 'M'),
        Dagger: createLimits('E', 'E'),
        Spear: createLimits('E', 'E'),
        Staff: createLimits('B', 'B'),
        Sword: createLimits('E', 'E'),
        Mace: createLimits('-', '-'),
        Blaster: createLimits('GM', 'GM')
      },
      armor: {
        Leather: createLimits('M', 'M'),
        Chain: createLimits('M', 'M'),
        Plate: createLimits('-', '-'),
        Shield: createLimits('E', 'E')
      },
      magic: {
        // Base B, First B, Light E, Dark E
        Fire: createLimits('E', 'E', 'B', 'B'),
        Air: createLimits('E', 'E', 'B', 'B'),
        Water: createLimits('E', 'E', 'B', 'B'),
        Earth: createLimits('E', 'E', 'B', 'B'),
        Spirit: createLimits('E', 'E', 'B', 'B'),
        Mind: createLimits('E', 'E', 'B', 'B'),
        Body: createLimits('E', 'E', 'B', 'B'),
        Light: createLimits('-', '-'),
        Dark: createLimits('-', '-')
      },
      misc: {
        'Identify Monster': createLimits('GM', 'GM'),
        'Perception': createLimits('M', 'M'),
        'Stealing': createLimits('E', 'E'),
        'Armsmaster': createLimits('E', 'E'),
        'Dodging': createLimits('E', 'E'),
        'Disarm Trap': createLimits('E', 'E'),
        'Learning': createLimits('E', 'E'),
        'Meditation': createLimits('B', 'B'),
        'Merchant': createLimits('B', 'B'),
        'Alchemy': createLimits('B', 'B'),
        'Body Building': createLimits('E', 'E'),
        'Repair Item': createLimits('B', 'B'),
        'Identify Item': createLimits('B', 'B')
      }
    }
  },
  sorcerer: {
    id: 'sorcerer',
    name: 'Sorcerer',
    promotions: {
      neutral: 'Wizard',
      light: 'Arch Mage',
      dark: 'Lich'
    },
    skills: {
      weapons: {
        Axe: createLimits('-', '-'),
        Bow: createLimits('B', 'B'),
        Dagger: createLimits('E', 'E'),
        Spear: createLimits('-', '-'),
        Staff: createLimits('M', 'M'),
        Sword: createLimits('-', '-'),
        Mace: createLimits('-', '-'),
        Blaster: createLimits('GM', 'GM')
      },
      armor: {
        Leather: createLimits('E', 'E'),
        Chain: createLimits('-', '-'),
        Plate: createLimits('-', '-'),
        Shield: createLimits('-', '-')
      },
      magic: {
        Fire: createLimits('GM', 'GM'),
        Air: createLimits('GM', 'GM'),
        Water: createLimits('GM', 'GM'),
        Earth: createLimits('GM', 'GM'),
        Light: createLimits('GM', '-'),
        Dark: createLimits('-', 'GM'),
        Spirit: createLimits('-', '-'),
        Mind: createLimits('-', '-'),
        Body: createLimits('-', '-')
      },
      misc: {
        'Alchemy': createLimits('M', 'M'),
        'Identify Item': createLimits('GM', 'GM'),
        'Identify Monster': createLimits('GM', 'GM'),
        'Learning': createLimits('M', 'M'),
        'Meditation': createLimits('M', 'M'),
        'Merchant': createLimits('B', 'B'),
        'Perception': createLimits('E', 'E'),
        'Repair Item': createLimits('E', 'E'),
        'Body Building': createLimits('-', '-'),
        'Armsmaster': createLimits('-', '-'),
        'Disarm Trap': createLimits('-', '-'),
        'Dodging': createLimits('-', '-'),
        'Stealing': createLimits('-', '-')
      }
    }
  },
  thief: {
    id: 'thief',
    name: 'Thief',
    promotions: {
      neutral: 'Rogue',
      light: 'Spy',
      dark: 'Assassin'
    },
    skills: {
      weapons: {
        Axe: createLimits('-', '-'),
        Bow: createLimits('E', 'E'),
        Dagger: createLimits('GM', 'GM'),
        Spear: createLimits('-', '-'),
        Staff: createLimits('-', '-'),
        Sword: createLimits('M', 'M'),
        Mace: createLimits('E', 'E'),
        Blaster: createLimits('GM', 'GM')
      },
      armor: {
        Leather: createLimits('GM', 'GM'),
        Chain: createLimits('E', 'E'),
        Plate: createLimits('-', '-'),
        Shield: createLimits('B', 'B')
      },
      magic: {
        // Delayed: Tier 1 -, Tier 2 Basic
        Fire: createLimits('B', 'B', '-', 'B'),
        Air: createLimits('B', 'B', '-', 'B'),
        Water: createLimits('B', 'B', '-', 'B'),
        Earth: createLimits('B', 'B', '-', 'B'),
        Spirit: createLimits('-', '-'),
        Mind: createLimits('-', '-'),
        Body: createLimits('-', '-'),
        Light: createLimits('-', '-'),
        Dark: createLimits('-', '-')
      },
      misc: {
        'Disarm Trap': createLimits('GM', 'GM'),
        'Stealing': createLimits('GM', 'GM'),
        'Merchant': createLimits('M', 'M'),
        'Perception': createLimits('M', 'M'),
        'Identify Item': createLimits('M', 'M'),
        'Alchemy': createLimits('E', 'E'),
        'Dodging': createLimits('M', 'M'),
        'Armsmaster': createLimits('M', 'M'),
        'Body Building': createLimits('E', 'E'),
        'Learning': createLimits('E', 'E'),
        'Repair Item': createLimits('B', 'B'),
        'Identify Monster': createLimits('-', '-')
      }
    }
  }
};
