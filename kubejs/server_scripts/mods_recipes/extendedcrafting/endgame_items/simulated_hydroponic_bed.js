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
          item: 'advancednetherite:netherite_diamond_hoe',
        },
        J: {
          item: 'mysticalagriculture:supremium_farmland',
        },
        K: {
          item: 'twilightforest:ironwood_hoe',
        },
        L: {
          item: 'mysticalagriculture:fertilized_essence',
        },
        M: {
          item: 'minecraft:netherite_hoe',
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
          item: 'mekanismtools:refined_glowstone_hoe',
        },
        S: {
          item: 'thermal_extra:signalum_hoe',
        },
        T: {
          item: 'mysticalagriculture:imperium_farmland',
        },
        U: {
          item: 'ender_dragon_loot:dragon_hoe',
        },
        V: {
          item: 'cyclic:crystal_hoe',
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
