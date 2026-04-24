//String Mesh --> Dust
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:bone_meal': 0.025,
    'minecraft:iron_nugget': 0.01,
    'minecraft:gold_nugget': 0.0001,
    'minecraft:redstone': 0.025,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'exdeorum:dust' },
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

//Flint Mesh --> Dust
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:glowstone_dust': 0.05,
    'minecraft:gunpowder': 0.15,
    'minecraft:redstone': 0.05,
    'enderio:grains_of_infinity': 0.01,
    'minecraft:bone_meal': 0.1,
    'ae2:certus_quartz_dust': 0.05,
    'ae2:sky_dust': 0.05,
    'minecraft:iron_nugget': 0.02,
    'minecraft:gold_nugget': 0.001,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'exdeorum:dust' },
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

//Iron Mesh --> Dust
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:glowstone_dust': 0.15,
    'minecraft:gunpowder': 0.25,
    'minecraft:redstone': 0.15,
    'enderio:grains_of_infinity': 0.08,
    'minecraft:bone_meal': 0.2,
    'ae2:certus_quartz_dust': 0.1,
    'ae2:sky_dust': 0.1,
    'minecraft:iron_nugget': 0.1,
    'minecraft:gold_nugget': 0.01,
    'minecraft:blaze_powder': 0.05,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'exdeorum:dust' },
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

//Golden Mesh --> Dust
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:glowstone_dust': 0.33,
    'minecraft:gunpowder': 0.4,
    'minecraft:redstone': 0.27,
    'enderio:grains_of_infinity': 0.15,
    'minecraft:bone_meal': 0.45,
    'ae2:certus_quartz_dust': 0.25,
    'ae2:sky_dust': 0.25,
    'minecraft:iron_nugget': 0.2,
    'minecraft:gold_nugget': 0.1,
    'minecraft:blaze_powder': 0.15,
    'dimensionalpocketsii:dimensional_shard': 0.04,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'exdeorum:dust' },
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

//Diamond Mesh --> Dust
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:glowstone_dust': 0.5,
    'minecraft:gunpowder': 0.5,
    'minecraft:redstone': 0.5,
    'enderio:grains_of_infinity': 0.25,
    'minecraft:bone_meal': 0.55,
    'ae2:certus_quartz_dust': 0.35,
    'ae2:sky_dust': 0.35,
    'minecraft:iron_nugget': 0.25,
    'minecraft:gold_nugget': 0.15,
    'minecraft:blaze_powder': 0.2,
    'rftoolsbase:dimensionalshard': 0.1,
    'dimensionalpocketsii:dimensional_shard': 0.1,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'exdeorum:dust' },
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

//Netherite Mesh --> Dust
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:glowstone_dust': 0.75,
    'minecraft:gunpowder': 0.5,
    'minecraft:redstone': 0.75,
    'enderio:grains_of_infinity': 0.33,
    'minecraft:bone_meal': 0.75,
    'ae2:certus_quartz_dust': 0.75,
    'ae2:sky_dust': 0.75,
    'minecraft:iron_nugget': 0.33,
    'minecraft:gold_nugget': 0.23,
    'minecraft:blaze_powder': 0.35,
    'rftoolsbase:dimensionalshard': 0.2,
    'dimensionalpocketsii:dimensional_shard': 0.2,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'exdeorum:dust' },
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

//Allthemodium Mesh --> Dust
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:glowstone_dust': 0.8,
    'minecraft:gunpowder': 0.65,
    'minecraft:redstone': 0.8,
    'enderio:grains_of_infinity': 0.5,
    'minecraft:bone_meal': 0.8,
    'ae2:certus_quartz_dust': 0.8,
    'ae2:sky_dust': 0.8,
    'minecraft:iron_nugget': 0.4,
    'minecraft:gold_nugget': 0.3,
    'minecraft:blaze_powder': 0.45,
    'rftoolsbase:dimensionalshard': 0.25,
    'dimensionalpocketsii:dimensional_shard': 0.25,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'exdeorum:dust' },
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

//Vibranium Mesh --> Dust
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:glowstone_dust': 0.85,
    'minecraft:gunpowder': 0.75,
    'minecraft:redstone': 0.85,
    'enderio:grains_of_infinity': 0.65,
    'minecraft:bone_meal': 0.85,
    'ae2:certus_quartz_dust': 0.85,
    'ae2:sky_dust': 0.85,
    'minecraft:iron_nugget': 0.5,
    'minecraft:gold_nugget': 0.4,
    'minecraft:blaze_powder': 0.55,
    'rftoolsbase:dimensionalshard': 0.35,
    'dimensionalpocketsii:dimensional_shard': 0.35,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'exdeorum:dust' },
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
