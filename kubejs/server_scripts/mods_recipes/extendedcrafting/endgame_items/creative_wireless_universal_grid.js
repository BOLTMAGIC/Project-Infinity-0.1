ServerEvents.recipes((event) => {
  //Universal Grid Creative Wireless Universal Grid
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AAAAAAA',
        'ABBCDDA',
        'ABEFEDA',
        'ACGHICA',
        'AJEKELA',
        'AJJCLLA',
        'AAAAAAA',
      ],
      key: {
        A: {
          item: 'refinedstorage:quartz_enriched_iron_block',
        },
        B: {
          item: 'refinedstorage:basic_processor',
        },
        C: {
          item: 'extrastorage:block_16384k',
        },
        D: {
          item: 'refinedstorage:advanced_processor',
        },
        E: {
          item: 'kubejs:infinity_5',
        },
        F: {
          item: 'refinedstorageaddons:creative_wireless_crafting_grid',
        },
        G: {
          item: 'refinedstorage:creative_wireless_fluid_grid',
        },
        H: {
          item: 'universalgrid:wireless_universal_grid',
        },
        I: {
          item: 'refinedstorage:creative_wireless_grid',
        },
        J: {
          item: 'refinedstorage:improved_processor',
        },
        K: {
          item: 'refinedstorage:creative_wireless_crafting_monitor',
        },
        L: {
          item: 'extrastorage:neural_processor',
        },
      },
      result: {
        item: 'universalgrid:creative_wireless_universal_grid',
      },
    })
    .id('universalgrid:creative_wireless_universal_grid');
});
