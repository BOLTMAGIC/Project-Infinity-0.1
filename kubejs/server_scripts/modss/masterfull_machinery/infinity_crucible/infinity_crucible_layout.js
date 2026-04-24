priority: 1;
MMEvents.createStructures((event) => {
  event
    .create('mm:infinity_crucible_structure')
    .controllerId('mm:infinity_crucible_controller')
    .name('Infinity Crucible')
    .layout((a) => {
      a.layer(['   ', ' P ', '   '])
        .layer(['ABA', 'BOB', 'ANA'])
        .layer(['EFE', 'FGF', 'EFE'])
        .layer(['HFH', 'FGF', 'HFH'])
        .layer(['EFE', 'KLM', 'EJE'])
        .layer(['HFH', 'FGF', 'HCH'])
        .layer(['EFE', 'FGF', 'EFE'])
        .layer(['ABA', 'BDB', 'ABA'])
        .key('A', {
          block: 'draconicevolution:draconium_block',
        })
        .key('B', {
          block: 'draconicevolution:awakened_draconium_block',
        })
        .key('D', {
          block: 'draconicevolution:reactor_stabilizer',
        })
        .key('E', {
          block: 'kubejs:starmetal_block',
        })
        .key('F', {
          block: 'tconstruct:clear_glass',
        })
        .key('G', {
          block: 'igleelib:derium_block',
        })
        .key('H', {
          block: 'minecraft:black_concrete',
        })
        .key('J', {
          block: 'mm:colossal_gas_port_input',
        })
        .key('K', {
          block: 'mm:colossal_item_port_input',
        })
        .key('L', {
          block: 'kubejs:chaotic_essence_block',
        })
        .key('M', {
          block: 'mm:colossal_item_port_output',
        })
        .key('N', {
          block: 'mm:gigantic_energy_port_input',
        })
        .key('O', {
          block: 'minecraft:redstone_block',
        })
        .key('P', {
          block: 'cyclic:beacon_redstone',
        });
    });
});
