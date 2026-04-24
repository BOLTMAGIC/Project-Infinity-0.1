ServerEvents.recipes((event) => {
  //Awakened Draconium Seeds
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AABBCBBAA',
        'AADDDDDAA',
        'BDEFFFEDB',
        'BDFGGGFDB',
        'CDFGHGFDC',
        'BDFGGGFDB',
        'BDEFFFEDB',
        'AADDDDDAA',
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
          item: 'nuclearcraft:fuel_uranium_heu_235',
        },
        D: {
          item: 'projectexpansion:lime_matter',
        },
        E: {
          item: 'draconicevolution:awakened_core',
        },
        F: {
          item: 'avaritia:neutron_ingot',
        },
        G: {
          item: 'draconicevolution:awakened_draconium_ingot',
        },
        H: {
          item: 'kubejs:tier6_crafting_seed',
        },
      },
      result: {
        item: 'mysticalagriculture:awakened_draconium_seeds',
      },
    })
    .id('mysticalagriculture:awakened_draconium_seeds');
});
