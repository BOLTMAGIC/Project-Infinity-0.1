ServerEvents.recipes((event) => {
  //Simulator Modeling
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: ['ABABA', 'CDCDC', 'DEDED', 'CDCDC', 'ABABA'],
      key: {
        A: {
          item: 'extrahnn:upgrade_speed',
        },
        B: {
          type: 'forge:nbt',
          item: 'minecraft:netherite_sword',
          count: 1,
          nbt: '{Damage:0}',
        },
        C: {
          item: 'extrahnn:ultimate_sim_chamber',
        },
        D: {
          item: 'advancednetherite:netherite_diamond_block',
        },
        E: {
          item: 'extrahnn:merger_camera',
        },
      },
      result: {
        item: 'extrahnn:simulator_modeling',
      },
    })
    .id('extrahnn:simulator_modeling');
});
