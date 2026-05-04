ServerEvents.recipes((event) => {
  //Creative Flux Efficiency Upgrade
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCDCBA',
        'BEFEFEB',
        'CGHIHJC',
        'DEIKIED',
        'CLHIHMC',
        'BEFEFEB',
        'ABCDCBA',
      ],
      key: {
        A: {
          item: 'thermalendergy:efficiency_nullifier_augment',
        },
        B: {
          item: 'thermalendergy:endergy_upgrade_3',
        },
        C: {
          item: 'thermal_extra:abyssal_machine_speed_augment',
        },
        D: {
          item: 'thermalendergy:energy_nullifier_augment',
        },
        E: {
          item: 'mekanism_extras:alloy_spectrum',
        },
        F: {
          item: 'evolvedmekanism:alloy_exoversal',
        },
        G: {
          item: 'thermalendergy:endergy_upgrade_1',
        },
        H: {
          item: 'mekanism:pellet_antimatter',
        },
        I: {
          item: 'thermal:refined_fuel_bucket',
        },
        J: {
          item: 'thermalendergy:endergy_upgrade_2',
        },
        K: {
          item: 'mekanism_extras:polonium_containing_solution_bucket',
        },
        L: {
          item: 'thermal_extra:abyssal_upgrade_augment',
        },
        M: {
          item: 'thermal_extra:upgrade_augment',
        },
      },
      result: {
        item: 'thermal:machine_efficiency_creative_augment',
      },
    })
    .id('thermal:machine_efficiency_creative_augment');
});
