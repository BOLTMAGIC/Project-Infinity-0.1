priority: 1;
MMEvents.createProcesses((event) => {
  event
    .create('mm:crushed_netherrack_sieve_recipe1')
    .structureId('mm:auto_sieve_structure1')
    .ticks(20)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:crushed_netherrack',
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
      chance: 0.5,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:gunpowder',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.45,
      ingredient: {
        type: 'mm:item',
        item: 'mysticalagriculture:inferium_essence',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:boron_ore_chunk',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:iridium_ore_chunk',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:magnesium_ore_chunk',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:lithium_ore_chunk',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:copper_ore_chunk',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:gold_ore_chunk',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:aluminum_ore_chunk',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:quartz',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:thorium_ore_chunk',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:uranium_ore_chunk',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:cobalt_ore_chunk',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:platinum_ore_chunk',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.35,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:blaze_powder',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.3,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:magma_cream',
        count: 1,
      },
    });

  event
    .create('mm:crushed_netherrack_sieve_recipe2')
    .structureId('mm:auto_sieve_structure2')
    .ticks(10)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:crushed_netherrack',
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
      chance: 0.5,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:gunpowder',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.45,
      ingredient: {
        type: 'mm:item',
        item: 'mysticalagriculture:inferium_essence',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:boron_ore_chunk',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:iridium_ore_chunk',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:magnesium_ore_chunk',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:lithium_ore_chunk',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:copper_ore_chunk',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:gold_ore_chunk',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:aluminum_ore_chunk',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:quartz',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:thorium_ore_chunk',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:uranium_ore_chunk',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:cobalt_ore_chunk',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:platinum_ore_chunk',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.35,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:blaze_powder',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.3,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:magma_cream',
        count: 4,
      },
    });

  event
    .create('mm:crushed_netherrack_sieve_recipe3')
    .structureId('mm:auto_sieve_structure3')
    .ticks(4)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:crushed_netherrack',
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
      chance: 0.5,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:gunpowder',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.45,
      ingredient: {
        type: 'mm:item',
        item: 'mysticalagriculture:inferium_essence',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:boron_ore_chunk',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:iridium_ore_chunk',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:magnesium_ore_chunk',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:lithium_ore_chunk',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:copper_ore_chunk',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:gold_ore_chunk',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:aluminum_ore_chunk',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:quartz',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:thorium_ore_chunk',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:uranium_ore_chunk',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:cobalt_ore_chunk',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:platinum_ore_chunk',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.35,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:blaze_powder',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.3,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:magma_cream',
        count: 16,
      },
    });

  event
    .create('mm:crushed_netherrack_sieve_recipe4')
    .structureId('mm:auto_sieve_structure4')
    .ticks(1)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:crushed_netherrack',
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
      chance: 0.5,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:gunpowder',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.45,
      ingredient: {
        type: 'mm:item',
        item: 'mysticalagriculture:inferium_essence',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:boron_ore_chunk',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:iridium_ore_chunk',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:magnesium_ore_chunk',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:lithium_ore_chunk',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:copper_ore_chunk',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:gold_ore_chunk',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:aluminum_ore_chunk',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:quartz',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:thorium_ore_chunk',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:uranium_ore_chunk',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:cobalt_ore_chunk',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:platinum_ore_chunk',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.35,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:blaze_powder',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.3,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:magma_cream',
        count: 64,
      },
    });
});
