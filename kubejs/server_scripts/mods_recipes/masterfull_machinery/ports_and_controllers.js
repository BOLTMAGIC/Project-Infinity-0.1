priority: 1;
ServerEvents.recipes((event) => {
  //#region Ports
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

  create3x3(event, 'mm:super_compressed_titanic_item_port_input', [
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:compressed_titanic_item_port_input',
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

  create3x3(event, 'mm:super_compressed_titanic_item_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:compressed_titanic_item_port_output',
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

  create3x3(event, 'mm:colossal_pigment_port_input', [
    '#forge:ingots/cobalt',
    'mekanism:pigment_mixer',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'minecraft:diamond',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'mekanism:basic_chemical_tank',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:colossal_pigment_port_output', [
    '#forge:ingots/cobalt',
    'mekanism:basic_chemical_tank',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'minecraft:diamond',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'mekanism:pigment_mixer',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:colossal_slurry_port_input', [
    '#forge:ingots/cobalt',
    'mekanism:chemical_crystallizer',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'minecraft:diamond',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'mekanism:basic_chemical_tank',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:colossal_slurry_port_output', [
    '#forge:ingots/cobalt',
    'mekanism:basic_chemical_tank',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'minecraft:diamond',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'mekanism:chemical_crystallizer',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:colossal_infuse_port_input', [
    '#forge:ingots/cobalt',
    'mekanism:chemical_infuser',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'minecraft:diamond',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'mekanism:basic_chemical_tank',
    '#forge:ingots/cobalt',
  ]);

  create3x3(event, 'mm:colossal_infuse_port_output', [
    '#forge:ingots/cobalt',
    'mekanism:basic_chemical_tank',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'minecraft:diamond',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'mekanism:chemical_infuser',
    '#forge:ingots/cobalt',
  ]);

  //#region Controllers
  create3x3(event, 'mm:auto_crusher_controller', [
    'thermal:redstone_servo',
    'mekanism:ultimate_crushing_factory',
    'thermal:rf_coil',
    'common_ore_library:cobalt_block',
    'botania:manasteel_ingot',
    'common_ore_library:cobalt_block',
    'thermal:rf_coil',
    'actuallyadditions:crusher_double',
    'thermal:redstone_servo',
  ]);

  create3x3(event, 'mm:event_horizon_antimatter_synthesizer_controller', [
    'thermal:redstone_servo',
    'mekanism_extras:supreme_purifying_factory',
    'thermal:rf_coil',
    'common_ore_library:cobalt_block',
    'botania:manasteel_ingot',
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
    'botania:manasteel_ingot',
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
    'botania:manasteel_ingot',
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
    'botania:manasteel_ingot',
    'common_ore_library:cobalt_block',
    'thermal:rf_coil',
    'minecraft:black_concrete',
    'thermal:redstone_servo',
  ]);

  create3x3(event, 'mm:infinity_cell_factory_controller', [
    'thermal:redstone_servo',
    'evolvedmekanism:alloy_subatomic',
    'thermal:rf_coil',
    'advancednetherite:netherite_diamond_block',
    'botania:manasteel_block',
    'advancednetherite:netherite_diamond_block',
    'thermal:rf_coil',
    'mekanism_extras:alloy_thermonuclear',
    'thermal:redstone_servo',
  ]);

  create3x3(event, 'mm:pinky_controller', [
    'thermal:redstone_servo',
    'industrialforegoing:pink_slime_ingot',
    'thermal:rf_coil',
    'common_ore_library:cobalt_block',
    'botania:manasteel_ingot',
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
    'botania:manasteel_ingot',
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
    'botania:manasteel_ingot',
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
    'botania:manasteel_ingot',
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
    'botania:manasteel_ingot',
    'common_ore_library:cobalt_block',
    'thermal:rf_coil',
    'kubejs:auto_mechanical_sieve',
    'thermal:redstone_servo',
  ]);

  create3x3(event, 'mm:fire_attuned_controller', [
    'thermal:redstone_servo',
    'justdirethings:celestigem',
    'thermal:rf_coil',
    'common_ore_library:cobalt_block',
    'botania:manasteel_ingot',
    'common_ore_library:cobalt_block',
    'thermal:rf_coil',
    'powah:crystal_nitro',
    'thermal:redstone_servo',
  ]);

  create3x3(event, 'mm:mechanical_empowerer_controller', [
    'thermal:redstone_servo',
    'actuallyadditions:empowered_emeradic_crystal_block',
    'thermal:rf_coil',
    'common_ore_library:cobalt_block',
    'botania:manasteel_ingot',
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
    'botania:manasteel_ingot',
    'common_ore_library:cobalt_block',
    'thermal:rf_coil',
    'mekanism:elite_fluid_tank',
    'thermal:redstone_servo',
  ]);

  create3x3(event, 'mm:multi_compactor_controller', [
    'thermal:redstone_servo',
    'mysticalagriculture:master_infusion_crystal',
    'thermal:rf_coil',
    'projectexpansion:pink_fuel_block',
    'botania:manasteel_ingot',
    'projectexpansion:pink_fuel_block',
    'thermal:rf_coil',
    'projecte:philosophers_stone',
    'thermal:redstone_servo',
  ]);

  create3x3(event, 'mm:resource_foundry_controller', [
    'thermal:redstone_servo',
    'evolvedmekanism:alloy_hypercharged',
    'thermal:rf_coil',
    'common_ore_library:cobalt_block',
    'botania:manasteel_ingot',
    'common_ore_library:cobalt_block',
    'thermal:rf_coil',
    'mekanism_extras:alloy_radiance',
    'thermal:redstone_servo',
  ]);

  create3x3(event, 'mm:tank_encapsulator_controller', [
    'thermal:redstone_servo',
    'mekanism_extras:absolute_fluid_tank',
    'thermal:rf_coil',
    'common_ore_library:cobalt_block',
    'botania:manasteel_ingot',
    'common_ore_library:cobalt_block',
    'thermal:rf_coil',
    'mekanism_extras:absolute_chemical_tank',
    'thermal:redstone_servo',
  ]);
});
