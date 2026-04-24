ServerEvents.recipes((event) => {
  //Compressed Wind Generator x2
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      tier: 2,
      pattern: [' A ', 'BCB', ' A '],
      key: {
        A: {
          item: 'mekanism:basic_control_circuit',
        },
        B: {
          item: 'mekanismgenerators:wind_generator',
        },
        C: {
          item: 'mekanism:alloy_infused',
        },
      },
      result: {
        item: 'compactmekanismmachines:compressed_wind_generator_x2',
      },
    })
    .id('compactmekanismmachines:compressed_wind_generator_x2');
});
