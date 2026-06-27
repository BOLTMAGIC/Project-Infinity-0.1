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
    'industrialforegoing:pink_slime_ingot',
    'ae2omnicells:charged_ender_ingot',
    'justdirethings:blazegold_ingot',
    'custom_capacitors:ender_capacitor',
    'justdirethings:blazegold_ingot',
    'common_ore_library:manyullyn_ingot',
    'industrialforegoing:pink_slime_ingot',
    'ae2omnicells:charged_ender_ingot',
  ]);

  create3x3(event, 'custom_capacitors:precision_capacitor', [
    'mekanism_extras:alloy_shining',
    'ifeu:empty_nether_star',
    'evolvedmekanism:alloy_singular',
    'ifeu:empty_nether_star',
    'nuclearcraft:tough_alloy_ingot',
    'ifeu:empty_nether_star',
    'custom_capacitors:cobalt_capacitor',
    'ifeu:empty_nether_star',
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
