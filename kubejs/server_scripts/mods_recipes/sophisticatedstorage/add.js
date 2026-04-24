ServerEvents.recipes((event) => {
  create3x3(event, 'sophisticatedstorage:pump_upgrade', [
    '#forge:glass',
    'minecraft:bucket',
    '#forge:glass',
    'minecraft:piston',
    'sophisticatedstorage:upgrade_base',
    'minecraft:sticky_piston',
    '#forge:glass',
    'minecraft:bucket',
    '#forge:glass',
  ]);

  create3x3(event, 'sophisticatedstorage:advanced_pump_upgrade', [
    'minecraft:diamond',
    'minecraft:dispenser',
    'minecraft:diamond',
    'minecraft:gold_ingot',
    'sophisticatedstorage:pump_upgrade',
    'minecraft:gold_ingot',
    'minecraft:redstone',
    'minecraft:redstone',
    'minecraft:redstone',
  ]);

  create3x3(event, 'sophisticatedstorage:xp_pump_upgrade', [
    'minecraft:redstone',
    'minecraft:ender_eye',
    'minecraft:redstone',
    'minecraft:experience_bottle',
    'sophisticatedstorage:advanced_pump_upgrade',
    'minecraft:experience_bottle',
    'minecraft:redstone',
    'minecraft:ender_eye',
    'minecraft:redstone',
  ]);

  create3x3(
    event,
    Item.of('sophisticatedstorage:iron_chest', '{woodType:"oak"}'),
    [
      'minecraft:iron_ingot',
      'minecraft:iron_ingot',
      'minecraft:iron_ingot',
      'minecraft:iron_ingot',
      'minecraft:chest',
      'minecraft:iron_ingot',
      'minecraft:iron_ingot',
      'minecraft:iron_ingot',
      'minecraft:iron_ingot',
    ]
  );

  create3x3(
    event,
    Item.of('sophisticatedstorage:gold_chest', '{woodType:"oak"}'),
    [
      'minecraft:gold_ingot',
      'minecraft:gold_ingot',
      'minecraft:gold_ingot',
      'minecraft:gold_ingot',
      Item.of('sophisticatedstorage:iron_chest', '{woodType:"oak"}'),
      'minecraft:gold_ingot',
      'minecraft:gold_ingot',
      'minecraft:gold_ingot',
      'minecraft:gold_ingot',
    ]
  );

  create3x3(
    event,
    Item.of('sophisticatedstorage:diamond_chest', '{woodType:"oak"}'),
    [
      'minecraft:diamond',
      'minecraft:diamond',
      'minecraft:diamond',
      'minecraft:diamond',
      Item.of('sophisticatedstorage:gold_chest', '{woodType:"oak"}'),
      'minecraft:diamond',
      'minecraft:diamond',
      'minecraft:diamond',
      'minecraft:diamond',
    ]
  );

  shapeless(
    event,
    Item.of('sophisticatedstorage:netherite_chest', '{woodType:"oak"}'),
    [
      'minecraft:netherite_ingot',
      Item.of('sophisticatedstorage:diamond_chest', '{woodType:"oak"}'),
    ]
  );

  create3x3(event, 'sophisticatedstorage:stack_upgrade_omega_tier', [
    'sophisticatedstorage:stack_upgrade_tier_5',
    'sophisticatedstorage:stack_upgrade_tier_5',
    'sophisticatedstorage:stack_upgrade_tier_5',
    'sophisticatedstorage:stack_upgrade_tier_5',
    'kubejs:infinity_1',
    'sophisticatedstorage:stack_upgrade_tier_5',
    'sophisticatedstorage:stack_upgrade_tier_5',
    'sophisticatedstorage:stack_upgrade_tier_5',
    'sophisticatedstorage:stack_upgrade_tier_5',
  ]);
});