ServerEvents.recipes((event) => {
  shapeless(event, '9x extendedcrafting:crystaltine_ingot', [
    'extendedcrafting:crystaltine_block',
  ]);

  create3x3(event, 'extendedcrafting:redstone_ingot', [
    'minecraft:iron_ingot',
    'minecraft:redstone',
    'minecraft:air',
    'minecraft:air',
    'minecraft:air',
    'minecraft:air',
    'minecraft:air',
    'minecraft:air',
    'minecraft:air',
  ]);
});