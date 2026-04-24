ServerEvents.recipes((event) => {
  //Infinity Ingot
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABABABABA',
        'BFDDFDDFB',
        'CECGEGCEC',
        'BFDDFDDFB',
        'ABABABABA',
        '         ',
        '         ',
        '         ',
        '         ',
      ],
      key: {
        A: {
          item: 'avaritia:neutron_ingot',
        },
        B: {
          item: 'extendedcrafting:the_ultimate_ingot',
        },
        C: {
          item: 'avaritia:infinity_catalyst',
        },
        D: {
          item: 'minecraft:amethyst_cluster',
        },
        E: {
          item: 'projectexpansion:white_matter',
        },
        F: {
          item: 'voidminers:rosarium',
        },
        G: {
          item: 'evolvedmekanism:ingot_better_gold',
        },
      },
      result: {
        item: 'avaritia:infinity_ingot',
      },
    })
    .id('avaritia:infinity_ingot');
});
