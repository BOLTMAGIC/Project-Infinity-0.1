ServerEvents.recipes((event) => {
  //Infinity Mana Catalyst
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABBABBA',
        'BCCDCCB',
        'BCEFECB',
        'ADGHIDA',
        'BCJKLCB',
        'BCCDCCB',
        'ABBABBA',
      ],
      key: {
        A: {
          item: 'botanicalextramachinery:crimson_spark',
        },
        B: {
          item: 'botanicalextramachinery:crimson_dragonstone_block',
        },
        C: {
          item: 'botanicalextramachinery:crimson_ingot_block',
        },
        D: {
          item: 'botanicalextramachinery:upgrade_tick_gen_mana_2',
        },
        E: {
          item: 'botanicalextramachinery:ultimate_industrial_agglomeration_factory',
        },
        F: {
          item: 'botanicalextramachinery:ultimate_alfheim_market',
        },
        G: {
          item: 'botanicalextramachinery:ultimate_orechid',
        },
        H: {
          type: 'forge:nbt',
          item: 'extendedcrafting:singularity',
          count: 1,
          nbt: '{Id:\"extendedcrafting:elementium_ingot\"}',
        },
        I: {
          item: 'botanicalextramachinery:ultimate_daisy',
        },
        J: {
          item: 'botanicalextramachinery:ultimate_apothecary',
        },
        K: {
          item: 'botanicalextramachinery:ultimate_mana_pool',
        },
        L: {
          item: 'botanicalextramachinery:ultimate_runic_altar',
        },
      },
      result: {
        item: 'botanicalextramachinery:catalyst_mana_infinity',
      },
    })
    .id('botanicalextramachinery:catalyst_mana_infinity');
});
