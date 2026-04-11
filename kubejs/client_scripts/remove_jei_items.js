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
    'packagedauto:volume_package',
    'packagedauto:fluid_package_filling',
    'evolvedmekanism:solidification_chamber',
    'evolvedmekanism:thermalizer',
  ]);
});
