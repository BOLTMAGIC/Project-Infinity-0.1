ServerEvents.recipes((event) => {
  //Dark Metal Ingot Seeds
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AABBCBBAA',
        'AADEFEGAA',
        'BEHIIIJEB',
        'BEIKKKIEB',
        'LMIKNKIOP',
        'BEIKKKIEB',
        'BEJIIIHEB',
        'AADEQEGAA',
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
          item: 'born_in_chaos_v1:lord_pumpkinheads_hat_helmet',
        },
        D: {
          item: 'born_in_chaos_v1:seedof_chaos',
        },
        E: {
          item: 'mysticalagriculture:awakened_supremium_ingot',
        },
        F: {
          item: 'born_in_chaos_v1:lifestealer_skull',
        },
        G: {
          item: 'born_in_chaos_v1:ethereal_spirit',
        },
        H: {
          item: 'born_in_chaos_v1:fel_soil',
        },
        I: {
          item: 'avaritia:neutron_ingot',
        },
        J: {
          item: 'born_in_chaos_v1:armor_plate_from_dark_metal',
        },
        K: {
          item: 'born_in_chaos_v1:dark_metal_block',
        },
        L: {
          item: 'born_in_chaos_v1:damned_demomans_hat_helmet',
        },
        M: {
          item: 'born_in_chaos_v1:orbofthe_summoner',
        },
        N: {
          item: 'kubejs:tier6_crafting_seed',
        },
        O: {
          item: 'born_in_chaos_v1:lord_pumpkinheads_lamp',
        },
        P: {
          item: 'born_in_chaos_v1:missionary_hat_helmet',
        },
        Q: {
          item: 'born_in_chaos_v1:nightmare_stalker_skull',
        },
        R: {
          item: 'born_in_chaos_v1:spiritual_guide_sombrero_helmet',
        },
      },
      result: {
        item: 'mysticalagriculture:dark_metal_ingot_seeds',
      },
    })
    .id('mysticalagriculture:dark_metal_ingot_seeds');
});
