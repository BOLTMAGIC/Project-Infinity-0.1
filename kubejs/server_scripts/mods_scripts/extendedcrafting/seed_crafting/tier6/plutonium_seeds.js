ServerEvents.recipes((event) => {
  //Plutonium Seeds
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AABBCBBAA',
        'AADEFEDAA',
        'BDDGGGDDB',
        'BEGHHHGEB',
        'CFGHIHGFC',
        'BEGHHHGEB',
        'BDDGGGDDB',
        'AADEFEDAA',
        'AABBCBBAA',
      ],
      key: {
        A: {
          item: 'mysticalagradditions:insanium_essence',
        },
        B: {
          item: 'extendedcrafting:enhanced_ender_ingot',
        },
        C: {
          item: 'mekanism:pellet_antimatter',
        },
        D: {
          item: 'evolvedmekanism:alloy_subatomic',
        },
        E: {
          item: 'evolvedmekanism:quantum_control_circuit',
        },
        F: {
          item: 'evolvedmekanism:multiversal_control_circuit',
        },
        G: {
          item: 'avaritia:neutron_ingot',
        },
        H: {
          item: 'mekanism:pellet_plutonium',
        },
        I: {
          item: 'kubejs:tier6_crafting_seed',
        },
      },
      result: {
        item: 'mysticalagriculture:plutonium_seeds',
      },
    })
    .id('mysticalagriculture:plutonium_seeds');
});
