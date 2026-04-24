priority: 1;
MMEvents.createStructures((event) => {
  event
    .create('mm:fire_attuned_structure1')
    .controllerId('mm:fire_attuned_controller')
    .name('Fire Attuned Tier 1')
    .layout((a) => {
      a.layer(['34', '2C'])
        .layer(['11', '56'])
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
          portType: 'mm:fluid',
          input: false,
        });
    });

  event
    .create('mm:fire_attuned_structure2')
    .controllerId('mm:fire_attuned_controller')
    .name('Fire Attuned Tier 2')
    .layout((a) => {
      a.layer(['34', '2C'])
        .layer(['71', '56'])
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
          portType: 'mm:fluid',
          input: false,
        })
        .key('7', {
          block: 'avaritia:neutron',
        });
    });
});
