priority: 1;
MMEvents.createProcesses((event) => {
  //blackstone
  event
    .create('mm:crushed_blackstone_recipe2')
    .structureId('mm:auto_crusher_structure2')
    .ticks(4)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:blackstone',
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
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'minecraft:water',
        amount: 1000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:crushed_blackstone',
        count: 32,
      },
    });

  //netherrack
  event
    .create('mm:crushed_netherrack_recipe2')
    .structureId('mm:auto_crusher_structure2')
    .ticks(4)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:netherrack',
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
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'minecraft:lava',
        amount: 1000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:crushed_netherrack',
        count: 32,
      },
    });

  //gravel
  event
    .create('mm:gravel_recipe2')
    .structureId('mm:auto_crusher_structure2')
    .ticks(4)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:cobblestone',
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
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'minecraft:water',
        amount: 1000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:gravel',
        count: 32,
      },
    });

  //sand
  event
    .create('mm:sand_recipe2')
    .structureId('mm:auto_crusher_structure2')
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
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'minecraft:water',
        amount: 1000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:sand',
        count: 32,
      },
    });

  //dust
  event
    .create('mm:dust_recipe2')
    .structureId('mm:auto_crusher_structure2')
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
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'minecraft:water',
        amount: 1000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:dust',
        count: 32,
      },
    });

  //end stone
  event
    .create('mm:crushed_end_stone_recipe2')
    .structureId('mm:auto_crusher_structure2')
    .ticks(4)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:end_stone',
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
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'minecraft:lava',
        amount: 1000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:crushed_end_stone',
        count: 32,
      },
    });

  //cobblestone
  event
    .create('mm:cobblestone_recipe22')
    .structureId('mm:auto_crusher_structure2')
    .ticks(4)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 3200000,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'minecraft:water',
        amount: 32000,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'minecraft:lava',
        amount: 32000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:cobblestone',
        count: 1024,
      },
    });

  //blaze gold ingot -> dust
  event
    .create('mm:blaze_gold_dust_recipe2')
    .structureId('mm:auto_crusher_structure2')
    .ticks(4)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:blaze_gold_ingot',
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
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:blaze_gold_dust',
        count: 16,
      },
    });

  //azure silver ingot -> dust
  event
    .create('mm:azure_silver_dust_recipe2')
    .structureId('mm:auto_crusher_structure2')
    .ticks(4)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:azure_silver_ingot',
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
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:azure_silver_dust',
        count: 16,
      },
    });

  //azure electrum ingot -> dust
  event
    .create('mm:azure_electrum_dust_recipe2')
    .structureId('mm:auto_crusher_structure2')
    .ticks(4)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:azure_electrum_ingot',
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
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:azure_electrum_dust',
        count: 16,
      },
    });

  //grains of piezallity
  event
    .create('mm:grains_of_piezallity_recipe2')
    .structureId('mm:auto_crusher_structure2')
    .ticks(4)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'enderio:pulsating_crystal',
        count: 32,
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
      ingredient: {
        type: 'mm:item',
        item: 'enderio:pulsating_powder',
        count: 32,
      },
    });

  //flux dust
  event
    .create('mm:flux_dust_recipe2')
    .structureId('mm:auto_crusher_structure2')
    .ticks(8)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:redstone',
        count: 32,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:obsidian',
        count: 1,
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
      ingredient: {
        type: 'mm:item',
        item: 'fluxnetworks:flux_dust',
        count: 32,
      },
    });

      //raw_eclipsealloy
  event
    .create('mm:raw_eclipsealloy_recipe2')
    .structureId('mm:auto_crusher_structure2')
    .ticks(4)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:netherite_block',
        count: 64,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'justdirethings:time_crystal',
        count: 8,
      },
    })
    .input({
      type: 'mm:input/consume',
      chance: 0.0,
      ingredient: {
        type: 'mm:item',
        item: 'justdirethings:gooblock_tier4',
        count: 1,
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
      ingredient: {
        type: 'mm:item',
        item: 'justdirethings:raw_eclipsealloy',
        count: 64,
      },
    });
});
