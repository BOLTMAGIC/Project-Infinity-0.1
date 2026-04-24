//String Mesh --> Crushed End Stone
ServerEvents.recipes((event) => {
  const drops = {
    'mysticalagriculture:prosperity_shard': 0.01,
    'mysticalagriculture:inferium_essence': 0.01,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'exdeorum:crushed_end_stone' },
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

//Flint Mesh --> Crushed End Stone
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:ender_pearl': 0.05,
    'minecraft:ender_eye': 0.001,
    'minecraft:chorus_fruit': 0.0002,
    'minecraft:chorus_flower': 0.0002,
    'mysticalagriculture:prosperity_shard': 0.05,
    'mysticalagriculture:inferium_essence': 0.05,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'exdeorum:crushed_end_stone' },
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

//Iron Mesh --> Crushed End Stone
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:ender_pearl': 0.1,
    'minecraft:ender_eye': 0.005,
    'minecraft:chorus_fruit': 0.001,
    'minecraft:chorus_flower': 0.001,
    'minecraft:echo_shard': 0.001,
    'mysticalagriculture:prosperity_shard': 0.1,
    'mysticalagriculture:inferium_essence': 0.1,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'exdeorum:crushed_end_stone' },
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

//Golden Mesh --> Crushed End Stone
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:ender_pearl': 0.15,
    'minecraft:ender_eye': 0.01,
    'minecraft:chorus_fruit': 0.008,
    'minecraft:chorus_flower': 0.008,
    'minecraft:echo_shard': 0.008,
    'mysticalagriculture:prosperity_shard': 0.2,
    'mysticalagriculture:inferium_essence': 0.2,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'exdeorum:crushed_end_stone' },
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

//Diamond Mesh --> Crushed End Stone
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:ender_pearl': 0.25,
    'minecraft:ender_eye': 0.02,
    'minecraft:chorus_fruit': 0.015,
    'minecraft:chorus_flower': 0.015,
    'minecraft:echo_shard': 0.015,
    'minecraft:sculk_shrieker': 0.001,
    'exdeorum:sculk_core': 0.001,
    'mysticalagriculture:prosperity_shard': 0.33,
    'mysticalagriculture:inferium_essence': 0.33,
    'draconicevolution:draconium_dust': 0.02,
    'kubejs:azure_silver_ore_chunk': 0.15,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'exdeorum:crushed_end_stone' },
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

//Netherite Mesh --> Crushed End Stone
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:ender_pearl': 0.4,
    'minecraft:ender_eye': 0.1,
    'minecraft:chorus_fruit': 0.05,
    'minecraft:chorus_flower': 0.05,
    'minecraft:echo_shard': 0.035,
    'minecraft:sculk_shrieker': 0.01,
    'exdeorum:sculk_core': 0.01,
    'mysticalagriculture:prosperity_shard': 0.4,
    'mysticalagriculture:inferium_essence': 0.4,
    'draconicevolution:draconium_dust': 0.1,
    'kubejs:azure_silver_ore_chunk': 0.33,
    'allthemodium:vibranium_nugget': 0.000001,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'exdeorum:crushed_end_stone' },
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

//Allthemodium Mesh --> Crushed End Stone
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:ender_pearl': 0.5,
    'minecraft:ender_eye': 0.15,
    'minecraft:chorus_fruit': 0.08,
    'minecraft:chorus_flower': 0.08,
    'minecraft:echo_shard': 0.045,
    'minecraft:sculk_shrieker': 0.02,
    'exdeorum:sculk_core': 0.02,
    'mysticalagriculture:prosperity_shard': 0.5,
    'mysticalagriculture:inferium_essence': 0.5,
    'draconicevolution:draconium_dust': 0.15,
    'kubejs:azure_silver_ore_chunk': 0.45,
    'allthemodium:vibranium_nugget': 0.00025,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'exdeorum:crushed_end_stone' },
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

//Vibranium Mesh --> Crushed End Stone
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:ender_pearl': 0.65,
    'minecraft:ender_eye': 0.25,
    'minecraft:chorus_fruit': 0.12,
    'minecraft:chorus_flower': 0.12,
    'minecraft:echo_shard': 0.08,
    'minecraft:sculk_shrieker': 0.05,
    'exdeorum:sculk_core': 0.05,
    'mysticalagriculture:prosperity_shard': 0.6,
    'mysticalagriculture:inferium_essence': 0.6,
    'draconicevolution:draconium_dust': 0.25,
    'kubejs:azure_silver_ore_chunk': 0.65,
    'allthemodium:vibranium_nugget': 0.001,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'exdeorum:crushed_end_stone' },
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
