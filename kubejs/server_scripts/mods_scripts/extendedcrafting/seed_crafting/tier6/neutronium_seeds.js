ServerEvents.recipes((event) => {
  //Neutronium Seeds
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AABBCBBAA',
        'AADDDDDAA',
        'BDEFGFEDB',
        'BDFHIHFDB',
        'JDGIKIGDL',
        'BDFHIHFDB',
        'BDEFGFEDB',
        'AADDDDDAA',
        'AABBMBBAA',
      ],
      key: {
        A: {
          item: 'mysticalagradditions:insanium_essence',
        },
        B: {
          item: 'extendedcrafting:enhanced_ender_ingot',
        },
        C: {
          item: 'draconicadditions:chaos_heart',
        },
        D: {
          item: 'nuclearcraft:hsla_steel_ingot',
        },
        E: {
          item: 'thermal:enderium_ingot',
        },
        F: {
          item: 'pneumaticcraft:crop_support',
        },
        G: {
          item: 'advancednetherite:netherite_diamond_block',
        },
        H: {
          item: 'avaritia:neutron_nugget',
        },
        I: {
          item: 'avaritia:neutron_ingot',
        },
        J: {
          item: 'armorplus:the_ultimate_material',
        },
        K: {
          item: 'kubejs:tier6_crafting_seed',
        },
        L: {
          item: 'botania:corporea_index',
        },
        M: {
          item: 'born_in_chaos_v1:lifestealer_skull',
        },
      },
      result: {
        item: 'mysticalagriculture:neutronium_seeds',
      },
    })
    .id('mysticalagriculture:neutronium_seeds');
});
