ServerEvents.recipes((event) => {
  //mystical crafting seed
  create3x3(event, 'kubejs:tier1_crafting_seed', [
    'mysticalagriculture:prosperity_shard',
    'mysticalagriculture:inferium_essence',
    'mysticalagriculture:prosperity_shard',
    'mysticalagriculture:inferium_essence',
    'mysticalagriculture:prosperity_seed_base',
    'mysticalagriculture:inferium_essence',
    'mysticalagriculture:prosperity_shard',
    'mysticalagriculture:inferium_essence',
    'mysticalagriculture:prosperity_shard',
  ]);

  create3x3(event, 'kubejs:tier2_crafting_seed', [
    'mysticalagriculture:prosperity_shard',
    'mysticalagriculture:prudentium_essence',
    'mysticalagriculture:prosperity_shard',
    'mysticalagriculture:prudentium_essence',
    'kubejs:tier1_crafting_seed',
    'mysticalagriculture:prudentium_essence',
    'mysticalagriculture:prosperity_shard',
    'mysticalagriculture:prudentium_essence',
    'mysticalagriculture:prosperity_shard',
  ]);

  create3x3(event, 'kubejs:tier3_crafting_seed', [
    'mysticalagriculture:prosperity_shard',
    'mysticalagriculture:tertium_essence',
    'mysticalagriculture:prosperity_shard',
    'mysticalagriculture:tertium_essence',
    'kubejs:tier2_crafting_seed',
    'mysticalagriculture:tertium_essence',
    'mysticalagriculture:prosperity_shard',
    'mysticalagriculture:tertium_essence',
    'mysticalagriculture:prosperity_shard',
  ]);

  create3x3(event, 'kubejs:tier4_crafting_seed', [
    'mysticalagriculture:prosperity_shard',
    'mysticalagriculture:imperium_essence',
    'mysticalagriculture:prosperity_shard',
    'mysticalagriculture:imperium_essence',
    'kubejs:tier3_crafting_seed',
    'mysticalagriculture:imperium_essence',
    'mysticalagriculture:prosperity_shard',
    'mysticalagriculture:imperium_essence',
    'mysticalagriculture:prosperity_shard',
  ]);

  create3x3(event, 'kubejs:tier5_crafting_seed', [
    'mysticalagriculture:prosperity_shard',
    'mysticalagriculture:supremium_essence',
    'mysticalagriculture:prosperity_shard',
    'mysticalagriculture:supremium_essence',
    'kubejs:tier4_crafting_seed',
    'mysticalagriculture:supremium_essence',
    'mysticalagriculture:prosperity_shard',
    'mysticalagriculture:supremium_essence',
    'mysticalagriculture:prosperity_shard',
  ]);

  create3x3(event, 'kubejs:tier6_crafting_seed', [
    'mysticalagriculture:prosperity_shard',
    'mysticalagradditions:insanium_essence',
    'mysticalagriculture:prosperity_shard',
    'mysticalagradditions:insanium_essence',
    'kubejs:tier5_crafting_seed',
    'mysticalagradditions:insanium_essence',
    'mysticalagriculture:prosperity_shard',
    'mysticalagradditions:insanium_essence',
    'mysticalagriculture:prosperity_shard',
  ]);

  //mystical seed crafting tier1
  seedtiercrafting1(event, 'mysticalagriculture:stone_seeds', [
    'minecraft:stone',
  ]);

  seedtiercrafting1(event, 'mysticalagriculture:dirt_seeds', [
    'minecraft:dirt',
  ]);

  seedtiercrafting1(event, 'mysticalagriculture:wood_seeds', [
    'minecraft:oak_log',
  ]);

  seedtiercrafting1(event, 'mysticalagriculture:ice_seeds', ['minecraft:ice']);

  seedtiercrafting1(event, 'mysticalagriculture:deepslate_seeds', [
    'minecraft:deepslate',
  ]);

  seedtiercrafting1(event, 'mysticalagriculture:air_seeds', [
    'mysticalagriculture:air_agglomeratio',
  ]);

  seedtiercrafting1(event, 'mysticalagriculture:earth_seeds', [
    'mysticalagriculture:earth_agglomeratio',
  ]);

  seedtiercrafting1(event, 'mysticalagriculture:water_seeds', [
    'mysticalagriculture:water_agglomeratio',
  ]);

  seedtiercrafting1(event, 'mysticalagriculture:fire_seeds', [
    'mysticalagriculture:fire_agglomeratio',
  ]);

  //mystical seed crafting tier2
  seedtiercrafting2(event, 'mysticalagriculture:niter_seeds', [
    'thermal:niter',
  ]);

  seedtiercrafting2(event, 'mysticalagriculture:plastic_seeds', [
    'industrialforegoing:plastic',
  ]);

  seedtiercrafting2(event, 'mysticalagriculture:nature_seeds', [
    'mysticalagriculture:nature_agglomeratio',
  ]);

  seedtiercrafting2(event, 'mysticalagriculture:coal_seeds', [
    '#minecraft:coals',
  ]);

  seedtiercrafting2(event, 'mysticalagriculture:nether_seeds', [
    'mysticalagriculture:nether_agglomeratio',
  ]);

  seedtiercrafting2(event, 'mysticalagriculture:dye_seeds', [
    'mysticalagriculture:dye_agglomeratio',
  ]);

  seedtiercrafting2(event, 'mysticalagriculture:coral_seeds', [
    'mysticalagriculture:coral_agglomeratio',
  ]);

  seedtiercrafting2(event, 'mysticalagriculture:honey_seeds', [
    'mysticalagriculture:honey_agglomeratio',
  ]);

  seedtiercrafting2(event, 'mysticalagriculture:amethyst_seeds', [
    'minecraft:amethyst_shard',
  ]);

  seedtiercrafting2(event, 'mysticalagriculture:rubber_seeds', [
    '#forge:rubber',
  ]);

  seedtiercrafting2(event, 'mysticalagriculture:silicon_seeds', [
    '#forge:silicon',
  ]);

  seedtiercrafting2(event, 'mysticalagriculture:aluminum_seeds', [
    '#forge:ingots/aluminum',
  ]);

  seedtiercrafting2(event, 'mysticalagriculture:sulfur_seeds', [
    'thermal:sulfur',
  ]);

  seedtiercrafting2(event, 'mysticalagriculture:apatite_seeds', [
    'thermal:apatite',
  ]);

  seedtiercrafting2(event, 'mysticalagriculture:grains_of_infinity_seeds', [
    'enderio:grains_of_infinity',
  ]);

  seedtiercrafting2(event, 'mysticalagriculture:mystical_flower_seeds', [
    'mysticalagriculture:mystical_flower_agglomeratio',
  ]);

  seedtiercrafting2(event, 'mysticalagriculture:basalt_seeds', [
    '#forge:stone/basalt',
  ]);

  seedtiercrafting2(event, 'mysticalagriculture:marble_seeds', [
    '#forge:stone/marble',
  ]);

  seedtiercrafting2(event, 'mysticalagriculture:menril_seeds', [
    'integrateddynamics:crystalized_menril_block',
  ]);

  seedtiermobcrafting2(event, 'mysticalagriculture:pig_seeds', [
    Item.of(
      'mysticalagriculture:soul_jar',
      '{Souls:8.0d,Type:"mysticalagriculture:pig"}'
    ),
  ]);

  seedtiermobcrafting2(event, 'mysticalagriculture:chicken_seeds', [
    Item.of(
      'mysticalagriculture:soul_jar',
      '{Souls:8.0d,Type:"mysticalagriculture:chicken"}'
    ),
  ]);

  seedtiermobcrafting2(event, 'mysticalagriculture:cow_seeds', [
    Item.of(
      'mysticalagriculture:soul_jar',
      '{Souls:8.0d,Type:"mysticalagriculture:cow"}'
    ),
  ]);

  seedtiermobcrafting2(event, 'mysticalagriculture:sheep_seeds', [
    Item.of(
      'mysticalagriculture:soul_jar',
      '{Souls:8.0d,Type:"mysticalagriculture:sheep"}'
    ),
  ]);

  seedtiermobcrafting2(event, 'mysticalagriculture:squid_seeds', [
    Item.of(
      'mysticalagriculture:soul_jar',
      '{Souls:6.0d,Type:"mysticalagriculture:squid"}'
    ),
  ]);

  seedtiermobcrafting2(event, 'mysticalagriculture:fish_seeds', [
    Item.of(
      'mysticalagriculture:soul_jar',
      '{Souls:6.0d,Type:"mysticalagriculture:fish"}'
    ),
  ]);

  seedtiermobcrafting2(event, 'mysticalagriculture:slime_seeds', [
    Item.of(
      'mysticalagriculture:soul_jar',
      '{Souls:12.0d,Type:"mysticalagriculture:slime"}'
    ),
  ]);

  seedtiermobcrafting2(event, 'mysticalagriculture:turtle_seeds', [
    Item.of(
      'mysticalagriculture:soul_jar',
      '{Souls:6.0d,Type:"mysticalagriculture:turtle"}'
    ),
  ]);
});
