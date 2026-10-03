ServerEvents.recipes((event) => {
  event
    .shapeless('thermal:steel_ingot', [
      'minecraft:iron_ingot',
      'minecraft:coal',
      'minecraft:coal',
      'minecraft:coal',
      'minecraft:coal',
      '#kubejs:hammers_with_durability',
    ])
    .damageIngredient('#kubejs:hammers_with_durability', 1);

  event
    .shapeless('thermal:steel_block', [
      'minecraft:iron_block',
      'minecraft:coal_block',
      'minecraft:coal_block',
      'minecraft:coal_block',
      'minecraft:coal_block',
      '#kubejs:hammers_with_no_durability',
    ])
    .keepIngredient('#kubejs:hammers_with_no_durability');
});
