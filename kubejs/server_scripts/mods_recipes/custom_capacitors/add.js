ServerEvents.recipes((event) => {
  create3x3(event, 'custom_capacitors:ender_capacitor', [
    'extendedcrafting:ender_ingot',
    'enderio:sentient_ender',
    'extendedcrafting:enhanced_ender_ingot',
    'enderio:octadic_capacitor',
    'thermal:enderium_ingot',
    'enderio:octadic_capacitor',
    'extendedcrafting:enhanced_ender_ingot',
    'enderio:ender_crystal',
    'extendedcrafting:ender_ingot',
  ]);

  create3x3(event, 'custom_capacitors:cobalt_capacitor', [
    'common_ore_library:manyullyn_ingot',
    'tconstruct:hepatizon_ingot',
    'tconstruct:manyullyn_ingot',
    'tconstruct:queens_slime_ingot',
    'custom_capacitors:ender_capacitor',
    'tconstruct:queens_slime_ingot',
    'common_ore_library:manyullyn_ingot',
    'tconstruct:hepatizon_ingot',
    'tconstruct:manyullyn_ingot',
  ]);

  create3x3(event, 'custom_capacitors:precision_capacitor', [
    'mekanism_extras:alloy_shining',
    'bigreactors:ludicrite_ingot',
    'evolvedmekanism:alloy_singular',
    'bigreactors:ludicrite_ingot',
    'nuclearcraft:tough_alloy_ingot',
    'bigreactors:ludicrite_ingot',
    'custom_capacitors:cobalt_capacitor',
    'bigreactors:ludicrite_ingot',
    'custom_capacitors:cobalt_capacitor',
  ]);

  create3x3(event, 'custom_capacitors:fast_capacitor', [
    'custom_capacitors:precision_capacitor',
    'igleelib:iglium_upgrade_smithing_template',
    'cataclysm:cursium_upgrade_smithing_template',
    'dimensionalpocketsii:dimensional_upgrade_template',
    'custom_capacitors:precision_capacitor',
    'ender_dragon_loot:dragon_upgrade_template',
    'allthemodium:unobtainium_upgrade_smithing_template',
    'cataclysm:ignitium_upgrade_smithing_template',
    'custom_capacitors:precision_capacitor',
  ]);
});