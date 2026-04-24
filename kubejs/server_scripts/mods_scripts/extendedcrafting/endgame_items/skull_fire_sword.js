ServerEvents.recipes((event) => {
  //Skullfire Sword
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        '       AB',
        '      ABA',
        '     ABA ',
        '    ABA  ',
        ' C ABA   ',
        '  CFA    ',
        '  DC     ',
        ' D  C    ',
        'E        ',
      ],
      key: {
        A: {
          item: 'avaritia:crystal_matrix_ingot',
        },
        B: {
          item: 'minecraft:blaze_powder',
        },
        C: {
          item: 'minecraft:bone',
        },
        D: {
          item: 'extendedcrafting:enhanced_ender_ingot',
        },
        E: {
          item: 'minecraft:nether_star',
        },
        F: {
          item: 'kubejs:infinity_6',
        },
      },
      result: {
        item: 'avaritia:blaze_sword',
      },
    })
    .id('avaritia:blaze_sword');
});
