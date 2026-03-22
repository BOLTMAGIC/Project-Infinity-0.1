priority: 1;
MMEvents.createProcesses((event) => {
  //chaos_shard1
  event
    .create('mm:infinity_crucible_recipe1')
    .structureId('mm:infinity_crucible_structure')
    .ticks(1)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:mekanism/gas',
        gas: 'mekanism:antimatter',
        amount: 5,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:experience_bottle',
        count: 64,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'evolvedmekanism:ingot_better_gold',
        count: 2,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:empowered_super_block',
        count: 2,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:chaos_guardian_prediction',
        count: 1,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'nuclearcraft:neutronium_ingot',
        count: 2,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'avaritia:neutron_nugget',
        count: 1,
      },
    })
    .input({
      type: 'mm:input/consume',
      chance: 0.0,
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:ultimate_heart',
        count: 1,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 200000000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'draconicevolution:chaos_shard',
        count: 4,
      },
    });

  //chaos_shard2
  event
    .create('mm:infinity_crucible_recipe2')
    .structureId('mm:infinity_crucible_structure')
    .ticks(1)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:mekanism/gas',
        gas: 'mekanism:antimatter',
        amount: 25,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: "kubejs:chaos_guardian_prediction",
        count: 16,
      },
    })
    .input({
      type: 'mm:input/consume',
      chance: 0.20,
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:ultimate_heart',
        count: 1,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 20000000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'draconicevolution:small_chaos_frag',
        count: 24,
      },
    });
});
