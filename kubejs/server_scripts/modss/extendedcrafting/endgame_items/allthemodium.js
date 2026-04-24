ServerEvents.recipes((event) => {
  //Allthemodium Ingot
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: ['ABCBA', 'DABAD', 'CDEDC', 'DABAD', 'ABCBA'],
      key: {
        A: {
          item: 'thermal_extra:soul_infused_ingot',
        },
        B: {
          item: 'redstone_arsenal:flux_ingot',
        },
        C: {
          item: 'enderio:energetic_alloy_ingot',
        },
        D: {
          item: 'mekanism:ingot_refined_glowstone',
        },
        E: {
          item: 'powah:crystal_nitro',
        },
      },
      result: {
        item: 'allthemodium:allthemodium_ingot',
      },
    })
    .id('allthemodium:allthemodium_ingot');
});
