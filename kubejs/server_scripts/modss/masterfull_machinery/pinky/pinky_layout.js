priority: 1;
MMEvents.createStructures((event) => {
  event
    .create('mm:pinky_structure1')
    .controllerId('mm:pinky_controller')
    .name('Pinky Tier 1')
    .layout((a) => {
      a.layer(['11', '61', '11'])
        .layer(['32', '65', '4C'])
        .layer(['11', '61', '11'])
        .key('1', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit',
        })
        .key('2', {
          portType: 'mm:item',
          input: true,
        })
        .key('3', {
          portType: 'mm:energy',
          input: true,
        })
        .key('4', {
          portType: 'mm:item',
          input: false,
        })
        .key('5', {
          portType: 'mm:fluid',
          input: true,
        })
        .key('6', {
          block: 'kubejs:pink_slime_block',
        });
    });

  event
    .create('mm:pinky_structure2')
    .controllerId('mm:pinky_controller')
    .name('Pinky Tier 2')
    .layout((a) => {
      a.layer(['11', '61', '11'])
        .layer(['32', '65', '4C'])
        .layer(['11', '61', '17'])
        .key('1', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit',
        })
        .key('2', {
          portType: 'mm:item',
          input: true,
        })
        .key('3', {
          portType: 'mm:energy',
          input: true,
        })
        .key('4', {
          portType: 'mm:item',
          input: false,
        })
        .key('5', {
          portType: 'mm:fluid',
          input: true,
        })
        .key('6', {
          block: 'kubejs:pink_slime_block',
        })
        .key('7', {
          block: 'avaritia:neutron',
        });
    });
});
