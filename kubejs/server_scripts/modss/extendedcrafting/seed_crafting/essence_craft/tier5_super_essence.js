ServerEvents.recipes((event) => {
  //Tier 5 Super Essence
  event
    .custom({
      type: 'extendedcrafting:shapeless_table',
      ingredients: [
        {
          item: 'mysticalagriculture:supremium_essence',
        },
        {
          item: 'mysticalagriculture:iesnium_essence',
        },
        {
          item: 'mysticalagriculture:ignitium_essence',
        },
        {
          item: 'mysticalagriculture:sky_steel_essence',
        },
        {
          item: 'mysticalagriculture:diamond_essence',
        },
        {
          item: 'mysticalagriculture:emerald_essence',
        },
        {
          item: 'mysticalagriculture:netherite_essence',
        },
        {
          item: 'mysticalagriculture:wither_skeleton_essence',
        },
        {
          item: 'mysticalagriculture:platinum_essence',
        },
        {
          item: 'mysticalagriculture:iridium_essence',
        },
        {
          item: 'mysticalagriculture:enderium_essence',
        },
        {
          item: 'mysticalagriculture:flux_infused_gem_essence',
        },
        {
          item: 'mysticalagriculture:manyullyn_essence',
        },
        {
          item: 'mysticalagriculture:queens_slime_essence',
        },
        {
          item: 'mysticalagriculture:hepatizon_essence',
        },
        {
          item: 'mysticalagriculture:vibrant_alloy_essence',
        },
        {
          item: 'mysticalagriculture:end_steel_essence',
        },
        {
          item: 'mysticalagriculture:terrasteel_essence',
        },
        {
          item: 'mysticalagriculture:draconium_essence',
        },
        {
          item: 'mysticalagriculture:yellorium_essence',
        },
        {
          item: 'mysticalagriculture:cyanite_essence',
        },
        {
          item: 'mysticalagriculture:niotic_crystal_essence',
        },
        {
          item: 'mysticalagriculture:spirited_crystal_essence',
        },
        {
          item: 'mysticalagriculture:uraninite_essence',
        },
      ],
      result: {
        item: 'kubejs:tier5_super_essence',
      },
    })
    .id('kubejs:tier5_super_essence');
});
