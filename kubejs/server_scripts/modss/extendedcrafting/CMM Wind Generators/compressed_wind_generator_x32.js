ServerEvents.recipes((event) => {
  //Compressed Wind Generator x32
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: ['ABACA', 'CDEDB', 'AEFEA', 'BDEDC', 'ACABA'],
      key: {
        A: {
          item: 'mekanism:alloy_reinforced',
        },
        B: {
          item: 'mekanism:advanced_control_circuit',
        },
        C: {
          item: 'mekanism:enriched_redstone',
        },
        D: {
          item: 'mekanism:alloy_atomic',
        },
        E: {
          item: 'compactmekanismmachines:compressed_wind_generator_x8',
        },
        F: {
          item: 'industrialforegoing:machine_frame_simple',
        },
      },
      result: {
        item: 'compactmekanismmachines:compressed_wind_generator_x32',
      },
    })
    .id('compactmekanismmachines:compressed_wind_generator_x32');
});
