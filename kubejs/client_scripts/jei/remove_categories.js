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
  ]);
});