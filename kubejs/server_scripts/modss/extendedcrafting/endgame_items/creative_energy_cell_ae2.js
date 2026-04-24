ServerEvents.recipes((event) => {
  //Creative Energy Cell AE2
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABBBCBBBA',
        'BDDEFEDDB',
        'BDGDFDGDB',
        'BHDIJIDHB',
        'CFFJKJFFC',
        'BHDIJIDHB',
        'BDGDFDGDB',
        'BDDEFEDDB',
        'ABBBCBBBA',
      ],
      key: {
        A: {
          item: 'ae2:fluix_block',
        },
        B: {
          item: 'avaritia:infinity_ingot',
        },
        C: {
          item: 'twilightforest:knightmetal_ingot',
        },
        D: {
          item: 'kubejs:infinity_12',
        },
        E: {
          item: 'mysticalagradditions:insanium_ingot_block',
        },
        F: {
          item: 'enderio:end_steel_ingot',
        },
        G: {
          item: 'ae2:spatial_cell_component_128',
        },
        H: {
          item: 'mysticalagriculture:witherproof_block',
        },
        I: {
          item: 'mysticalagradditions:creative_essence',
        },
        J: {
          item: 'ae2:dense_energy_cell',
        },
        K: {
          item: 'compressium:cobblestone_9',
        },
      },
      result: {
        item: 'ae2:creative_energy_cell',
      },
    })
    .id('ae2:creative_energy_cell');
});
