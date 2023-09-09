export enum ItemClassTypeEnum {
  Cloth = 'cloth',
  Leather = 'leather',
  Mail = 'mail',
  Plate = 'plate',
  Misc = 'misc',
  Jewelry = 'jewelry',
  OffHand = 'off_hand',
  Shield = 'shield',
  Dagger = 'dagger',
  Axe = 'axe',
  Sword = 'sword',
  Mace = 'mace',
  Fist = 'fist',
  Warglaive = 'warglaive',
  Polearm = 'polearm',
  Staff = 'staff',
}

export enum ItemInventoryTypeEnum {
  Head = 'head',
  Neck = 'neck',
  Shoulder = 'shoulder',
  Cloak = 'cloak',
  Chest = 'chest',
  Wrist = 'wrist',
  Hands = 'hands',
  Waist = 'waist',
  Legs = 'legs',
  Feet = 'feet',
  Finger = 'finger',
  Trinket = 'trinket',
  OneHand = 'one_hand',
  OffHand = 'off_hand',
  Ranged = 'ranged',
  TwoHand = 'two_hand',
}

export enum StatEnum {
  Intellect = 'intellect',
  Agility = 'agility',
  Strength = 'strength',
  Stamina = 'stamina',

  Mastery = 'mastery_rating',
  Haste = 'haste_rating',
  Versatility = 'versatility_rating',
  CriticalStrike = 'crit_rating',
}

export type ItemTypeStatDetail = {
  type: StatEnum;
  value: number;
};

export enum ItemSourceEnum {
  Vendor = 'vendor',
  Raid = 'raid',
  Dungeon = 'dungeon',
  Quest = 'quest',
  Craft = 'craft',
  WorldEvent = 'world_event',
  Pvp = 'pvp',
  Unknown = 'unknown',
}
export type ItemSourceType = {
  title: string;
  description: string;
  url: string;
};

export type ItemType = {
  id: number;
  patch: string;
  name: string;
  wowheadUrl: string;

  class: ItemClassTypeEnum;
  inventoryType: ItemInventoryTypeEnum;

  stats: StatEnum[];
  statsDetails: ItemTypeStatDetail[];

  sourceType: ItemSourceEnum[];
  source: ItemSourceType;
};
