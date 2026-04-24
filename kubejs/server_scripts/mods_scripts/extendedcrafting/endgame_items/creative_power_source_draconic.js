ServerEvents.recipes((event) => {
  //Creative Power Source Draconic Evolution
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABACDEFGA',
        'GAGHDIGAB',
        'FGJHKHEGA',
        'EIHLMNHHO',
        'DDPQRSPDD',
        'UHHVWXHIE',
        'AGEHYHJGF',
        'BAGIDHGAG',
        'AGFEDZABA',
      ],
      key: {
        A: {
          item: 'draconicevolution:awakened_draconium_block',
        },
        B: {
          item: 'draconicevolution:chaos_shard',
        },
        C: {
          item: 'draconicadditions:inert_potato_helm',
        },
        D: {
          item: 'draconicevolution:chaotic_core',
        },
        E: {
          item: 'draconicevolution:draconic_wireless_crystal',
        },
        F: {
          item: 'kubejs:chaotic_capacitor',
        },
        G: {
          item: 'kubejs:infinity_12',
        },
        H: {
          item: 'avaritia:infinity_ingot',
        },
        I: {
          item: 'draconicevolution:chaotic_crafting_injector',
        },
        J: {
          item: 'draconicevolution:chaos_shard',
        },
        K: {
          item: 'draconicevolution:reactor_stabilizer',
        },
        L: {
          item: 'kubejs:chaotic_sword',
        },
        M: {
          item: 'kubejs:chaotic_pickaxe',
        },
        N: {
          item: 'kubejs:chaotic_axe',
        },
        O: {
          item: 'draconicadditions:inert_potato_chest',
        },
        P: {
          item: 'kubejs:chaotic_necklace',
        },
        Q: {
          item: 'kubejs:chaotic_staff',
        },
        R: {
          item: 'draconicevolution:reactor_core',
        },
        S: {
          item: 'kubejs:chaotic_chestpiece',
        },
        U: {
          item: 'draconicadditions:inert_potato_legs',
        },
        V: {
          item: 'kubejs:chaotic_shovel',
        },
        W: {
          item: 'kubejs:chaotic_hoe',
        },
        X: {
          item: 'kubejs:chaotic_bow',
        },
        Y: {
          item: 'draconicevolution:reactor_injector',
        },
        Z: {
          item: 'draconicadditions:inert_potato_boots',
        },
      },
      result: {
        item: 'draconicevolution:creative_op_capacitor',
      },
    })
    .id('draconicevolution:creative_op_capacitor');
});