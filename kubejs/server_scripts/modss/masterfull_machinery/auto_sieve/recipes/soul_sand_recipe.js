priority: 1;
MMEvents.createProcesses((event) => {
  event
    .create('mm:soul_sand_sieve_recipe1')
    .structureId('mm:auto_sieve_structure1')
    .ticks(20)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:soul_sand',
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
        item: 'minecraft:gunpowder',
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
      chance: 0.75,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:bone',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.75,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:quartz',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.005,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:netherite_scrap',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.5,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:nether_wart',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:ghast_tear',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.2,
      ingredient: {
        type: 'mm:item',
        item: 'enderio:soularium_nugget',
        count: 1,
      },
    });

  event
    .create('mm:soul_sand_sieve_recipe2')
    .structureId('mm:auto_sieve_structure2')
    .ticks(10)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:soul_sand',
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
        item: 'minecraft:gunpowder',
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
      chance: 0.75,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:bone',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.75,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:quartz',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.005,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:netherite_scrap',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.5,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:nether_wart',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:ghast_tear',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.2,
      ingredient: {
        type: 'mm:item',
        item: 'enderio:soularium_nugget',
        count: 4,
      },
    });

  event
    .create('mm:soul_sand_sieve_recipe3')
    .structureId('mm:auto_sieve_structure3')
    .ticks(4)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:soul_sand',
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
        item: 'minecraft:gunpowder',
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
      chance: 0.75,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:bone',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.75,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:quartz',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.005,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:netherite_scrap',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.5,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:nether_wart',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:ghast_tear',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.2,
      ingredient: {
        type: 'mm:item',
        item: 'enderio:soularium_nugget',
        count: 16,
      },
    });

  event
    .create('mm:soul_sand_sieve_recipe4')
    .structureId('mm:auto_sieve_structure4')
    .ticks(1)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:soul_sand',
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
        item: 'minecraft:gunpowder',
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
      chance: 0.75,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:bone',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.75,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:quartz',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.005,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:netherite_scrap',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.5,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:nether_wart',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:ghast_tear',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.2,
      ingredient: {
        type: 'mm:item',
        item: 'enderio:soularium_nugget',
        count: 64,
      },
    });
});
