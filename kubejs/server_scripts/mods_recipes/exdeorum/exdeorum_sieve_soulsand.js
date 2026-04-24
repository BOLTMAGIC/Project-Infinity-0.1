//String Mesh --> Soul Sand
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:bone': 0.1,
    'minecraft:quartz': 0.1,
    'minecraft:gunpowder': 0.15,
    'minecraft:glowstone_dust': 0.1,
    'minecraft:nether_wart': 0.025,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'minecraft:soul_sand' },
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

//Flint Mesh --> Soul Sand
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:bone': 0.25,
    'minecraft:quartz': 0.2,
    'minecraft:gunpowder': 0.25,
    'minecraft:glowstone_dust': 0.25,
    'minecraft:nether_wart': 0.08,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'minecraft:soul_sand' },
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

//Iron Mesh --> Soul Sand
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:bone': 0.35,
    'minecraft:quartz': 0.3,
    'minecraft:gunpowder': 0.35,
    'minecraft:glowstone_dust': 0.35,
    'minecraft:nether_wart': 0.15,
    'minecraft:ghast_tear': 0.01,
    'enderio:soularium_nugget': 0.0001,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'minecraft:soul_sand' },
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

//Golden Mesh --> Soul Sand
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:bone': 0.5,
    'minecraft:quartz': 0.5,
    'minecraft:gunpowder': 0.5,
    'minecraft:glowstone_dust': 0.5,
    'minecraft:nether_wart': 0.3,
    'minecraft:ghast_tear': 0.05,
    'enderio:soularium_nugget': 0.05,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'minecraft:soul_sand' },
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

//Diamond Mesh --> Soul Sand
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:bone': 0.65,
    'minecraft:quartz': 0.65,
    'minecraft:gunpowder': 0.65,
    'minecraft:glowstone_dust': 0.65,
    'minecraft:nether_wart': 0.45,
    'minecraft:ghast_tear': 0.1,
    'enderio:soularium_nugget': 0.1,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'minecraft:soul_sand' },
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

//Netherite Mesh --> Soul Sand
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:bone': 0.75,
    'minecraft:quartz': 0.75,
    'minecraft:gunpowder': 0.75,
    'minecraft:glowstone_dust': 0.75,
    'minecraft:nether_wart': 0.5,
    'minecraft:ghast_tear': 0.25,
    'enderio:soularium_nugget': 0.2,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'minecraft:soul_sand' },
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

//Allthemodium Mesh --> Soul Sand
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:bone': 0.8,
    'minecraft:quartz': 0.8,
    'minecraft:gunpowder': 0.8,
    'minecraft:glowstone_dust': 0.8,
    'minecraft:nether_wart': 0.66,
    'minecraft:ghast_tear': 0.33,
    'enderio:soularium_nugget': 0.25,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'minecraft:soul_sand' },
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

//Vibranium Mesh --> Soul Sand
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:bone': 1.0,
    'minecraft:quartz': 1.0,
    'minecraft:gunpowder': 1.0,
    'minecraft:glowstone_dust': 1.0,
    'minecraft:nether_wart': 0.75,
    'minecraft:ghast_tear': 0.5,
    'enderio:soularium_nugget': 0.33,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'minecraft:soul_sand' },
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
