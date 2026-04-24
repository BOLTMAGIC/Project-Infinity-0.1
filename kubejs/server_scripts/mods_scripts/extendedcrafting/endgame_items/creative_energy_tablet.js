ServerEvents.recipes((event) => {
  //Creative Energy Tablet
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCDEFG',
        'HIJKLIH',
        'IJKMKLI',
        'DKMNMKD',
        'IOKMKPI',
        'OIOKPIP',
        'HOIDIPH',
      ],
      key: {
        A: {
          item: 'mekanism:energy_tablet',
        },
        B: {
          item: 'solarpanels:improved_energy_tablet',
        },
        C: {
          item: 'solarpanels:quantum_energy_tablet',
        },
        D: {
          item: 'extendedcrafting:the_ultimate_ingot',
        },
        E: {
          item: 'solarpanels:spectral_energy_tablet',
        },
        F: {
          item: 'solarpanels:singular_energy_tablet',
        },
        G: {
          item: 'solarpanels:light_absorbing_energy_tablet',
        },
        H: {
          item: 'evolvedmekanism:ingot_better_gold',
        },
        I: {
          item: 'evolvedmekanism:multiversal_control_circuit',
        },
        J: {
          item: 'botanicalextramachinery:malachite_ingot',
        },
        K: {
          item: 'evolvedmekanism:alloy_creative',
        },
        L: {
          item: 'botanicalextramachinery:crimson_ingot',
        },
        M: {
          item: 'kubejs:infinity_11',
        },
        N: {
          item: 'solarpanels:photonic_energy_tablet',
        },
        O: {
          item: 'botanicalextramachinery:shadow_ingot',
        },
        P: {
          item: 'botanicalextramachinery:saffron_ingot',
        },
      },
      result: {
        item: 'solarpanels:creative_energy_tablet',
      },
    })
    .id('solarpanels:creative_energy_tablet');
});
