ServerEvents.recipes((event) => {
  //Refined Storage Creative Wireless Crafting Monitor
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AAAAAAA',
        'ABBCDDA',
        'ABEFEDA',
        'ACFGFCA',
        'AHEFEIA',
        'AHHCIIA',
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
          item: 'extrastorage:block_4096k',
        },
        D: {
          item: 'refinedstorage:advanced_processor',
        },
        E: {
          item: 'kubejs:infinity_4',
        },
        F: {
          item: 'refinedstorage:crafting_monitor',
        },
        G: {
          item: 'refinedstorage:wireless_crafting_monitor',
        },
        H: {
          item: 'refinedstorage:improved_processor',
        },
        I: {
          item: 'extrastorage:neural_processor',
        },
      },
      result: {
        item: 'refinedstorage:creative_wireless_crafting_monitor',
      },
    })
    .id('refinedstorage:creative_wireless_crafting_monitor');
});
