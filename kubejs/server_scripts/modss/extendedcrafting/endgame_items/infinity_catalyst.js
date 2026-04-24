ServerEvents.recipes((event) => {
  //Infinity Catalyst
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'MM  A  MM',
        'MBBCACBBM',
        ' BBDADBB ',
        ' EDLGFDE ',
        'AAAHIJAAA',
        ' EDFKLDE ',
        ' BBDADBB ',
        'MBBCACBBM',
        'MM  A  MM',
      ],
      key: {
        A: {
          item: 'avaritia:neutron_ingot',
        },
        B: {
          item: 'avaritia:crystal_matrix_ingot',
        },
        C: {
          item: 'avaritia:neutron_nugget',
        },
        D: {
          item: 'avaritia:record_fragment',
        },
        E: {
          item: 'avaritia:neutron_pile',
        },
        F: {
          item: 'kubejs:ultimate_gem',
        },
        G: {
          item: 'avaritia:cosmic_meatballs',
        },
        H: {
          item: 'avaritia:ultimate_stew',
        },
        I: {
          item: 'extendedcrafting:ultimate_singularity',
        },
        J: {
          item: 'avaritia:endest_pearl',
        },
        K: {
          item: 'mysticalagradditions:creative_essence',
        },
        L: {
          item: 'kubejs:ultimate_prediction',
        },
        M: {
          item: 'kubejs:empowered_super_block',
        },
      },
      result: {
        item: 'avaritia:infinity_catalyst',
      },
    })
    .id('avaritia:infinity_catalyst_craft');
});
