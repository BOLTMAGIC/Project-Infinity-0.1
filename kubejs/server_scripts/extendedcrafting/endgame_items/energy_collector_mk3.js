ServerEvents.recipes((event) => {
  //Energy Collector Mk3
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: ['AAAAA', 'ABCBA', 'ADEDA', 'ABFBA', 'AAAAA'],
      key: {
        A: {
          item: 'minecraft:glowstone',
        },
        B: {
          item: 'kubejs:infinity_8',
        },
        C: {
          item: 'minecraft:red_stained_glass',
        },
        D: {
          item: 'projectexpansion:fading_matter',
        },
        E: {
          item: 'projecte:collector_mk2',
        },
        F: {
          item: 'ironfurnaces:million_furnace',
        },
      },
      result: {
        item: 'projecte:collector_mk3',
      },
    })
    .id('projecte:collector_mk3');
});
