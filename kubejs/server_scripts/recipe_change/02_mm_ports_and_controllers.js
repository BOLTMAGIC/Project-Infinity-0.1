priority: 1;
ServerEvents.recipes((event) => {
  create3x3(event, 'mm:tiny_item_port_input', [
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'minecraft:diamond',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:small_item_port_input', [
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:tiny_item_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:normal_item_port_input', [
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:small_item_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:big_item_port_input', [
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:normal_item_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:enormous_item_port_input', [
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:big_item_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:gigantic_item_port_input', [
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:enormous_item_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:colossal_item_port_input', [
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:gigantic_item_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:titanic_item_port_input', [
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:colossal_item_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:compressed_titanic_item_port_input', [
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:titanic_item_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:tiny_item_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'minecraft:diamond',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:small_item_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:tiny_item_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:normal_item_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:small_item_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:big_item_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:normal_item_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:enormous_item_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:big_item_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:gigantic_item_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:enormous_item_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:colossal_item_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:gigantic_item_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:titanic_item_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:colossal_item_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:compressed_titanic_item_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:titanic_item_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:small_fluid_port_input', [
    '#forge:ingots/cobalt',
    'minecraft:bucket',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'minecraft:diamond',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:normal_fluid_port_input', [
    '#forge:ingots/cobalt',
    'minecraft:bucket',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:small_fluid_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:big_fluid_port_input', [
    '#forge:ingots/cobalt',
    'minecraft:bucket',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:normal_fluid_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:enormous_fluid_port_input', [
    '#forge:ingots/cobalt',
    'minecraft:bucket',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:big_fluid_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:gigantic_fluid_port_input', [
    '#forge:ingots/cobalt',
    'minecraft:bucket',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:enormous_fluid_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:small_fluid_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'minecraft:diamond',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:bucket',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:normal_fluid_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:small_fluid_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:bucket',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:big_fluid_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:normal_fluid_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:bucket',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:enormous_fluid_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:big_fluid_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:bucket',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:gigantic_fluid_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:enormous_fluid_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:bucket',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:tiny_energy_port_input', [
    '#forge:ingots/cobalt',
    'enderio:conductive_conduit',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'minecraft:diamond',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:small_energy_port_input', [
    '#forge:ingots/cobalt',
    'enderio:conductive_conduit',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:tiny_energy_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:normal_energy_port_input', [
    '#forge:ingots/cobalt',
    'enderio:enderium_conduit',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:small_energy_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:big_energy_port_input', [
    '#forge:ingots/cobalt',
    'enderio:enderium_conduit',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:normal_energy_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:enormous_energy_port_input', [
    '#forge:ingots/cobalt',
    'enderio:sculk_superconductor_conduit',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:big_energy_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:gigantic_energy_port_input', [
    '#forge:ingots/cobalt',
    'enderio:sculk_superconductor_conduit',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:enormous_energy_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:tiny_energy_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'minecraft:diamond',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'enderio:conductive_conduit',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:small_energy_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:tiny_energy_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'enderio:conductive_conduit',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:normal_energy_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:small_energy_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'enderio:enderium_conduit',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:big_energy_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:normal_energy_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'enderio:enderium_conduit',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:enormous_energy_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:big_energy_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'enderio:sculk_superconductor_conduit',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:gigantic_energy_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:enormous_energy_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'enderio:sculk_superconductor_conduit',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:colossal_gas_port_input', [
    '#forge:ingots/cobalt',
    'mekanism:basic_chemical_tank',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'minecraft:diamond',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'mekanism:upgrade_gas',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:colossal_gas_port_output', [
    '#forge:ingots/cobalt',
    'mekanism:upgrade_gas',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'minecraft:diamond',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'mekanism:basic_chemical_tank',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:auto_crusher_controller', [
    'thermal:redstone_servo',
    'mekanism:ultimate_crushing_factory',
    'thermal:rf_coil',
    'common_ore_library:cobalt_block',
    'botania:elementium_ingot',
    'common_ore_library:cobalt_block',
    'thermal:rf_coil',
    'actuallyadditions:crusher_double',
    'thermal:redstone_servo',
  ]);

  create3x3(event, 'mm:event_horizon_antimatter_synthesizer_controller', [
    'thermal:redstone_servo',
    'evolvedmekanism:quantum_purifying_factory',
    'thermal:rf_coil',
    'common_ore_library:cobalt_block',
    'botania:elementium_ingot',
    'common_ore_library:cobalt_block',
    'thermal:rf_coil',
    'mekanism:antiprotonic_nucleosynthesizer',
    'thermal:redstone_servo',
  ]);

  create3x3(event, 'mm:essenceforge_controller', [
    'thermal:redstone_servo',
    'kubejs:empowered_super_block',
    'thermal:rf_coil',
    'common_ore_library:cobalt_block',
    'botania:elementium_ingot',
    'common_ore_library:cobalt_block',
    'thermal:rf_coil',
    'mysticalagriculture:inferium_farmland',
    'thermal:redstone_servo',
  ]);

  create3x3(event, 'mm:multi_compressor_controller', [
    'thermal:redstone_servo',
    'functionalstorage:compacting_drawer',
    'thermal:rf_coil',
    'common_ore_library:cobalt_block',
    'botania:elementium_ingot',
    'common_ore_library:cobalt_block',
    'thermal:rf_coil',
    'compacter:compacter',
    'thermal:redstone_servo',
  ]);

  create3x3(event, 'mm:infinity_crucible_controller', [
    'thermal:redstone_servo',
    'kubejs:starmetal_block',
    'thermal:rf_coil',
    'common_ore_library:cobalt_block',
    'botania:elementium_ingot',
    'common_ore_library:cobalt_block',
    'thermal:rf_coil',
    'minecraft:black_concrete',
    'thermal:redstone_servo',
  ]);

  create3x3(event, 'mm:pinky_controller', [
    'thermal:redstone_servo',
    'industrialforegoing:pink_slime_ingot',
    'thermal:rf_coil',
    'common_ore_library:cobalt_block',
    'botania:elementium_ingot',
    'common_ore_library:cobalt_block',
    'thermal:rf_coil',
    'industrialforegoing:dissolution_chamber',
    'thermal:redstone_servo',
  ]);

  create3x3(event, 'mm:advanced_awakening_altar_controller', [
    'thermal:redstone_servo',
    'draconicevolution:awakened_draconium_block',
    'thermal:rf_coil',
    'common_ore_library:cobalt_block',
    'botania:elementium_ingot',
    'common_ore_library:cobalt_block',
    'thermal:rf_coil',
    'mysticalagriculture:awakening_altar',
    'thermal:redstone_servo',
  ]);

  create3x3(event, 'mm:loot_fabrication_plant_controller', [
    'thermal:redstone_servo',
    'extrahnn:simulator_modeling',
    'thermal:rf_coil',
    'common_ore_library:cobalt_block',
    'botania:elementium_ingot',
    'common_ore_library:cobalt_block',
    'thermal:rf_coil',
    'extrahnn:merger_camera',
    'thermal:redstone_servo',
  ]);

  create3x3(event, 'mm:prediction_chamber_controller', [
    'thermal:redstone_servo',
    'extrahnn:merger_camera',
    'thermal:rf_coil',
    'common_ore_library:cobalt_block',
    'botania:elementium_ingot',
    'common_ore_library:cobalt_block',
    'thermal:rf_coil',
    'extrahnn:simulator_modeling',
    'thermal:redstone_servo',
  ]);

  create3x3(event, 'mm:auto_sieve_controller', [
    'thermal:redstone_servo',
    '#exdeorum:sieve',
    'thermal:rf_coil',
    'common_ore_library:cobalt_block',
    'botania:elementium_ingot',
    'common_ore_library:cobalt_block',
    'thermal:rf_coil',
    'kubejs:auto_mechanical_sieve',
    'thermal:redstone_servo',
  ]);

  create3x3(event, 'mm:fire_attuned_controller', [
    'thermal:redstone_servo',
    'occultism:spirit_attuned_gem',
    'thermal:rf_coil',
    'common_ore_library:cobalt_block',
    'botania:elementium_ingot',
    'common_ore_library:cobalt_block',
    'thermal:rf_coil',
    'occultism:purified_ink',
    'thermal:redstone_servo',
  ]);

  create3x3(event, 'mm:mechanical_empowerer_controller', [
    'thermal:redstone_servo',
    'actuallyadditions:empowered_emeradic_crystal_block',
    'thermal:rf_coil',
    'common_ore_library:cobalt_block',
    'botania:elementium_ingot',
    'common_ore_library:cobalt_block',
    'thermal:rf_coil',
    'actuallyadditions:empowered_diamatine_crystal_block',
    'thermal:redstone_servo',
  ]);

  create3x3(event, 'mm:water_condenser_controller', [
    'thermal:redstone_servo',
    'industrialforegoing:simple_black_hole_tank',
    'thermal:rf_coil',
    'common_ore_library:cobalt_block',
    'botania:elementium_ingot',
    'common_ore_library:cobalt_block',
    'thermal:rf_coil',
    'mekanism:elite_fluid_tank',
    'thermal:redstone_servo',
  ]);

  create3x3(event, 'mm:mega_dissolver_controller', [
    'thermal:redstone_servo',
    'alchemistry:dissolver',
    'thermal:rf_coil',
    'common_ore_library:cobalt_block',
    'botania:elementium_ingot',
    'common_ore_library:cobalt_block',
    'thermal:rf_coil',
    'alchemistry:dissolver',
    'thermal:redstone_servo',
  ]);

  create3x3(event, 'mm:multi_compactor_controller', [
    'thermal:redstone_servo',
    'mysticalagriculture:master_infusion_crystal',
    'thermal:rf_coil',
    'projectexpansion:pink_fuel_block',
    'botania:elementium_ingot',
    'projectexpansion:pink_fuel_block',
    'thermal:rf_coil',
    'projecte:philosophers_stone',
    'thermal:redstone_servo',
  ]);
});
