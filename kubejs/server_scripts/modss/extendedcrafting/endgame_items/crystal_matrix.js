ServerEvents.recipes((event) => {
  //Crystal Matrix Ingot
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCDADCBA',
        'EDFGGGFDE',
        'BGGCHCGGB',
        'EDFGGGFDE',
        'ABCDADCBA',
        '         ',
        '         ',
        '         ',
        '         ',
      ],
      key: {
        A: {
          item: 'avaritia:diamond_lattice',
        },
        B: {
          item: 'botania:rune_summer',
        },
        C: {
          item: 'draconicevolution:draconium_core',
        },
        D: {
          item: 'minecraft:nether_star',
        },
        E: {
          item: 'botanicalextramachinery:malachite_dragonstone',
        },
        F: {
          item: 'actuallyadditions:empowered_enori_crystal',
        },
        G: {
          item: 'extendedcrafting:crystaltine_ingot',
        },
        H: {
          item: 'rftoolsbase:infused_diamond',
        },
      },
      result: {
        item: 'avaritia:crystal_matrix_ingot',
      },
    })
    .id('avaritia:crystal_matrix_ingot');
});
