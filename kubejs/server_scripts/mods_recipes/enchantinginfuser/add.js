ServerEvents.recipes((event) => {
  create3x3(event, 'enchantinginfuser:enchanting_infuser', [
    'allthemodium:unobtainium_allthemodium_alloy_ingot',
    'minecraft:book',
    'allthemodium:unobtainium_allthemodium_alloy_ingot',
    'minecraft:amethyst_shard',
    'minecraft:crying_obsidian',
    'minecraft:amethyst_shard',
    'minecraft:crying_obsidian',
    'minecraft:enchanting_table',
    'minecraft:crying_obsidian',
  ]);

  create3x3(event, 'enchantinginfuser:advanced_enchanting_infuser', [
    'allthemodium:unobtainium_gear',
    'minecraft:book',
    'allthemodium:unobtainium_gear',
    'minecraft:netherite_ingot',
    'minecraft:crying_obsidian',
    'minecraft:netherite_ingot',
    'minecraft:crying_obsidian',
    'enchantinginfuser:enchanting_infuser',
    'minecraft:crying_obsidian',
  ]);
});