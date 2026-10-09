ServerEvents.recipes((event) => {
  //Digital Miner
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCDCFA',
        'FGHIHGB',
        'CHCKCHC',
        'DIKLKID',
        'CHCKCHC',
        'BGHIHGF',
        'AFCDCBA',
      ],
      key: {
        A: {
          type: 'forge:partial_nbt',
          item: 'advancednetherite:netherite_diamond_shovel',
          count: 1,
          nbt: '{Damage:0}',
        },
        B: {
          item: 'minecraft:iron_block',
        },
        C: {
          item: 'minecraft:netherite_ingot',
        },
        D: {
          item: 'rftoolsbase:infused_enderpearl',
        },
        F: {
          item: 'minecraft:redstone_block',
        },
        G: {
          type: 'forge:partial_nbt',
          item: 'advancednetherite:netherite_diamond_pickaxe',
          count: 1,
          nbt: '{Damage:0}',
        },
        H: {
          item: 'rftoolsbase:dimensionalshard',
        },
        I: {
          item: 'rftoolsbase:infused_diamond',
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
