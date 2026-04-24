ServerEvents.recipes((event) => {
  //Vibranium Seeds
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AABBCBBAA',
        'AADEFEGAA',
        'BHIJJJIHB',
        'BHJKKKJHB',
        'LMJKNKJMO',
        'BHJKKKJHB',
        'BHIJJJIHB',
        'AAPEFEQAA',
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
          item: 'allthemodium:vibranium_chestplate',
        },
        D: {
          item: 'bosses_of_mass_destruction:obsidian_heart',
        },
        E: {
          item: 'bosses_of_mass_destruction:soul_star',
        },
        F: {
          item: 'allthemodium:vibranium_ore',
        },
        G: {
          item: 'bosses_of_mass_destruction:blazing_eye',
        },
        H: {
          item: 'projectexpansion:green_matter',
        },
        I: {
          item: 'kubejs:infinity_4',
        },
        J: {
          item: 'avaritia:neutron_ingot',
        },
        K: {
          item: 'allthemodium:vibranium_ingot',
        },
        L: {
          item: 'allthemodium:vibranium_helmet',
        },
        M: {
          item: 'enderio:vibrant_crystal',
        },
        N: {
          item: 'kubejs:tier6_crafting_seed',
        },
        O: {
          item: 'allthemodium:vibranium_leggings',
        },
        P: {
          item: 'bosses_of_mass_destruction:ancient_anima',
        },
        Q: {
          item: 'bosses_of_mass_destruction:void_thorn',
        },
        R: {
          item: 'allthemodium:vibranium_boots',
        },
      },
      result: {
        item: 'mysticalagriculture:vibranium_seeds',
      },
    })
    .id('mysticalagriculture:vibranium_seeds');
});
