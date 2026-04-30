ServerEvents.recipes((event) => {
  //creative_ae_cell_long
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AABCCCBAA',
        'ADEFFFEDA',
        'BGHIJIKLB',
        'MNIOPOIQM',
        'MRJPSPJTM',
        'MUIOPOIVM',
        'BWXIJIYZB',
        'ADEFFFEDA',
        'AABCCCBAA',
      ],
      key: {
        A: {
          item: 'ae2omnicells:quantum_omni_cell_component_256m',
        },
        B: {
          item: 'megacells:cell_component_256m',
        },
        C: {
          item: 'ae2omnicells:omni_cell_component_256m',
        },
        D: {
          item: 'crazyae2addons:energy_storage_256m',
        },
        E: {
          item: 'megacells:bulk_cell_component',
        },
        F: {
          item: 'appflux:core_256m',
        },
        G: {
          item: 'ae2omnicells:omni_cell_housing',
        },
        H: {
          item: 'ae2omnicells:complex_omni_cell_housing',
        },
        I: {
          item: 'kubejs:infinity_8',
        },
        J: {
          item: 'mekanism_extras:qio_drive_singularity',
        },
        K: {
          item: 'ae2omnicells:quantum_omni_cell_housing',
        },
        L: {
          item: 'appbot:mana_cell_housing',
        },
        M: {
          item: 'ae2omnicells:complex_omni_cell_component_256m',
        },
        N: {
          item: 'crazyae2addons:mob_cell_housing',
        },
        O: {
          item: 'ae2omnicells:spent_nuclear_waste_singularity',
        },
        P: {
          item: 'crazyae2addons:super_singularity_block',
        },
        Q: {
          item: 'ae2:item_cell_housing',
        },
        R: {
          item: 'ifsoulsdisks:souls_cell_housing',
        },
        S: {
          item: 'extendedae_plus:infinity_core',
        },
        T: {
          item: 'ae2:fluid_cell_housing',
        },
        U: {
          item: 'megacells:mega_item_cell_housing',
        },
        V: {
          item: 'appmek:chemical_cell_housing',
        },
        W: {
          item: 'megacells:mega_fluid_cell_housing',
        },
        X: {
          item: 'megacells:mega_mana_cell_housing',
        },
        Y: {
          item: 'megacells:mega_chemical_cell_housing',
        },
        Z: {
          item: 'appflux:fe_cell_housing',
        },
      },
      result: {
        item: 'ae2omnicells:creative_ae_cell_long',
      },
    })
    .id('ae2omnicells:creative_ae_cell_long');
});
