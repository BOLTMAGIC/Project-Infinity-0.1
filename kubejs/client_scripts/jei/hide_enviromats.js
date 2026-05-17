JEIEvents.hideItems((event) => {
  let config = JsonIO.read('kubejs/config/jei_config.json')
  if (config.enviromats == false) {
    return;
  }

  let hideRegex = /^enviromats:.*(cobble|polished|brick|tile).*$/;
  
  let enviromatsItems = Ingredient.of('@enviromats').getItemIds();
  
  enviromatsItems.forEach(itemId => {
    let matchesPattern = hideRegex.test(itemId);
    
    if (matchesPattern) {
      event.hide(itemId);
    }
  });
});