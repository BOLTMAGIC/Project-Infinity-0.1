priority: 1;
MMEvents.createProcesses((event) => {
  event
    .create('mm:dust_sieve_recipe1')
    .structureId('mm:auto_sieve_structure1')
    .ticks(20)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:dust',
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
      chance: 0.75,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:bone_meal',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.75,
      ingredient: {
        type: 'mm:item',
        item: 'ae2:certus_quartz_dust',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.75,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:glowstone_dust',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.33,
      ingredient: {
        type: 'mm:item',
        item: 'ae2:sky_dust',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.75,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:redstone',
        count: 1,
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
      chance: 0.35,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:blaze_powder',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.33,
      ingredient: {
        type: 'mm:item',
        item: 'enderio:grains_of_infinity',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.2,
      ingredient: {
        type: 'mm:item',
        item: 'rftoolsbase:dimensionalshard',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.2,
      ingredient: {
        type: 'mm:item',
        item: 'dimensionalpocketsii:dimensional_shard',
        count: 1,
      },
    });

  event
    .create('mm:dust_sieve_recipe2')
    .structureId('mm:auto_sieve_structure2')
    .ticks(10)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:dust',
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
      chance: 0.75,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:bone_meal',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.75,
      ingredient: {
        type: 'mm:item',
        item: 'ae2:certus_quartz_dust',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.75,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:glowstone_dust',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.33,
      ingredient: {
        type: 'mm:item',
        item: 'ae2:sky_dust',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.75,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:redstone',
        count: 4,
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
      chance: 0.35,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:blaze_powder',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.33,
      ingredient: {
        type: 'mm:item',
        item: 'enderio:grains_of_infinity',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.2,
      ingredient: {
        type: 'mm:item',
        item: 'rftoolsbase:dimensionalshard',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.2,
      ingredient: {
        type: 'mm:item',
        item: 'dimensionalpocketsii:dimensional_shard',
        count: 4,
      },
    });

  event
    .create('mm:dust_sieve_recipe3')
    .structureId('mm:auto_sieve_structure3')
    .ticks(4)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:dust',
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
      chance: 0.75,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:bone_meal',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.75,
      ingredient: {
        type: 'mm:item',
        item: 'ae2:certus_quartz_dust',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.75,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:glowstone_dust',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.33,
      ingredient: {
        type: 'mm:item',
        item: 'ae2:sky_dust',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.75,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:redstone',
        count: 16,
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
      chance: 0.35,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:blaze_powder',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.33,
      ingredient: {
        type: 'mm:item',
        item: 'enderio:grains_of_infinity',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.2,
      ingredient: {
        type: 'mm:item',
        item: 'rftoolsbase:dimensionalshard',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.2,
      ingredient: {
        type: 'mm:item',
        item: 'dimensionalpocketsii:dimensional_shard',
        count: 16,
      },
    });

  event
    .create('mm:dust_sieve_recipe4')
    .structureId('mm:auto_sieve_structure4')
    .ticks(1)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:dust',
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
      chance: 0.75,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:bone_meal',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.75,
      ingredient: {
        type: 'mm:item',
        item: 'ae2:certus_quartz_dust',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.75,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:glowstone_dust',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.33,
      ingredient: {
        type: 'mm:item',
        item: 'ae2:sky_dust',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.75,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:redstone',
        count: 64,
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
      chance: 0.35,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:blaze_powder',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.33,
      ingredient: {
        type: 'mm:item',
        item: 'enderio:grains_of_infinity',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.2,
      ingredient: {
        type: 'mm:item',
        item: 'rftoolsbase:dimensionalshard',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.2,
      ingredient: {
        type: 'mm:item',
        item: 'dimensionalpocketsii:dimensional_shard',
        count: 64,
      },
    });
});
