ServerEvents.recipes((event) => {
  event
    .custom({
      type: 'pneumaticcraft:assembly_laser',
      input: {
        type: 'pneumaticcraft:stacked_item',
        count: 3,
        item: 'kubejs:infinity_6',
      },
      program: 'laser',
      result: {
        count: 1,
        item: 'kubejs:infinity_7',
      },
    })
    .id('kubejs:infinity_7');
});
