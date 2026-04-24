ServerEvents.recipes((event) => {
  //Energy Collector Mk1
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: ['AAAAA', 'ABCBA', 'ADEDA', 'ABFBA', 'AAAAA'],
      key: {
        A: {
          item: 'minecraft:glowstone',
        },
        B: {
          item: 'extendedcrafting:black_iron_ingot',
        },
        C: {
          item: 'minecraft:glass',
        },
        D: {
          item: 'projectexpansion:pink_matter',
        },
        E: {
          item: 'minecraft:diamond_block',
        },
        F: {
          item: 'minecraft:furnace',
        },
      },
      result: {
        item: 'projecte:collector_mk1',
      },
    })
    .id('projecte:collector_mk1');
});
