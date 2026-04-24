ServerEvents.recipes((event) => {
  //Unobtainium Seeds
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AABBCBBAA',
        'AADEFEGAA',
        'BHIJJJKHB',
        'BHJLLLJHB',
        'MFJLNLJFO',
        'BHJLLLJHB',
        'BHPJJJQHB',
        'AAGEFEDAA',
        'AABBRBBAA',
      ],
      key: {
        A: {
          item: 'mysticalagradditions:insanium_essence',
        },
        B: {
          item: 'extendedcrafting:enhanced_ender_ingot',
        },
        C: {
          item: 'allthemodium:unobtainium_chestplate',
        },
        D: {
          item: 'allthemodium:piglich_heart',
        },
        E: {
          item: 'kubejs:infinity_4',
        },
        F: {
          item: 'bloodmagic:ingot_hellforged',
        },
        G: {
          item: 'allthemodium:unobtainium_ore',
        },
        H: {
          item: 'projectexpansion:cyan_matter',
        },
        I: {
          item: 'mutantmonsters:hulk_hammer',
        },
        J: {
          item: 'avaritia:neutron_ingot',
        },
        K: {
          item: 'mutantmonsters:creeper_shard',
        },
        L: {
          item: 'allthemodium:unobtainium_ingot',
        },
        M: {
          item: 'allthemodium:unobtainium_helmet',
        },
        N: {
          item: 'kubejs:tier6_crafting_seed',
        },
        O: {
          item: 'allthemodium:unobtainium_leggings',
        },
        P: {
          item: 'mutantmonsters:endersoul_hand',
        },
        Q: {
          item: 'mutantmonsters:creeper_minion_tracker',
        },
        R: {
          item: 'allthemodium:unobtainium_boots',
        },
      },
      result: {
        item: 'mysticalagriculture:unobtainium_seeds',
      },
    })
    .id('mysticalagriculture:unobtainium_seeds');
});
