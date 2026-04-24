ServerEvents.recipes((event) => {
  //Simulated Hydroponic Bed
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCDADEBA',
        'BCFGDGFEB',
        'CFHIJKHFE',
        'DLMJHNOLD',
        'ADJHPHQDA',
        'DLRNHQSLD',
        'TFHUQVHFW',
        'BTFGDGFWB',
        'ABTDADWBA',
      ],
      key: {
        A: {
          item: 'ifeu:hydroponic_simulation_processor',
        },
        B: {
          tag: 'forge:plastic',
        },
        C: {
          item: 'mysticalagriculture:inferium_farmland',
        },
        D: {
          item: 'thermal:compost',
        },
        E: {
          item: 'mysticalagriculture:prudentium_farmland',
        },
        F: {
          item: 'botania:fertilizer',
        },
        G: {
          item: 'industrialforegoing:fertilizer',
        },
        H: {
          item: 'ifeu:dragon_star',
        },
        I: {
          type: 'forge:nbt',
          item: 'advancednetherite:netherite_diamond_hoe',
          count: 1,
          nbt: '{Damage:0}',
        },
        J: {
          item: 'mysticalagriculture:supremium_farmland',
        },
        K: {
          type: 'forge:nbt',
          item: 'twilightforest:ironwood_hoe',
          count: 1,
          nbt: '{Damage:0,Enchantments:[{id:"minecraft:efficiency",lvl:1s}]}',
        },
        L: {
          item: 'mysticalagriculture:fertilized_essence',
        },
        M: {
          type: 'forge:nbt',
          item: 'minecraft:netherite_hoe',
          count: 1,
          nbt: '{Damage:0}',
        },
        N: {
          item: 'cyclic:soil',
        },
        O: {
          item: 'mysticalagriculture:supremium_hoe',
        },
        P: {
          item: 'industrialforegoing:hydroponic_bed',
        },
        Q: {
          item: 'mysticalagradditions:insanium_farmland',
        },
        R: {
          type: 'forge:nbt',
          item: 'mekanismtools:refined_glowstone_hoe',
          count: 1,
          nbt: '{Damage:0}',
        },
        S: {
          type: 'forge:nbt',
          item: 'thermal_extra:signalum_hoe',
          count: 1,
          nbt: '{Damage:0}',
        },
        T: {
          item: 'mysticalagriculture:imperium_farmland',
        },
        U: {
          type: 'forge:nbt',
          item: 'ender_dragon_loot:dragon_hoe',
          count: 1,
          nbt: '{Damage:0}',
        },
        V: {
          type: 'forge:nbt',
          item: 'cyclic:crystal_hoe',
          count: 1,
          nbt: '{Damage:0}',
        },
        W: {
          item: 'mysticalagriculture:tertium_farmland',
        },
      },
      result: {
        item: 'ifeu:simulated_hydroponic_bed',
      },
    })
    .id('ifeu:simulated_hydroponic_bed');
});
