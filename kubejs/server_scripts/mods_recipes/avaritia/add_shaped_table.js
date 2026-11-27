ServerEvents.recipes((event) => {
  //sculk_alloy_ingot
  event
    .custom({
      type: 'avaritia:shaped_table',
      category: 'misc',
      key: {
        A: {
          item: 'minecraft:obsidian',
        },
        B: {
          item: 'minecraft:echo_shard',
        },
        C: {
          item: 'minecraft:iron_ingot',
        },
        D: {
          item: 'apotheosis:warden_tendril',
        },
      },
      pattern: [' A ', 'BCB', ' D '],
      result: {
        item: 'kubejs:sculk_alloy_ingot',
      },
      show_notification: true,
      tier: 1,
    })
    .id('kubejs:sculk_alloy_ingot');

  //sculk_alloy_block
  event
    .custom({
      type: 'avaritia:shaped_table',
      category: 'misc',
      key: {
        A: {
          item: 'compressium:obsidian_1',
        },
        B: {
          item: 'minecraft:sculk',
        },
        C: {
          item: 'minecraft:iron_block',
        },
        D: {
          item: 'kubejs:compressed_warden_tendril',
        },
      },
      pattern: [' A ', 'BCB', ' D '],
      result: {
        item: 'kubejs:sculk_alloy_block',
      },
      show_notification: true,
      tier: 1,
    })
    .id('kubejs:sculk_alloy_block');

  //blaze_cube
  event.custom({
    type: 'avaritia:shaped_table',
    category: 'misc',
    key: {
      A: {
        item: 'advancednetherite:netherite_diamond_ingot',
      },
      B: {
        item: 'minecraft:nether_star',
      },
      C: {
        item: 'minecraft:fire_charge',
      },
      D: {
        item: 'voidminers:verdium',
      },
      E: {
        item: 'voidminers:citrinetine',
      },
      F: {
        item: 'allthemodium:vibranium_ingot',
      },
      G: {
        item: 'woot_revived:netherite_shard',
      },
      H: {
        item: 'minecraft:blaze_powder',
      },
      I: {
        item: 'minecraft:ancient_debris',
      },
      J: {
        item: 'voidminers:azurine',
      },
      K: {
        item: 'voidminers:caerium',
      },
    },
    pattern: ['ABCDA', 'EFGHB', 'CGIGC', 'BHGFJ', 'AKCBA'],
    result: {
      item: 'avaritia:blaze_cube',
    },
    show_notification: true,
    tier: 2,
  });
});
