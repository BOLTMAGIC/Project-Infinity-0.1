ServerEvents.recipes((event) => {
  //Allthemodium Seeds
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AABBCBBAA',
        'AADEFGHAA',
        'BIJKLKMIB',
        'BIKNNNKIB',
        'COKNPNKQC',
        'BIKNNNKIB',
        'BIRKKKSIB',
        'AAHTUVDAA',
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
          item: 'kubejs:infinity_4',
        },
        D: {
          item: 'mysticalagriculture:awakened_supremium_furnace',
        },
        E: {
          item: 'twilightforest:naga_trophy',
        },
        F: {
          item: 'allthemodium:allthemodium_chestplate',
        },
        G: {
          item: 'twilightforest:lich_trophy',
        },
        H: {
          item: 'allthemodium:allthemodium_ore',
        },
        I: {
          item: 'projectexpansion:purple_matter',
        },
        J: {
          item: 'twilightforest:snow_queen_trophy',
        },
        K: {
          item: 'avaritia:neutron_ingot',
        },
        L: {
          item: 'twilightforest:quest_ram_trophy',
        },
        M: {
          item: 'twilightforest:minoshroom_trophy',
        },
        N: {
          item: 'allthemodium:allthemodium_ingot',
        },
        O: {
          item: 'allthemodium:allthemodium_helmet',
        },
        P: {
          item: 'kubejs:tier6_crafting_seed',
        },
        Q: {
          item: 'allthemodium:allthemodium_leggings',
        },
        R: {
          item: 'twilightforest:alpha_yeti_trophy',
        },
        S: {
          item: 'twilightforest:hydra_trophy',
        },
        T: {
          item: 'twilightforest:ur_ghast_trophy',
        },
        U: {
          item: 'allthemodium:allthemodium_boots',
        },
        V: {
          item: 'twilightforest:knight_phantom_trophy',
        },
      },
      result: {
        item: 'mysticalagriculture:allthemodium_seeds',
      },
    })
    .id('mysticalagriculture:allthemodium_seeds');
});
