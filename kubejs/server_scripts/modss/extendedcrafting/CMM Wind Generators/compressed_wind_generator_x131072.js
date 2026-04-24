ServerEvents.recipes((event) => {
  //Compressed Wind Generator x131072
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCDEFCBA',
        'BGGGGGGGB',
        'CGHHHHHGC',
        'DGHIJIHGF',
        'EGHIKIHGE',
        'FGHILIHGD',
        'CGHHHHHGC',
        'BGGGGGGGB',
        'ABCFEDCBA',
      ],
      key: {
        A: {
          item: 'compactmekanismmachines:compressed_wind_generator_x32768',
        },
        B: {
          item: 'evolvedmekanism:alloy_hypercharged',
        },
        C: {
          item: 'mekanism:alloy_atomic',
        },
        D: {
          item: 'mekanism:alloy_infused',
        },
        E: {
          item: 'kubejs:infinity_9',
        },
        F: {
          item: 'mekanism:alloy_reinforced',
        },
        G: {
          item: 'evolvedmekanism:alloy_subatomic',
        },
        H: {
          item: 'evolvedmekanism:alloy_singular',
        },
        I: {
          item: 'evolvedmekanism:alloy_exoversal',
        },
        J: {
          item: 'industrialforegoing:machine_frame_supreme',
        },
        K: {
          item: 'evolvedmekanism:multiversal_tier_installer',
        },
        L: {
          item: 'voidminers:rosarium',
        },
      },
      result: {
        item: 'compactmekanismmachines:compressed_wind_generator_x131072',
      },
    })
    .id('compactmekanismmachines:compressed_wind_generator_x131072');
});
