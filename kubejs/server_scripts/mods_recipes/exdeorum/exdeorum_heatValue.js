ServerEvents.recipes((event) => {
  crucibleHeat(event, 'avaritia:infinity', 4000);
  crucibleHeat(event, 'avaritia:neutron', 1000);
  crucibleHeat(event, 'bigreactors:insanite_block', 500);
  crucibleHeat(event, 'kubejs:empowered_super_block', 333);
  crucibleHeat(
    event,
    'mysticalagriculture:awakened_supremium_ingot_block',
    200
  );
  crucibleHeat(event, 'bigreactors:yellorium_block', 150);
  crucibleHeat(event, 'bigreactors:blutonium_block', 200);
  crucibleHeat(event, 'powah:blazing_crystal_block', 175);
  crucibleHeat(event, 'minecraft:magma_block', 100);
  crucibleHeat(event, 'botania:blaze_block', 10);
});

function crucibleHeat(event, input, setValue) {
  exdeorum.setCrucibleHeatValue(input, setValue);
}
