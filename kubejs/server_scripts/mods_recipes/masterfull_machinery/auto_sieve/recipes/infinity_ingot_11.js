priority: 1;
MMEvents.createProcesses((event) => {
  event
    .create('mm:infinity_ingot_11_sieve_recipe1')
    .structureId('mm:auto_sieve_structure1')
    .ticks(20)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:infinity_10',
        count: 3,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 100000,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 1.0,
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:infinity_11',
        count: 1,
      },
    });

  event
    .create('mm:infinity_ingot_11_sieve_recipe2')
    .structureId('mm:auto_sieve_structure2')
    .ticks(10)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:infinity_10',
        count: 10,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 1000000,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 1.0,
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:infinity_11',
        count: 4,
      },
    });

  event
    .create('mm:infinity_ingot_11_sieve_recipe3')
    .structureId('mm:auto_sieve_structure3')
    .ticks(4)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:infinity_10',
        count: 15,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 1500000,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 1.0,
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:infinity_11',
        count: 6,
      },
    });

  event
    .create('mm:infinity_ingot_11_sieve_recipe4')
    .structureId('mm:auto_sieve_structure4')
    .ticks(1)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:infinity_10',
        count: 63,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 6300000,
      },
    })
    .output({
      type: 'mm:output/simple',
      chance: 1.0,
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:infinity_11',
        count: 25,
      },
    });
});
