ServerEvents.recipes((event) => {
  //Ultimate Prediction
  event
    .custom({
      type: 'extendedcrafting:shapeless_table',
      tier: 5,
      ingredients: [
        'avaritia:neutron_pile',
        'avaritia:neutron_nugget',
        {
          item: 'kubejs:ultimate_vanilla_prediction'
        },
        {
          item: 'kubejs:ultimate_boss_prediction'
        },
        {
          item: 'kubejs:ultimate_misc_prediction'
        }
      ],
      result: {
        item: 'kubejs:ultimate_prediction',
      },
    })
    .id('kubejs:ultimate_prediction');
});
