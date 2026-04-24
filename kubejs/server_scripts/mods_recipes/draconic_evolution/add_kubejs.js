ServerEvents.recipes((event) => {
  // Draconic Evolution misc recipes
  const draconicItemsArray = [
    'creative_capacitor',
    'chaotic_axe',
    'chaotic_bow',
    'chaotic_capacitor',
    'chaotic_hoe',
    'chaotic_pickaxe',
    'chaotic_shovel',
    'chaotic_staff',
    'chaotic_sword',
    'draconic_axe',
    'draconic_bow',
    'draconic_capacitor',
    'draconic_hoe',
    'draconic_pickaxe',
    'draconic_shovel',
    'draconic_staff',
    'draconic_sword',
    'wyvern_axe',
    'wyvern_bow',
    'wyvern_capacitor',
    'wyvern_hoe',
    'wyvern_pickaxe',
    'wyvern_shovel',
    'wyvern_sword',
    'wyvern_sword',
    'wyvern_chestpiece',
    'draconic_chestpiece',
    'chaotic_chestpiece',
  ];

  draconicItemsArray.forEach((item) => {
    shapelessdraconic(event, item);
    reverseshapelessdraconic(event, item);
  });

  const draconicAdditionsItemsArray = [
    'wyvern_necklace',
    'draconic_necklace',
    'chaotic_necklace',
  ];

  draconicAdditionsItemsArray.forEach((item) => {
    shapelessdraconicadditions(event, item);
    reverseshapelessdraconicadditions(event, item);
  });

  shapeless(event, 'kubejs:chaotic_necklace', [
    'kubejs:draconic_necklace',
    'draconicevolution:chaotic_core',
  ]);

  shapeless(event, 'kubejs:draconic_necklace', [
    'kubejs:wyvern_necklace',
    'draconicevolution:awakened_core',
  ]);

  create3x3(event, 'kubejs:wyvern_necklace', [
    'minecraft:gold_ingot',
    'minecraft:gold_ingot',
    'minecraft:gold_ingot',
    'minecraft:gold_ingot',
    'minecraft:air',
    'minecraft:gold_ingot',
    'minecraft:air',
    'draconicevolution:wyvern_core',
    'minecraft:air',
  ]);
});
