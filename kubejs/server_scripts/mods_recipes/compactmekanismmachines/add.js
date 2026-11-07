ServerEvents.recipes((event) => {
    // T0
    create3x3(event, 'compactmekanismmachines:compressed_wind_generator_x2', [
        'minecraft:air',
        'mekanism:basic_control_circuit',
        'minecraft:air',
        'minecraft:redstone',
        'mekanismgenerators:wind_generator',
        'minecraft:redstone',
        'minecraft:air',
        'mekanism:basic_control_circuit',
        'minecraft:air',
    ]);
    // T1
    create3x3(event, 'compactmekanismmachines:compressed_wind_generator_x8', [
        'minecraft:redstone',
        'mekanism:basic_tier_installer',
        'minecraft:redstone',
        'compactmekanismmachines:compressed_wind_generator_x2',
        'mekanism:steel_casing',
        'compactmekanismmachines:compressed_wind_generator_x2',
        'mekanism:basic_control_circuit',
        'mekanism:basic_induction_cell',
        'mekanism:basic_control_circuit',
    ]);
    // T2
    create3x3(event, 'compactmekanismmachines:compressed_wind_generator_x32', [
        'mekanism:alloy_infused',
        'mekanism:advanced_tier_installer',
        'mekanism:alloy_infused',
        'compactmekanismmachines:compressed_wind_generator_x8',
        'mekanism:steel_casing',
        'compactmekanismmachines:compressed_wind_generator_x8',
        'mekanism:advanced_control_circuit',
        'mekanism:advanced_induction_cell',
        'mekanism:advanced_control_circuit',
    ]);
    // T3
    create3x3(event, 'compactmekanismmachines:compressed_wind_generator_x128', [
        'mekanism:alloy_reinforced',
        'mekanism:elite_tier_installer',
        'mekanism:alloy_reinforced',
        'compactmekanismmachines:compressed_wind_generator_x32',
        'mekanism:steel_casing',
        'compactmekanismmachines:compressed_wind_generator_x32',
        'mekanism:elite_control_circuit',
        'mekanism:elite_induction_cell',
        'mekanism:elite_control_circuit',
    ]);
    // T4
    create3x3(event, 'compactmekanismmachines:compressed_wind_generator_x512', [
        'mekanism:alloy_atomic',
        'mekanism:ultimate_tier_installer',
        'mekanism:alloy_atomic',
        'compactmekanismmachines:compressed_wind_generator_x128',
        'mekanism:steel_casing',
        'compactmekanismmachines:compressed_wind_generator_x128',
        'mekanism:ultimate_control_circuit',
        'mekanism:ultimate_induction_cell',
        'mekanism:ultimate_control_circuit',
    ]);
    // T5
    create3x3(event, 'compactmekanismmachines:compressed_wind_generator_x2048', [
        'mekanism_extras:alloy_radiance',
        'mekanism_extras:absolute_tier_installer',
        'evolvedmekanism:alloy_hypercharged',
        'compactmekanismmachines:compressed_wind_generator_x512',
        'mekanism:steel_casing',
        'compactmekanismmachines:compressed_wind_generator_x512',
        'evolvedmekanism:overclocked_control_circuit',
        'mekanism_extras:absolute_induction_cell',
        'mekanism_extras:absolute_control_circuit',
    ]);
    // T6
    create3x3(event, 'compactmekanismmachines:compressed_wind_generator_x8192', [
        'mekanism_extras:alloy_thermonuclear',
        'mekanism_extras:supreme_tier_installer',
        'evolvedmekanism:alloy_subatomic',
        'compactmekanismmachines:compressed_wind_generator_x2048',
        'mekanism:steel_casing',
        'compactmekanismmachines:compressed_wind_generator_x2048',
        'evolvedmekanism:quantum_control_circuit',
        'mekanism_extras:supreme_induction_cell',
        'mekanism_extras:supreme_control_circuit',
    ]);
    // T7
    create3x3(event, 'compactmekanismmachines:compressed_wind_generator_x32768', [
        'mekanism_extras:alloy_shining',
        'mekanism_extras:cosmic_tier_installer',
        'evolvedmekanism:alloy_singular',
        'compactmekanismmachines:compressed_wind_generator_x8192',
        'mekanism:steel_casing',
        'compactmekanismmachines:compressed_wind_generator_x8192',
        'evolvedmekanism:dense_control_circuit',
        'mekanism_extras:cosmic_induction_cell',
        'mekanism_extras:cosmic_control_circuit'
    ]);
    // T8
    create3x3(event, 'compactmekanismmachines:compressed_wind_generator_x131072', [
        'mekanism_extras:alloy_spectrum',
        'mekanism_extras:infinite_tier_installer',
        'evolvedmekanism:alloy_exoversal',
        'compactmekanismmachines:compressed_wind_generator_x32768',
        'mekanism:steel_casing',
        'compactmekanismmachines:compressed_wind_generator_x32768',
        'evolvedmekanism:multiversal_control_circuit',
        'mekanism_extras:infinite_induction_cell',
        'mekanism_extras:infinite_control_circuit'
    ]);
    // T9
    create3x3(event, 'compactmekanismmachines:compressed_wind_generator_x532480', [
        'compactmekanismmachines:compressed_wind_generator_x2',
        'compactmekanismmachines:compressed_wind_generator_x8',
        'compactmekanismmachines:compressed_wind_generator_x32',
        'compactmekanismmachines:compressed_wind_generator_x128',
        'compactmekanismmachines:compressed_wind_generator_x512',
        'compactmekanismmachines:compressed_wind_generator_x2048',
        'compactmekanismmachines:compressed_wind_generator_x8192',
        'compactmekanismmachines:compressed_wind_generator_x32768',
        'compactmekanismmachines:compressed_wind_generator_x131072',
    ]);
});