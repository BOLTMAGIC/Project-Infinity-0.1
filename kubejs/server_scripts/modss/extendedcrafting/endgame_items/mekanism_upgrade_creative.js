ServerEvents.recipes((event) => {
  //Mekanism Extra Upgrade Creative
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCDEBF',
        'BGHGHGB',
        'IHJKLHM',
        'DGNOPGD',
        'MHLQJHI',
        'BGHGHGB',
        'FBEDCBA',
      ],
      key: {
        A: {
          item: 'mekanism:upgrade_speed',
        },
        B: {
          item: 'mekanism_extras:upgrade_stack',
        },
        C: {
          item: 'mekanism:upgrade_muffling',
        },
        D: {
          item: 'mekanism_extras:ingot_naquadah',
        },
        E: {
          item: 'mekanism:upgrade_gas',
        },
        F: {
          item: 'mekanism:upgrade_energy',
        },
        G: {
          item: 'mekanism_extras:alloy_spectrum',
        },
        H: {
          item: 'evolvedmekanism:alloy_exoversal',
        },
        I: {
          item: 'mekanism:upgrade_anchor',
        },
        J: {
          item: 'mekanism_extras:infinite_tier_installer',
        },
        K: {
          item: 'mekanism_extras:polonium_containing_solution_bucket',
        },
        L: {
          item: 'evolvedmekanism:multiversal_tier_installer',
        },
        M: {
          item: 'mekanism:upgrade_stone_generator',
        },
        N: {
          item: 'mekanism:hydrogen_chloride_bucket',
        },
        O: {
          item: 'mekanismgenerators:fusion_fuel_bucket',
        },
        P: {
          item: 'mekanism_extras:naquadah_hexafluoride_bucket',
        },
        Q: {
          item: 'mekanism:sodium_bucket',
        },
      },
      result: {
        item: 'mekanism_extras:upgrade_creative',
      },
    })
    .id('mekanism_extras:upgrade_creative');
});
