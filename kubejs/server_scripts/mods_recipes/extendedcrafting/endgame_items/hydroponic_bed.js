ServerEvents.recipes((event) => {
  // Hydroponic Bed
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCDCBA',
        'BAEFGAB',
        'HEIJIGH',
        'BFKLMFB',
        'HGINIEH',
        'BAGFEAB',
        'ABCOCBA',
      ],
      key: {
        A: {
          tag: 'forge:plastic',
        },
        B: {
          item: 'advancednetherite:netherite_diamond_ingot',
        },
        C: {
          item: 'enderio:energized_gear',
        },
        D: {
          item: 'industrialforegoing:water_condensator',
        },
        E: {
          item: 'evolvedmekanism:alloy_singular',
        },
        F: {
          item: 'ifeu:sculk_gear',
        },
        G: {
          item: 'mekanism_extras:alloy_shining',
        },
        H: {
          item: 'enderio:vibrant_gear',
        },
        I: {
          item: 'minecraft:farmland',
        },
        J: {
          item: 'minecraft:stone_hoe',
        },
        K: {
          item: 'minecraft:wooden_hoe',
        },
        L: {
          item: 'industrialforegoing:machine_frame_supreme',
        },
        M: {
          item: 'minecraft:iron_hoe',
        },
        N: {
          item: 'minecraft:golden_hoe',
        },
        O: {
          item: 'nuclearcraft:compact_water_collector',
        },
      },
      result: {
        item: 'industrialforegoing:hydroponic_bed',
      },
    })
    .id('industrialforegoing:hydroponic_bed');
});
