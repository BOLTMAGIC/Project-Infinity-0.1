ServerEvents.recipes((event) => {
  //Compressed Wind Generator x32768
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABAAAAABA',
        'BBCCDEFBB',
        'AFGHIHGDA',
        'ACJHKHJEA',
        'BBIHLHIBB',
        'AEJHMHJCA',
        'ADGHIHGFA',
        'BBFEDCCBB',
        'ABAAAAABA',
      ],
      key: {
        A: {
          item: 'mekanism:ingot_refined_glowstone',
        },
        B: {
          item: 'mekanismgenerators:turbine_rotor',
        },
        C: {
          item: 'mekanism:sps_casing',
        },
        D: {
          item: 'mekanism:block_refined_obsidian',
        },
        E: {
          item: 'compactmekanismmachines:compressed_wind_generator_x8192',
        },
        F: {
          item: 'kubejs:infinity_8',
        },
        G: {
          item: 'evolvedmekanism:multiversal_control_circuit',
        },
        H: {
          item: 'evolvedmekanism:ingot_better_gold',
        },
        I: {
          item: 'evolvedmekanism:alloy_exoversal',
        },
        J: {
          item: 'evolvedmekanism:ingot_plaslitherite',
        },
        K: {
          item: 'industrialforegoing:machine_frame_supreme',
        },
        L: {
          item: 'evolvedmekanism:quantum_tier_installer',
        },
        M: {
          item: 'voidminers:caerium',
        },
      },
      result: {
        item: 'compactmekanismmachines:compressed_wind_generator_x32768',
      },
    })
    .id('compactmekanismmachines:compressed_wind_generator_x32768');
});
