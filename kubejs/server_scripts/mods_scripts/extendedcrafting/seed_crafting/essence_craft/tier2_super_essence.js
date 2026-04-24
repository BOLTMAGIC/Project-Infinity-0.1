ServerEvents.recipes((event) => {
  //Tier 2 Super Essence
  event
    .custom({
      type: 'extendedcrafting:shapeless_table',
      ingredients: [
        {
          item: 'mysticalagriculture:prudentium_essence',
        },
        {
          item: 'mysticalagriculture:niter_essence',
        },
        {
          item: 'mysticalagriculture:plastic_essence',
        },
        {
          item: 'mysticalagriculture:nature_essence',
        },
        {
          item: 'mysticalagriculture:dye_essence',
        },
        {
          item: 'mysticalagriculture:nether_essence',
        },
        {
          item: 'mysticalagriculture:coal_essence',
        },
        {
          item: 'mysticalagriculture:coral_essence',
        },
        {
          item: 'mysticalagriculture:honey_essence',
        },
        {
          item: 'mysticalagriculture:amethyst_essence',
        },
        {
          item: 'mysticalagriculture:pig_essence',
        },
        {
          item: 'mysticalagriculture:chicken_essence',
        },
        {
          item: 'mysticalagriculture:cow_essence',
        },
        {
          item: 'mysticalagriculture:sheep_essence',
        },
        {
          item: 'mysticalagriculture:squid_essence',
        },
        {
          item: 'mysticalagriculture:fish_essence',
        },
        {
          item: 'mysticalagriculture:slime_essence',
        },
        {
          item: 'mysticalagriculture:menril_essence',
        },
        {
          item: 'mysticalagriculture:marble_essence',
        },
        {
          item: 'mysticalagriculture:silicon_essence',
        },
        {
          item: 'mysticalagriculture:sulfur_essence',
        },
        {
          item: 'mysticalagriculture:aluminum_essence',
        },
        {
          item: 'mysticalagriculture:apatite_essence',
        },
        {
          item: 'mysticalagriculture:grains_of_infinity_essence',
        },
        {
          item: 'mysticalagriculture:mystical_flower_essence',
        },
        {
          item: 'mysticalagriculture:rubber_essence',
        },
        {
          item: 'mysticalagriculture:turtle_essence',
        },
        {
          item: 'mysticalagriculture:basalt_essence',
        },
      ],
      result: {
        item: 'kubejs:tier2_super_essence',
      },
    })
    .id('kubejs:tier2_super_essence');
});
