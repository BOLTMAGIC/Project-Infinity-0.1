ServerEvents.recipes((event) => {
  //
  event
    .custom({
      type: 'botania:elven_trade',
      ingredients: [
        {
          item: 'kubejs:infinity_2',
        },
        {
          item: 'kubejs:infinity_2',
        },
        {
          item: 'kubejs:infinity_2',
        },
      ],
      output: [
        {
          item: 'kubejs:infinity_3',
        },
      ],
    })
    .id('kubejs:infinity_3');
});
