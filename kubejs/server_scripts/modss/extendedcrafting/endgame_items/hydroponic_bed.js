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
          type: 'forge:nbt',
          item: 'minecraft:stone_hoe',
          count: 1,
          nbt: '{Damage:0}',
        },
        K: {
          type: 'forge:nbt',
          item: 'minecraft:wooden_hoe',
          count: 1,
          nbt: '{Damage:0}',
        },
        L: {
          item: 'industrialforegoing:machine_frame_supreme',
        },
        M: {
          type: 'forge:nbt',
          item: 'minecraft:iron_hoe',
          count: 1,
          nbt: '{Damage:0}',
        },
        N: {
          type: 'forge:nbt',
          item: 'minecraft:golden_hoe',
          count: 1,
          nbt: '{Damage:0}',
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
