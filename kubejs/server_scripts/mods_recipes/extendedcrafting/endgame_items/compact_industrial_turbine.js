ServerEvents.recipes((event) => {
  // compactmekanismmachines:compact_industrial_turbine
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AAAAAAAAA',
        'BBBBBBBBB',
        'BBBCCCBBB',
        'DDDDDDDDD',
        'EFEGHIEFE',
        'FEFHJHFEF',
        'EFEKHLEFE',
        'MNMMMMMNM',
        'OOOOOOOOO',
      ],
      key: {
        A: {
          item: 'mekanism:structural_glass',
        },
        B: {
          item: 'mekanismgenerators:rotational_complex',
        },
        C: {
          item: 'mekanismgenerators:electromagnetic_coil',
        },
        D: {
          item: 'mekanismgenerators:turbine_vent',
        },
        E: {
          item: 'evolvedmekanism:alloy_hypercharged',
        },
        F: {
          item: 'mekanism_extras:alloy_radiance',
        },
        G: {
          item: 'pneumaticcraft:lpg_bucket',
        },
        H: {
          item: 'nuclearcraft:tough_alloy_ingot',
        },
        I: {
          item: 'pneumaticcraft:memory_essence_bucket',
        },
        J: {
          item: 'mekanism_extras:alloy_thermonuclear',
        },
        K: {
          item: 'pneumaticcraft:yeast_culture_bucket',
        },
        L: {
          item: 'pneumaticcraft:biodiesel_bucket',
        },
        M: {
          item: 'justdirethings:eclipsealloy_ingot',
        },
        N: {
          item: 'mekanismgenerators:turbine_valve',
        },
        O: {
          item: 'mekanismgenerators:turbine_casing',
        },
      },
      result: {
        item: 'compactmekanismmachines:compact_industrial_turbine',
      },
    })
    .id('compactmekanismmachines:compact_industrial_turbine');
});
