ServerEvents.recipes((event) => {
  shapeless(event, 'kubejs:vibranium_mesh', [
    'cataclysm:ignitium_upgrade_smithing_template',
    'kubejs:allthemodium_mesh',
    'allthemodium:vibranium_nugget',
  ]);

  shapeless(event, 'kubejs:allthemodium_mesh', [
    'born_in_chaos_v1:dark_upgrade',
    'exdeorum:netherite_mesh',
    'allthemodium:allthemodium_nugget',
  ]);

  create3x3(event, 'allthemodium:teleport_pad', [
    'cyclic:netherite_pressure_plate',
    'allthemodium:vibranium_nugget',
    'cyclic:netherite_pressure_plate',
    'allthemodium:allthemodium_nugget',
    'cataclysm:abyss_eye',
    'allthemodium:allthemodium_nugget',
    'cyclic:netherite_pressure_plate',
    'allthemodium:vibranium_nugget',
    'cyclic:netherite_pressure_plate',
  ]);

  create3x3(event, 'allthemodium:allthemodium_gear', [
    'allthemodium:allthemodium_ingot',
    'allthemodium:allthemodium_ingot',
    'allthemodium:allthemodium_ingot',
    'allthemodium:allthemodium_ingot',
    'minecraft:netherite_ingot',
    'allthemodium:allthemodium_ingot',
    'allthemodium:allthemodium_ingot',
    'allthemodium:allthemodium_ingot',
    'allthemodium:allthemodium_ingot'
  ])

  create3x3(event, 'allthemodium:vibranium_gear', [
    'allthemodium:vibranium_ingot',
    'allthemodium:vibranium_ingot',
    'allthemodium:vibranium_ingot',
    'allthemodium:vibranium_ingot',
    'allthemodium:allthemodium_gear',
    'allthemodium:vibranium_ingot',
    'allthemodium:vibranium_ingot',
    'allthemodium:vibranium_ingot',
    'allthemodium:vibranium_ingot'
  ])

  create3x3(event, 'allthemodium:unobtainium_gear', [
    'allthemodium:unobtainium_ingot',
    'allthemodium:unobtainium_ingot',
    'allthemodium:unobtainium_ingot',
    'allthemodium:unobtainium_ingot',
    'allthemodium:vibranium_gear',
    'allthemodium:unobtainium_ingot',
    'allthemodium:unobtainium_ingot',
    'allthemodium:unobtainium_ingot',
    'allthemodium:unobtainium_ingot'
  ])

  create3x3same(event, 'allthemodium:unobtainium_ingot', [
    'allthemodium:unobtainium_nugget',
  ]);

  create3x3same(event, 'allthemodium:allthemodium_ingot', [
    'allthemodium:allthemodium_nugget',
  ]);

  shapeless(event, '2x allthemodium:vibranium_allthemodium_alloy_ingot', [
    'allthemodium:allthemodium_ingot',
    'allthemodium:vibranium_ingot',
  ]);

  shapeless(event, '2x allthemodium:unobtainium_vibranium_alloy_ingot', [
    'allthemodium:unobtainium_ingot',
    'allthemodium:vibranium_ingot',
  ]);

  shapeless(event, '2x allthemodium:unobtainium_allthemodium_alloy_ingot', [
    'allthemodium:allthemodium_ingot',
    'allthemodium:unobtainium_ingot',
  ]);

  shapeless(event, 'allthemodium:alloy_sword', [
    'allthemodium:allthemodium_sword',
    'allthemodium:vibranium_sword',
    'allthemodium:unobtainium_sword',
  ]);

  shapeless(event, 'allthemodium:alloy_axe', [
    'allthemodium:unobtainium_axe',
    'allthemodium:vibranium_axe',
    'allthemodium:allthemodium_axe',
  ]);

  shapeless(event, 'allthemodium:alloy_pick', [
    'allthemodium:allthemodium_pickaxe',
    'allthemodium:vibranium_pickaxe',
    'allthemodium:unobtainium_pickaxe',
  ]);

  shapeless(event, 'allthemodium:alloy_shovel', [
    'allthemodium:unobtainium_shovel',
    'allthemodium:vibranium_shovel',
    'allthemodium:allthemodium_shovel',
  ]);

  shapeless(event, 'allthemodium:alloy_paxel', [
    'allthemodium:alloy_sword',
    'allthemodium:alloy_axe',
    'allthemodium:alloy_pick',
    'allthemodium:alloy_shovel',
  ]);
});
