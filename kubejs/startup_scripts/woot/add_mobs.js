WootStartupEvents.registerFactoryMob(
  'twilightforest:yeti',
  'minecraft:guardian',
  'twilightforest:skeleton_druid',
  'twilightforest:stable_ice_core',
  'twilightforest:troll',
  'born_in_chaos_v1:dark_vortex',
  'born_in_chaos_v1:restless_spirit',
  'outer_end:stalker',
  'twilightforest:wraith',
  'twilightforest:death_tome',
  'twilightforest:king_spider',
  'twilightforest:minotaur',
  'twilightforest:mist_wolf',
  'born_in_chaos_v1:bloody_gadfly',
  'born_in_chaos_v1:bonescaller',
  'born_in_chaos_v1:swarmer',
  'born_in_chaos_v1:spirit_guide',
  'born_in_chaos_v1:door_knight',
  'born_in_chaos_v1:fallen_chaos_knight',
  'born_in_chaos_v1:spiritof_chaos',
  'born_in_chaos_v1:krampus_henchman',
  'born_in_chaos_v1:mrs_pumpkin',
  'born_in_chaos_v1:mr_pumpkin',
  'born_in_chaos_v1:scarlet_persecutor',
  'born_in_chaos_v1:senor_pumpkin',
  'born_in_chaos_v1:siamese_skeletons',
  'born_in_chaos_v1:skeleton_demoman',
  'cataclysm:elite_draugr',
  (event) => {
    event.factoryMobPatcher().tier('tier_3').patch();
  });

WootStartupEvents.registerFactoryMob(
  'born_in_chaos_v1:nightmare_stalker',
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
  'cataclysm:the_leviathan',
  'cataclysm:kobolediator',
  'cataclysm:netherite_monstrosity',
  'cataclysm:scylla',
  'aether:valkyrie',
  'twilightforest:armored_giant',
  'twilightforest:carminite_golem',
  'twilightforest:giant_miner',
  'twilightforest:minoshroom',
  'twilightforest:carminite_ghastguard',
  'born_in_chaos_v1:dire_hound_leader',
  'born_in_chaos_v1:missioner',
  'born_in_chaos_v1:supreme_bonescaller',
  'born_in_chaos_v1:felsteed',
  'born_in_chaos_v1:infernal_spirit',
  'born_in_chaos_v1:skeleton_thrasher',
  'born_in_chaos_v1:lifestealer',
  'born_in_chaos_v1:mother_spider',
  'born_in_chaos_v1:pumpkin_bruiser',
  'born_in_chaos_v1:pumpkin_spirit',
  'born_in_chaos_v1:pumpkinhead',
  'born_in_chaos_v1:seared_spirit',
  'born_in_chaos_v1:skeleton_thrasher',
  'minecraft:iron_golem',
  'mutantmonsters:mutant_creeper',
  'mutantmonsters:mutant_enderman',
  'mutantmonsters:mutant_skeleton',
  'mutantmonsters:mutant_snow_golem',
  'mutantmonsters:mutant_zombie',
  'mutantmonsters:spider_pig',
  'botania:doppleganger',
  'aether:mimic',
  'aether:slider',
  'bosses_of_mass_destruction:lich',
  'bosses_of_mass_destruction:gauntlet',
  'cataclysm:the_prowler',
  'aether:sun_spirit',
  'aether:valkyrie_queen',
  (event) => {
    event.factoryMobPatcher().tier('tier_4').patch();
  });

WootStartupEvents.registerFactoryMob(
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
  'born_in_chaos_v1:lord_pumpkinhead',
  'botania:doppleganger',
  'cataclysm:ender_golem',
  'cataclysm:ancient_remnant',
  'cataclysm:the_harbinger',
  'cataclysm:maledictus',
  'minecraft:wither',
  'allthemodium:piglich',
  'minecraft:warden',
  'born_in_chaos_v1:krampus',
  'cataclysm:ender_guardian',
  'cataclysm:ignis',
(event) => {
  event.factoryMobPatcher().tier('tier_5').patch();
});

WootStartupEvents.registerFactoryMob("allthemodium:piglich", event => {
  const blacklist = [
    "allthemodium:allthemodium_sword",
    "allthemodium:allthemodium_pickaxe",
    "allthemodium:allthemodium_axe",
    "allthemodium:allthemodium_shovel",
    "allthemodium:allthemodium_hoe",
    "allthemodium:allthemodium_helmet",
    "allthemodium:allthemodium_chestplate",
    "allthemodium:allthemodium_leggings",
    "allthemodium:allthemodium_boots",
    "allthemodium:allthemodium_carrot",
    "allthemodium:allthemodium_apple"
  ];

  event.registerDropsModifier(properties => {
    let itemDrops = Array.from(properties.getItemDrops());

    let filtered = itemDrops.filter(drop => {
      return !blacklist.includes(drop.item.id);
    });

    properties.setItemDrops(filtered);
  });
});