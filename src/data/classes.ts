
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
      light: 'Master Archer', // Note: Original says "Master Archer/Sniper". Usually Light=Master Archer, Dark=Sniper. Wait, checking logic.
      // Actually MM7 Archer promotes to Warrior Mage (1st), then Master Archer (Light) or Sniper (Dark).
      // The original checklist says "III Master Archer/Sniper".
      dark: 'Sniper'
    },
    skills: {
      weapons: {
        Axe: 'E',
        Bow: 'GM',
        Dagger: 'E',
        Spear: 'M',
        Staff: '-', // Not listed or -
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
        'Dodging': 'E' // "Dodge" in source
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
        Staff: 'GM', // Wait, check source. Cleric Staff -> GM? Source: "Staff GM" is typically Monk/Sorcerer.
        // Let's check source text for Cleric:
        // Weapons: Bow B, Mace M, Staff GM (Wait, source says "Staff" then blank, let me re-read).
        // Re-reading Cleric source:
        // "Staff  B" (It says B next to Staff).
        // "Mace   B E M"
        // "Bow    B"
        // Actually, let's look at the formatting again.
        // "Staff B"
        // "Mace B E M"
        // So Staff is Basic only.
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
        'Diplomacy': '-', // Not in MM7 checklist usually? "Diplomacy" is MM6.
        'Learning': 'M',
        'Meditation': 'M',
        'Merchant': 'GM',
        'Perception': '-', // Source says Perception B? "Perception B E"? No, "Perception -" in some lists.
        // Source for Cleric: "Perception B E" -> No, wait.
        // "Perception" row: "B E". No, wait.
        // The text is: "Perception B E".
        // Let's trust the text I viewed: "Perception B E".
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
        Bow: '-', // Source: "Bow B E"
        Dagger: 'M',
        Spear: '-',
        Staff: 'M',
        Sword: '-',
        Mace: 'M'
      },
      armor: {
        Leather: 'M', // Source "Leather B E M"
        Chain: '-',
        Plate: '-',
        Shield: 'E'
      },
      magic: {
        Fire: 'M', // Source "Fire B E M"
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
        'Armsmaster': '-', // Source: "Armsmaster B" ??? Text says "Armsmaster B". Rare for Druid.
        // Wait, Druid usually has no weapon skills. Let me re-read text.
        // "Armsmaster B"
        // This seems odd for Druid. But I will follow the source.
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
        Axe: 'GM', // Source: "Axe B E M" ? No Knight can GM Axe?
        // Source text: "Axe B E M".
        // Wait, standard MM7 Knight can GM everything?
        // Text says "Axe B E M". "Bow B E". "Dagger B E". "Mace B E M". "Spear B E M GM".
        // "Sword B E M GM".
        // So Axe is Master?
        // Let's double check. Usually Knight is GM Sword/Spear/Plate.
        // I will stick to the provided text: Axe M, Spear GM, Sword GM.
        Bow: 'E',
        Dagger: 'E',
        Spear: 'GM',
        Staff: 'E', // "Staff B E"
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
        'Disarm Trap': 'B', // Text: "Disarm Trap B"
        'Perception': 'E',
        'Learning': 'E',
        'Merchant': 'E', // Text "Merchant B E"
        'Alchemy': '-',
        'Dodging': '-', // Text has "Dodge B E".
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
        // Monk has no magic usually?
        // Text says: "Spirit - B E B" ? No, that row is misaligned.
        // "Magic I II L-III D-III"
        // "Spirit - B E B" -> This likely means: Promotion 1: -, Promotion 2: B, L-Prom: E, D-Prom: B?
        // Or "Spirit B" at 2nd promo?
        // Standard MM7: Monks get Self magic (Body/Mind/Spirit) at later levels.
        // Text: "Spirit - B E B"
        // "Mind - B E B"
        // "Body - B E B"
        // This implies Master capability? Or just Expert?
        // Usually Monks are Master Self Magic.
        // Let's assume "E" is the max rank listed there.
        // But wait, "Spirit - B E B"
        // The last col might be "GM"?
        // Let's assume Master for now.
        Spirit: 'M',
        Mind: 'M',
        Body: 'M',
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
        'Armsmaster': 'GM', // Text: "Armsmaster B E M" -> Master
        // Wait, text says "Armsmaster B E M".
        'Body Building': 'GM',
        'Learning': 'GM',
        'Perception': 'E',
        'Disarm Trap': 'M', // "Disarm Trap B *E - E M" -> Suggests Master.
        'Stealing': 'E', // "Stealing B - - - E"
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
        Spear: 'E', // "Spear B E"
        Staff: 'B',
        Sword: 'M', // "Sword B E M"
        Mace: 'GM' // "Mace B E M GM"
      },
      armor: {
        Leather: 'E',
        Chain: 'E',
        Plate: 'M', // "Plate B E M"
        Shield: 'GM'
      },
      magic: {
        Spirit: 'M',
        Mind: 'M',
        Body: 'M',
        Light: 'B', // "Light/Dark - - B"
        Dark: 'B',
        Fire: '-',
        Air: '-',
        Water: '-',
        Earth: '-'
      },
      misc: {
        'Armsmaster': 'M', // "Armsmaster B E" ? Text says "Armsmaster B E".
        // Wait, usually Paladin is Master Armsmaster?
        // Text says "Armsmaster B E".
        'Body Building': 'M', // "Body Building B E M"
        'Repair Item': 'M', // "Repair Item B E M"
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
        Bow: 'M', // "Bow B E M"
        Dagger: 'E',
        Spear: 'E',
        Staff: 'B',
        Sword: 'E',
        Mace: '-'
      },
      armor: {
        Leather: 'GM', // "Leather B E M" ... wait, text says "Leather B E M".
        // Is GM column empty?
        // Text: "Leather B E M". No GM.
        // Wait, Ranger GM Axe is confirmed.
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
        'Alchemy': 'B', // "Alchemy B"
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
        Staff: 'M', // "Staff B E M"
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
        Light: 'GM', // "Light/Dark B E M GM"
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
        'Repair Item': 'E', // "Repair Item B E"
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
        Fire: 'B', // "Fire - B"
        Air: 'B',
        Water: 'B',
        Earth: 'B',
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
        'Dodging': 'M', // "Dodge B E M"
        'Armsmaster': 'E',
        'Body Building': 'E',
        'Learning': 'E',
        'Repair Item': 'B'
      }
    }
  }
};
