//String Mesh --> Moss Block
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:glow_berries': 0.05,
    'minecraft:oak_sapling': 0.15,
    'minecraft:spruce_sapling': 0.15,
    'minecraft:birch_sapling': 0.15,
    'minecraft:jungle_sapling': 0.15,
    'minecraft:acacia_sapling': 0.15,
    'minecraft:dark_oak_sapling': 0.15,
    'minecraft:cherry_sapling': 0.15,
    'minecraft:azalea': 0.15,
    'minecraft:flowering_azalea': 0.15,
    'minecraft:sweet_berries': 0.05,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'minecraft:moss_block' },
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

//Iron Mesh --> Moss Block
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:glow_berries': 0.15,
    'minecraft:oak_sapling': 0.25,
    'minecraft:spruce_sapling': 0.25,
    'minecraft:birch_sapling': 0.25,
    'minecraft:jungle_sapling': 0.25,
    'minecraft:acacia_sapling': 0.25,
    'minecraft:dark_oak_sapling': 0.25,
    'minecraft:mangrove_propagule': 0.05,
    'minecraft:cherry_sapling': 0.25,
    'minecraft:azalea': 0.25,
    'minecraft:flowering_azalea': 0.25,
    'minecraft:sweet_berries': 0.15,
    'minecraft:lily_pad': 0.1,
    'minecraft:spore_blossom': 0.1,
    'minecraft:small_dripleaf': 0.1,
    'minecraft:big_dripleaf': 0.1,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'minecraft:moss_block' },
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
