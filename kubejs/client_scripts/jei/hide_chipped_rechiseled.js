JEIEvents.hideItems((event) => {
  let excludedItemsChipped = [
    'chipped:botanist_workbench',
    'chipped:glassblower',
    'chipped:carpenters_table',
    'chipped:loom_table',
    'chipped:mason_table',
    'chipped:alchemy_bench',
    'chipped:tinkering_table',
  ];

  let excludedItemsRechiseled = ['rechiseled:chisel'];
  event.hide('tconstruct:potion');

  event.hide(Ingredient.of('@chipped').subtract(excludedItemsChipped));
  event.hide(Ingredient.of('@rechiseled').subtract(excludedItemsRechiseled));
});
