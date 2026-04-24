priority: 1;
MMEvents.createProcesses((event) => {
  event
    .create('mm:sand_sieve_recipe1')
    .structureId('mm:auto_sieve_structure1')
    .ticks(20)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:sand',
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
        item: 'minecraft:lapis_lazuli',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.35,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:raw_gold',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.35,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:gold_ore_chunk',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.3,
      ingredient: {
        type: 'mm:item',
        item: 'ae2:certus_quartz_crystal',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.3,
      ingredient: {
        type: 'mm:item',
        item: 'ae2:charged_certus_quartz_crystal',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.2,
      ingredient: {
        type: 'mm:item',
        item: 'thermal:sulfur',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.2,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:prismarine_shard',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.2,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:prismarine_crystals',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.15,
      ingredient: {
        type: 'mm:item',
        item: 'mysticalagriculture:inferium_essence',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.0005,
      ingredient: {
        type: 'mm:item',
        item: 'allthemodium:allthemodium_nugget',
        count: 1,
      },
    });

  event
    .create('mm:sand_sieve_recipe2')
    .structureId('mm:auto_sieve_structure2')
    .ticks(10)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:sand',
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
        item: 'minecraft:lapis_lazuli',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.35,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:raw_gold',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.35,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:gold_ore_chunk',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.3,
      ingredient: {
        type: 'mm:item',
        item: 'ae2:certus_quartz_crystal',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.3,
      ingredient: {
        type: 'mm:item',
        item: 'ae2:charged_certus_quartz_crystal',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.3,
      ingredient: {
        type: 'mm:item',
        item: 'thermal:sulfur',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.2,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:prismarine_shard',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.2,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:prismarine_crystals',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.15,
      ingredient: {
        type: 'mm:item',
        item: 'mysticalagriculture:inferium_essence',
        count: 4,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.0005,
      ingredient: {
        type: 'mm:item',
        item: 'allthemodium:allthemodium_nugget',
        count: 4,
      },
    });

  event
    .create('mm:sand_sieve_recipe3')
    .structureId('mm:auto_sieve_structure3')
    .ticks(4)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:sand',
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
        item: 'minecraft:lapis_lazuli',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.35,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:raw_gold',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.35,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:gold_ore_chunk',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.3,
      ingredient: {
        type: 'mm:item',
        item: 'ae2:certus_quartz_crystal',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.3,
      ingredient: {
        type: 'mm:item',
        item: 'ae2:charged_certus_quartz_crystal',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.35,
      ingredient: {
        type: 'mm:item',
        item: 'thermal:sulfur',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.2,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:prismarine_shard',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.2,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:prismarine_crystals',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.15,
      ingredient: {
        type: 'mm:item',
        item: 'mysticalagriculture:inferium_essence',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.0005,
      ingredient: {
        type: 'mm:item',
        item: 'allthemodium:allthemodium_nugget',
        count: 16,
      },
    });

  event
    .create('mm:sand_sieve_recipe4')
    .structureId('mm:auto_sieve_structure4')
    .ticks(1)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:sand',
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
        item: 'minecraft:lapis_lazuli',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.35,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:raw_gold',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.35,
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:gold_ore_chunk',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.3,
      ingredient: {
        type: 'mm:item',
        item: 'ae2:certus_quartz_crystal',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.3,
      ingredient: {
        type: 'mm:item',
        item: 'ae2:charged_certus_quartz_crystal',
        count: 64,
      },
    })
        .output({
      type: 'mm:output/simple',
      chance: 0.35,
      ingredient: {
        type: 'mm:item',
        item: 'thermal:sulfur',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.2,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:prismarine_shard',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.2,
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:prismarine_crystals',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.15,
      ingredient: {
        type: 'mm:item',
        item: 'mysticalagriculture:inferium_essence',
        count: 64,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 0.0005,
      ingredient: {
        type: 'mm:item',
        item: 'allthemodium:allthemodium_nugget',
        count: 64,
      },
    });
});
