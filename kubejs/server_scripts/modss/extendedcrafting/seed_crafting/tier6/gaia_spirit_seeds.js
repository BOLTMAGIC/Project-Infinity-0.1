ServerEvents.recipes((event) => {
  //Gaia Spirit Seeds
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AABBCBBAA',
        'AADEFGHAA',
        'BIJKKKLMB',
        'BNKOOOKNB',
        'PQKOROKST',
        'BNKOOOKNB',
        'BMLKKKJUB',
        'AAVGFEWAA',
        'AABBXBBAA',
      ],
      key: {
        A: {
          item: 'mysticalagradditions:insanium_essence',
        },
        B: {
          item: 'extendedcrafting:enhanced_ender_ingot',
        },
        C: {
          item: 'botania:odin_ring',
        },
        D: {
          item: 'botania:quartz_mana',
        },
        E: {
          item: 'kubejs:starmetal_ingot',
        },
        F: {
          item: 'botania:corporea_spark',
        },
        G: {
          item: 'botania:ender_air_bottle',
        },
        H: {
          item: 'botania:lexicon',
        },
        I: {
          item: 'botania:quartz_blaze',
        },
        J: {
          item: 'botania:gaia_pylon',
        },
        K: {
          item: 'avaritia:neutron_ingot',
        },
        L: {
          item: 'botania:gaia_spreader',
        },
        M: {
          item: 'cataclysm:witherite_ingot',
        },
        N: {
          item: 'kubejs:infinity_4',
        },
        O: {
          item: 'botania:gaia_ingot',
        },
        P: {
          item: 'botania:thor_ring',
        },
        Q: {
          item: 'botania:quartz_sunny',
        },
        R: {
          item: 'kubejs:tier6_crafting_seed',
        },
        S: {
          item: 'botania:quartz_elven',
        },
        T: {
          item: 'botania:loki_ring',
        },
        U: {
          item: 'botania:quartz_red',
        },
        V: {
          item: 'botania:lexicon',
        },
        W: {
          item: 'botania:quartz_lavender',
        },
        X: {
          item: 'botania:pixie_ring',
        },
      },
      result: {
        item: 'mysticalagriculture:gaia_spirit_seeds',
      },
    })
    .id('mysticalagriculture:gaia_spirit_seeds');
});
