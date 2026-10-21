ServerEvents.recipes((event) => {
  // universalbulkcell:universal_bulk_cell
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: ['DEFGH', 'OCNCO', 'OPAPO', 'OCBCO', 'IJKLM'],
      key: {
        A: { item: 'universalbulkcell:universal_bulk_component' },
        B: { item: 'extendedae_plus:infinity_core' },
        C: { item: 'molecularmanipulator:computation_crystal_pylon' },
        D: { item: 'appflux:mega_fe_cell_housing' },
        E: { item: 'ae2omnicells:omni_cell_housing' },
        F: { item: 'ae2omnicells:complex_omni_cell_housing' },
        G: { item: 'ae2omnicells:quantum_omni_cell_housing' },
        H: { item: 'megacells:mega_mana_cell_housing' },
        I: { item: 'crazyae2addons:mob_cell_housing' },
        J: { item: 'megacells:mega_item_cell_housing' },
        K: { item: 'megacells:mega_fluid_cell_housing' },
        L: { item: 'megacells:mega_chemical_cell_housing' },
        M: { item: 'ifsoulsdisks:souls_cell_housing' },
        N: { item: 'crazyae2addons:super_singularity' },
        O: { item: 'advanced_ae:quantum_alloy_plate' },
        P: { item: 'minecraft:amethyst_shard' },
      },
      result: { item: 'universalbulkcell:universal_bulk_cell' },
    })
    .id('universalbulkcell:universal_bulk_cell');

  // universalbulkcell:universal_bulk_component
  event.remove({ output: 'universalbulkcell:universal_bulk_component' });
  shapeless(event, 'universalbulkcell:universal_bulk_component', [
    'ae2omnicells:omni_cell_component_256m',
    'ae2omnicells:complex_omni_cell_component_256m',
    'ae2omnicells:quantum_omni_cell_component_256m',
    'advanced_ae:quantum_storage_component',
    'megacells:bulk_cell_component',
    'appflux:core_256m',
    'megacells:radioactive_cell_component',
    'megacells:cell_component_256m',
    'ae2omnicells:spent_nuclear_waste_component',
  ]);
});
