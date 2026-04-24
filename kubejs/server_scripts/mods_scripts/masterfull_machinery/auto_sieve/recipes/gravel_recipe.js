priority: 1;
MMEvents.createProcesses((event) => {
  event
    .create('mm:gravel_sieve_recipe1')
    .structureId('mm:auto_sieve_structure1')
    .ticks(20)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:gravel',
        count: 1,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 10000,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.02,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:amethyst_shard',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.1,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:diamond',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.1,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:emerald',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.3,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:coal',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.01,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:flint',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.99,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:iron_ore_chunk',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.35,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:raw_iron',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:copper_ore_chunk',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:gold_ore_chunk',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:aluminum_ore_chunk',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:silver_ore_chunk',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:lead_ore_chunk',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:zinc_ore_chunk',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:nickel_ore_chunk',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:osmium_ore_chunk',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:tin_ore_chunk',
        count: 1,
      },
    });

  event
    .create('mm:gravel_sieve_recipe2')
    .structureId('mm:auto_sieve_structure2')
    .ticks(10)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:gravel',
        count: 4,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 40000,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.02,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:amethyst_shard',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.1,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:diamond',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.1,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:emerald',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.3,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:coal',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.01,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:flint',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.99,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:iron_ore_chunk',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.35,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:raw_iron',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:copper_ore_chunk',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:gold_ore_chunk',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:aluminum_ore_chunk',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:silver_ore_chunk',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:lead_ore_chunk',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:zinc_ore_chunk',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:nickel_ore_chunk',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:osmium_ore_chunk',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:tin_ore_chunk',
        count: 4,
      },
    });

  event
    .create('mm:gravel_sieve_recipe3')
    .structureId('mm:auto_sieve_structure3')
    .ticks(4)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:gravel',
        count: 16,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 160000,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.02,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:amethyst_shard',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.1,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:diamond',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.1,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:emerald',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.3,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:coal',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.01,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:flint',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.99,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:iron_ore_chunk',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.35,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:raw_iron',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:copper_ore_chunk',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:gold_ore_chunk',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:aluminum_ore_chunk',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:silver_ore_chunk',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:lead_ore_chunk',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:zinc_ore_chunk',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:nickel_ore_chunk',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:osmium_ore_chunk',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:tin_ore_chunk',
        count: 16,
      },
    });

  event
    .create('mm:gravel_sieve_recipe4')
    .structureId('mm:auto_sieve_structure4')
    .ticks(1)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:gravel',
        count: 64,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 640000,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.02,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:amethyst_shard',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.1,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:diamond',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.1,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:emerald',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.3,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:coal',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.01,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:flint',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.99,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:iron_ore_chunk',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.35,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:raw_iron',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:copper_ore_chunk',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:gold_ore_chunk',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:aluminum_ore_chunk',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:silver_ore_chunk',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:lead_ore_chunk',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:zinc_ore_chunk',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:nickel_ore_chunk',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:osmium_ore_chunk',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:tin_ore_chunk',
        count: 64,
      },
    });
});
