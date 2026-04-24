ServerEvents.recipes((event) => {
  //Creative Essence
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AABBBBBAA',
        'ABCCCCCBA',
        'BDEFGFEHB',
        'BDFIJIFHB',
        'BDGJKJGHB',
        'BDFIJIFHB',
        'BDEFGFEHB',
        'ABLLLLLBA',
        'AABBBBBAA',
      ],
      key: {
        A: {
          item: 'mysticalagriculture:supremium_essence',
        },
        B: {
          item: 'mysticalagriculture:imperium_essence',
        },
        C: {
          item: 'mysticalexpansion:extremium_essence',
        },
        D: {
          item: 'mysticalexpansion:etherium_essence',
        },
        E: {
          item: 'mysticalagriculture:dragon_egg_essence',
        },
        F: {
          item: 'mysticalagriculture:draconium_essence',
        },
        G: {
          item: 'draconicevolution:chaotic_core',
        },
        H: {
          item: 'mysticalexpansion:divinium_essence',
        },
        I: {
          item: 'mysticalagriculture:nether_star_essence',
        },
        J: {
          item: 'mysticalagriculture:netherite_essence',
        },
        K: {
          item: 'mysticalagriculture:master_infusion_crystal',
        },
        L: {
          item: 'mysticalagradditions:insanium_essence',
        },
      },
      result: {
        item: 'mysticalagradditions:creative_essence',
      },
    })
    .id('mysticalagradditions:creative_essence');
});
