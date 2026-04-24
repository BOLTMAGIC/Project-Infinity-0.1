ServerEvents.recipes((event) => {
  create_conduit_craft(event, '8x enderio:conductive_conduit', [
    'enderio:conduit_binder',
    'refinedstorage:quartz_enriched_iron',
  ]);

  create_conduit_craft(event, '8x enderio:energetic_conduit', [
    'enderio:conduit_binder',
    'enderio:energetic_alloy_ingot',
  ]);

  create_conduit_craft(event, '8x enderio:vibrant_conduit', [
    'enderio:conduit_binder',
    'enderio:vibrant_alloy_ingot',
  ]);

  create_conduit_craft(event, '8x enderio:endsteel_conduit', [
    'enderio:conduit_binder',
    'enderio:end_steel_ingot',
  ]);

  create_conduit_craft(event, '8x enderio:lumium_conduit', [
    'enderio:conduit_binder',
    'thermal:lumium_ingot',
  ]);

  create_conduit_craft(event, '8x enderio:signalum_conduit', [
    'enderio:conduit_binder',
    'thermal:signalum_ingot',
  ]);

  create_conduit_craft(event, '8x enderio:enderium_conduit', [
    'enderio:conduit_binder',
    'thermal:enderium_ingot',
  ]);

  create_conduit_craft(event, '8x enderio:sculk_superconductor_conduit', [
    'enderio:conduit_binder',
    'kubejs:sculk_alloy_ingot',
  ]);

  create_conduit_craft(event, '8x enderio:energy_conduit', [
    'enderio:conduit_binder',
    'mysticalagriculture:supremium_ingot',
  ]);

  create_conduit_craft2(event, '2x enderio:energetic_conduit', [
    'enderio:conduit_binder',
    'enderio:conductive_conduit',
    'enderio:energetic_alloy_ingot',
  ]);

  create_conduit_craft2(event, '2x enderio:vibrant_conduit', [
    'enderio:conduit_binder',
    'enderio:energetic_conduit',
    'enderio:vibrant_alloy_ingot',
  ]);

  create_conduit_craft2(event, '2x enderio:endsteel_conduit', [
    'enderio:conduit_binder',
    'enderio:vibrant_conduit',
    'enderio:end_steel_ingot',
  ]);

  create_conduit_craft2(event, '2x enderio:lumium_conduit', [
    'enderio:conduit_binder',
    'enderio:endsteel_conduit',
    'thermal:lumium_ingot',
  ]);

  create_conduit_craft2(event, '2x enderio:signalum_conduit', [
    'enderio:conduit_binder',
    'enderio:lumium_conduit',
    'thermal:signalum_ingot',
  ]);

  create_conduit_craft2(event, '2x enderio:enderium_conduit', [
    'enderio:conduit_binder',
    'enderio:signalum_conduit',
    'thermal:enderium_ingot',
  ]);

  create_conduit_craft2(event, '2x enderio:sculk_superconductor_conduit', [
    'enderio:conduit_binder',
    'enderio:enderium_conduit',
    'kubejs:sculk_alloy_ingot',
  ]);

  create_conduit_craft2(event, '2x enderio:energy_conduit', [
    'enderio:conduit_binder',
    'enderio:sculk_superconductor_conduit',
    'mysticalagriculture:supremium_ingot',
  ]);

  create3x3(event, 'enderio:alloy_smelter', [
    'enderio:dark_steel_ingot',
    'minecraft:furnace',
    'enderio:dark_steel_ingot',
    'minecraft:furnace',
    'enderio:void_chassis',
    'minecraft:furnace',
    '#forge:gears/iron',
    'enderio:primitive_alloy_smelter',
    '#forge:gears/iron',
  ]);

  create3x3(event, 'enderio:primitive_alloy_smelter', [
    'minecraft:furnace',
    'minecraft:furnace',
    'minecraft:furnace',
    '#forge:stone',
    'enderio:grains_of_infinity',
    '#forge:stone',
    '#forge:stone',
    '#forge:stone',
    '#forge:stone',
  ]);

  create3x3(event, 'enderio:pulsating_crystal', [
    'redstone_arsenal:flux_ingot',
    'enderio:pulsating_alloy_ingot',
    'redstone_arsenal:flux_ingot',
    'enderio:pulsating_alloy_ingot',
    'actuallyadditions:empowered_diamatine_crystal',
    'enderio:pulsating_alloy_ingot',
    'redstone_arsenal:flux_ingot',
    'enderio:pulsating_alloy_ingot',
    'redstone_arsenal:flux_ingot',
  ]);
});
