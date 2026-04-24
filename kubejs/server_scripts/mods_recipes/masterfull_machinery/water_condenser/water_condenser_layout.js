priority: 1;
MMEvents.createStructures((event) => {
  event
    .create('mm:water_condenser_structure1')
    .controllerId('mm:water_condenser_controller')
    .name('Water Condenser Tier 1')
    .layout((a) => {
      a.layer(['111', '121', '111'])
        .layer(['343', '454', '3C3'])
        .layer(['111', '121', '111'])
        .key('1', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit',
        })
        .key('2', {
          portType: 'mm:energy',
          input: true,
        })
        .key('3', {
          portType: 'mm:fluid',
          input: false,
        })
        .key('4', {
          block: 'mob_grinding_utils:tank',
        })
        .key('5', {
          block: 'actuallyadditions:empowered_diamatine_crystal_block',
        });
    });

  event
    .create('mm:water_condenser_structure2')
    .controllerId('mm:water_condenser_controller')
    .name('Water Condenser Tier 2')
    .layout((a) => {
      a.layer(['111', '121', '111'])
        .layer(['343', '454', '3C3'])
        .layer(['111', '121', '111'])
        .key('1', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit',
        })
        .key('2', {
          portType: 'mm:energy',
          input: true,
        })
        .key('3', {
          portType: 'mm:fluid',
          input: false,
        })
        .key('4', {
          block: 'mob_grinding_utils:tank',
        })
        .key('5', {
          block: 'mysticalagriculture:supremium_gemstone_block',
        });
    });

  event
    .create('mm:water_condenser_structure3')
    .controllerId('mm:water_condenser_controller')
    .name('Water Condenser Tier 3')
    .layout((a) => {
      a.layer(['111', '121', '111'])
        .layer(['343', '454', '3C3'])
        .layer(['111', '121', '111'])
        .key('1', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit',
        })
        .key('2', {
          portType: 'mm:energy',
          input: true,
        })
        .key('3', {
          portType: 'mm:fluid',
          input: false,
        })
        .key('4', {
          block: 'mob_grinding_utils:tank',
        })
        .key('5', {
          block: 'evolvedmekanism:block_better_gold',
        });
    });
});
