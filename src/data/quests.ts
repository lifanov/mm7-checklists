
export interface Quest {
  id: string;
  name: string;
  region: string;
  isEssential: boolean;
  promotionClass?: string;
  requiredAlign?: 'Neutral' | 'Light' | 'Dark';
}

export const QUESTS: Quest[] = [
  // Emerald Island
  { id: 'scavenger_contest', name: "Lord Markham's Scavenger Contest", region: 'Emerald Island', isEssential: true },
  { id: 'missing_contestants', name: "Find evidence of missing contestants", region: 'Emerald Island', isEssential: false },

  // Harmondale
  { id: 'clear_castle', name: "Clear Harmondale Castle of goblins", region: 'Harmondale', isEssential: true },
  { id: 'repair_castle', name: "Repair Harmondale Castle (Red Dwarf Mines Rescue)", region: 'Harmondale', isEssential: true },
  { id: 'talk_queen_king', name: "Talk to Queen Catherine & King Parson", region: 'Harmondale', isEssential: false },
  { id: 'choose_arbiter', name: "Choose a new Arbiter (Choice of path)", region: 'Harmondale', isEssential: true },
  { id: 'recover_signet', name: "Recover the Signet Ring", region: 'Harmondale', isEssential: false },
  { id: 'find_arcomage', name: "Find the ArcoMage Player & Deck", region: 'Harmondale', isEssential: false },
  { id: 'find_lantern', name: "Find the Lantern of Light", region: 'Harmondale', isEssential: false },
  { id: 'promo_master_archer', name: "Find the Perfect Bow (Promotion to Master Archer)", region: 'Harmondale', isEssential: false, promotionClass: 'Master Archer', requiredAlign: 'Light' },
  { id: 'promo_master', name: "Kill the High Priest of Baa (Promotion to Master)", region: 'Harmondale', isEssential: false, promotionClass: 'Master', requiredAlign: 'Light' },
  { id: 'promo_initiate', name: "Visit the Lost Meditation Spot (Promotion to Initiate)", region: 'Harmondale', isEssential: false, promotionClass: 'Initiate' },
  { id: 'mercenaries_debt', name: "The Mercenaries collect a debt", region: 'Harmondale', isEssential: false },
  { id: 'call_goblins', name: "Call the goblins", region: 'Harmondale', isEssential: false },
  { id: 'goblin_fort', name: "The goblin fort", region: 'Harmondale', isEssential: false },

  // Avlee
  { id: 'faerie_pipes', name: "Give the Faerie Pipes to Johann Kerrid", region: 'Avlee', isEssential: false },
  { id: 'sabotage_lift', name: "Sabotage the Red Dwarf Mines Lift (Promotion to Warrior Mage)", region: 'Avlee', isEssential: false, promotionClass: 'Warrior Mage' },
  { id: 'promo_sniper', name: "Find the Perfect Bow (Promotion to Sniper)", region: 'Avlee', isEssential: false, promotionClass: 'Sniper', requiredAlign: 'Dark' },

  // Barrow Downs
  { id: 'rescue_dwarves', name: "Rescue the Dwarves from the Red Dwarf Mines", region: 'Barrow Downs', isEssential: true },
  { id: 'clear_trogs', name: "Clear out the troglodytes", region: 'Barrow Downs', isEssential: false },

  // Bracada Desert
  { id: 'build_golem', name: "Build a Golem (Promotion to Wizard)", region: 'Bracada Desert', isEssential: false, promotionClass: 'Wizard' },
  { id: 'promo_archmage', name: "Find the book of Divine Intervention (Promotion to Archmage)", region: 'Bracada Desert', isEssential: false, promotionClass: 'Arch Mage', requiredAlign: 'Light' },
  { id: 'promo_ranger_lord', name: "Return the Heart of the Forest (Promotion to Ranger Lord)", region: 'Bracada Desert', isEssential: false, promotionClass: 'Ranger Lord', requiredAlign: 'Light' },
  { id: 'promo_champion', name: "Win five arena encounters at knight level (Promotion to Champion)", region: 'Bracada Desert', isEssential: false, promotionClass: 'Champion', requiredAlign: 'Light' },
  { id: 'stole_seasons', name: "Retrieve the Season's Stole", region: 'Bracada Desert', isEssential: false },

  // Celeste
  { id: 'light_proving', name: "Light Proving Grounds (Wall of Mists)", region: 'Celeste', isEssential: true, requiredAlign: 'Light' },
  { id: 'wine_cellar', name: "Investigate Vampires in the Wine Cellar", region: 'Celeste', isEssential: false, requiredAlign: 'Light' },
  { id: 'altar_pieces_light', name: "Altar pieces from Temples of Dark & Light", region: 'Celeste', isEssential: false, requiredAlign: 'Light' },
  { id: 'soul_jars_light', name: "Soul Jars from Castle Gloaming", region: 'Celeste', isEssential: false, requiredAlign: 'Light' },
  { id: 'assassinate_tolberti', name: "Assassinate Tolberti & return his control cube", region: 'Celeste', isEssential: false, requiredAlign: 'Light' },
  { id: 'slay_xenofex_light', name: "Slay Xenofex in Colony Zod", region: 'Celeste', isEssential: false, requiredAlign: 'Light' },
  { id: 'oscillation_light', name: "Retrieve the Oscillation Overthruster from The Lincoln", region: 'Celeste', isEssential: true, requiredAlign: 'Light' },

  // Deyja
  { id: 'kidnap_alice', name: "Kidnap Alice Hargraves (Promotion to Villain)", region: 'Deyja', isEssential: false, promotionClass: 'Villain', requiredAlign: 'Dark' },
  { id: 'find_evenmorn', name: "Find Map to Evenmorn (Promotion to Priest)", region: 'Deyja', isEssential: false, promotionClass: 'Priest' },
  { id: 'defile_altar', name: "Defile Altar of Good (Promotion to Priest of Dark)", region: 'Deyja', isEssential: false, promotionClass: 'Priest of Dark', requiredAlign: 'Dark' },
  { id: 'carmine_knife', name: "Get Lady Carmine’s Knife (Promotion to Assassin)", region: 'Deyja', isEssential: false, promotionClass: 'Assassin', requiredAlign: 'Dark' },
  { id: 'kill_griffins', name: "Kill all the griffins in Erathia and the Bracada Desert", region: 'Deyja', isEssential: false },

  // Erathia
  { id: 'rescue_loren', name: "Rescue Loren Steel", region: 'Erathia', isEssential: true },
  { id: 'slay_wromthrax', name: "Slay Wromthrax (Promotion to Crusader)", region: 'Erathia', isEssential: false, promotionClass: 'Crusader' },
  { id: 'rescue_alice', name: "Rescue Alice Hargraves (Promotion to Hero)", region: 'Erathia', isEssential: false, promotionClass: 'Hero', requiredAlign: 'Light' },
  { id: 'steal_vase', name: "Steal Lord Markham’s Vase (Promotion to Rogue)", region: 'Erathia', isEssential: false, promotionClass: 'Rogue' },
  { id: 'haunted_mansion', name: "Clear out Haunted Mansion (Promotion to Cavalier)", region: 'Erathia', isEssential: false, promotionClass: 'Cavalier' },
  { id: 'steal_treasury', name: "Steal the elven treasury from Castle Navan (Promotion to Black Knight)", region: 'Erathia', isEssential: false, promotionClass: 'Black Knight', requiredAlign: 'Dark' },
  { id: 'letter_markham', name: "Bring letter to Lord Markham", region: 'Erathia', isEssential: false },
  { id: 'win_arcomage', name: "Win the ArcoMage Tournament", region: 'Erathia', isEssential: false },

  // Mount Nighon
  { id: 'dragon_egg', name: "Retrieve a Dragon Egg (Promotion to Warlock)", region: 'Mount Nighon', isEssential: false, promotionClass: 'Warlock', requiredAlign: 'Dark' },
  { id: 'haldar_remains', name: "Find Haldar’s remains", region: 'Mount Nighon', isEssential: false },

  // The Pit
  { id: 'dark_proving', name: "Dark Proving Grounds", region: 'The Pit', isEssential: true, requiredAlign: 'Dark' },
  { id: 'soul_jars_dark', name: "Retrieve Soul Jars from Thunderfist Mountain", region: 'The Pit', isEssential: false, requiredAlign: 'Dark' },
  { id: 'altar_pieces_dark', name: "Get the Light and Dark altar Pieces", region: 'The Pit', isEssential: false, requiredAlign: 'Dark' },
  { id: 'lower_shield', name: "Lower the shield in Clanker’s Lab", region: 'The Pit', isEssential: false, requiredAlign: 'Dark' },
  { id: 'kill_robert', name: "Kill Robert the Wise", region: 'The Pit', isEssential: false, requiredAlign: 'Dark' },
  { id: 'kill_xenofex_dark', name: "Kill Xenofex", region: 'The Pit', isEssential: false, requiredAlign: 'Dark' },
  { id: 'oscillation_dark', name: "Get the Oscillation Overthruster", region: 'The Pit', isEssential: true, requiredAlign: 'Dark' },
  { id: 'lich_jars', name: "Get the Lich Jars from the Walls of Mists (Promotion to Lich)", region: 'The Pit', isEssential: false, promotionClass: 'Lich', requiredAlign: 'Dark' },
  { id: 'decrypt_scroll', name: "Decipher the Encrypted Scroll (Promotion to Ninja)", region: 'The Pit', isEssential: false, promotionClass: 'Ninja', requiredAlign: 'Dark' },

  // Tatalia
  { id: 'three_paintings', name: "Collect Three Paintings", region: 'Tatalia', isEssential: false },

  // Tularean Forest
  { id: 'steal_plans', name: "Steal the Fort Riverstride Plans", region: 'Tularean Forest', isEssential: true },
  { id: 'druid_shrines', name: "Visit three druid shrines (Promotion to Great Druid)", region: 'Tularean Forest', isEssential: false, promotionClass: 'Great Druid' },
  { id: 'zokarr_skull', name: "Put Zokarr’s Skull in his Tomb (Promotion to Arch Druid)", region: 'Tularean Forest', isEssential: false, promotionClass: 'Arch Druid', requiredAlign: 'Light' },
  { id: 'faerie_mound', name: "Enter the Faerie Mound (Promotion to Hunter)", region: 'Tularean Forest', isEssential: false, promotionClass: 'Hunter' },
  { id: 'bounties', name: "Collect 10,000 gp in bounties (Promotion to Bounty Hunter)", region: 'Tularean Forest', isEssential: false, promotionClass: 'Bounty Hunter', requiredAlign: 'Dark' },
  { id: 'letter_faerie_king', name: "Deliver a letter to the Faerie King", region: 'Tularean Forest', isEssential: false },
  { id: 'statuettes', name: "Place 3 statuettes back on their shrines", region: 'Tularean Forest', isEssential: false },
  { id: 'gryphonheart', name: "Recover the Gryphonheart Trumpet", region: 'Tularean Forest', isEssential: false }
];
