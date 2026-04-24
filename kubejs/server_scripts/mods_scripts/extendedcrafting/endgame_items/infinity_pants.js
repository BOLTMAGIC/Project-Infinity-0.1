ServerEvents.recipes((event) => {
  //Infinity Armor Leggings
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AAAAAAAAA',
        'ABBBCBBBA',
        'ABDECFGBA',
        'ABAHIJABA',
        'AKALMNAOA',
        'ABAPQRABA',
        'ABASTUABA',
        'ABAVWXABA',
        'AAAYZaAAA',
      ],
      key: {
        A: {
          item: 'avaritia:neutron_ingot',
        },
        B: {
          item: 'avaritia:infinity_ingot',
        },
        C: {
          item: 'avaritia:infinity_catalyst',
        },
        D: {
          item: 'dimensionalpocketsii:dimensional_leggings',
        },
        E: {
          item: 'dimensionalpocketsii:dimensional_leggings_enhanced',
        },
        F: {
          item: 'armorplus:infused_lava_leggings',
        },
        G: {
          item: 'advanced_ae:quantum_leggings',
        },
        H: {
          item: 'mysticalagriculture:inferium_leggings',
        },
        I: {
          item: 'kubejs:infinity_12',
        },
        J: {
          item: 'mysticalagriculture:tertium_leggings',
        },
        K: {
          item: 'projecte:dm_leggings',
        },
        L: {
          item: 'mysticalagriculture:imperium_leggings',
        },
        M: {
          item: 'mysticalagriculture:supremium_leggings',
        },
        N: {
          item: 'mysticalagriculture:awakened_supremium_leggings',
        },
        O: {
          item: 'projecte:rm_leggings',
        },
        P: {
          item: 'mysticaladaptations:insanium_leggings',
        },
        Q: {
          item: 'draconicadditions:inert_potato_legs',
        },
        R: {
          item: 'redstone_arsenal:flux_leggings',
        },
        S: {
          item: 'allthemodium:allthemodium_leggings',
        },
        T: {
          item: 'allthemodium:vibranium_leggings',
        },
        U: {
          item: 'allthemodium:unobtainium_leggings',
        },
        V: {
          item: 'twilightforest:fiery_leggings',
        },
        W: {
          item: 'armorplus:slayer_leggings',
        },
        X: {
          item: 'armorplus:ender_dragon_leggings',
        },
        Y: {
          item: 'born_in_chaos_v1:nightmare_mantleofthe_night_leggings',
        },
        Z: {
          item: 'cataclysm:ignitium_leggings',
        },
        a: {
          item: 'thermal:diving_leggings',
        },
      },
      result: {
        item: 'avaritia:infinity_pants',
      },
    })
    .id('avaritia:infinity_pants');
});
