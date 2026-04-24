ServerEvents.recipes((event) => {
  //Refined Storage Creative Fluid Storage Disk
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AABCDCBAA',
        'AEBFGFBEA',
        'BBBHIHBBB',
        'IGBJKJBGI',
        'DBIKLKIBD',
        'IGBJKJBGI',
        'BBBHIHBBB',
        'AEBFGFBEA',
        'AABCDCBAA',
      ],
      key: {
        A: {
          item: 'projectexpansion:fading_matter',
        },
        B: {
          item: 'kubejs:infinity_12',
        },
        C: {
          item: 'pneumaticcraft:capacitor',
        },
        D: {
          item: 'avaritia:endest_pearl',
        },
        E: {
          item: 'extrastorage:disk_1048576k_fluid',
        },
        F: {
          item: 'pneumaticcraft:printed_circuit_board',
        },
        G: {
          item: 'evolvedmekanism:alloy_creative',
        },
        H: {
          item: 'pneumaticcraft:transistor',
        },
        I: {
          item: 'ironfurnaces:million_furnace',
        },
        J: {
          item: 'projecte:condenser_mk2',
        },
        K: {
          item: 'industrialforegoing:supreme_black_hole_tank',
        },
        L: {
          item: 'extrastorage:storagepart_1048576k_fluid',
        },
      },
      result: {
        item: 'refinedstorage:creative_fluid_storage_disk',
      },
    })
    .id('refinedstorage:creative_fluid_storage_disk');
});
