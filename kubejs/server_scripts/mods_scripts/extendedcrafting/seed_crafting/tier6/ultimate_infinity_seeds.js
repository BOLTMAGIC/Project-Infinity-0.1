ServerEvents.recipes((event) => {
  //Ultimate Infinity Seeds
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCCDCCBA',
        'BAEFOFEAB',
        'CEGGGGGEC',
        'CFGHNJGFC',
        'DOGLKMGOD',
        'CFGJIHGFC',
        'CEGGGGGEC',
        'BAEFOFEAB',
        'ABCCDCCBA',
      ],
      key: {
        A: {
          item: 'kubejs:ultimate_gem',
        },
        B: {
          item: 'kubejs:ultimate_prediction',
        },
        C: {
          item: 'extendedcrafting:the_ultimate_ingot',
        },
        D: {
          item: 'avaritia:neutron',
        },
        E: {
          item: 'kubejs:infinity_essence',
        },
        F: {
          item: 'kubejs:ultimate_heart',
        },
        G: {
          item: 'extendedcrafting:ultimate_singularity',
        },
        H: {
          item: 'emextras:infinite_multiversal_control_circuit',
        },
        I: {
          item: 'kubejs:empowered_super_block',
        },
        J: {
          item: 'evolvedmekanism:creative_control_circuit',
        },
        K: {
          item: 'extendedcrafting:the_ultimate_block',
        },
        L: {
          item: 'botanicalextramachinery:crimson_dragonstone_block',
        },
        M: {
          item: 'voidminers:ultimate_block',
        },
        N: {
          item: 'voidminers:solar_ultimate_block',
        },
        O: {
          item: 'mysticalexpansion:divinium_block',
        },
      },
      result: {
        item: 'mysticalagriculture:ultimate_infinity_seeds',
      },
    })
    .id('mysticalagriculture:ultimate_infinity_seeds');
});
