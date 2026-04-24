ServerEvents.recipes((event) => {
  //Creative Solar Element
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AAAAAAA',
        'ABBBBBA',
        'ABCCCBA',
        'ABCDCBA',
        'ABCCCBA',
        'ABBBBBA',
        'AAAAAAA',
      ],
      key: {
        A: {
          item: 'solarpanels:photonic_solar_element',
        },
        B: {
          item: 'evolvedmekanism:enriched_better_gold',
        },
        C: {
          item: 'evolvedmekanism:alloy_creative',
        },
        D: {
          item: 'voidminers:verdium',
        },
      },
      result: {
        item: 'solarpanels:creative_solar_element',
      },
    })
    .id('solarpanels:creative_solar_element');
});
