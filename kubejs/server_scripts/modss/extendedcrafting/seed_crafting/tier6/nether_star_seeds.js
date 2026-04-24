ServerEvents.recipes((event) => {
  //Nether Star Seeds
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AABBCBBAA',
        'AADDEDDAA',
        'BFGGGGGFB',
        'BFGHIHGFB',
        'CEGIJIGEC',
        'BFGHIHGFB',
        'BFGGGGGFB',
        'AAKKEKKAA',
        'AABBCBBAA',
      ],
      key: {
        A: {
          item: 'mysticalagradditions:insanium_essence',
        },
        B: {
          item: 'extendedcrafting:enhanced_ender_ingot',
        },
        C: {
          item: 'botania:pinkinator',
        },
        D: {
          item: 'mysticalagriculture:witherproof_glass',
        },
        E: {
          item: 'enderio:reinforced_obsidian_block',
        },
        F: {
          item: 'mysticalagriculture:witherproof_bricks',
        },
        G: {
          item: 'avaritia:neutron_ingot',
        },
        H: {
          item: 'minecraft:nether_star',
        },
        I: {
          item: 'mysticalagradditions:withering_soul',
        },
        J: {
          item: 'kubejs:tier6_crafting_seed',
        },
        K: {
          item: 'mysticalagriculture:witherproof_block',
        },
      },
      result: {
        item: 'mysticalagriculture:nether_star_seeds',
      },
    })
    .id('mysticalagriculture:nether_star_seeds');
});
