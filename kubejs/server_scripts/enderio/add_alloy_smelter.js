ServerEvents.recipes((event) => {
  event
    .custom({
      type: 'enderio:alloy_smelting',
      energy: 10000,
      inputs: [
        {
          count: 1,
          ingredient: {
            item: 'minecraft:gold_ingot',
          },
        },
        {
          count: 1,
          ingredient: {
            item: 'enderio:pulsating_powder',
          },
        },
        {
          count: 1,
          ingredient: {
            item: 'actuallyadditions:diamatine_crystal_shard',
          },
        },
      ],
      result: {
        item: 'kubejs:crystalline_alloy',
      },
    })
    .id('kubejs:crystalline_alloy_from_alloy_smelter');

  event
    .custom({
      type: 'enderio:alloy_smelting',
      energy: 10000,
      inputs: [
        {
          count: 1,
          ingredient: {
            item: 'kubejs:azure_silver_ore',
          },
        },
      ],
      result: {
        item: 'kubejs:azure_silver_ingot',
      },
    })
    .id('kubejs:azure_silver_ingot_from_alloy_smelter');

  event
    .custom({
      type: 'enderio:alloy_smelting',
      energy: 10000,
      inputs: [
        {
          count: 3,
          ingredient: {
            item: 'minecraft:coal',
          },
        },
        {
          count: 1,
          ingredient: {
            item: 'minecraft:iron_ingot',
          },
        },
      ],
      result: {
        item: 'thermal:steel_ingot',
      },
    })
    .id('kubejs:thermal_steel_ingot_from_alloy_smelter');
});
