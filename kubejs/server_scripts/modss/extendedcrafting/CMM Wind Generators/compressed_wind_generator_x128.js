ServerEvents.recipes((event) => {
  //Compressed Wind Generator x128
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: ['ABCBA', 'BDEFB', 'CEGEC', 'HFEFH', 'AHCHA'],
      key: {
        A: {
          item: 'mekanism:alloy_atomic',
        },
        B: {
          item: 'mekanism:alloy_infused',
        },
        C: {
          item: 'mekanism:enriched_iron',
        },
        D: {
          item: 'compactmekanismmachines:compressed_wind_generator_x32',
        },
        E: {
          item: 'voidminers:aurantium',
        },
        F: {
          item: 'compactmekanismmachines:compressed_wind_generator_x32',
        },
        G: {
          item: 'mekanism:elite_tier_installer',
        },
        H: {
          item: 'mekanism:alloy_reinforced',
        },
      },
      result: {
        item: 'compactmekanismmachines:compressed_wind_generator_x128',
      },
    })
    .id('compactmekanismmachines:compressed_wind_generator_x128');
});
