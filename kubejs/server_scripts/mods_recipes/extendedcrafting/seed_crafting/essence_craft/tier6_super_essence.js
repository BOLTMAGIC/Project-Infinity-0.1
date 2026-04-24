ServerEvents.recipes((event) => {
  //Tier 6 Super Essence
  event
    .custom({
      type: 'extendedcrafting:shapeless_table',
      tier: 5,
      ingredients: [
        {
          item: 'mysticalagradditions:insanium_essence',
        },
        {
          item: 'mysticalagriculture:allthemodium_essence',
        },
        {
          item: 'mysticalagriculture:dark_metal_ingot_essence',
        },
        {
          item: 'mysticalagriculture:plutonium_essence',
        },
        {
          item: 'mysticalagriculture:unobtainium_essence',
        },
        {
          item: 'mysticalagriculture:vibranium_essence',
        },
        {
          item: 'mysticalagriculture:nether_star_essence',
        },
        {
          item: 'mysticalagriculture:dragon_egg_essence',
        },
        {
          item: 'mysticalagriculture:gaia_spirit_essence',
        },
        {
          item: 'mysticalagriculture:awakened_draconium_essence',
        },
        {
          item: 'mysticalagriculture:neutronium_essence',
        },
        {
          item: 'mysticalagriculture:nitro_crystal_essence',
        },
      ],
      result: {
        item: 'kubejs:tier6_super_essence',
      },
    })
    .id('kubejs:tier6_super_essence');
});
