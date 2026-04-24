ServerEvents.recipes((event) => {
  //Creative Personal Chest
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCCDCA',
        'CCEKGCB',
        'DGHKJEC',
        'CKKMKKC',
        'CEJKHGD',
        'BCGKECC',
        'ACDCCBA',
      ],
      key: {
        A: {
          item: 'evolvedmekanism:multiversal_personal_chest',
        },
        B: {
          item: 'evolvedmekanism:alloy_exoversal',
        },
        C: {
          item: 'thermal:steel_block',
        },
        D: {
          item: 'evolvedmekanism:alloy_creative',
        },
        E: {
          item: 'kubejs:infinity_10',
        },
        G: {
          item: 'evolvedmekanism:block_plaslitherite',
        },
        H: {
          item: 'avaritia:infinity_ingot',
        },
        J: {
          item: 'mysticalagradditions:creative_essence',
        },
        K: {
          type: 'forge:nbt',
          item: 'sophisticatedstorage:netherite_chest',
          count: 1,
          nbt: '{woodType:\"oak\"}',
        },
        M: {
          item: 'evolvedmekanism:multiversal_control_circuit',
        },
      },
      result: {
        item: 'evolvedmekanism:creative_personal_chest',
      },
    })
    .id('evolvedmekanism:creative_personal_chest');
});
