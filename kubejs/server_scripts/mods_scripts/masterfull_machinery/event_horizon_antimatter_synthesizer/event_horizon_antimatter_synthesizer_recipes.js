priority: 1;
MMEvents.createProcesses((event) => {
  //Antimatter Recipe 1
  //Uses 4000 Polonium and 2.14 Billion RF to create 5 Antimatter
  event
    .create('mm:event_horizon_antimatter_synthesizer_recipe1')
    .structureId('mm:event_horizon_antimatter_synthesizer_structure')
    .ticks(1)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:mekanism/gas',
        gas: 'mekanism:polonium',
        amount: 4000,
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
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 2140000000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:mekanism/gas',
        gas: 'mekanism:antimatter',
        amount: 5,
      },
    });

  //Antimatter Recipe 2
  //Uses 4000 Polonium and 2.14 Billion RF to create 5 Antimatter
  event
    .create('mm:event_horizon_antimatter_synthesizer_recipe1_5')
    .structureId('mm:event_horizon_antimatter_synthesizer_structure')
    .ticks(1)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:mekanism/gas',
        gas: 'mekanism:polonium',
        amount: 4000000,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'minecraft:lava',
        amount: 10000,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 2140000000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:mekanism/gas',
        gas: 'mekanism:antimatter',
        amount: 5000,
      },
    });

  //Polonium Contained Steam to Solution Recipe
  event
    .create('mm:event_horizon_antimatter_synthesizer_recipe2')
    .structureId('mm:event_horizon_antimatter_synthesizer_structure')
    .ticks(1)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:mekanism/gas',
        gas: 'mekanism_extras:polonium_containing_steam',
        amount: 1000000,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 2147483647,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'mekanism_extras:polonium_containing_solution',
        amount: 1000000,
      },
    });

  //Polonium-208 Fluid to Polonium-208 Gas Recipe
  event
    .create('mm:event_horizon_antimatter_synthesizer_recipe3')
    .structureId('mm:event_horizon_antimatter_synthesizer_structure')
    .ticks(1)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'mekanism_extras:polonium-208',
        amount: 1000000,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 2147483647,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:mekanism/gas',
        gas: 'mekanism_extras:polonium-208',
        amount: 1000000,
      },
    });

  //Polonium-208 Gas to Polonium Recipe
  event
    .create('mm:event_horizon_antimatter_synthesizer_recipe4')
    .structureId('mm:event_horizon_antimatter_synthesizer_structure')
    .ticks(1)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:mekanism/gas',
        gas: 'mekanism_extras:polonium-208',
        amount: 1000000,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 2147483647,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:mekanism/gas',
        gas: 'mekanism:polonium',
        amount: 1000000,
      },
    });
});
