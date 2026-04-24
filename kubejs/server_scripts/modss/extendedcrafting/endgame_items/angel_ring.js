ServerEvents.recipes((event) => {
  //Angel Ring
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'IABCBAH',
        'ADDDDDA',
        'BDCCCDB',
        'CDCECDC',
        'BDCCCDB',
        'ADDDDDA',
        'FABCBAG',
      ],
      key: {
        A: {
          item: 'minecraft:white_wool',
        },
        B: {
          item: 'avaritia:crystal_matrix_ingot',
        },
        C: {
          item: 'extendedcrafting:nether_star_block',
        },
        D: {
          item: 'mysticalagriculture:air_essence',
        },
        E: {
          item: 'better_angel_ring:ring',
        },
        F: {
          item: 'kubejs:infinity_3',
        },
        G: {
          item: 'kubejs:infinity_4',
        },
        H: {
          item: 'kubejs:infinity_2',
        },
        I: {
          item: 'kubejs:infinity_1',
        },
      },
      result: {
        item: 'better_angel_ring:angel_ring',
      },
    })
    .id('better_angel_ring:angel_ring');
});
