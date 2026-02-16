ServerEvents.recipes((event) => {

  // Processing Addons
  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      { item: 'minecraft:redstone' },
      { item: 'minecraft:redstone' },
      { item: 'minecraft:glass_pane' },
      { item: 'minecraft:glass_pane' },
      { tag: 'forge:gears/gold' },
      { tag: 'forge:gears/gold' },
      { item: 'minecraft:furnace' },
      { item: 'minecraft:crafting_table' },
    ],
    inputFluid: '{Amount:1000,FluidName:"industrialforegoing:latex"}',
    output: {
      count: 1,
      item: 'kubejs:processing_addon_1'
    },
    processingTime: 200,
  });

  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      { item: 'minecraft:redstone' },
      { item: 'minecraft:redstone' },
      { item: 'kubejs:processing_addon_1' },
      { item: 'minecraft:glass_pane' },
      { tag: 'forge:gears/diamond' },
      { tag: 'forge:gears/diamond' },
      { item: 'minecraft:furnace' },
      { item: 'minecraft:crafting_table' },
    ],
    inputFluid: '{Amount:2000,FluidName:"industrialforegoing:latex"}',
    output: {
      count: 1,
      item: 'kubejs:processing_addon_2'
    },
    processingTime: 200,
  });

  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      { item: 'minecraft:redstone' },
      { item: 'minecraft:redstone' },
      { item: 'kubejs:processing_addon_2' },
      { item: 'minecraft:glass_pane' },
      { tag: 'forge:gears/netherite' },
      { tag: 'forge:gears/netherite' },
      { item: 'minecraft:furnace' },
      { item: 'minecraft:crafting_table' },
    ],
    inputFluid: '{Amount:1000,FluidName:"industrialforegoing:pink_slime"}',
    output: {
      count: 1,
      item: 'kubejs:processing_addon_3'
    },
    processingTime: 200,
  });
  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      { item: 'minecraft:redstone' },
      { item: 'minecraft:redstone' },
      { item: 'kubejs:processing_addon_3' },
      { item: 'minecraft:glass_pane' },
      { item: 'ifeu:sculk_gear' },
      { item: 'ifeu:sculk_gear' },
      { item: 'minecraft:furnace' },
      { item: 'minecraft:crafting_table' },
    ],
    inputFluid: '{Amount:2000,FluidName:"industrialforegoing:pink_slime"}',
    output: {
      count: 1,
      item: 'kubejs:processing_addon_4'
    },
    processingTime: 200,
  });
  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      { item: 'minecraft:redstone' },
      { item: 'minecraft:redstone' },
      { item: 'kubejs:processing_addon_4' },
      { item: 'minecraft:glass_pane' },
      { item: 'minecraft:nether_star' },
      { item: 'minecraft:nether_star' },
      { item: 'minecraft:furnace' },
      { item: 'minecraft:crafting_table' },
    ],
    inputFluid: '{Amount:1000,FluidName:"industrialforegoing:ether_gas"}',
    output: {
      count: 1,
      item: 'kubejs:processing_addon_5'
    },
    processingTime: 200,
  });
  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      { item: 'minecraft:redstone' },
      { item: 'minecraft:redstone' },
      { item: 'kubejs:processing_addon_5' },
      { item: 'minecraft:glass_pane' },
      { item: 'ifeu:dragon_star' },
      { item: 'ifeu:dragon_star' },
      { item: 'minecraft:furnace' },
      { item: 'minecraft:crafting_table' },
    ],
    inputFluid: '{Amount:1000,FluidName:"ifeu:liquid_dragon_breath"}',
    output: {
      count: 1,
      item: 'ifeu:processing_addon_6',
      nbt: '{TitaniumAugment:{Processing:7.0f}}',
    },
    processingTime: 200,
  });

  // Efficiency Addons
