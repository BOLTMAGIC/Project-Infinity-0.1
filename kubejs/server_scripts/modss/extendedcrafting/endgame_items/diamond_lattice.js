ServerEvents.recipes((event) => {
  //Diamond Lattice
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCCCBA',
        'BCADACB',
        'CAEBEAC',
        'CDBFBDC',
        'CAEBEAC',
        'BCADACB',
        'ABCCCBA',
      ],
      key: {
        A: {
          item: 'minecraft:diamond',
        },
        B: {
          item: 'armorplus:en_diamond',
        },
        C: {
          item: 'minecraft:diamond_block',
        },
        D: {
          item: 'botania:mana_diamond',
        },
        E: {
          item: 'compressium:diamond_1',
        },
        F: {
          item: 'advancednetherite:netherite_diamond_ingot',
        },
      },
      result: {
        item: '4x avaritia:diamond_lattice',
      },
    })
    .id('avaritia:diamond_lattice');
});
