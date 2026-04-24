ServerEvents.recipes((event) => {
  //Compressed Wind Generator x8
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      tier: 2,
      pattern: ['ABC', 'BDB', 'CBA'],
      key: {
        A: {
          item: 'mekanismgenerators:turbine_casing',
        },
        B: {
          item: 'compactmekanismmachines:compressed_wind_generator_x2',
        },
        C: {
          item: 'mekanism:alloy_infused',
        },
        D: {
          item: 'mekanism:alloy_reinforced',
        },
      },
      result: {
        item: 'compactmekanismmachines:compressed_wind_generator_x8',
      },
    })
    .id('compactmekanismmachines:compressed_wind_generator_x8');
});
