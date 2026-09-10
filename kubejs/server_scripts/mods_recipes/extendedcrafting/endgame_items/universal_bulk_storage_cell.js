ServerEvents.recipes((event) => {
  // universalbulkcell:universal_bulk_cell
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCDCBA',
        'BEEEEEB',
        'CEFGHEC',
        'DEIJKED',
        'CELMNEC',
        'BEEEEEB',
        'ABCDCBA',
      ],
      key: {
        A: {
          item: 'mekanism:alloy_reinforced',
        },
        B: {
          item: 'evolvedmekanism:alloy_hypercharged',
        },
        C: {
          item: 'mekanism_extras:alloy_radiance',
        },
        D: {
          item: 'mekanism:alloy_atomic',
        },
        E: {
          item: 'universalbulkcell:universal_bulk_component',
        },
        F: {
          item: 'megacells:item_storage_cell_256m',
        },
        G: {
          item: 'megacells:fluid_storage_cell_256m',
        },
        H: {
          item: 'megacells:chemical_storage_cell_256m',
        },
        I: {
          item: 'appflux:fe_256m_cell',
        },
        J: {
          item: 'megacells:bulk_item_cell',
        },
        K: {
          item: 'megacells:mana_storage_cell_256m',
        },
        L: {
          item: 'crazyae2addons:mob_storage_cell_256k',
        },
        M: {
          item: 'ae2omnicells:quantum_omni_cell_256m',
        },
        N: {
          item: 'megacells:radioactive_chemical_cell',
        },
      },
      result: {
        item: 'universalbulkcell:universal_bulk_cell',
      },
    })
    .id('universalbulkcell:universal_bulk_cell');
});
