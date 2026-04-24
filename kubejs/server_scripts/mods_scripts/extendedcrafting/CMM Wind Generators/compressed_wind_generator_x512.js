ServerEvents.recipes((event) => {
  //Compressed Wind Generator x512
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: ['ABCDA', 'EFGFE', 'CGHGC', 'EFGFE', 'ADCDA'],
      key: {
        A: {
          item: 'mekanism:alloy_infused',
        },
        B: {
          item: 'compactmekanismmachines:compressed_wind_generator_x128',
        },
        C: {
          item: 'mekanism:ultimate_control_circuit',
        },
        D: {
          item: 'compactmekanismmachines:compressed_wind_generator_x128',
        },
        E: {
          item: 'evolvedmekanism:alloy_hypercharged',
        },
        F: {
          item: 'voidminers:citrinetine',
        },
        G: {
          item: 'mekanism:teleportation_core',
        },
        H: {
          item: 'mekanism:ultimate_tier_installer',
        },
      },
      result: {
        item: 'compactmekanismmachines:compressed_wind_generator_x512',
      },
    })
    .id('compactmekanismmachines:compressed_wind_generator_x512');
});
