priority: 1;
MMEvents.createProcesses((event) => {
  event
    .create('mm:crushed_end_stone_sieve_recipe1')
    .structureId('mm:auto_sieve_structure1')
    .ticks(20)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:crushed_end_stone',
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
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:ender_pearl',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'mysticalagriculture:prosperity_shard',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'mysticalagriculture:inferium_essence',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.1,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:ender_eye',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.1,
      ingredient: {
        type: 'mm:item',
        item: 'draconicevolution:draconium_dust',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.05,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:chorus_fruit',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.05,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:chorus_flower',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.035,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:echo_shard',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.01,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:sculk_core',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.01,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:sculk_shrieker',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.33,
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:azure_silver_ore_chunk',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.0005,
      ingredient: {
        type: 'mm:item',
        item: 'allthemodium:vibranium_nugget',
        count: 1,
      },
    });

  event
    .create('mm:crushed_end_stone_sieve_recipe2')
    .structureId('mm:auto_sieve_structure2')
    .ticks(10)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:crushed_end_stone',
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
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:ender_pearl',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'mysticalagriculture:prosperity_shard',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'mysticalagriculture:inferium_essence',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.1,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:ender_eye',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.1,
      ingredient: {
        type: 'mm:item',
        item: 'draconicevolution:draconium_dust',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.05,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:chorus_fruit',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.05,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:chorus_flower',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.035,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:echo_shard',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.01,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:sculk_core',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.01,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:sculk_shrieker',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.33,
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:azure_silver_ore_chunk',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.0005,
      ingredient: {
        type: 'mm:item',
        item: 'allthemodium:vibranium_nugget',
        count: 4,
      },
    });

  event
    .create('mm:crushed_end_stone_sieve_recipe3')
    .structureId('mm:auto_sieve_structure3')
    .ticks(4)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:crushed_end_stone',
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
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:ender_pearl',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'mysticalagriculture:prosperity_shard',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'mysticalagriculture:inferium_essence',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.1,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:ender_eye',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.1,
      ingredient: {
        type: 'mm:item',
        item: 'draconicevolution:draconium_dust',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.05,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:chorus_fruit',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.05,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:chorus_flower',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.035,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:echo_shard',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.01,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:sculk_core',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.01,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:sculk_shrieker',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.33,
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:azure_silver_ore_chunk',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.0005,
      ingredient: {
        type: 'mm:item',
        item: 'allthemodium:vibranium_nugget',
        count: 16,
      },
    });

  event
    .create('mm:crushed_end_stone_sieve_recipe4')
    .structureId('mm:auto_sieve_structure4')
    .ticks(1)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:crushed_end_stone',
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
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'cyclic:eye_teleport',
        count: 8,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'mysticalagriculture:prosperity_shard',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.4,
      ingredient: {
        type: 'mm:item',
        item: 'mysticalagriculture:inferium_essence',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.1,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:ender_eye',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.1,
      ingredient: {
        type: 'mm:item',
        item: 'draconicevolution:draconium_dust',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.05,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:chorus_fruit',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.05,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:chorus_flower',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.035,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:echo_shard',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.05,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:sculk_core',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.01,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:sculk_shrieker',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.33,
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:azure_silver_ore_chunk',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.0005,
      ingredient: {
        type: 'mm:item',
        item: 'allthemodium:vibranium_nugget',
        count: 64,
      },
    });
});
