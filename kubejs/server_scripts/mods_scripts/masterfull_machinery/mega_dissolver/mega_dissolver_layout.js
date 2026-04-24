priority: 1;
MMEvents.createStructures((event) => {
  //Tier 1 Mega Dissolver Structure
  event
    .create('mm:mega_dissolver_structure1')
    .controllerId('mm:mega_dissolver_controller')
    .name('Mega Dissolver Tier 1')
    .layout((a) => {
      a.layer([
        '11111', 
        '11111', 
        '11111', 
        '11111', 
        '11111'
      ])
      .layer([
        '12221', 
        '2   2', 
        '2   2', 
        '2   2', 
        '12221'
      ])
      .layer([
        '12221', 
        '2   2', 
        '2   2', 
        '2   2', 
        '12C21'
      ])
      .layer([
        '12221', 
        '2   2', 
        '2   2', 
        '2   2', 
        '13451'
      ])
      .layer([
        '11111', 
        '11111', 
        '11111', 
        '11111', 
        '11111'
      ])
        .key('1', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit',
        })
        .key('2', {
          block: 'alchemistry:reactor_glass',
        })
        .key('3', {
          portType: 'mm:item',
          input: true,
        })
        .key('4', {
          portType: 'mm:energy',
          input: true,
        })
        .key('5', {
          portType: 'mm:item',
          input: false,
        })
    });

    //Tier 2 Mega Dissolver Structure
  event
    .create('mm:mega_dissolver_structure2')
    .controllerId('mm:mega_dissolver_controller')
    .name('Mega Dissolver Tier 2')
    .layout((a) => {
      a.layer([
        '11111', 
        '11111', 
        '11111', 
        '11111', 
        '11111'
      ])
      .layer([
        '12221', 
        '2   2', 
        '2 6 2', 
        '2   2', 
        '15251'
      ])
      .layer([
        '12221', 
        '2   2', 
        '2 6 2', 
        '2   2', 
        '12C21'
      ])
      .layer([
        '12221', 
        '2   2', 
        '2 6 2', 
        '2   2', 
        '13241'
      ])
      .layer([
        '11111', 
        '11111', 
        '11111', 
        '11111', 
        '11111'
      ])
        .key('1', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit',
        })
        .key('2', {
          block: 'alchemistry:reactor_glass',
        })
        .key('3', {
          portType: 'mm:item',
          input: true,
        })
        .key('4', {
          block: 'mm:gigantic_energy_port_input',
        })
        .key('5', {
          block: 'mm:titanic_item_port_output',
        })
        .key('6', {
          block: 'voidminers:caerium_block',
        })
    });
});


