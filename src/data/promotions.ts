export interface PromotionQuest {
  title: string;
  npc: string;
  location: string;
  region: string;
}

export interface ClassPromotions {
  base: string;
  first: PromotionQuest;
  light: PromotionQuest;
  dark: PromotionQuest;
}

export const PROMOTIONS: Record<string, ClassPromotions> = {
  archer: {
    base: 'Archer',
    first: {
      title: 'Warrior Mage',
      npc: 'Steagal Snick',
      location: 'Snick\'s House',
      region: 'Avlee'
    },
    light: {
      title: 'Master Archer',
      npc: 'Lawrence Mark',
      location: 'Mark\'s House',
      region: 'Harmondale'
    },
    dark: {
      title: 'Sniper',
      npc: 'Steagal Snick',
      location: 'Snick\'s House',
      region: 'Avlee'
    }
  },
  cleric: {
    base: 'Cleric',
    first: {
      title: 'Priest',
      npc: 'Daedalus Falk',
      location: 'Falk\'s House',
      region: 'Deyja'
    },
    light: {
      title: 'Priest of Light',
      npc: 'Rebecca Devine',
      location: 'Temple of Light',
      region: 'Celeste'
    },
    dark: {
      title: 'Priest of Dark',
      npc: 'Daedalus Falk',
      location: 'Falk\'s House',
      region: 'Deyja'
    }
  },
  druid: {
    base: 'Druid',
    first: {
      title: 'Great Druid',
      npc: 'Anthony Green',
      location: 'Green\'s House',
      region: 'Tularean Forest'
    },
    light: {
      title: 'Arch Druid',
      npc: 'Anthony Green',
      location: 'Green\'s House',
      region: 'Tularean Forest'
    },
    dark: {
      title: 'Warlock',
      npc: 'Tor Anwyn',
      location: 'Anwyn\'s House',
      region: 'Nighon' // Source said Nighon, Tor Anwyn.
    }
  },
  knight: {
    base: 'Knight',
    first: {
      title: 'Cavalier',
      npc: 'Frederick Org',
      location: 'Castle Gryphonheart',
      region: 'Erathia'
    },
    light: {
      title: 'Champion',
      npc: 'Leda Rowan',
      location: 'Rowan\'s House',
      region: 'Bracada Desert'
    },
    dark: {
      title: 'Black Knight',
      npc: 'Frederick Org',
      location: 'Castle Gryphonheart',
      region: 'Erathia'
    }
  },
  monk: {
    base: 'Monk',
    first: {
      title: 'Initiate',
      npc: 'Bartholomew Hume',
      location: 'Hume\'s House',
      region: 'Harmondale'
    },
    light: {
      title: 'Master',
      npc: 'Bartholomew Hume',
      location: 'Hume\'s House',
      region: 'Harmondale'
    },
    dark: {
      title: 'Ninja',
      npc: 'Stephen Sand',
      location: 'Sand\'s House', // Usually in The Pit? Source says "Stephen Sand - The Pit"
      region: 'The Pit'
    }
  },
  paladin: {
    base: 'Paladin',
    first: {
      title: 'Crusader',
      npc: 'Sir Charles Quixote',
      location: 'Quixote\'s House',
      region: 'Erathia' // Actually he is in Crusader's house in Erathia? Source says "Sir Charles Quixote - Erathia"
    },
    light: {
      title: 'Hero',
      npc: 'Sir Charles Quixote',
      location: 'Quixote\'s House',
      region: 'Erathia'
    },
    dark: {
      title: 'Villain',
      npc: 'William Setag',
      location: 'Setag\'s House',
      region: 'Deyja'
    }
  },
  ranger: {
    base: 'Ranger',
    first: {
      title: 'Hunter',
      npc: 'Ebednezer Sower',
      location: 'Sower\'s House',
      region: 'Tularean Forest'
    },
    light: {
      title: 'Ranger Lord',
      npc: 'Lysander Sweet',
      location: 'Sweet\'s House',
      region: 'Bracada Desert'
    },
    dark: {
      title: 'Bounty Hunter',
      npc: 'Ebednezer Sower',
      location: 'Sower\'s House',
      region: 'Tularean Forest'
    }
  },
  sorcerer: {
    base: 'Sorcerer',
    first: {
      title: 'Wizard',
      npc: 'Thomas Grey',
      location: 'School of Sorcery',
      region: 'Bracada Desert'
    },
    light: {
      title: 'Archmage',
      npc: 'Thomas Grey',
      location: 'School of Sorcery',
      region: 'Bracada Desert'
    },
    dark: {
      title: 'Lich',
      npc: 'Halfgild Wynac',
      location: 'Wynac\'s House',
      region: 'The Pit'
    }
  },
  thief: {
    base: 'Thief',
    first: {
      title: 'Rogue',
      npc: 'William Lasker',
      location: 'Sewers',
      region: 'Erathia'
    },
    light: {
      title: 'Spy',
      npc: 'William Lasker',
      location: 'Sewers',
      region: 'Erathia'
    },
    dark: {
      title: 'Assassin',
      npc: 'Seknit Undershadow',
      location: 'Undershadow\'s House',
      region: 'Deyja'
    }
  }
};
