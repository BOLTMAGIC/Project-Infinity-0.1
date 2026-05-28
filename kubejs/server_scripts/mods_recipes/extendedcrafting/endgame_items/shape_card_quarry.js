ServerEvents.recipes((event) => {
  //Digital Miner
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCDEFA',
        'FGHIHGB',
        'EHJKJHC',
        'DIKLKID',
        'CHJKJHE',
        'BGHIHGF',
        'AFEDCBA',
      ],
      key: {
        A: {
          item: 'advancednetherite:netherite_diamond_shovel',
        },
        B: {
          item: 'minecraft:iron_block',
        },
        C: {
          item: 'rftoolsdim:common_essence',
        },
        D: {
          item: 'rftoolsbase:infused_enderpearl',
        },
        E: {
          item: 'rftoolsdim:rare_essence',
        },
        F: {
          item: 'minecraft:redstone_block',
        },
        G: {
          item: 'advancednetherite:netherite_diamond_pickaxe',
        },
        H: {
          item: 'rftoolsbase:dimensionalshard',
        },
        I: {
          item: 'rftoolsbase:infused_diamond',
        },
        J: {
          item: 'rftoolsdim:legendary_essence',
        },
        K: {
          item: 'rftoolsbuilder:shape_card_def',
        },
        L: {
          item: 'advancednetherite:netherite_diamond_block',
        },
      },
      result: {
        item: 'rftoolsbuilder:shape_card_quarry',
      },
    })
    .id('rftoolsbuilder:shape_card_quarry');
});
