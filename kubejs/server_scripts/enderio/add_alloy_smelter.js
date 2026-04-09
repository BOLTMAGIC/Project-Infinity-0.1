ServerEvents.recipes((event) => {
  event.custom({
    type: 'enderio:alloy_smelting',
    result: { item: 'kubejs:crystalline_alloy' },
    ingredients: [
      { item: 'minecraft:gold_ingot' },
      { item: 'enderio:pulsating_powder' },
      { item: 'actuallyadditions:diamatine_crystal_shard' },
    ],
    energy: 10000,
  });

  event.custom({
    type: 'enderio:alloy_smelting',
    result: { item: 'kubejs:azure_silver_ingot' },
    ingredients: [{ item: 'kubejs:azure_silver_ore' }],
    energy: 10000,
  });

  event.custom({
    type: 'enderio:alloy_smelting',
    result: { item: 'thermal:steel_ingot' },
    ingredients: [
      { item: '3x minecraft:coal' },
      { item: 'minecraft:iron_ingot' },
    ],
    energy: 10000,
  });
});
