JEIEvents.hideItems((event) => {
  let excludedItems = [
    'chipped:botanist_workbench',
    'chipped:glassblower',
    'chipped:carpenters_table',
    'chipped:loom_table',
    'chipped:mason_table',
    'chipped:alchemy_bench',
    'chipped:tinkering_table',
  ];
  event.hide('tconstruct:potion');

  Ingredient.of(/^chipped:/).itemIds.forEach((id) => {
    if (!excludedItems.includes(id)) event.hide(id);
  });
});

// hide all the new Wither Aconite recipes
JEIEvents.removeRecipes(event => {
  for (let data = 1255; data < 1272; data++) {
    event.remove('botania:petals', `mythicbotany:wither_aconite_${data}`)
  }
})

JEIEvents.removeCategories((event) => {
  // console.log(event.categoryIds)
  event.remove([
    'ali:block_loot',
    'ali:fishing_loot',
    'ali:hero_loot',
    'ali:archaelogy_loot',
    'ali:plant_loot',
    'ali:gameplay_loot',
    'ali:trade_loot',
    'cyclic:packager',
    'tconstruct:worktable',
    'packagedauto:fluid_package_contents',
    'packagedauto:fluid_package_filling',
    'evolvedmekanism:solidification_chamber',
    'evolvedmekanism:thermalizer',
  ]);
});
