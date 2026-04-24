//String Mesh --> Crushed Blackstone
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:gunpowder': 0.05,
    'minecraft:black_dye': 0.1,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'exdeorum:crushed_blackstone' },
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

//Flint Mesh --> Crushed Blackstone
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:gold_nugget': 0.0125,
    'minecraft:gunpowder': 0.1,
    'minecraft:black_dye': 0.2,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'exdeorum:crushed_blackstone' },
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

//Iron Mesh --> Crushed Blackstone
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:gold_nugget': 0.02,
    'minecraft:gunpowder': 0.15,
    'minecraft:black_dye': 0.3,
    'minecraft:ancient_debris': 0.00001,
    'minecraft:magma_cream': 0.05,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'exdeorum:crushed_blackstone' },
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

//Golden Mesh --> Crushed Blackstone
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:gold_nugget': 0.08,
    'minecraft:gunpowder': 0.25,
    'minecraft:black_dye': 0.4,
    'minecraft:ancient_debris': 0.0001,
    'minecraft:magma_cream': 0.1,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'exdeorum:crushed_blackstone' },
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

//Diamond Mesh --> Crushed Blackstone
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:gold_nugget': 0.15,
    'minecraft:gunpowder': 0.4,
    'minecraft:black_dye': 0.6,
    'minecraft:ancient_debris': 0.001,
    'minecraft:magma_cream': 0.15,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'exdeorum:crushed_blackstone' },
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

//Netherite Mesh --> Crushed Blackstone
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:gold_nugget': 0.33,
    'minecraft:gunpowder': 0.6,
    'minecraft:black_dye': 0.75,
    'minecraft:ancient_debris': 0.01,
    'minecraft:magma_cream': 0.25,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'exdeorum:crushed_blackstone' },
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

//Allthemodium Mesh --> Crushed Blackstone
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:gold_nugget': 0.4,
    'minecraft:gunpowder': 0.7,
    'minecraft:black_dye': 0.8,
    'minecraft:ancient_debris': 0.05,
    'minecraft:magma_cream': 0.3,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'exdeorum:crushed_blackstone' },
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

//Vibranium Mesh --> Crushed Blackstone
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:gold_nugget': 0.5,
    'minecraft:gunpowder': 0.75,
    'minecraft:black_dye': 0.85,
    'minecraft:ancient_debris': 0.1,
    'minecraft:magma_cream': 0.35,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'exdeorum:crushed_blackstone' },
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
