ServerEvents.recipes((event) => {
  //Endest Pearl
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AAABCBDDE',
        'ABBFFFBBG',
        'ABFHIHFBG',
        'BFJKLMJFB',
        'CFILNLIFC',
        'BFJMLKJFB',
        'OBFHIHFBP',
        'OBBFFFBBP',
        'OOOBCBPPP',
      ],
      key: {
        A: {
          item: 'rftoolsbase:infused_diamond',
        },
        B: {
          item: 'ae2:fluix_pearl',
        },
        C: {
          item: 'actuallyadditions:empowered_emeradic_crystal',
        },
        D: {
          item: 'silentgems:white_diamond',
        },
        E: {
          item: 'minecraft:diamond',
        },
        F: {
          item: 'extendedcrafting:ender_star',
        },
        G: {
          item: 'silentgems:black_diamond',
        },
        H: {
          item: 'botania:mana_pearl',
        },
        I: {
          type: 'forge:nbt',
          item: 'gateways:gate_pearl',
          count: 1,
          nbt: '{gateway:"gateways:cataclysm_ender"}',
        },
        J: {
          item: 'rftoolsbase:infused_enderpearl',
        },
        K: {
          item: 'minecraft:tube_coral',
        },
        L: {
          item: 'exdeorum:sculk_core',
        },
        M: {
          item: 'dimensionalpocketsii:dimensional_pearl',
        },
        N: {
          type: 'forge:nbt',
          item: 'extendedcrafting:singularity',
          count: 1,
          nbt: '{Id:"extendedcrafting:abyssal_ingot"}',
        },
        O: {
          item: 'botania:mana_diamond',
        },
        P: {
          item: 'armorplus:en_diamond',
        },
      },
      result: {
        item: 'avaritia:endest_pearl',
      },
    })
    .id('avaritia:endest_pearl');
});
