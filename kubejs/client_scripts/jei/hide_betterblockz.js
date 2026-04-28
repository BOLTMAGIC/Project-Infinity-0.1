JEIEvents.hideItems((event) => {
  let keepSpecificItems = [
    'betterblockz:omni_spade',
    'betterblockz:block_disconnect',
    'betterblockz:block_randomizer',
    'betterblockz:better_builder',
    'betterblockz:checkered_spade',
    'betterblockz:color_changer',

    'betterblockz:blockz_core',
    'betterblockz:flat_lamp',
    'betterblockz:aurora_blockz',
    'betterblockz:stone_blockz',
  ];
  
  let keepRegex = /^betterblockz:.*_0$/;
  
  let betterblockzItems = Ingredient.of('@betterblockz').getItemIds();
  
  betterblockzItems.forEach(itemId => {
    let isSpecificKeep = keepSpecificItems.includes(itemId);
    let matchesPattern = keepRegex.test(itemId);
    
    if (!isSpecificKeep && !matchesPattern) {
      event.hide(itemId);
    }
  });
});