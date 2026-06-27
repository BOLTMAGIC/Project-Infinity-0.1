ServerEvents.recipes((event) => {
  create3x3(event, 'compactmachines:machine_tiny', [
    'minecraft:copper_block',
    'minecraft:copper_block',
    'minecraft:copper_block',
    'minecraft:copper_block',
    'compactmachines:wall',
    'minecraft:copper_block',
    'minecraft:copper_block',
    'minecraft:copper_block',
    'minecraft:copper_block',
  ]);

  create3x3(event, 'compactmachines:machine_small', [
    'minecraft:gold_block',
    'minecraft:gold_block',
    'minecraft:gold_block',
    'minecraft:gold_block',
    'compactmachines:machine_tiny',
    'minecraft:gold_block',
    'minecraft:gold_block',
    'minecraft:gold_block',
    'minecraft:gold_block',
  ]);

  create3x3(event, 'compactmachines:machine_normal', [
    'minecraft:emerald_block',
    'minecraft:emerald_block',
    'minecraft:emerald_block',
    'minecraft:emerald_block',
    'compactmachines:machine_small',
    'minecraft:emerald_block',
    'minecraft:emerald_block',
    'minecraft:emerald_block',
    'minecraft:emerald_block',
  ]);

  create3x3(event, 'compactmachines:machine_large', [
    'kubejs:sculk_alloy_block',
    'kubejs:sculk_alloy_block',
    'kubejs:sculk_alloy_block',
    'kubejs:sculk_alloy_block',
    'compactmachines:machine_normal',
    'kubejs:sculk_alloy_block',
    'kubejs:sculk_alloy_block',
    'kubejs:sculk_alloy_block',
    'kubejs:sculk_alloy_block',
  ]);

  create3x3(event, 'compactmachines:machine_giant', [
    'evolvedmekanism:block_alloy_hypercharged',
    'evolvedmekanism:block_alloy_hypercharged',
    'evolvedmekanism:block_alloy_hypercharged',
    'kubejs:starmetal_block',
    'compactmachines:machine_large',
    'kubejs:starmetal_block',
    'evolvedmekanism:block_alloy_hypercharged',
    'evolvedmekanism:block_alloy_hypercharged',
    'evolvedmekanism:block_alloy_hypercharged',
  ]);
});
