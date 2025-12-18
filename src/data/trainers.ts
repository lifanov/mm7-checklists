export interface Trainer {
  name: string;
  location: string;
  region: string;
  level: 'Expert' | 'Master' | 'Grandmaster';
}

export const TRAINERS: Record<string, Trainer[]> = {
  'Air': [
    { name: 'Kyra Stormeye', location: 'Tatalia', region: 'Tatalia', level: 'Expert' },
    { name: 'Sethrik Windsong', location: 'Tularean Forest', region: 'Tularean Forest', level: 'Expert' },
    { name: 'Rislyn Greenstorm', location: 'Avlee', region: 'Avlee', level: 'Master' },
    { name: 'Gayle', location: 'Bracada Desert', region: 'Bracada Desert', level: 'Grandmaster' }
  ],
  'Alchemy': [
    { name: 'Bryce Watershed', location: 'Bracada Desert', region: 'Bracada Desert', level: 'Expert' },
    { name: 'Edgar Willowbark', location: 'Tularean Forest', region: 'Tularean Forest', level: 'Expert' },
    { name: 'Elzbet Winterspoon', location: 'Mount Nighon', region: 'Nighon', level: 'Master' },
    { name: 'Lucid Apple', location: 'Avlee', region: 'Avlee', level: 'Grandmaster' }
  ],
  'Armsmaster': [
    { name: 'Edgar Botham', location: 'Deyja Moors', region: 'Deyja', level: 'Expert' },
    { name: 'Trent Steele', location: 'Tatalia', region: 'Tatalia', level: 'Expert' },
    { name: 'Paula Brightspear', location: 'Avlee', region: 'Avlee', level: 'Master' },
    { name: 'Lasiter', location: 'Land of the Giants', region: 'Land of the Giants', level: 'Grandmaster' }
  ],
  'Axe': [
    { name: 'Wort Goblinreaver', location: 'Avlee', region: 'Avlee', level: 'Expert' },
    { name: 'Turgon Woodsplitter', location: 'Harmondale', region: 'Harmondale', level: 'Expert' },
    { name: 'Dalin Keenedge', location: 'Stone City', region: 'Stone City', level: 'Master' },
    { name: 'Karn Stonecleaver', location: 'Tatalia', region: 'Tatalia', level: 'Grandmaster' }
  ],
  'Blaster': [
    { name: 'Sir Caneghem', location: 'Celeste', region: 'Celeste', level: 'Expert' },
    { name: 'Dark Shade', location: 'The Pit', region: 'The Pit', level: 'Expert' },
    { name: 'Crag Hack', location: 'Celeste', region: 'Celeste', level: 'Master' },
    { name: 'Maximus', location: 'The Pit', region: 'The Pit', level: 'Master' },
    { name: 'Resurrectra', location: 'Celeste', region: 'Celeste', level: 'Grandmaster' },
    { name: 'Kastore', location: 'The Pit', region: 'The Pit', level: 'Grandmaster' }
  ],
  'Body Building': [
    { name: 'Kelli Hollyfield', location: 'Bracada Desert', region: 'Bracada Desert', level: 'Expert' },
    { name: 'Trip Thorinson', location: 'Stone City', region: 'Stone City', level: 'Expert' },
    { name: 'Wanda Foestryke', location: 'Deyja Moors', region: 'Deyja', level: 'Master' },
    { name: 'Evandar Thomas', location: 'Mount Nighon', region: 'Nighon', level: 'Grandmaster' }
  ],
  'Body': [
    { name: 'Tristen Hearthsworn', location: 'Erathia', region: 'Erathia', level: 'Expert' },
    { name: 'Straton Hillsman', location: 'Harmondale', region: 'Harmondale', level: 'Expert' },
    { name: 'Brother Bombah', location: 'Tatalia', region: 'Tatalia', level: 'Master' },
    { name: 'Tempus', location: 'Avlee', region: 'Avlee', level: 'Grandmaster' }
  ],
  'Bow': [
    { name: 'Wil Rudyman', location: 'Bracada Desert', region: 'Bracada Desert', level: 'Expert' },
    { name: 'Jaycin Suretrail', location: 'Tularean Forest', region: 'Tularean Forest', level: 'Expert' },
    { name: 'Lanshee Ravensight', location: 'Mount Nighon', region: 'Nighon', level: 'Master' },
    { name: 'Cardric the Steady', location: 'Harmondale', region: 'Harmondale', level: 'Grandmaster' }
  ],
  'Chain': [
    { name: 'Tricia Steelcoif', location: 'Tatalia', region: 'Tatalia', level: 'Expert' },
    { name: 'Gilad Bith', location: 'Tularean Forest', region: 'Tularean Forest', level: 'Expert' },
    { name: 'Medwari Dragontracker', location: 'Avlee', region: 'Avlee', level: 'Master' },
    { name: 'Halian Nevermore', location: 'Deyja Moors', region: 'Deyja', level: 'Grandmaster' }
  ],
  'Dagger': [
    { name: 'Smiling Jack', location: 'Bracada Desert', region: 'Bracada Desert', level: 'Expert' },
    { name: 'Mortie Ottin', location: 'Tularean Forest', region: 'Tularean Forest', level: 'Expert' },
    { name: 'Aznog Slasher', location: 'Mount Nighon', region: 'Nighon', level: 'Master' },
    { name: 'William Lasker', location: 'Erathian Sewer', region: 'Erathia', level: 'Grandmaster' },
    { name: 'Tonken Fist', location: 'Tatalia', region: 'Tatalia', level: 'Grandmaster' }
  ],
  'Dark': [
    { name: 'Jasp the Nightcrawler', location: 'Deyja Moors', region: 'Deyja', level: 'Expert' },
    { name: 'Seth Darkenmore', location: 'The Pit', region: 'The Pit', level: 'Master' },
    { name: 'Archibald Ironfist', location: 'The Pit', region: 'The Pit', level: 'Grandmaster' }
  ],
  'Disarm Trap': [
    { name: 'William Lasker', location: 'Erathian Sewer', region: 'Erathia', level: 'Expert' },
    { name: 'Taren the Lifter', location: 'Tatalia', region: 'Tatalia', level: 'Expert' },
    { name: 'Gretchin Fiddlebone', location: 'Tularean Forest', region: 'Tularean Forest', level: 'Expert' },
    { name: 'Lenord Skinner', location: 'Harmondale', region: 'Harmondale', level: 'Master' },
    { name: 'Silk Quicktongue', location: 'Mount Nighon', region: 'Nighon', level: 'Grandmaster' }
  ],
  'Dodging': [
    { name: 'Spyder', location: 'Bracada Desert', region: 'Bracada Desert', level: 'Expert' },
    { name: 'Sheldon Mist', location: 'Harmondale', region: 'Harmondale', level: 'Expert' },
    { name: 'Oberic Crane', location: 'Evenmorn Island', region: 'Evenmorn', level: 'Master' },
    { name: 'Kenneth Wain', location: 'Erathia', region: 'Erathia', level: 'Grandmaster' }
  ],
  'Earth': [
    { name: 'Johanson Kern', location: 'Harmondale', region: 'Harmondale', level: 'Expert' },
    { name: 'Jasper Welman', location: 'Stone City', region: 'Stone City', level: 'Expert' },
    { name: 'Lara Stonewright', location: 'Tularean Forest', region: 'Tularean Forest', level: 'Master' },
    { name: 'Avalanche', location: 'Deyja Moors', region: 'Deyja', level: 'Grandmaster' }
  ],
  'Fire': [
    { name: 'Lisha Redding', location: 'Tatalia', region: 'Tatalia', level: 'Expert' },
    { name: 'Kindle Treasurestone', location: 'Tularean Forest', region: 'Tularean Forest', level: 'Expert' },
    { name: 'Ashen Temper', location: 'Harmondale', region: 'Harmondale', level: 'Master' },
    { name: 'Blayze', location: 'Erathia', region: 'Erathia', level: 'Grandmaster' }
  ],
  'Identify Item': [
    { name: 'Fenton Krewlen', location: 'Harmondale', region: 'Harmondale', level: 'Expert' },
    { name: 'Hollis the True', location: 'Mount Nighon', region: 'Nighon', level: 'Expert' },
    { name: 'Samuel Benson', location: 'Bracada Desert', region: 'Bracada Desert', level: 'Master' },
    { name: 'Payge Blueswan', location: 'Tularean Forest', region: 'Tularean Forest', level: 'Grandmaster' }
  ],
  'Identify Monster': [
    { name: 'Christie Nosewort', location: 'Mount Nighon', region: 'Nighon', level: 'Expert' },
    { name: 'Alton Black', location: 'Tularean Forest', region: 'Tularean Forest', level: 'Expert' },
    { name: 'Jeni Swiftfoot', location: 'Avlee', region: 'Avlee', level: 'Master' },
    { name: 'Raven the Hunter', location: 'Harmondale', region: 'Harmondale', level: 'Grandmaster' }
  ],
  'Learning': [
    { name: 'Issac Applebee', location: 'Bracada Desert', region: 'Bracada Desert', level: 'Expert' },
    { name: 'Agatha Putnam', location: 'Deyja Moors', region: 'Deyja', level: 'Expert' },
    { name: 'Dorothy Senjac', location: 'Mount Nighon', region: 'Nighon', level: 'Master' },
    { name: 'William Smithson', location: 'Evenmorn Island', region: 'Evenmorn', level: 'Grandmaster' }
  ],
  'Leather': [
    { name: 'Mikel Deerhunter', location: 'Avlee', region: 'Avlee', level: 'Expert' },
    { name: 'Douglas Iverson', location: 'Harmondale', region: 'Harmondale', level: 'Expert' },
    { name: 'Rabisa Nedlon', location: 'Mount Nighon', region: 'Nighon', level: 'Master' },
    { name: 'Miyon the Quick', location: 'Tularean Forest', region: 'Tularean Forest', level: 'Grandmaster' }
  ],
  'Light': [
    { name: 'Ethan Lightsworn', location: 'Bracada Desert', region: 'Bracada Desert', level: 'Expert' },
    { name: 'Helena Morningstar', location: 'Celeste', region: 'Celeste', level: 'Master' },
    { name: 'Gavin Magnus', location: 'Celeste', region: 'Celeste', level: 'Grandmaster' }
  ],
  'Mace': [
    { name: 'Norbert Havest', location: 'Erathia', region: 'Erathia', level: 'Expert' },
    { name: 'Aldrin Tamloc', location: 'Stone City', region: 'Stone City', level: 'Expert' },
    { name: 'Brother Rothham', location: 'Tatalia', region: 'Tatalia', level: 'Master' },
    { name: 'Patwin Fellbern', location: 'Deyja Moors', region: 'Deyja', level: 'Grandmaster' }
  ],
  'Meditation': [
    { name: 'Barbara Wiseman', location: 'Deyja Moors', region: 'Deyja', level: 'Expert' },
    { name: 'Stewart Whitesky', location: 'Mount Nighon', region: 'Nighon', level: 'Expert' },
    { name: 'Tessa Greensward', location: 'Bracada Desert', region: 'Bracada Desert', level: 'Master' },
    { name: 'Kaine', location: 'Avlee', region: 'Avlee', level: 'Grandmaster' }
  ],
  'Merchant': [
    { name: 'Jobber Thain', location: 'Stone City', region: 'Stone City', level: 'Expert' },
    { name: 'Matric Weatherson', location: 'Tularean Forest', region: 'Tularean Forest', level: 'Expert' },
    { name: 'Bethold Caverhill', location: 'Evenmorn Island', region: 'Evenmorn', level: 'Master' },
    { name: 'Brigham the Frugal', location: 'Bracada Desert', region: 'Bracada Desert', level: 'Grandmaster' }
  ],
  'Mind': [
    { name: 'Julian the Delver', location: 'Erathia', region: 'Erathia', level: 'Expert' },
    { name: 'Helga Whitesky', location: 'Mount Nighon', region: 'Nighon', level: 'Expert' },
    { name: 'Myles Featherwind', location: 'Avlee', region: 'Avlee', level: 'Master' },
    { name: 'Xavier Bremen', location: 'Tatalia', region: 'Tatalia', level: 'Grandmaster' }
  ],
  'Perception': [
    { name: 'Kethiric Otterton', location: 'Avlee', region: 'Avlee', level: 'Expert' },
    { name: 'Gregory Weider', location: 'Harmondale', region: 'Harmondale', level: 'Expert' },
    { name: 'Garret Dotes', location: 'Tularean Forest', region: 'Tularean Forest', level: 'Master' },
    { name: 'Petra Cleareye', location: 'Deyja Moors', region: 'Deyja', level: 'Grandmaster' }
  ],
  'Plate': [
    { name: 'Critias Burnkindle', location: 'Stone City', region: 'Stone City', level: 'Expert' },
    { name: 'Weldrik Lotts', location: 'Tatalia', region: 'Tatalia', level: 'Expert' },
    { name: 'Dekian Forgewright', location: 'Erathia', region: 'Erathia', level: 'Master' },
    { name: 'Brand the Maker', location: 'Bracada Desert', region: 'Bracada Desert', level: 'Grandmaster' }
  ],
  'Repair Item': [
    { name: 'Shane Thomas', location: 'Harmondale', region: 'Harmondale', level: 'Expert' },
    { name: 'Balan Gizmo', location: 'Stone City', region: 'Stone City', level: 'Expert' },
    { name: 'Thomas Moore', location: 'Tatalia', region: 'Tatalia', level: 'Master' },
    { name: 'Gareth the Fixer', location: 'Erathia', region: 'Erathia', level: 'Grandmaster' }
  ],
  'Shield': [
    { name: 'Randal Wolverton', location: 'Erathia', region: 'Erathia', level: 'Expert' },
    { name: 'Isram Gallowswell', location: 'Tatalia', region: 'Tatalia', level: 'Master' },
    { name: 'Fedwin Smithson', location: 'Evenmorn Island', region: 'Evenmorn', level: 'Grandmaster' }
  ],
  'Spear': [
    { name: 'Cassandra Holden', location: 'Avlee', region: 'Avlee', level: 'Expert' },
    { name: 'Kerin Greydawn', location: 'Tatalia', region: 'Tatalia', level: 'Expert' },
    { name: 'Claderin Silverpoint', location: 'Tularean Forest', region: 'Tularean Forest', level: 'Master' },
    { name: 'Seline Falconeye', location: 'Stone City', region: 'Stone City', level: 'Grandmaster' }
  ],
  'Spirit': [
    { name: 'Bertram Stillwater', location: 'Harmondale', region: 'Harmondale', level: 'Expert' },
    { name: 'Solomon Riverstone', location: 'Tatalia', region: 'Tatalia', level: 'Expert' },
    { name: 'Heather Dreamwright', location: 'Erathia', region: 'Erathia', level: 'Master' },
    { name: 'Benjamin the Balanced', location: 'Tularean Forest', region: 'Tularean Forest', level: 'Grandmaster' }
  ],
  'Staff': [
    { name: 'Ton Withersmythe', location: 'Harmondale', region: 'Harmondale', level: 'Expert' },
    { name: 'Garic Hawthorne', location: 'Mount Nighon', region: 'Nighon', level: 'Expert' },
    { name: 'Elsie Pederton', location: 'Bracada Desert', region: 'Bracada Desert', level: 'Master' },
    { name: 'Jillian Mithrit', location: 'Avlee', region: 'Avlee', level: 'Grandmaster' }
  ],
  'Stealing': [
    { name: 'William Lasker', location: 'Erathian Sewer', region: 'Erathia', level: 'Expert' },
    { name: 'Peryn Lightfingers', location: 'Harmondale', region: 'Harmondale', level: 'Expert' },
    { name: 'Elmo the Pincher', location: 'Mount Nighon', region: 'Nighon', level: 'Expert' },
    { name: 'Leane Shadowrunner', location: 'Deyja Moors', region: 'Deyja', level: 'Master' },
    { name: 'Everil Nightwalker', location: 'Tatalia', region: 'Tatalia', level: 'Grandmaster' }
  ],
  'Sword': [
    { name: 'Payge Rivenhill', location: 'Erathia', region: 'Erathia', level: 'Expert' },
    { name: 'Flynn Arin', location: 'Tatalia', region: 'Tatalia', level: 'Expert' },
    { name: 'Tugor Slicer', location: 'Deyja Moors', region: 'Deyja', level: 'Master' },
    { name: 'Chadric Townsaver', location: 'Harmondale', region: 'Harmondale', level: 'Grandmaster' }
  ],
  'Unarmed': [
    { name: 'Puddle Stone', location: 'Bracada Desert', region: 'Bracada Desert', level: 'Expert' },
    { name: 'Kira Steeleye', location: 'Harmondale', region: 'Harmondale', level: 'Expert' },
    { name: 'Ulbrecht the Brawler', location: 'Evenmorn Island', region: 'Evenmorn', level: 'Master' },
    { name: 'Norris', location: 'Erathia', region: 'Erathia', level: 'Grandmaster' }
  ],
  'Water': [
    { name: 'Karla Ravenhair', location: 'Avlee', region: 'Avlee', level: 'Expert' },
    { name: 'Herald Whitecap', location: 'Tularean Forest', region: 'Tularean Forest', level: 'Expert' },
    { name: 'Tobren Rainshield', location: 'Mount Nighon', region: 'Nighon', level: 'Master' },
    { name: 'Torrent', location: 'Harmondale', region: 'Harmondale', level: 'Grandmaster' }
  ]
};
