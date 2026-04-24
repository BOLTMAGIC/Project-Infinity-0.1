//String Mesh --> Gravel
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:coal': 0.125,
    'minecraft:flint': 0.2,
    'exdeorum:iron_ore_chunk': 0.15,
    'exdeorum:stone_pebble': 0.2,
    'minecraft:raw_iron': 0.05,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'minecraft:gravel' },
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

//Flint Mesh --> Gravel
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:coal': 0.25,
    'minecraft:flint': 0.3,
    'exdeorum:iron_ore_chunk': 0.33,
    'exdeorum:stone_pebble': 0.28,
    'exdeorum:deepslate_pebble': 0.28,
    'minecraft:raw_iron': 0.1,
    'exdeorum:copper_ore_chunk': 0.05,
    'exdeorum:gold_ore_chunk': 0.05,
    'exdeorum:aluminum_ore_chunk': 0.05,
    'exdeorum:tin_ore_chunk': 0.05,
    'exdeorum:silver_ore_chunk': 0.05,
    'exdeorum:lead_ore_chunk': 0.05,
    'exdeorum:nickel_ore_chunk': 0.05,
    'exdeorum:osmium_ore_chunk': 0.05,
    'exdeorum:zinc_ore_chunk': 0.05,
    'minecraft:diamond': 0.001,
    'minecraft:emerald': 0.001,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'minecraft:gravel' },
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

//Iron Mesh --> Gravel
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:coal': 0.35,
    'minecraft:flint': 0.23,
    'exdeorum:iron_ore_chunk': 0.65,
    'exdeorum:stone_pebble': 0.34,
    'exdeorum:deepslate_pebble': 0.34,
    'minecraft:raw_iron': 0.15,
    'exdeorum:copper_ore_chunk': 0.1,
    'exdeorum:gold_ore_chunk': 0.1,
    'exdeorum:aluminum_ore_chunk': 0.1,
    'exdeorum:tin_ore_chunk': 0.1,
    'exdeorum:silver_ore_chunk': 0.1,
    'exdeorum:lead_ore_chunk': 0.1,
    'exdeorum:nickel_ore_chunk': 0.1,
    'exdeorum:osmium_ore_chunk': 0.1,
    'exdeorum:zinc_ore_chunk': 0.1,
    'minecraft:diamond': 0.01,
    'minecraft:emerald': 0.01,
    'minecraft:amethyst_shard': 0.00008,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'minecraft:gravel' },
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

//Golden Mesh --> Gravel
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:coal': 0.28,
    'minecraft:flint': 0.1,
    'exdeorum:iron_ore_chunk': 0.85,
    'exdeorum:stone_pebble': 0.08,
    'exdeorum:copper_ore_chunk': 0.25,
    'exdeorum:gold_ore_chunk': 0.45,
    'exdeorum:aluminum_ore_chunk': 0.25,
    'exdeorum:tin_ore_chunk': 0.25,
    'exdeorum:silver_ore_chunk': 0.25,
    'exdeorum:lead_ore_chunk': 0.25,
    'exdeorum:nickel_ore_chunk': 0.25,
    'exdeorum:osmium_ore_chunk': 0.25,
    'exdeorum:zinc_ore_chunk': 0.25,
    'minecraft:raw_iron': 0.2,
    'minecraft:diamond': 0.1,
    'minecraft:emerald': 0.1,
    'minecraft:amethyst_shard': 0.0015,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'minecraft:gravel' },
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

//Diamond Mesh --> Gravel
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:coal': 0.25,
    'minecraft:flint': 0.05,
    'exdeorum:iron_ore_chunk': 0.95,
    'exdeorum:stone_pebble': 0.02,
    'exdeorum:copper_ore_chunk': 0.43,
    'exdeorum:gold_ore_chunk': 0.43,
    'exdeorum:aluminum_ore_chunk': 0.43,
    'exdeorum:tin_ore_chunk': 0.43,
    'exdeorum:silver_ore_chunk': 0.43,
    'exdeorum:lead_ore_chunk': 0.43,
    'exdeorum:nickel_ore_chunk': 0.43,
    'exdeorum:osmium_ore_chunk': 0.43,
    'exdeorum:zinc_ore_chunk': 0.43,
    'minecraft:raw_iron': 0.3,
    'minecraft:diamond': 0.25,
    'minecraft:emerald': 0.25,
    'minecraft:amethyst_shard': 0.015,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'minecraft:gravel' },
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

