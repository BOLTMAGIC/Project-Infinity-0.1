ServerEvents.recipes((event) => {
  create3x3(event, 'cobblefordays:tier_2', [
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:water_bucket',
    'cobblefordays:tier_1',
    'minecraft:lava_bucket',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
  ]);

  create3x3(event, 'cobblefordays:tier_3', [
    'minecraft:iron_ingot',
    'minecraft:iron_ingot',
    'minecraft:iron_ingot',
    'minecraft:water_bucket',
    'cobblefordays:tier_2',
    'minecraft:lava_bucket',
    'minecraft:iron_ingot',
    'minecraft:iron_ingot',
    'minecraft:iron_ingot',
  ]);

  create3x3(event, 'cobblefordays:tier_4', [
    'minecraft:gold_ingot',
    'minecraft:gold_ingot',
    'minecraft:gold_ingot',
    'minecraft:water_bucket',
    'cobblefordays:tier_3',
    'minecraft:lava_bucket',
    'minecraft:gold_ingot',
    'minecraft:gold_ingot',
    'minecraft:gold_ingot',
  ]);

  create3x3(event, 'cobblefordays:tier_5', [
    'minecraft:diamond',
    'minecraft:diamond',
    'minecraft:diamond',
    'minecraft:water_bucket',
    'cobblefordays:tier_4',
    'minecraft:lava_bucket',
    'minecraft:diamond',
    'minecraft:diamond',
    'minecraft:diamond',
  ]);
});