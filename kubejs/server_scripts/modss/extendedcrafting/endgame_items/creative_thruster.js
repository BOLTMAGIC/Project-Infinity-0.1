ServerEvents.recipes((event) => {
  //Creative Thruster
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        '  ABA  ',
        ' CDEDC ',
        'CFGGGFC',
        'AEHIHEA',
        'CFGGGFC',
        ' CDEDC ',
        '  JJJ  ',
      ],
      key: {
        A: {
          item: 'botanicalextramachinery:shadow_dragonstone',
        },
        B: {
          item: 'botanicalextramachinery:shadow_ingot_block',
        },
        C: {
          item: 'botanicalextramachinery:shadow_ingot',
        },
        D: {
          item: 'projectexpansion:pink_matter',
        },
        E: {
          item: 'botanicalextramachinery:shadow_spark',
        },
        F: {
          item: 'projectexpansion:purple_matter',
        },
        G: {
          item: 'ironjetpacks:ultimate_coil',
        },
        H: {
          item: 'kubejs:infinity_10',
        },
        I: {
          type: 'forge:nbt',
          item: 'ironjetpacks:cell',
          count: 1,
          nbt: '{Id:\"ironjetpacks:creative\"}',
        },
        J: {
          item: 'ironfurnaces:million_furnace',
        },
      },
      result: {
        type: 'forge:nbt',
        item: 'ironjetpacks:thruster',
        count: 1,
        nbt: '{Id:"ironjetpacks:creative"}',
      },
    })
    .id('creative_thruster_ironjetpacks_creative');
});
