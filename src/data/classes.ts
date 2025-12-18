export type SkillLevel = '-' | 'B' | 'E' | 'M' | 'GM';

export interface ClassSkill {
  name: string;
  level: SkillLevel;
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
    weapons: Record<string, SkillLevel>;
    armor: Record<string, SkillLevel>;
    magic: Record<string, SkillLevel>;
    misc: Record<string, SkillLevel>;
  };
}

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
        Axe: 'E',
        Bow: 'GM',
        Dagger: 'E',
        Spear: 'M',
        Staff: '-',
        Sword: 'E',
        Mace: '-'
      },
      armor: {
        Leather: 'M',
        Chain: 'GM',
        Plate: '-',
        Shield: '-'
      },
      magic: {
        Fire: 'M',
        Air: 'M',
        Water: 'M',
        Earth: 'M',
        Spirit: '-',
        Mind: '-',
        Body: '-',
        Light: '-',
        Dark: '-'
      },
      misc: {
        'Armsmaster': 'E',
        'Body Building': 'E',
        'Disarm Trap': 'E',
        'Identify Item': '-',
        'Identify Monster': '-',
        'Learning': 'M',
        'Meditation': 'E',
        'Merchant': 'E',
        'Perception': 'GM',
        'Repair Item': 'E',
        'Stealing': '-',
        'Alchemy': '-',
        'Dodging': 'E'
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
        Axe: '-',
        Bow: 'B',
        Dagger: '-',
        Spear: '-',
        Staff: 'M',
        Sword: '-',
        Mace: 'M'
      },
      armor: {
        Leather: 'B',
        Chain: 'M',
        Plate: '-',
        Shield: 'GM'
      },
      magic: {
        Fire: '-',
        Air: '-',
        Water: '-',
        Earth: '-',
        Spirit: 'GM',
        Mind: 'GM',
        Body: 'GM',
        Light: 'GM',
        Dark: 'GM'
      },
      misc: {
        'Alchemy': 'B',
        'Learning': 'M',
        'Meditation': 'M',
        'Merchant': 'GM',
        'Perception': '-',
        'Repair Item': 'M',
        'Body Building': 'B',
        'Armsmaster': '-',
        'Dodging': '-',
        'Identify Item': '-',
        'Identify Monster': '-'
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
        Axe: '-',
        Bow: '-',
        Dagger: 'M',
        Spear: '-',
        Staff: 'M',
        Sword: '-',
        Mace: 'M'
      },
      armor: {
        Leather: 'M',
        Chain: '-',
        Plate: '-',
        Shield: 'E'
      },
      magic: {
        Fire: 'M',
        Air: 'M',
        Water: 'M',
        Earth: 'M',
        Spirit: 'M',
        Mind: 'M',
        Body: 'M',
        Light: '-',
        Dark: '-'
      },
      misc: {
        'Alchemy': 'GM',
        'Learning': 'M',
        'Meditation': 'GM',
        'Merchant': 'E',
        'Perception': 'E',
        'Identify Item': 'E',
        'Identify Monster': 'E',
        'Armsmaster': '-',
        'Repair Item': '-'
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
        Axe: 'M',
        Bow: 'E',
        Dagger: 'E',
        Spear: 'GM',
        Staff: 'E',
        Sword: 'GM',
        Mace: 'M'
      },
      armor: {
        Leather: 'M',
        Chain: 'M',
        Plate: 'GM',
        Shield: 'GM'
      },
      magic: {
        Fire: '-',
        Air: '-',
        Water: '-',
        Earth: '-',
        Spirit: '-',
        Mind: '-',
        Body: '-',
        Light: '-',
        Dark: '-'
      },
      misc: {
        'Armsmaster': 'GM',
        'Body Building': 'GM',
        'Repair Item': 'GM',
        'Disarm Trap': 'B',
        'Perception': 'E',
        'Learning': 'E',
        'Merchant': 'E',
        'Alchemy': '-',
        'Dodging': '-'
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
        Axe: '-',
        Bow: '-',
        Dagger: 'E',
        Spear: 'GM',
        Staff: 'GM',
        Sword: 'E',
        Mace: '-'
      },
      armor: {
        Leather: 'M',
        Chain: '-',
        Plate: '-',
        Shield: '-'
      },
      magic: {
        Spirit: 'E',
        Mind: 'E',
        Body: 'E',
        Fire: '-',
        Air: '-',
        Water: '-',
        Earth: '-',
        Light: '-',
        Dark: '-'
      },
      misc: {
        'Unarmed': 'GM',
        'Dodging': 'GM',
        'Armsmaster': 'GM',
        'Body Building': 'GM',
        'Learning': 'GM',
        'Perception': 'E',
        'Disarm Trap': 'M',
        'Stealing': 'E',
        'Identify Monster': 'E'
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
        Axe: 'E',
        Bow: 'E',
        Dagger: 'E',
        Spear: 'E',
        Staff: 'B',
        Sword: 'M',
        Mace: 'GM'
      },
      armor: {
        Leather: 'E',
        Chain: 'E',
        Plate: 'M',
        Shield: 'GM'
      },
      magic: {
        Spirit: 'M',
        Mind: 'M',
        Body: 'M',
        Light: 'B',
        Dark: 'B',
        Fire: '-',
        Air: '-',
        Water: '-',
        Earth: '-'
      },
      misc: {
        'Armsmaster': 'M',
        'Body Building': 'M',
        'Repair Item': 'M',
        'Merchant': 'E',
        'Learning': 'E',
        'Perception': 'B',
        'Meditation': 'E',
        'Dodging': 'B'
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
        Axe: 'GM',
        Bow: 'M',
        Dagger: 'E',
        Spear: 'E',
        Staff: 'B',
        Sword: 'E',
        Mace: '-'
      },
      armor: {
        Leather: 'GM',
        Chain: 'M',
        Plate: '-',
        Shield: 'E'
      },
      magic: {
        Fire: 'E',
        Air: 'E',
        Water: 'E',
        Earth: 'E',
        Spirit: 'E',
        Mind: 'E',
        Body: 'E',
        Light: '-',
        Dark: '-'
      },
      misc: {
        'Identify Monster': 'GM',
        'Perception': 'M',
        'Stealing': 'E',
        'Armsmaster': 'E',
        'Dodging': 'E',
        'Disarm Trap': 'E',
        'Learning': 'E',
        'Meditation': 'B',
        'Merchant': 'B',
        'Alchemy': 'B',
        'Body Building': 'E',
        'Repair Item': 'B'
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
        Axe: '-',
        Bow: 'B',
        Dagger: 'E',
        Spear: '-',
        Staff: 'M',
        Sword: '-',
        Mace: '-'
      },
      armor: {
        Leather: 'E',
        Chain: '-',
        Plate: '-',
        Shield: '-'
      },
      magic: {
        Fire: 'GM',
        Air: 'GM',
        Water: 'GM',
        Earth: 'GM',
        Light: 'GM',
        Dark: 'GM',
        Spirit: '-',
        Mind: '-',
        Body: '-'
      },
      misc: {
        'Alchemy': 'GM',
        'Identify Item': 'GM',
        'Identify Monster': 'GM',
        'Learning': 'GM',
        'Meditation': 'GM',
        'Merchant': 'B',
        'Perception': 'E',
        'Repair Item': 'E',
        'Body Building': '-',
        'Armsmaster': '-'
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
        Axe: '-',
        Bow: 'E',
        Dagger: 'GM',
        Spear: '-',
        Staff: '-',
        Sword: 'E',
        Mace: 'E'
      },
      armor: {
        Leather: 'GM',
        Chain: 'E',
        Plate: '-',
        Shield: 'B'
      },
      magic: {
        Fire: '-',
        Air: '-',
        Water: '-',
        Earth: '-',
        Spirit: '-',
        Mind: '-',
        Body: '-',
        Light: '-',
        Dark: '-'
      },
      misc: {
        'Disarm Trap': 'GM',
        'Stealing': 'GM',
        'Merchant': 'M',
        'Perception': 'M',
        'Identify Item': 'M',
        'Alchemy': 'E',
        'Dodging': 'M',
        'Armsmaster': 'E',
        'Body Building': 'E',
        'Learning': 'E',
        'Repair Item': 'B'
      }
    }
  }
};
