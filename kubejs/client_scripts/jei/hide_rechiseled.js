JEIEvents.hideItems((event) => {
  let config = JsonIO.read('kubejs/config/jei_config.json')
  if (config.rechiseled == false) {
    return;
  }
  
  let excludedItemsRechiseled = ['rechiseled:chisel'];

  event.hide(Ingredient.of('@rechiseled').subtract(excludedItemsRechiseled));
});
