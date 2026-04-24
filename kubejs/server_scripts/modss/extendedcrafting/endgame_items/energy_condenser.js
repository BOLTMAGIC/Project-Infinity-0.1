ServerEvents.recipes((event) => {
  //Energy Condenser
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCDEDCBA',
        'BFGHHHGFB',
        'CGIJFJIGC',
        'DHJJKJJHD',
        'EHFKLKFHE',
        'DHJJKJJHD',
        'CGIJFJIGC',
        'BFGHHHGFB',
        'ABCDEDCBA',
      ],
      key: {
        A: {
          item: 'mysticalagradditions:insanium_ingot_block',
        },
        B: {
          item: 'silentgems:white_diamond',
        },
        C: {
          item: 'silentgems:black_diamond',
        },
        D: {
          item: 'rftoolsbase:infused_diamond',
        },
        E: {
          item: 'thermal:device_xp_condenser',
        },
        F: {
          item: 'common_ore_library:platinum_plate',
        },
        G: {
          item: 'projecte:dark_matter',
        },
        H: {
          item: 'draconicevolution:infused_obsidian',
        },
        I: {
          item: 'projectexpansion:pink_matter',
        },
        J: {
          item: 'actuallyadditions:empowered_emeradic_crystal',
        },
        K: {
          item: 'ae2:condenser',
        },
        L: {
          item: 'projecte:alchemical_chest',
        },
      },
      result: {
        item: 'projecte:condenser_mk1',
      },
    })
    .id('extreme_projecte:condenser_mk1');
});
