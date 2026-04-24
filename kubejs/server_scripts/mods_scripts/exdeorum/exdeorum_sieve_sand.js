//String Mesh --> Sand
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:sea_pickle': 0.1,
    'minecraft:dead_bush': 0.2,
    'minecraft:raw_gold': 0.0,
    'minecraft:lapis_lazuli': 0.07,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'minecraft:sand' },
      mesh: `exdeorum:string_mesh`,
      result: drops,
      result_amount: {
        type: 'minecraft:binomial',
        n: 1.0,
        p: base_chance,
      },
    });
  });
});

//Flint Mesh --> Sand
ServerEvents.recipes((event) => {
  const drops = {
    'ae2:charged_certus_quartz_crystal': 0.025,
    'ae2:certus_quartz_crystal': 0.05,
    'minecraft:prismarine_shard': 0.001,
    'minecraft:prismarine_crystals': 0.001,
    'minecraft:sea_pickle': 0.2,
    'minecraft:dead_bush': 0.4,
    'minecraft:raw_gold': 0.05,
    'minecraft:lapis_lazuli': 0.15,
    'thermal:sulfur': 0.05,
    'thermal:niter': 0.05,
    'thermal:cinnabar': 0.05,
    'thermal:apatite': 0.05,
    'thermal:ruby': 0.05,
    'thermal:sapphire': 0.05,
    'mekanism:fluorite_gem': 0.05,
    'mysticalagriculture:inferium_essence': 0.005,
    'exdeorum:gold_ore_chunk': 0.05,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'minecraft:sand' },
      mesh: `exdeorum:flint_mesh`,
      result: drops,
      result_amount: {
        type: 'minecraft:binomial',
        n: 1.0,
        p: base_chance,
      },
    });
  });
});

//Iron Mesh --> Sand
ServerEvents.recipes((event) => {
  const drops = {
    'ae2:charged_certus_quartz_crystal': 0.05,
    'ae2:certus_quartz_crystal': 0.1,
    'minecraft:prismarine_shard': 0.01,
    'minecraft:prismarine_crystals': 0.01,
    'minecraft:raw_gold': 0.1,
    'minecraft:lapis_lazuli': 0.25,
    'thermal:sulfur': 0.1,
    'thermal:niter': 0.1,
    'thermal:cinnabar': 0.1,
    'thermal:apatite': 0.1,
    'thermal:ruby': 0.1,
    'thermal:sapphire': 0.1,
    'mekanism:fluorite_gem': 0.1,
    'mysticalagriculture:inferium_essence': 0.01,
    'exdeorum:gold_ore_chunk': 0.1,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'minecraft:sand' },
      mesh: `exdeorum:iron_mesh`,
      result: drops,
      result_amount: {
        type: 'minecraft:binomial',
        n: 1.0,
        p: base_chance,
      },
    });
  });
});

//Golden Mesh --> Sand
ServerEvents.recipes((event) => {
  const drops = {
    'ae2:charged_certus_quartz_crystal': 0.09,
    'ae2:certus_quartz_crystal': 0.18,
    'minecraft:prismarine_shard': 0.05,
    'minecraft:prismarine_crystals': 0.05,
    'minecraft:raw_gold': 0.2,
    'minecraft:lapis_lazuli': 0.3,
    'thermal:sulfur': 0.125,
    'thermal:niter': 0.125,
    'thermal:cinnabar': 0.125,
    'thermal:apatite': 0.125,
    'thermal:ruby': 0.125,
    'thermal:sapphire': 0.125,
    'mekanism:fluorite_gem': 0.125,
    'mysticalagriculture:inferium_essence': 0.05,
    'exdeorum:gold_ore_chunk': 0.2,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'minecraft:sand' },
      mesh: `exdeorum:golden_mesh`,
      result: drops,
      result_amount: {
        type: 'minecraft:binomial',
        n: 1.0,
        p: base_chance,
      },
    });
  });
});

//Diamond Mesh --> Sand
ServerEvents.recipes((event) => {
  const drops = {
    'ae2:charged_certus_quartz_crystal': 0.125,
    'ae2:certus_quartz_crystal': 0.25,
    'minecraft:prismarine_shard': 0.125,
    'minecraft:prismarine_crystals': 0.125,
    'minecraft:raw_gold': 0.25,
    'minecraft:lapis_lazuli': 0.4,
    'mysticalagriculture:inferium_essence': 0.1,
    'exdeorum:gold_ore_chunk': 0.25,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'minecraft:sand' },
      mesh: `exdeorum:diamond_mesh`,
      result: drops,
      result_amount: {
        type: 'minecraft:binomial',
        n: 1.0,
        p: base_chance,
      },
    });
  });
});

//Netherite Mesh --> Sand
ServerEvents.recipes((event) => {
  const drops = {
    'ae2:charged_certus_quartz_crystal': 0.15,
    'ae2:certus_quartz_crystal': 0.3,
    'minecraft:prismarine_shard': 0.2,
    'minecraft:prismarine_crystals': 0.2,
    'minecraft:raw_gold': 0.35,
    'minecraft:lapis_lazuli': 0.5,
    'mysticalagriculture:inferium_essence': 0.15,
    'exdeorum:gold_ore_chunk': 0.35,
    'allthemodium:allthemodium_nugget': 0.000001,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'minecraft:sand' },
      mesh: `exdeorum:netherite_mesh`,
      result: drops,
      result_amount: {
        type: 'minecraft:binomial',
        n: 1.0,
        p: base_chance,
      },
    });
  });
});

//Allthemodium Mesh --> Sand
ServerEvents.recipes((event) => {
  const drops = {
    'ae2:charged_certus_quartz_crystal': 0.25,
    'ae2:certus_quartz_crystal': 0.4,
    'minecraft:prismarine_shard': 0.3,
    'minecraft:prismarine_crystals': 0.3,
    'minecraft:raw_gold': 0.45,
    'minecraft:lapis_lazuli': 0.65,
    'mysticalagriculture:inferium_essence': 0.25,
    'exdeorum:gold_ore_chunk': 0.45,
    'allthemodium:allthemodium_nugget': 0.00025,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'minecraft:sand' },
      mesh: `kubejs:allthemodium_mesh`,
      result: drops,
      result_amount: {
        type: 'minecraft:binomial',
        n: 1.0,
        p: base_chance,
      },
    });
  });
});

//Vibranium Mesh --> Sand
ServerEvents.recipes((event) => {
  const drops = {
    'ae2:charged_certus_quartz_crystal': 0.35,
    'ae2:certus_quartz_crystal': 0.5,
    'minecraft:prismarine_shard': 0.4,
    'minecraft:prismarine_crystals': 0.35,
    'minecraft:raw_gold': 0.5,
    'minecraft:lapis_lazuli': 0.75,
    'mysticalagriculture:inferium_essence': 0.33,
    'exdeorum:gold_ore_chunk': 0.5,
    'allthemodium:allthemodium_nugget': 0.001,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'minecraft:sand' },
      mesh: `kubejs:vibranium_mesh`,
      result: drops,
      result_amount: {
        type: 'minecraft:binomial',
        n: 1.0,
        p: base_chance,
      },
    });
  });
});
