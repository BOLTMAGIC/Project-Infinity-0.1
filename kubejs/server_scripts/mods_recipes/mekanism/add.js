ServerEvents.recipes((event) => {
  create3x3(event, 'mekanism:creative_energy_cube', [
    'evolvedmekanism:alloy_creative',
    'evolvedmekanism:creative_control_circuit',
    'evolvedmekanism:alloy_creative',
    'mekanism_extras:infinite_energy_cube',
    'minecraft:nether_star',
    'mekanism_extras:infinite_energy_cube',
    'evolvedmekanism:alloy_creative',
    'evolvedmekanism:creative_control_circuit',
    'evolvedmekanism:alloy_creative',
  ]);

  create3x3(event, 'mekanism:chargepad', [
    'minecraft:polished_blackstone_pressure_plate',
    'minecraft:polished_blackstone_pressure_plate',
    'minecraft:polished_blackstone_pressure_plate',
    'minecraft:polished_blackstone_pressure_plate',
    'minecraft:polished_blackstone_pressure_plate',
    'minecraft:polished_blackstone_pressure_plate',
    'thermal:steel_ingot',
    'mekanism:energy_tablet',
    'thermal:steel_ingot',
  ]);
});
