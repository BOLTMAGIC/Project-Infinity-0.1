ServerEvents.recipes((event) => {
  exdeorum.removeDefaultHeatSources()

  exdeorum.setCrucibleHeatValue('minecraft:fire', 3);
  exdeorum.setCrucibleHeatValue('minecraft:lava', 5);
  exdeorum.setCrucibleHeatValue('minecraft:magma_block', 25);
  exdeorum.setCrucibleHeatValue('minecraft:soul_fire', 33);
  exdeorum.setCrucibleHeatValue('powah:blazing_crystal_block', 70);
  exdeorum.setCrucibleHeatValue('mekanism:block_uranium', 100);
  exdeorum.setCrucibleHeatValue('allthemodium:soul_lava', 150);
});
