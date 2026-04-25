ServerEvents.recipes((event) => {
  //Ultimate Simulation Chamber
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: ['ABCBA', 'BDCDB', 'AECEA', 'BDCDB', 'ABCBA'],
      key: {
        A: {
          item: 'minecraft:diamond',
        },
        B: {
          item: 'minecraft:netherite_ingot',
        },
        C: {
          item: 'minecraft:ender_eye',
        },
        D: {
          item: 'hostilenetworks:sim_chamber',
        },
        E: {
          item: 'extrahnn:blank_extra_data_model',
        },
      },
      result: {
        item: 'extrahnn:ultimate_sim_chamber_v1',
      },
    })
    .id('extrahnn:ultimate_sim_chamber_v1');
});
