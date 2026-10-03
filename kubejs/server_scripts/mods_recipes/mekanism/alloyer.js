ServerEvents.recipes((event) => {
  function alloying (
    event,
    input_amount1,
    input_item1,
    input_amount2,
    input_item2,
    mainAmount,
    mainInput,
    output,
    output_count
  ) {
    event
      .custom({
        type: 'evolvedmekanism:alloying',
        extraInput: {
          amount: input_amount1,
          ingredient: {
            item: input_item1,
          },
        },
        secondExtraInput: {
          amount: input_amount2,
          ingredient: {
            item: input_item2,
          },
        },
        mainInput: {
          amount: mainAmount,
          ingredient: {
            item: mainInput,
          },
        },
        output: {
          item: output,
          count: output_count,
        },
      })
      .id('alloying_' + output);
  }

  alloying(
    event,
    4,
    'evolvedmekanism:alloy_exoversal',
    4,
    'voidminers:rosarium',
    1,
    'kubejs:infinity_10',
    'evolvedmekanism:alloy_creative',
    1
  );

  alloying(
    event,
    1,
    'enderio:pulsating_powder',
    1,
    'actuallyadditions:diamatine_crystal_shard',
    1,
    'minecraft:gold_ingot',
    'kubejs:crystalline_alloy',
    1
  );

  alloying(
    event,
    2,
    'thermal_extra:soul_sand_dust',
    1,
    'minecraft:iron_ingot',
    1,
    'minecraft:copper_ingot',
    'thermal_extra:soul_infused_ingot',
    1
  );

  alloying(
    event,
    2,
    'thermal:diamond_dust',
    1,
    'minecraft:netherite_scrap',
    1,
    'minecraft:echo_shard',
    'thermal_extra:abyssal_ingot',
    1
  );

  alloying(
    event,
    1,
    'thermal:nickel_ingot',
    1,
    'minecraft:shulker_shell',
    1,
    'thermal:lead_ingot',
    'thermal_extra:shellite_ingot',
    1
  );

  alloying(
    event,
    2,
    'thermal:tin_ingot',
    1,
    'minecraft:blaze_rod',
    1,
    'minecraft:obsidian',
    'thermal_extra:twinite_ingot',
    1
  );

  alloying(
    event,
    1,
    'thermal:nickel_ingot',
    1,
    'thermal_extra:ancient_dust',
    1,
    'common_ore_library:scrap_dust',
    'thermal_extra:dragonsteel_ingot',
    1
  );

  alloying(
    event,
    3,
    'minecraft:prismarine_bricks',
    9,
    'minecraft:prismarine_crystals',
    2,
    'thermal:nickel_block',
    'thermalendergy:prismalium_block',
    2
  );
});
