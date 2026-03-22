ServerEvents.recipes((event) => {
  //Creative Energy Cube
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCDAEFDA',
        'DCCGHIJCB',
        'FJBGKLBCC',
        'EILMGNGGD',
        'AHKGOGKHA',
        'DGGNGMLIE',
        'CCBLKGBJF',
        'BCJIHGCCD',
        'ADFEADCBA',
      ],
      key: {
        A: {
          item: 'evolvedmekanism:creative_control_circuit',
        },
        B: {
          item: 'mysticalagradditions:creative_essence',
        },
        C: {
          item: 'kubejs:infinity_12',
        },
        D: {
          item: 'evolvedmekanism:alloy_creative',
        },
        E: {
          item: 'solarpanels:light_absorbing_energy_tablet',
        },
        F: {
          item: 'solarpanels:spectral_energy_tablet',
        },
        G: {
          item: 'avaritia:infinity_ingot',
        },
        H: {
          item: 'solarpanels:photonic_energy_tablet',
        },
        I: {
          item: 'solarpanels:improved_energy_tablet',
        },
        J: {
          item: 'solarpanels:singular_energy_tablet',
        },
        K: {
          item: 'mekanism:creative_energy_cube',
        },
        L: {
          item: 'solarpanels:quantum_energy_tablet',
        },
        M: {
          item: 'evolvedmekanism:creative_induction_cell',
        },
        N: {
          item: 'evolvedmekanism:creative_induction_provider',
        },
        O: {
          item: 'solarpanels:creative_energy_tablet',
        },
      },
      result: {
        type: 'forge:nbt',
        item: 'mekanism:creative_energy_cube',
        count: 1,
        nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}',
      },
    })
    .id('mekanism:creative_energy_cube');
});
