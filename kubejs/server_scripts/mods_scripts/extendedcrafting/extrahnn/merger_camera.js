ServerEvents.recipes((event) => {
  //Merger Camera
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: ['ABCBA', 'DCBCD', 'CEFEC', 'DCGCD', 'AGCGA'],
      key: {
        A: {
          item: 'extrahnn:blank_extra_data_model',
        },
        B: {
          item: 'minecraft:comparator',
        },
        C: {
          item: 'minecraft:netherite_block',
        },
        D: {
          item: 'extrahnn:ultimate_loot_fabricator',
        },
        E: {
          item: 'minecraft:ender_eye',
        },
        F: {
          item: 'kubejs:infinity_1',
        },
        G: {
          item: 'minecraft:diamond',
        },
      },
      result: {
        item: 'extrahnn:merger_camera',
      },
    })
    .id('extrahnn:merger_camera');
});
