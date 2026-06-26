// Category: cyclic
ServerEvents.recipes((event) => {
  shapeless(event, 'cyclic:gem_obsidian', [
    'cyclic:gem_amber',
    'minecraft:amethyst_block',
    'minecraft:emerald',
    'cyclic:slime_bucket',
  ]);

  shapeless(event, 'cyclic:gem_obsidian', [
    'cyclic:gem_amber',
    'minecraft:chorus_fruit',
    'minecraft:emerald',
    'cyclic:slime_bucket',
  ]);

  shapeless(event, 'cyclic:gem_obsidian', [
    'cyclic:gem_amber',
    'minecraft:obsidian',
    'minecraft:wither_rose',
    'cyclic:slime_bucket',
  ]);

  shapeless(event, '2x cyclic:gem_amber', [
    'cyclic:magma_bucket',
    'minecraft:fire_charge',
    'minecraft:redstone_block',
    'minecraft:gold_ingot',
  ]);

  shapeless(event, '2x cyclic:gem_amber', [
    'minecraft:honey_bottle',
    'minecraft:honey_bottle',
    'minecraft:honey_bottle',
    'minecraft:fire_charge',
    'minecraft:magma_block',
    'minecraft:redstone',
  ]);

  create3x3(event, 'cyclic:user', [
    'minecraft:gold_ingot',
    'minecraft:dispenser',
    'minecraft:gold_ingot',
    'minecraft:tripwire_hook',
    'compressium:cobblestone_1',
    'minecraft:tripwire_hook',
    'cyclic:flint_block',
    'cyclic:flint_block',
    'cyclic:flint_block',
  ]);

  create3x3(event, 'cyclic:harvester', [
    'minecraft:emerald',
    'cyclic:obsidian_pressure_plate',
    'minecraft:emerald',
    'compressium:cobblestone_1',
    'cyclic:biomass',
    'compressium:cobblestone_1',
    'thermal:copper_nugget',
    'thermal:copper_nugget',
    'thermal:copper_nugget',
  ]);

  create3x3(event, 'cyclic:dropper', [
    'thermal:copper_nugget',
    'compressium:cobblestone_1',
    'thermal:copper_nugget',
    'minecraft:air',
    'minecraft:dropper',
    'minecraft:air',
    'thermal:copper_nugget',
    'minecraft:iron_ingot',
    'thermal:copper_nugget',
  ]);
});