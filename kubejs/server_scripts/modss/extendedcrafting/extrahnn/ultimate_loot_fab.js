ServerEvents.recipes((event) => {
  //Ultimate Loot Fabricator
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: ['ABABA', 'BCCCB', 'ADADA', 'BDEDB', 'ABEBA'],
      key: {
        A: {
          item: 'hostilenetworks:prediction_matrix',
        },
        B: {
          item: 'minecraft:netherite_ingot',
        },
        C: {
          item: 'hostilenetworks:loot_fabricator',
        },
        D: {
          item: 'minecraft:diamond',
        },
        E: {
          item: 'minecraft:redstone_block',
        },
      },
      result: {
        item: 'extrahnn:ultimate_loot_fabricator_v1',
      },
    })
    .id('extrahnn:ultimate_loot_fabricator_v1');
});
