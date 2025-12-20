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
        'Axe': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Blaster': { base: 'GM', first: 'GM', light: 'GM', dark: 'GM' },
        'Bow': { base: 'M', first: 'M', light: 'GM', dark: 'GM' },
        'Dagger': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Mace': { base: '-', first: '-', light: '-', dark: '-' },
        'Spear': { base: 'M', first: 'M', light: 'M', dark: 'M' },
        'Staff': { base: 'B', first: 'B', light: 'B', dark: 'B' },
        'Sword': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Unarmed': { base: 'B', first: 'B', light: 'B', dark: 'B' }
      },
      armor: {
        'Chain': { base: 'M', first: 'M', light: 'GM', dark: 'GM' },
        'Dodging': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Leather': { base: 'M', first: 'M', light: 'M', dark: 'M' },
        'Plate': { base: '-', first: '-', light: '-', dark: '-' },
        'Shield': { base: '-', first: '-', light: '-', dark: '-' }
      },
      magic: {
        'Air': { base: 'B', first: 'E', light: 'M', dark: 'M' },
        'Body': { base: '-', first: '-', light: '-', dark: '-' },
        'Dark': { base: '-', first: '-', light: '-', dark: 'B' },
        'Earth': { base: 'B', first: 'E', light: 'M', dark: 'M' },
        'Fire': { base: 'B', first: 'E', light: 'M', dark: 'M' },
        'Light': { base: '-', first: '-', light: 'B', dark: '-' },
        'Mind': { base: '-', first: '-', light: '-', dark: '-' },
        'Spirit': { base: '-', first: '-', light: '-', dark: '-' },
        'Water': { base: 'B', first: 'E', light: 'M', dark: 'M' }
      },
      misc: {
        'Alchemy': { base: '-', first: '-', light: '-', dark: '-' },
        'Armsmaster': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Body Building': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Disarm Trap': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Identify Item': { base: '-', first: '-', light: '-', dark: '-' },
        'Identify Monster': { base: '-', first: '-', light: '-', dark: '-' },
        'Learning': { base: 'M', first: 'M', light: 'M', dark: 'M' },
        'Meditation': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Merchant': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Perception': { base: 'M', first: 'M', light: 'GM', dark: 'GM' },
        'Repair Item': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Stealing': { base: '-', first: '-', light: '-', dark: '-' }
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
        'Axe': { base: '-', first: '-', light: '-', dark: '-' },
        'Blaster': { base: 'GM', first: 'GM', light: 'GM', dark: 'GM' },
        'Bow': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Dagger': { base: '-', first: '-', light: '-', dark: '-' },
        'Mace': { base: 'M', first: 'M', light: 'M', dark: 'M' },
        'Spear': { base: '-', first: '-', light: '-', dark: '-' },
        'Staff': { base: 'B', first: 'B', light: 'B', dark: 'B' },
        'Sword': { base: '-', first: '-', light: '-', dark: '-' },
        'Unarmed': { base: '-', first: '-', light: '-', dark: '-' }
      },
      armor: {
        'Chain': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Dodging': { base: '-', first: '-', light: '-', dark: '-' },
        'Leather': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Plate': { base: '-', first: '-', light: '-', dark: '-' },
        'Shield': { base: 'M', first: 'M', light: 'M', dark: 'M' }
      },
      magic: {
        'Air': { base: '-', first: '-', light: '-', dark: '-' },
        'Body': { base: 'E', first: 'M', light: 'GM', dark: 'GM' },
        'Dark': { base: '-', first: '-', light: '-', dark: 'GM' },
        'Earth': { base: '-', first: '-', light: '-', dark: '-' },
        'Fire': { base: '-', first: '-', light: '-', dark: '-' },
        'Light': { base: '-', first: '-', light: 'GM', dark: '-' },
        'Mind': { base: 'E', first: 'M', light: 'GM', dark: 'GM' },
        'Spirit': { base: 'E', first: 'M', light: 'GM', dark: 'GM' },
        'Water': { base: '-', first: '-', light: '-', dark: '-' }
      },
      misc: {
        'Alchemy': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Armsmaster': { base: '-', first: '-', light: '-', dark: '-' },
        'Body Building': { base: 'B', first: 'B', light: 'B', dark: 'B' },
        'Disarm Trap': { base: '-', first: '-', light: '-', dark: '-' },
        'Identify Item': { base: '-', first: '-', light: '-', dark: '-' },
        'Identify Monster': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Learning': { base: 'M', first: 'M', light: 'M', dark: 'M' },
        'Meditation': { base: 'M', first: 'M', light: 'M', dark: 'M' },
        'Merchant': { base: 'M', first: 'M', light: 'GM', dark: 'GM' },
        'Perception': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Repair Item': { base: 'M', first: 'M', light: 'M', dark: 'M' },
        'Stealing': { base: '-', first: '-', light: '-', dark: '-' }
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
        'Axe': { base: '-', first: '-', light: '-', dark: '-' },
        'Blaster': { base: 'GM', first: 'GM', light: 'GM', dark: 'GM' },
        'Bow': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Dagger': { base: 'M', first: 'M', light: 'M', dark: 'M' },
        'Mace': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Spear': { base: '-', first: '-', light: '-', dark: '-' },
        'Staff': { base: 'B', first: 'B', light: 'B', dark: 'B' },
        'Sword': { base: '-', first: '-', light: '-', dark: '-' },
        'Unarmed': { base: '-', first: '-', light: '-', dark: '-' }
      },
      armor: {
        'Chain': { base: '-', first: '-', light: '-', dark: '-' },
        'Dodging': { base: '-', first: '-', light: '-', dark: '-' },
        'Leather': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Plate': { base: '-', first: '-', light: '-', dark: '-' },
        'Shield': { base: 'E', first: 'E', light: 'E', dark: 'E' }
      },
      magic: {
        'Air': { base: 'E', first: 'M', light: 'M', dark: 'M' },
        'Body': { base: 'E', first: 'M', light: 'M', dark: 'M' },
        'Dark': { base: '-', first: '-', light: '-', dark: '-' },
        'Earth': { base: 'E', first: 'M', light: 'M', dark: 'M' },
        'Fire': { base: 'E', first: 'M', light: 'M', dark: 'M' },
        'Light': { base: '-', first: '-', light: '-', dark: '-' },
        'Mind': { base: 'E', first: 'M', light: 'M', dark: 'M' },
        'Spirit': { base: 'E', first: 'M', light: 'M', dark: 'M' },
        'Water': { base: 'E', first: 'M', light: 'M', dark: 'M' }
      },
      misc: {
        'Alchemy': { base: 'M', first: 'M', light: 'GM', dark: 'GM' },
        'Armsmaster': { base: 'B', first: 'B', light: 'B', dark: 'B' },
        'Body Building': { base: '-', first: '-', light: '-', dark: '-' },
        'Disarm Trap': { base: '-', first: '-', light: '-', dark: '-' },
        'Identify Item': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Identify Monster': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Learning': { base: 'M', first: 'M', light: 'M', dark: 'M' },
        'Meditation': { base: 'M', first: 'M', light: 'GM', dark: 'GM' },
        'Merchant': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Perception': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Repair Item': { base: '-', first: '-', light: '-', dark: '-' },
        'Stealing': { base: '-', first: '-', light: '-', dark: '-' }
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
        'Axe': { base: 'M', first: 'M', light: 'M', dark: 'M' },
        'Blaster': { base: 'GM', first: 'GM', light: 'GM', dark: 'GM' },
        'Bow': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Dagger': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Mace': { base: 'M', first: 'M', light: 'M', dark: 'M' },
        'Spear': { base: 'M', first: 'M', light: 'GM', dark: 'GM' },
        'Staff': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Sword': { base: 'M', first: 'M', light: 'GM', dark: 'GM' },
        'Unarmed': { base: 'E', first: 'E', light: 'E', dark: 'E' }
      },
      armor: {
        'Chain': { base: 'M', first: 'M', light: 'M', dark: 'M' },
        'Dodging': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Leather': { base: 'M', first: 'M', light: 'M', dark: 'M' },
        'Plate': { base: 'M', first: 'M', light: 'GM', dark: 'GM' },
        'Shield': { base: 'M', first: 'M', light: 'GM', dark: 'GM' }
      },
      magic: {
        'Air': { base: '-', first: '-', light: '-', dark: '-' },
        'Body': { base: '-', first: '-', light: '-', dark: '-' },
        'Dark': { base: '-', first: '-', light: '-', dark: '-' },
        'Earth': { base: '-', first: '-', light: '-', dark: '-' },
        'Fire': { base: '-', first: '-', light: '-', dark: '-' },
        'Light': { base: '-', first: '-', light: '-', dark: '-' },
        'Mind': { base: '-', first: '-', light: '-', dark: '-' },
        'Spirit': { base: '-', first: '-', light: '-', dark: '-' },
        'Water': { base: '-', first: '-', light: '-', dark: '-' }
      },
      misc: {
        'Alchemy': { base: '-', first: '-', light: '-', dark: '-' },
        'Armsmaster': { base: 'M', first: 'M', light: 'GM', dark: 'GM' },
        'Body Building': { base: 'M', first: 'M', light: 'GM', dark: 'GM' },
        'Disarm Trap': { base: 'B', first: 'B', light: 'B', dark: 'B' },
        'Identify Item': { base: '-', first: '-', light: '-', dark: '-' },
        'Identify Monster': { base: '-', first: '-', light: '-', dark: '-' },
        'Learning': { base: 'B', first: 'B', light: 'B', dark: 'B' },
        'Meditation': { base: '-', first: '-', light: '-', dark: '-' },
        'Merchant': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Perception': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Repair Item': { base: 'M', first: 'M', light: 'GM', dark: 'GM' },
        'Stealing': { base: '-', first: '-', light: '-', dark: '-' }
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
        'Axe': { base: '-', first: '-', light: '-', dark: '-' },
        'Blaster': { base: 'GM', first: 'GM', light: 'GM', dark: 'GM' },
        'Bow': { base: 'B', first: 'B', light: 'B', dark: 'B' },
        'Dagger': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Mace': { base: '-', first: '-', light: '-', dark: '-' },
        'Spear': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Staff': { base: 'M', first: 'M', light: 'GM', dark: 'GM' },
        'Sword': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Unarmed': { base: 'M', first: 'M', light: 'GM', dark: 'GM' }
      },
      armor: {
        'Chain': { base: '-', first: '-', light: '-', dark: '-' },
        'Dodging': { base: 'M', first: 'M', light: 'GM', dark: 'GM' },
        'Leather': { base: 'M', first: 'M', light: 'M', dark: 'M' },
        'Plate': { base: '-', first: '-', light: '-', dark: '-' },
        'Shield': { base: '-', first: '-', light: '-', dark: '-' }
      },
      magic: {
        'Air': { base: '-', first: '-', light: '-', dark: '-' },
        'Body': { base: '-', first: 'B', light: 'M', dark: 'M' },
        'Dark': { base: '-', first: '-', light: '-', dark: '-' },
        'Earth': { base: '-', first: '-', light: '-', dark: '-' },
        'Fire': { base: '-', first: '-', light: '-', dark: '-' },
        'Light': { base: '-', first: '-', light: '-', dark: '-' },
        'Mind': { base: '-', first: 'B', light: 'M', dark: 'M' },
        'Spirit': { base: '-', first: 'B', light: 'M', dark: 'M' },
        'Water': { base: '-', first: '-', light: '-', dark: '-' }
      },
      misc: {
        'Alchemy': { base: '-', first: '-', light: '-', dark: '-' },
        'Armsmaster': { base: 'M', first: 'M', light: 'M', dark: 'M' },
        'Body Building': { base: 'M', first: 'M', light: 'GM', dark: 'GM' },
        'Disarm Trap': { base: 'B', first: 'E', light: 'E', dark: 'M' },
        'Identify Item': { base: '-', first: '-', light: '-', dark: '-' },
        'Identify Monster': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Learning': { base: 'M', first: 'M', light: 'GM', dark: 'GM' },
        'Meditation': { base: '-', first: '-', light: '-', dark: '-' },
        'Merchant': { base: '-', first: '-', light: '-', dark: '-' },
        'Perception': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Repair Item': { base: '-', first: '-', light: '-', dark: '-' },
        'Stealing': { base: 'B', first: 'B', light: 'B', dark: 'E' }
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
        'Axe': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Blaster': { base: 'GM', first: 'GM', light: 'GM', dark: 'GM' },
        'Bow': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Dagger': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Mace': { base: 'M', first: 'M', light: 'GM', dark: 'GM' },
        'Spear': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Staff': { base: 'B', first: 'B', light: 'B', dark: 'B' },
        'Sword': { base: 'M', first: 'M', light: 'M', dark: 'M' },
        'Unarmed': { base: 'B', first: 'B', light: 'B', dark: 'B' }
      },
      armor: {
        'Chain': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Dodging': { base: 'B', first: 'B', light: 'B', dark: 'B' },
        'Leather': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Plate': { base: 'M', first: 'M', light: 'M', dark: 'M' },
        'Shield': { base: 'M', first: 'M', light: 'GM', dark: 'GM' }
      },
      magic: {
        'Air': { base: '-', first: '-', light: '-', dark: '-' },
        'Body': { base: 'B', first: 'E', light: 'M', dark: 'M' },
        'Dark': { base: '-', first: '-', light: '-', dark: 'B' },
        'Earth': { base: '-', first: '-', light: '-', dark: '-' },
        'Fire': { base: '-', first: '-', light: '-', dark: '-' },
        'Light': { base: '-', first: '-', light: 'B', dark: '-' },
        'Mind': { base: 'B', first: 'E', light: 'M', dark: 'M' },
        'Spirit': { base: 'B', first: 'E', light: 'M', dark: 'M' },
        'Water': { base: '-', first: '-', light: '-', dark: '-' }
      },
      misc: {
        'Alchemy': { base: '-', first: '-', light: '-', dark: '-' },
        'Armsmaster': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Body Building': { base: 'M', first: 'M', light: 'GM', dark: 'GM' },
        'Disarm Trap': { base: '-', first: '-', light: '-', dark: '-' },
        'Identify Item': { base: '-', first: '-', light: '-', dark: '-' },
        'Identify Monster': { base: '-', first: '-', light: '-', dark: '-' },
        'Learning': { base: 'B', first: 'B', light: 'B', dark: 'B' },
        'Meditation': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Merchant': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Perception': { base: 'B', first: 'B', light: 'B', dark: 'B' },
        'Repair Item': { base: 'M', first: 'M', light: 'GM', dark: 'GM' },
        'Stealing': { base: '-', first: '-', light: '-', dark: '-' }
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
        'Axe': { base: 'M', first: 'M', light: 'GM', dark: 'GM' },
        'Blaster': { base: 'GM', first: 'GM', light: 'GM', dark: 'GM' },
        'Bow': { base: 'M', first: 'M', light: 'M', dark: 'M' },
        'Dagger': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Mace': { base: '-', first: '-', light: '-', dark: '-' },
        'Spear': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Staff': { base: 'B', first: 'B', light: 'B', dark: 'B' },
        'Sword': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Unarmed': { base: 'B', first: 'B', light: 'B', dark: 'B' }
      },
      armor: {
        'Chain': { base: 'M', first: 'M', light: 'M', dark: 'M' },
        'Dodging': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Leather': { base: 'M', first: 'M', light: 'M', dark: 'M' },
        'Plate': { base: '-', first: '-', light: '-', dark: '-' },
        'Shield': { base: 'E', first: 'E', light: 'E', dark: 'E' }
      },
      magic: {
        'Air': { base: '-', first: 'B', light: 'E', dark: 'E' },
        'Body': { base: '-', first: 'B', light: 'E', dark: 'E' },
        'Dark': { base: '-', first: '-', light: '-', dark: '-' },
        'Earth': { base: '-', first: 'B', light: 'E', dark: 'E' },
        'Fire': { base: '-', first: 'B', light: 'E', dark: 'E' },
        'Light': { base: '-', first: '-', light: '-', dark: '-' },
        'Mind': { base: '-', first: 'B', light: 'E', dark: 'E' },
        'Spirit': { base: '-', first: 'B', light: 'E', dark: 'E' },
        'Water': { base: '-', first: 'B', light: 'E', dark: 'E' }
      },
      misc: {
        'Alchemy': { base: 'B', first: 'B', light: 'B', dark: 'B' },
        'Armsmaster': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Body Building': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Disarm Trap': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Identify Item': { base: 'B', first: 'B', light: 'B', dark: 'B' },
        'Identify Monster': { base: 'M', first: 'M', light: 'GM', dark: 'GM' },
        'Learning': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Meditation': { base: 'B', first: 'B', light: 'B', dark: 'B' },
        'Merchant': { base: 'B', first: 'B', light: 'B', dark: 'B' },
        'Perception': { base: 'M', first: 'M', light: 'M', dark: 'M' },
        'Repair Item': { base: 'B', first: 'B', light: 'B', dark: 'B' },
        'Stealing': { base: 'E', first: 'E', light: 'E', dark: 'E' }
      }
    }
  },
  sorcerer: {
    id: 'sorcerer',
    name: 'Sorcerer',
    promotions: {
      neutral: 'Wizard',
      light: 'Archmage',
      dark: 'Lich'
    },
    skills: {
      weapons: {
        'Axe': { base: '-', first: '-', light: '-', dark: '-' },
        'Blaster': { base: 'GM', first: 'GM', light: 'GM', dark: 'GM' },
        'Bow': { base: 'B', first: 'B', light: 'B', dark: 'B' },
        'Dagger': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Mace': { base: '-', first: '-', light: '-', dark: '-' },
        'Spear': { base: '-', first: '-', light: '-', dark: '-' },
        'Staff': { base: 'M', first: 'M', light: 'M', dark: 'M' },
        'Sword': { base: '-', first: '-', light: '-', dark: '-' },
        'Unarmed': { base: '-', first: '-', light: '-', dark: '-' }
      },
      armor: {
        'Chain': { base: '-', first: '-', light: '-', dark: '-' },
        'Dodging': { base: '-', first: '-', light: '-', dark: '-' },
        'Leather': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Plate': { base: '-', first: '-', light: '-', dark: '-' },
        'Shield': { base: '-', first: '-', light: '-', dark: '-' }
      },
      magic: {
        'Air': { base: 'E', first: 'M', light: 'GM', dark: 'GM' },
        'Body': { base: '-', first: '-', light: '-', dark: '-' },
        'Dark': { base: '-', first: '-', light: '-', dark: 'GM' },
        'Earth': { base: 'E', first: 'M', light: 'GM', dark: 'GM' },
        'Fire': { base: 'E', first: 'M', light: 'GM', dark: 'GM' },
        'Light': { base: '-', first: '-', light: 'GM', dark: '-' },
        'Mind': { base: '-', first: '-', light: '-', dark: '-' },
        'Spirit': { base: '-', first: '-', light: '-', dark: '-' },
        'Water': { base: 'E', first: 'M', light: 'GM', dark: 'GM' }
      },
      misc: {
        'Alchemy': { base: 'M', first: 'M', light: 'M', dark: 'M' },
        'Armsmaster': { base: '-', first: '-', light: '-', dark: '-' },
        'Body Building': { base: '-', first: '-', light: '-', dark: '-' },
        'Disarm Trap': { base: '-', first: '-', light: '-', dark: '-' },
        'Identify Item': { base: 'M', first: 'M', light: 'GM', dark: 'GM' },
        'Identify Monster': { base: 'M', first: 'M', light: 'M', dark: 'M' },
        'Learning': { base: 'M', first: 'M', light: 'M', dark: 'M' },
        'Meditation': { base: 'M', first: 'M', light: 'GM', dark: 'GM' },
        'Merchant': { base: 'B', first: 'B', light: 'B', dark: 'B' },
        'Perception': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Repair Item': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Stealing': { base: '-', first: '-', light: '-', dark: '-' }
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
        'Axe': { base: '-', first: '-', light: '-', dark: '-' },
        'Blaster': { base: 'GM', first: 'GM', light: 'GM', dark: 'GM' },
        'Bow': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Dagger': { base: 'M', first: 'M', light: 'GM', dark: 'GM' },
        'Mace': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Spear': { base: '-', first: '-', light: '-', dark: '-' },
        'Staff': { base: '-', first: '-', light: '-', dark: '-' },
        'Sword': { base: 'M', first: 'M', light: 'M', dark: 'M' },
        'Unarmed': { base: 'E', first: 'E', light: 'E', dark: 'E' }
      },
      armor: {
        'Chain': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Dodging': { base: 'M', first: 'M', light: 'M', dark: 'M' },
        'Leather': { base: 'M', first: 'M', light: 'GM', dark: 'GM' },
        'Plate': { base: '-', first: '-', light: '-', dark: '-' },
        'Shield': { base: 'E', first: 'B', light: 'B', dark: 'B' }
      },
      magic: {
        'Air': { base: '-', first: 'B', light: 'B', dark: 'B' },
        'Body': { base: '-', first: '-', light: '-', dark: '-' },
        'Dark': { base: '-', first: '-', light: '-', dark: '-' },
        'Earth': { base: '-', first: 'B', light: 'B', dark: 'B' },
        'Fire': { base: '-', first: 'B', light: 'B', dark: 'B' },
        'Light': { base: '-', first: '-', light: '-', dark: '-' },
        'Mind': { base: '-', first: '-', light: '-', dark: '-' },
        'Spirit': { base: '-', first: '-', light: '-', dark: '-' },
        'Water': { base: '-', first: 'B', light: 'B', dark: 'B' }
      },
      misc: {
        'Alchemy': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Armsmaster': { base: 'M', first: 'M', light: 'M', dark: 'M' },
        'Body Building': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Disarm Trap': { base: 'M', first: 'M', light: 'GM', dark: 'GM' },
        'Identify Item': { base: 'M', first: 'M', light: 'M', dark: 'M' },
        'Identify Monster': { base: '-', first: '-', light: '-', dark: '-' },
        'Learning': { base: 'E', first: 'E', light: 'E', dark: 'E' },
        'Meditation': { base: '-', first: '-', light: '-', dark: '-' },
        'Merchant': { base: 'M', first: 'M', light: 'M', dark: 'M' },
        'Perception': { base: 'M', first: 'M', light: 'M', dark: 'M' },
        'Repair Item': { base: 'B', first: 'B', light: 'B', dark: 'B' },
        'Stealing': { base: 'M', first: 'M', light: 'GM', dark: 'GM' }
      }
    }
  }
};
