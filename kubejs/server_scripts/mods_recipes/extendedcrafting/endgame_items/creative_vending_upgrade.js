ServerEvents.recipes((event) => {
  //Creative Vending Upgrade
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCDEFCGA',
        'HCIEJEKCL',
        'CIAJMJAKC',
        'NOJPQPJOR',
        'OJSQTQSJO',
        'ROJPQPJON',
        'CKUJMJUIC',
        'VCKEJEICW',
        'UXCFEDCYU',
      ],
      key: {
        A: {
          item: 'botanicalextramachinery:shadow_dragonstone_block',
        },
        B: {
          item: 'twilightforest:glass_sword'
        },
        C: {
          item: 'mekanism:creative_bin',
        },
        D: {
          item: 'botania:dice',
        },
        E: {
          item: 'mekanism_extras:alloy_spectrum',
        },
        F: {
          item: 'botanicalextramachinery:greenhouse',
        },
        G: {
          item: 'twilightforest:snow_queen_trophy',
        },
        H: {
          item: 'woot_revived:netherite_shard',
        },
        I: {
          item: 'avaritia:enhancement_core',
        },
        J: {
          item: 'kubejs:infinity_12',
        },
        K: {
          item: 'draconicevolution:chaotic_core',
        },
        L: {
          item: 'custom_capacitors:ultimate_capacitor',
        },
        M: {
          item: 'extendedae_plus:infinity_biginteger_cell',
        },
        N: {
          item: 'botanicalextramachinery:crimson_spark',
        },
        O: {
          item: 'evolvedmekanism:alloy_exoversal',
        },
        P: {
          item: 'voidminers:ultimate_stellar_core',
        },
        Q: {
          item: 'evolvedmekanism:alloy_creative',
        },
        R: {
          item: 'projectexpansion:fading_matter',
        },
        S: {
          item: 'crazyae2addons:super_singularity_block',
        },
        T: {
          item: 'functionalstorage:storage_controller',
        },
        U: {
          item: 'botanicalextramachinery:crimson_dragonstone_block',
        },
        V: {
          item: 'nuclearcraft:xenorium_298',
        },
        W: {
          item: 'pneumaticcraft:smooth_plastic_brick_purple',
        },
        X: {
          item: 'cataclysm:essence_of_the_storm',
        },
        Y: {
          item: 'occultism:miner_marid_master',
        },
      },
      result: {
        item: 'functionalstorage:creative_vending_upgrade',
      },
    })
    .id('functionalstorage:creative_vending_upgrade');
});
