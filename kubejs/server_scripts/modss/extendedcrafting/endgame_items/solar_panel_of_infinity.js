ServerEvents.recipes((event) => {
  //Solar Panel of Infinity
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABBBCBBBA',
        'BBDDEDDBB',
        'BDFFGHHDB',
        'BDFIIIHDB',
        'JEGIKIGEL',
        'BDHIIIFDB',
        'BDHHGFFDB',
        'BBDDEDDBB',
        'ABBBMBBBA',
      ],
      key: {
        A: {
          item: 'extendedcrafting:the_ultimate_ingot',
        },
        B: {
          item: 'avaritia:neutron_ingot',
        },
        C: {
          item: 'extendedcrafting:ultimate_singularity',
        },
        D: {
          item: 'avaritia:crystal_matrix_ingot',
        },
        E: {
          item: 'solarflux:sp_avaritia.neutronium',
        },
        F: {
          item: 'avaritia:infinity_catalyst',
        },
        G: {
          item: 'avaritia:neutron_nugget',
        },
        H: {
          item: 'avaritia:infinity_ingot',
        },
        I: {
          item: 'avaritia:neutron_pile',
        },
        J: {
          item: 'armorplus:the_ultimate_material',
        },
        K: {
          item: 'kubejs:infinity_12',
        },
        L: {
          item: 'avaritia:ultimate_stew',
        },
        M: {
          item: 'kubejs:ultimate_gem',
        },
      },
      result: {
        item: '4x solarflux:sp_avaritia.infinity',
      },
    })
    .id('solarflux:sp_avaritia.infinity');
});
