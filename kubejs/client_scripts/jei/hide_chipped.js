JEIEvents.hideItems((event) => {
  let config = JsonIO.read('kubejs/config/jei_config.json')
  if (config.chipped == false) {
    return;
  }
  
  let excludedItemsChipped = [
    'chipped:botanist_workbench',
    'chipped:glassblower',
    'chipped:carpenters_table',
    'chipped:loom_table',
    'chipped:mason_table',
    'chipped:alchemy_bench',
    'chipped:tinkering_table',
  ];

  event.hide(Ingredient.of('@chipped').subtract(excludedItemsChipped));
});
