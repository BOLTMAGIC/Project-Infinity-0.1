ServerEvents.recipes((event) => {
  //vibranium_ingot
  event.custom({
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
  });
  //energized_steel_block
  event.custom({
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
  });
  //blazing_crystal_block
  event.custom({
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
  });
  //niotic_crystal_block
  event.custom({
    type: 'powah:energizing',
    ingredients: [{ item: 'minecraft:diamond_block' }],
    energy: 2700000,
    result: {
      item: 'powah:niotic_crystal_block',
    },
  });

  //spirited_crystal_block
  event.custom({
    type: 'powah:energizing',
    ingredients: [{ item: 'minecraft:emerald_block' }],
    energy: 9000000,
    result: {
      item: 'powah:spirited_crystal_block',
    },
  });

  //spirited_crystal_block
  event.custom({
    type: 'powah:energizing',
    ingredients: [{ tag: '#forge:storage_blocks/uranium' }],
    energy: 4500000,
    result: {
      item: 'powah:uraninite_block',
    },
  });

  //nitro_crystal_block
  event.custom({
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
  });

  //full_battery_nitro Dummy
  event.custom({
    type: 'powah:energizing',
    ingredients: [{ item: 'kubejs:empty_battery_nitro' }],
    energy: 2000000000,
    result: {
      item: 'kubejs:full_battery_nitro',
      count: 1,
    },
  });
});
