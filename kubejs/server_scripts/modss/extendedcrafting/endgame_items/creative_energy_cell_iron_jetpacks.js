ServerEvents.recipes((event) => {
  //Creative Energy Cell Iron Jetpacks
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        ' ABBBA ',
        ' CDEDC ',
        ' CFEFC ',
        ' GCHCG ',
        ' CIJIC ',
        ' CKJKC ',
        ' ABBBA ',
      ],
      key: {
        A: {
          item: 'botanicalextramachinery:shadow_dragonstone_block',
        },
        B: {
          item: 'botanicalextramachinery:crimson_ingot',
        },
        C: {
          item: 'botanicalextramachinery:shadow_ingot',
        },
        D: {
          item: 'avaritia:crystal_matrix_ingot',
        },
        E: {
          type: 'forge:nbt',
          item: 'ironjetpacks:cell',
          count: 1,
          nbt: '{Id:\"ironjetpacks:platinum\"}',
        },
        F: {
          item: 'botanicalextramachinery:crystal_ingot_block',
        },
        G: {
          item: 'botanicalextramachinery:shadow_ingot_block',
        },
        H: {
          item: 'extendedcrafting:the_ultimate_ingot',
        },
        I: {
          item: 'botanicalextramachinery:malachite_ingot_block',
        },
        J: {
          type: 'forge:nbt',
          item: 'ironjetpacks:cell',
          count: 1,
          nbt: '{Id:\"ironjetpacks:emerald\"}',
        },
        K: {
          item: 'kubejs:infinity_9',
        },
      },
      result: {
        type: 'forge:nbt',
        item: 'ironjetpacks:cell',
        count: 1,
        nbt: '{Id:"ironjetpacks:creative"}',
      },
    })
    .id('creative_energy_cell_ironjetpacks');
});