//Netherite Mesh --> Gravel
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:coal': 0.3,
    'minecraft:flint': 0.01,
    'exdeorum:iron_ore_chunk': 1,
    'exdeorum:copper_ore_chunk': 0.4,
    'exdeorum:gold_ore_chunk': 0.4,
    'exdeorum:aluminum_ore_chunk': 0.4,
    'exdeorum:tin_ore_chunk': 0.4,
    'exdeorum:silver_ore_chunk': 0.4,
    'exdeorum:lead_ore_chunk': 0.4,
    'exdeorum:nickel_ore_chunk': 0.4,
    'exdeorum:osmium_ore_chunk': 0.4,
    'exdeorum:zinc_ore_chunk': 0.4,
    'minecraft:raw_iron': 0.45,
    'minecraft:diamond': 0.33,
    'minecraft:emerald': 0.33,
    'minecraft:amethyst_shard': 0.02,
  };

  Object.entries(drops).forEach(([item, base_chance]) => {
    const resultAmount =
      item === 'exdeorum:iron_ore_chunk'
        ? { min: 1, max: 2 }
        : { type: 'minecraft:binomial', n: 1.0, p: base_chance };

    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'minecraft:gravel' },
      mesh: `exdeorum:netherite_mesh`,
      result: item,
      result_amount: resultAmount,
    });
  });
});

//Allthemodium Mesh --> Gravel
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:coal': 0.5,
    'exdeorum:iron_ore_chunk': 1.0,
    'exdeorum:copper_ore_chunk': 0.5,
    'exdeorum:gold_ore_chunk': 0.5,
    'exdeorum:aluminum_ore_chunk': 0.5,
    'exdeorum:tin_ore_chunk': 0.5,
    'exdeorum:silver_ore_chunk': 0.5,
    'exdeorum:lead_ore_chunk': 0.5,
    'exdeorum:nickel_ore_chunk': 0.5,
    'exdeorum:osmium_ore_chunk': 0.5,
    'exdeorum:zinc_ore_chunk': 0.5,
    'minecraft:raw_iron': 0.5,
    'minecraft:diamond': 0.4,
    'minecraft:emerald': 0.4,
    'minecraft:amethyst_shard': 0.04,
  };

  Object.entries(drops).forEach(([item, base_chance]) => {
    const resultAmount =
      item === 'exdeorum:iron_ore_chunk'
        ? { min: 2, max: 3 }
        : { type: 'minecraft:binomial', n: 1.0, p: base_chance };

    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'minecraft:gravel' },
      mesh: `kubejs:allthemodium_mesh`,
      result: item,
      result_amount: resultAmount,
    });
  });
});

//Vibranium Mesh --> Gravel
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:coal': 0.75,
    'exdeorum:iron_ore_chunk': 1.0,
    'exdeorum:copper_ore_chunk': 0.75,
    'exdeorum:gold_ore_chunk': 0.75,
    'exdeorum:aluminum_ore_chunk': 0.75,
    'exdeorum:tin_ore_chunk': 0.75,
    'exdeorum:silver_ore_chunk': 0.75,
    'exdeorum:lead_ore_chunk': 0.75,
    'exdeorum:nickel_ore_chunk': 0.75,
    'exdeorum:osmium_ore_chunk': 0.75,
    'exdeorum:zinc_ore_chunk': 0.75,
    'minecraft:raw_iron': 0.6,
    'minecraft:diamond': 0.5,
    'minecraft:emerald': 0.5,
    'minecraft:amethyst_shard': 0.1,
  };

  Object.entries(drops).forEach(([item, base_chance]) => {
    const resultAmount =
      item === 'exdeorum:iron_ore_chunk'
        ? { min: 2, max: 5 }
        : { type: 'minecraft:binomial', n: 1.0, p: base_chance };

    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'minecraft:gravel' },
      mesh: `kubejs:vibranium_mesh`,
      result: item,
      result_amount: resultAmount,
    });
  });
});
