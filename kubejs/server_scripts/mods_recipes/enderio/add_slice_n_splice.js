ServerEvents.recipes((event) => {
  event
    .custom({
      type: 'enderio:slicing',
      energy: 10000,
      inputs: [
        {
          item: 'kubejs:infinity_5',
        },
        {
          item: 'allthemodium:allthemodium_ingot',
        },
        {
          item: 'kubejs:infinity_5',
        },
        {
          item: 'allthemodium:vibranium_ingot',
        },
        {
          item: 'kubejs:infinity_5',
        },
        {
          item: 'allthemodium:unobtainium_ingot',
        },
      ],
      output: {
        item: 'kubejs:infinity_6',
      },
    })
    .id('kubejs:infinity_6');
});
