ServerEvents.recipes((event) => {
  //fe_creative_cell
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AABCCCDAA',
        'AECFCFCEA',
        'GCEEEEECG',
        'CHEIJIEHC',
        'CCEJKJECC',
        'CHEIJIEHC',
        'GCEEEEECG',
        'AECLCMCEA',
        'AANCCCOAA',
      ],
      key: {
        A: {
          item: 'appflux:core_256m',
        },
        B: {
          item: 'curvy_pipes:huge_energy_pipe',
        },
        C: {
          item: 'avaritia:infinity_ingot',
        },
        D: {
          item: 'appflux:flux_accessor',
        },
        E: {
          item: 'kubejs:infinity_12',
        },
        F: {
          item: 'mekanism:creative_energy_cube',
        },
        G: {
          item: 'ae2omnicells:quantum_omni_cell_component_256m',
        },
        H: {
          item: 'crazyae2addons:energy_storage_256m',
        },
        I: {
          item: 'appflux:mega_fe_cell_housing',
        },
        J: {
          item: 'appflux:fe_cell_housing',
        },
        K: {
          item: 'extendedae_plus:infinity_core',
        },
        L: {
          item: 'mekanism_extras:infinite_induction_cell',
        },
        M: {
          item: 'mekanism_extras:infinite_induction_provider',
        },
        N: {
          item: 'powah:energy_cable_nitro',
        },
        O: {
          item: 'mekanism_extras:infinite_universal_cable',
        },
      },
      result: {
        item: 'appflux:fe_creative_cell',
      },
    })
    .id('appflux:fe_creative_cell');
});
