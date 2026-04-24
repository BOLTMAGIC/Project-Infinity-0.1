priority: 1;
MMEvents.createProcesses((event) => {
  event
    .create('mm:crushed_blackstone_sieve_recipe1')
    .structureId('mm:auto_sieve_structure1')
    .ticks(20)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:crushed_blackstone',
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
      chance: 0.85,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:black_dye',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.75,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:gunpowder',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.5,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:gold_nugget',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.35,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:magma_cream',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.1,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:ancient_debris',
        count: 1,
      },
    });

  event
    .create('mm:crushed_blackstone_sieve_recipe2')
    .structureId('mm:auto_sieve_structure2')
    .ticks(10)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:crushed_blackstone',
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
      chance: 0.85,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:black_dye',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.75,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:gunpowder',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.5,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:gold_nugget',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.35,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:magma_cream',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.1,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:ancient_debris',
        count: 4,
      },
    });

  event
    .create('mm:crushed_blackstone_sieve_recipe3')
    .structureId('mm:auto_sieve_structure3')
    .ticks(4)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:crushed_blackstone',
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
      chance: 0.85,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:black_dye',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.75,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:gunpowder',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.5,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:gold_nugget',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.35,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:magma_cream',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.1,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:ancient_debris',
        count: 16,
      },
    });

  event
    .create('mm:crushed_blackstone_sieve_recipe4')
    .structureId('mm:auto_sieve_structure4')
    .ticks(1)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:crushed_blackstone',
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
      chance: 0.85,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:black_dye',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.75,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:gunpowder',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.5,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:gold_nugget',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.35,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:magma_cream',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.1,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:ancient_debris',
        count: 64,
      },
    });
});
