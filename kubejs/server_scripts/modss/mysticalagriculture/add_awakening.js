ServerEvents.recipes((event) => {
  //Infinity 10
  event
    .custom({
      type: 'mysticalagriculture:awakening',
      essences: [
        {
          item: 'mysticalagriculture:air_essence',
          count: 40,
        },
        {
          item: 'mysticalagriculture:earth_essence',
          count: 40,
        },
        {
          item: 'mysticalagriculture:water_essence',
          count: 40,
        },
        {
          item: 'mysticalagriculture:fire_essence',
          count: 40,
        },
      ],
      input: {
        item: 'avaritia:neutron_ingot',
      },
      ingredients: [
        {
          item: 'extendedcrafting:enhanced_redstone_ingot',
        },
        {
          item: 'kubejs:infinity_9',
        },
        {
          item: 'kubejs:infinity_9',
        },
        {
          item: 'kubejs:infinity_9',
        },
      ],
      result: {
        item: 'kubejs:infinity_10',
      },
    })
    .id('kubejs:infinity_10');
});
