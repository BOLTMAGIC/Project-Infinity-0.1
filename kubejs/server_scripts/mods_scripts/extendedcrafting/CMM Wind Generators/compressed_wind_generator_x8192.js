ServerEvents.recipes((event) => {
  //Compressed Wind Generator x8192
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AAABAAA',
        'ACCDCCA',
        'ACEFECA',
        'BDEEEDB',
        'ACEGECA',
        'ACCDCCA',
        'AAABAAA',
      ],
      key: {
        A: {
          item: 'evolvedmekanism:ingot_plaslitherite',
        },
        B: {
          item: 'extendedcrafting:frame',
        },
        C: {
          item: 'evolvedmekanism:alloy_hypercharged',
        },
        D: {
          item: 'compactmekanismmachines:compressed_wind_generator_x2048',
        },
        E: {
          item: 'evolvedmekanism:alloy_subatomic',
        },
        F: {
          item: 'industrialforegoing:machine_frame_supreme',
        },
        G: {
          item: 'voidminers:azurine',
        },
      },
      result: {
        item: 'compactmekanismmachines:compressed_wind_generator_x8192',
      },
    })
    .id('compactmekanismmachines:compressed_wind_generator_x8192');
});
