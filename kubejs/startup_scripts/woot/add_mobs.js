WootStartupEvents.registerFactoryMob(
  [
    'twilightforest:yeti',
    'minecraft:guardian',
    'twilightforest:skeleton_druid',
    'twilightforest:stable_ice_core',
    'twilightforest:troll',
    'outer_end:stalker',
    'twilightforest:wraith',
    'twilightforest:death_tome',
    'twilightforest:king_spider',
    'twilightforest:minotaur',
    'twilightforest:mist_wolf',
    'cataclysm:elite_draugr',
    'cataclysm:ignited_berserker',
    'cataclysm:ignited_revenant',
  ],
  (event) => {
    event.factoryMobPatcher().tier('tier_3').vitalityCost(7500).patch();
  }
);

WootStartupEvents.registerFactoryMob(
  [
    'cataclysm:aptrgangr',
    'cataclysm:cindaria',
    'cataclysm:clawdian',
    'cataclysm:coral_bardiche',
    'cataclysm:coral_golem',
    'cataclysm:coralssus',
    'cataclysm:deepling_warlock',
    'cataclysm:deepling_priest',
    'cataclysm:deepling_brute',
    'cataclysm:hippocamtus',
    'cataclysm:kobolediator',
    'twilightforest:armored_giant',
    'twilightforest:carminite_golem',
    'twilightforest:giant_miner',
    'twilightforest:minoshroom',
    'twilightforest:carminite_ghastguard',
    'minecraft:iron_golem',
    'mutantmonsters:mutant_creeper',
    'mutantmonsters:mutant_enderman',
    'mutantmonsters:mutant_skeleton',
    'mutantmonsters:mutant_snow_golem',
    'mutantmonsters:mutant_zombie',
    'mutantmonsters:spider_pig',
    'cataclysm:the_prowler',
  ],
  (event) => {
    event.factoryMobPatcher().tier('tier_4').vitalityCost(10000).patch();
  }
);

WootStartupEvents.registerFactoryMob(
  [
    'twilightforest:knight_phantom',
    'twilightforest:alpha_yeti',
    'twilightforest:hydra',
    'twilightforest:lich',
    'twilightforest:ur_ghast',
    'twilightforest:snow_queen',
    'twilightforest:naga',
    'minecraft:ender_dragon',
    'minecraft:elder_guardian',
    'bosses_of_mass_destruction:gauntlet',
    'bosses_of_mass_destruction:lich',
    'bosses_of_mass_destruction:obsidilith',
    'bosses_of_mass_destruction:void_blossom',
    'botania:doppleganger',
    'cataclysm:ender_golem',
    'cataclysm:ancient_remnant',
    'cataclysm:the_harbinger',
    'cataclysm:the_leviathan',
    'cataclysm:maledictus',
    'cataclysm:netherite_monstrosity',
    'cataclysm:scylla',
    'minecraft:wither',
    'minecraft:warden',
    'cataclysm:ender_guardian',
    'cataclysm:ignis',
    'nuclearcraft:feral_ghoul_boss',
  ],
  (event) => {
    event.factoryMobPatcher().tier('tier_5').vitalityCost(30000).patch();
  }
);

WootStartupEvents.registerFactoryMob('allthemodium:piglich', (event) => {
  event.factoryMobPatcher().tier('tier_5').patch();

  const blacklist = [
    'allthemodium:allthemodium_sword',
    'allthemodium:allthemodium_pickaxe',
    'allthemodium:allthemodium_axe',
    'allthemodium:allthemodium_shovel',
    'allthemodium:allthemodium_hoe',
    'allthemodium:allthemodium_helmet',
    'allthemodium:allthemodium_chestplate',
    'allthemodium:allthemodium_leggings',
    'allthemodium:allthemodium_boots',
    'allthemodium:allthemodium_carrot',
    'allthemodium:allthemodium_apple',
  ];

  event.registerDropsModifier((properties) => {
    let itemDrops = Array.from(properties.getItemDrops());
    let filtered = itemDrops.filter((drop) => {
      return !blacklist.includes(drop.item.id);
    });
    properties.setItemDrops(filtered);
  });
});
