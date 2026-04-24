ServerEvents.recipes((event) => {
  //Energy Collector Mk2
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: ['AAAAA', 'ABCBA', 'ADEDA', 'ABFBA', 'AAAAA'],
      key: {
        A: {
          item: 'minecraft:glowstone',
        },
        B: {
          item: 'kubejs:infinity_1',
        },
        C: {
          item: 'minecraft:black_stained_glass',
        },
        D: {
          item: 'projectexpansion:pink_matter',
        },
        E: {
          item: 'projecte:collector_mk1',
        },
        F: {
          item: 'mysticaladaptations:insanium_furnace',
        },
      },
      result: {
        item: 'projecte:collector_mk2',
      },
    })
    .id('projecte:collector_mk2');
});
