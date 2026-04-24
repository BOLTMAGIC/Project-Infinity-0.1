ServerEvents.recipes((event) => {
  //Nitro Crystal Seeds
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AABBCBBAA',
        'AADCECFAA',
        'BGHIIIHJB',
        'BKILLLIMB',
        'KEILNLIEM',
        'BKILLLIMB',
        'BJHIIIHGB',
        'AAFOEODAA',
        'AABBOBBAA',
      ],
      key: {
        A: {
          item: 'mysticalagradditions:insanium_essence',
        },
        B: {
          item: 'extendedcrafting:enhanced_ender_ingot',
        },
        C: {
          item: 'powah:spirited_crystal_block',
        },
        D: {
          item: 'powah:ender_gate_nitro',
        },
        E: {
          item: 'minecraft:redstone_block',
        },
        F: {
          item: 'extendedcrafting:flux_star',
        },
        G: {
          item: 'botania:terrasteel_ingot',
        },
        H: {
          item: 'draconicevolution:chaotic_core',
        },
        I: {
          item: 'avaritia:neutron_ingot',
        },
        J: {
          item: 'botania:elementium_ingot',
        },
        K: {
          item: 'powah:energized_steel_block',
        },
        L: {
          item: 'powah:nitro_crystal_block',
        },
        M: {
          item: 'powah:niotic_crystal_block',
        },
        N: {
          item: 'kubejs:tier6_crafting_seed',
        },
        O: {
          item: 'powah:blazing_crystal_block',
        },
      },
      result: {
        item: 'mysticalagriculture:nitro_crystal_seeds',
      },
    })
    .id('mysticalagriculture:nitro_crystal_seeds');
});
