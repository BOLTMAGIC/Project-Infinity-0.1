priority: 1;
MMEvents.createProcesses((event) => {
  event
    .create('mm:water_condenser_recipe1')
    .structureId('mm:water_condenser_structure1')
    .ticks(16)
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
        type: 'mm:fluid',
        fluid: 'minecraft:water',
        amount: 10000,
      },
    });

  event
    .create('mm:water_condenser_recipe2')
    .structureId('mm:water_condenser_structure2')
    .ticks(16)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 1000000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'minecraft:water',
        amount: 1000000,
      },
    });

  event
    .create('mm:water_condenser_recipe3')
    .structureId('mm:water_condenser_structure3')
    .ticks(16)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 100000000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'minecraft:water',
        amount: 100000000,
      },
    });
});
