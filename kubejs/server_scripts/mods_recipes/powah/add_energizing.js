ServerEvents.recipes((event) => {
  //vibranium_ingot
  event
    .custom({
      type: 'powah:energizing',
      ingredients: [
        { item: 'allthemodium:allthemodium_ingot' },
        { item: 'bloodmagic:life_essence_bucket' },
        { item: 'mysticalagradditions:insanium_essence' },
        { item: 'twilightforest:fiery_block' },
      ],
      energy: 100000,
      result: {
        item: 'allthemodium:vibranium_ingot',
      },
    })
    .id('kubejs:vibranium_ingot');
  //energized_steel_block
  event
    .custom({
      type: 'powah:energizing',
      ingredients: [
        { item: 'minecraft:iron_block' },
        { item: 'minecraft:gold_block' },
      ],
      energy: 90000,
      result: {
        item: 'powah:energized_steel_block',
        count: 2,
      },
    })
    .id('kubejs:energized_steel_block');
  //blazing_crystal_block
  event
    .custom({
      type: 'powah:energizing',
      ingredients: [
        { item: 'botania:blaze_block' },
        { item: 'botania:blaze_block' },
        { item: 'botania:blaze_block' },
        { item: 'botania:blaze_block' },
      ],
      energy: 810000,
      result: {
        item: 'powah:blazing_crystal_block',
        count: 4,
      },
    })
    .id('kubejs:blazing_crystal_block');
  //niotic_crystal_block
  event
    .custom({
      type: 'powah:energizing',
      ingredients: [{ item: 'minecraft:diamond_block' }],
      energy: 2700000,
      result: {
        item: 'powah:niotic_crystal_block',
      },
    })
    .id('kubejs:niotic_crystal_block');

  //spirited_crystal_block
  event
    .custom({
      type: 'powah:energizing',
      ingredients: [{ item: 'minecraft:emerald_block' }],
      energy: 9000000,
      result: {
        item: 'powah:spirited_crystal_block',
      },
    })
    .id('kubejs:spirited_crystal_block');

  //spirited_crystal_block
  event
    .custom({
      type: 'powah:energizing',
      ingredients: [{ tag: 'forge:storage_blocks/uranium' }],
      energy: 4500000,
      result: {
        item: 'powah:uraninite_block',
      },
    })
    .id('kubejs:uraninite_block');

  //nitro_crystal_block
  event
    .custom({
      type: 'powah:energizing',
      ingredients: [
        { item: 'extendedcrafting:nether_star_block' },
        { item: 'compressium:redstone_1' },
        { item: 'powah:blazing_crystal_block' },
        { item: 'powah:blazing_crystal_block' },
        { item: 'powah:blazing_crystal_block' },
        { item: 'powah:blazing_crystal_block' },
      ],
      energy: 100000000,
      result: {
        item: 'powah:nitro_crystal_block',
        count: 8,
      },
    })
    .id('kubejs:nitro_crystal_block');

  //full_battery_nitro Dummy
  event
    .custom({
      type: 'powah:energizing',
      ingredients: [{ item: 'kubejs:empty_battery_nitro' }],
      energy: 2000000000,
      result: {
        item: 'kubejs:full_battery_nitro',
        count: 1,
      },
    })
    .id('kubejs:full_battery_nitro');

  //Infinity 10
  event
    .custom({
      type: 'powah:energizing',
      ingredients: [
        { item: 'kubejs:infinity_9' },
        { item: 'kubejs:infinity_9' },
        { item: 'kubejs:infinity_9' },
        { item: 'avaritia:neutron_ingot' },
        { item: 'extendedcrafting:enhanced_redstone_ingot' },
        { item: 'kubejs:element_ingot' },
      ],
      energy: 2147483647,
      result: {
        item: 'kubejs:infinity_10',
        count: 1,
      },
    })
    .id('kubejs:infinity_10');
});
