ServerEvents.recipes((event) => {
  //Compressed Wind Generator x2048
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCDCBA',
        'BBAEABB',
        'CAFGFAC',
        'DEGHGED',
        'CAFGFAC',
        'BBAEABB',
        'ABCDCBA',
      ],
      key: {
        A: {
          item: 'mekanism:alloy_reinforced',
        },
        B: {
          item: 'mekanism:alloy_infused',
        },
        C: {
          item: 'mekanism:teleportation_core',
        },
        D: {
          item: 'compactmekanismmachines:compressed_wind_generator_x512',
        },
        E: {
          item: 'mekanism:alloy_atomic',
        },
        F: {
          item: 'evolvedmekanism:overclocked_control_circuit',
        },
        G: {
          item: 'voidminers:verdium',
        },
        H: {
          item: 'industrialforegoing:machine_frame_advanced',
        },
      },
      result: {
        item: 'compactmekanismmachines:compressed_wind_generator_x2048',
      },
    })
    .id('compactmekanismmachines:compressed_wind_generator_x2048');
});