event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      { item: 'minecraft:redstone' },
      { item: 'minecraft:redstone' },
      { item: 'minecraft:glass_pane' },
      { item: 'minecraft:glass_pane' },
      { tag: 'forge:gears/gold' },
      { tag: 'forge:gears/gold' },
      { item: 'minecraft:blaze_rod' },
      { item: 'minecraft:blaze_rod' },
    ],
    inputFluid: '{Amount:1000,FluidName:"industrialforegoing:latex"}',
    output: {
      count: 1,
      item: 'kubejs:efficiency_addon_1'
    },
    processingTime: 200,
  });

  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      { item: 'minecraft:redstone' },
      { item: 'minecraft:redstone' },
      { item: 'kubejs:efficiency_addon_1' },
      { item: 'minecraft:glass_pane' },
      { tag: 'forge:gears/diamond' },
      { tag: 'forge:gears/diamond' },
      { item: 'minecraft:blaze_rod' },
      { item: 'minecraft:blaze_rod' },
    ],
    inputFluid: '{Amount:2000,FluidName:"industrialforegoing:latex"}',
    output: {
      count: 1,
      item: 'kubejs:efficiency_addon_2'
    },
    processingTime: 200,
  });

  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      { item: 'minecraft:redstone' },
      { item: 'minecraft:redstone' },
      { item: 'kubejs:efficiency_addon_2' },
      { item: 'minecraft:glass_pane' },
      { tag: 'forge:gears/netherite' },
      { tag: 'forge:gears/netherite' },
      { item: 'minecraft:blaze_rod' },
      { item: 'minecraft:blaze_rod' },
    ],
    inputFluid: '{Amount:1000,FluidName:"industrialforegoing:pink_slime"}',
    output: {
      count: 1,
      item: 'kubejs:efficiency_addon_3'
    },
    processingTime: 200,
  });
  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      { item: 'minecraft:redstone' },
      { item: 'minecraft:redstone' },
      { item: 'kubejs:efficiency_addon_3' },
      { item: 'minecraft:glass_pane' },
      { item: 'ifeu:sculk_gear' },
      { item: 'ifeu:sculk_gear' },
      { item: 'minecraft:blaze_rod' },
      { item: 'minecraft:blaze_rod' },
    ],
    inputFluid: '{Amount:2000,FluidName:"industrialforegoing:pink_slime"}',
    output: {
      count: 1,
      item: 'kubejs:efficiency_addon_4'
    },
    processingTime: 200,
  });
  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      { item: 'minecraft:redstone' },
      { item: 'minecraft:redstone' },
      { item: 'kubejs:efficiency_addon_4' },
      { item: 'minecraft:glass_pane' },
      { item: 'minecraft:nether_star' },
      { item: 'minecraft:nether_star' },
      { item: 'minecraft:blaze_rod' },
      { item: 'minecraft:blaze_rod' },
    ],
    inputFluid: '{Amount:1000,FluidName:"industrialforegoing:ether_gas"}',
    output: {
      count: 1,
      item: 'kubejs:efficiency_addon_5'
    },
    processingTime: 200,
  });
  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      { item: 'minecraft:redstone' },
      { item: 'minecraft:redstone' },
      { item: 'kubejs:efficiency_addon_5' },
      { item: 'minecraft:glass_pane' },
      { item: 'ifeu:dragon_star' },
      { item: 'ifeu:dragon_star' },
      { item: 'minecraft:blaze_rod' },
      { item: 'minecraft:blaze_rod' },
    ],
    inputFluid: '{Amount:1000,FluidName:"ifeu:liquid_dragon_breath"}',
    output: {
      count: 1,
      item: 'ifeu:efficiency_addon_6',
      nbt: '{TitaniumAugment:{Efficiency:0.39999998f}}',
    },
    processingTime: 200,
  });

  // Speed Addons
  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      { item: 'minecraft:redstone' },
      { item: 'minecraft:redstone' },
      { item: 'minecraft:glass_pane' },
      { item: 'minecraft:glass_pane' },
      { tag: 'forge:gears/diamond' },
      { tag: 'forge:gears/diamond' },
      { item: 'minecraft:sugar' },
      { item: 'minecraft:sugar' },
    ],
    inputFluid: '{Amount:1000,FluidName:"industrialforegoing:latex"}',
    output: {
      count: 1,
      item: 'kubejs:speed_addon_1'
    },
    processingTime: 200,
  });
  
  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      { item: 'minecraft:redstone' },
      { item: 'minecraft:redstone' },
      { item: 'kubejs:speed_addon_1' },
      { item: 'minecraft:glass_pane' },
      { tag: 'forge:gears/diamond' },
      { tag: 'forge:gears/diamond' },
      { item: 'minecraft:sugar' },
      { item: 'minecraft:sugar' },
    ],
    inputFluid: '{Amount:2000,FluidName:"industrialforegoing:latex"}',
    output: {
      count: 1,
      item: 'kubejs:speed_addon_2'
    },
    processingTime: 200,
  });

  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      { item: 'minecraft:redstone' },
      { item: 'minecraft:redstone' },
      { item: 'kubejs:speed_addon_2' },
      { item: 'minecraft:glass_pane' },
      { tag: 'forge:gears/netherite' },
      { tag: 'forge:gears/netherite' },
      { item: 'minecraft:sugar' },
      { item: 'minecraft:sugar' },
    ],
    inputFluid: '{Amount:1000,FluidName:"industrialforegoing:pink_slime"}',
    output: {
      count: 1,
      item: 'kubejs:speed_addon_3'
    },
    processingTime: 200,
  });
  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      { item: 'minecraft:redstone' },
      { item: 'minecraft:redstone' },
      { item: 'kubejs:speed_addon_3' },
      { item: 'minecraft:glass_pane' },
      { item: 'ifeu:sculk_gear' },
      { item: 'ifeu:sculk_gear' },
      { item: 'minecraft:sugar' },
      { item: 'minecraft:sugar' },
    ],
    inputFluid: '{Amount:2000,FluidName:"industrialforegoing:pink_slime"}',
    output: {
      count: 1,
      item: 'kubejs:speed_addon_4'
    },
    processingTime: 200,
  });
  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      { item: 'minecraft:redstone' },
      { item: 'minecraft:redstone' },
      { item: 'kubejs:speed_addon_4' },
      { item: 'minecraft:glass_pane' },
      { item: 'minecraft:nether_star' },
      { item: 'minecraft:nether_star' },
      { item: 'minecraft:sugar' },
      { item: 'minecraft:sugar' },
    ],
    inputFluid: '{Amount:1000,FluidName:"industrialforegoing:ether_gas"}',
    output: {
      count: 1,
      item: 'kubejs:speed_addon_5'
    },
    processingTime: 200,
  });
  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      { item: 'minecraft:redstone' },
      { item: 'minecraft:redstone' },
      { item: 'kubejs:speed_addon_5' },
      { item: 'minecraft:glass_pane' },
      { item: 'ifeu:dragon_star' },
      { item: 'ifeu:dragon_star' },
      { item: 'minecraft:sugar' },
      { item: 'minecraft:sugar' },
    ],
    inputFluid: '{Amount:1000,FluidName:"ifeu:liquid_dragon_breath"}',
    output: {
      count: 1,
      item: 'ifeu:speed_addon_6',
      nbt: '{TitaniumAugment:{Speed:7.0f}}',
    },
    processingTime: 200,
  });
});
