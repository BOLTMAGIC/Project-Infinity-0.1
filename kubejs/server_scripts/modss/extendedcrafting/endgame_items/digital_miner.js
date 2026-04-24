ServerEvents.recipes((event) => {
  //Digital Miner
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCDEDCBA',
        'BCDSGSDCB',
        'CDQIJIQDC',
        'DHIKKKIHD',
        'EMJKOKJPE',
        'DHIKKKIHD',
        'CDQIJIQDC',
        'BCDSTSDCB',
        'ABCDEDCBA',
      ],
      key: {
        A: {
          item: 'mekanism:robit',
        },
        B: {
          item: 'mekanism:teleportation_core',
        },
        C: {
          item: 'mekanism:alloy_atomic',
        },
        D: {
          item: 'mekanism:alloy_reinforced',
        },
        E: {
          item: 'mekanism:logistical_sorter',
        },
        G: {
          item: 'voidminers:rubetine_miner',
        },
        H: {
          item: 'mekanism:elite_control_circuit',
        },
        I: {
          item: 'mekanism:steel_casing',
        },
        J: {
          item: 'kubejs:infinity_1',
        },
        K: {
          item: 'mekanism:ultimate_control_circuit',
        },
        M: {
          item: 'voidminers:aurantium_miner',
        },
        O: {
          item: 'kubejs:infinity_2',
        },
        P: {
          item: 'voidminers:citrinetine_miner',
        },
        Q: {
          item: 'mekanism:basic_control_circuit',
        },
        S: {
          item: 'mekanism:advanced_control_circuit',
        },
        T: {
          item: 'voidminers:verdium_miner',
        },
      },
      result: {
        item: 'mekanism:digital_miner',
      },
    })
    .id('mekanism:digital_miner');
});
