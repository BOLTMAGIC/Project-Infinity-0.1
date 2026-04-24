priority: 1;
MMEvents.createProcesses((event) => {
  //blackstone
  event
    .create('mm:crushed_blackstone_recipe1')
    .structureId('mm:auto_crusher_structure1')
    .ticks(8)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:blackstone',
        count: 4,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 10000,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'minecraft:water',
        amount: 250,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:crushed_blackstone',
        count: 5,
      },
    });
  //netherrack
  event
    .create('mm:crushed_netherrack_recipe1')
    .structureId('mm:auto_crusher_structure1')
    .ticks(8)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:netherrack',
        count: 4,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 10000,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'minecraft:lava',
        amount: 250,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:crushed_netherrack',
        count: 5,
      },
    });
  //cobblestone
  event
    .create('mm:cobblestone_recipe1')
    .structureId('mm:auto_crusher_structure1')
    .ticks(8)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:stone',
        count: 4,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 10000,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'minecraft:water',
        amount: 250,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:cobblestone',
        count: 5,
      },
    });
  //gravel
  event
    .create('mm:gravel_recipe1')
    .structureId('mm:auto_crusher_structure1')
    .ticks(8)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:cobblestone',
        count: 4,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 10000,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'minecraft:water',
        amount: 250,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:gravel',
        count: 5,
      },
    });
  //sand
  event
    .create('mm:sand_recipe1')
    .structureId('mm:auto_crusher_structure1')
    .ticks(8)
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
        amount: 10000,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'minecraft:water',
        amount: 250,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:sand',
        count: 5,
      },
    });
  //dust
  event
    .create('mm:dust_recipe1')
    .structureId('mm:auto_crusher_structure1')
    .ticks(8)
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
        amount: 10000,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'minecraft:water',
        amount: 250,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:dust',
        count: 5,
      },
    });
  //end stone
  event
    .create('mm:crushed_end_stone_recipe1')
    .structureId('mm:auto_crusher_structure1')
    .ticks(8)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:end_stone',
        count: 4,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 10000,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'minecraft:lava',
        amount: 250,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'exdeorum:crushed_end_stone',
        count: 5,
      },
    });
  //cobblestone
  event
    .create('mm:cobblestone_recipe21')
    .structureId('mm:auto_crusher_structure1')
    .ticks(8)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 100000,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'minecraft:water',
        amount: 16000,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'minecraft:lava',
        amount: 16000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:cobblestone',
        count: 256,
      },
    });
  //blaze gold ingot -> dust
  event
    .create('mm:blaze_gold_dust_recipe1')
    .structureId('mm:auto_crusher_structure1')
    .ticks(8)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:blaze_gold_ingot',
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
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:blaze_gold_dust',
        count: 1,
      },
    });
  //azure silver ingot -> dust
  event
    .create('mm:azure_silver_dust_recipe1')
    .structureId('mm:auto_crusher_structure1')
    .ticks(8)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:azure_silver_ingot',
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
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:azure_silver_dust',
        count: 1,
      },
    });
  //azure electrum ingot -> dust
  event
    .create('mm:azure_electrum_dust_recipe1')
    .structureId('mm:auto_crusher_structure1')
    .ticks(8)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:azure_electrum_ingot',
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
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:azure_electrum_dust',
        count: 1,
      },
    });
  //graphite ingot -> dust
  event
    .create('mm:crushed_graphite_recipe1')
    .structureId('mm:auto_crusher_structure1')
    .ticks(8)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'bigreactors:graphite_ingot',
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
      ingredient: {
        type: 'mm:item',
        item: 'bigreactors:graphite_dust',
        count: 1,
      },
    });

  //tuff
  event
    .create('mm:tuff_recipe1')
    .structureId('mm:auto_crusher_structure1')
    .ticks(8)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:tuff',
        count: 64,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 10000,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'minecraft:water',
        amount: 250,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'nuclearcraft:chromium_dust',
        count: 16,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'mekanism:dust_coal',
        count: 16,
      },
    });

  //grains of piezallity
  event
    .create('mm:grains_of_piezallity_recipe1')
    .structureId('mm:auto_crusher_structure1')
    .ticks(8)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'enderio:pulsating_crystal',
        count: 8,
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
      ingredient: {
        type: 'mm:item',
        item: 'enderio:pulsating_powder',
        count: 8,
      },
    });

  //calcite
  event
    .create('mm:calcite_recipe1')
    .structureId('mm:auto_crusher_structure1')
    .ticks(8)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:calcite',
        count: 64,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 10000,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'minecraft:water',
        amount: 250,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'nuclearcraft:calcium_dust',
        count: 24,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'nuclearcraft:potassium_dust',
        count: 16,
      },
    });

  //flux dust
  event
    .create('mm:flux_dust_recipe1')
    .structureId('mm:auto_crusher_structure1')
    .ticks(8)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:redstone',
        count: 4,
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
        amount: 10000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'fluxnetworks:flux_dust',
        count: 4,
      },
    });
});
