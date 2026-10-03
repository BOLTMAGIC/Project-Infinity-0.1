ServerEvents.recipes((event) => {
  function combining (
    event,
    input_amount1,
    input_item1,
    mainAmount,
    mainInput,
    output,
    output_count
  ) {
    event
      .custom({
        type: 'mekanism:combining',
        extraInput: {
          amount: input_amount1,
          ingredient: {
            item: input_item1,
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
      .id('combining' + output);
  }

  combining(
    event,
    1,
    'minecraft:ender_pearl',
    1,
    'enderio:energetic_alloy_ingot',
    'enderio:vibrant_alloy_ingot',
    1
  );
  combining(
    event,
    1,
    'minecraft:ender_pearl',
    1,
    'minecraft:iron_ingot',
    'enderio:pulsating_alloy_ingot',
    1
  );
  combining(
    event,
    1,
    'thermal:silver_ingot',
    1,
    'minecraft:gold_ingot',
    'thermal:electrum_ingot',
    1
  );

  combining(
    event,
    1,
    'nuclearcraft:chromium_ingot',
    1,
    'thermal:steel_ingot',
    'nuclearcraft:stainless_steel_ingot',
    1
  );

  combining(
    event,
    1,
    'thermal:steel_ingot',
    1,
    'nuclearcraft:boron_ingot',
    'nuclearcraft:ferroboron_ingot',
    1
  );
  combining(
    event,
    1,
    'thermal:steel_block',
    1,
    'nuclearcraft:boron_block',
    'kubejs:ferroboron_block',
    1
  );

  combining(
    event,
    1,
    'nuclearcraft:lithium_ingot',
    1,
    'nuclearcraft:ferroboron_ingot',
    'nuclearcraft:tough_alloy_ingot',
    1
  );
  combining(
    event,
    1,
    'kubejs:ferroboron_block',
    1,
    'nuclearcraft:lithium_block',
    'kubejs:tough_alloy_block',
    1
  );

  combining(
    event,
    1,
    'minecraft:diamond',
    1,
    'nuclearcraft:graphite_ingot',
    'nuclearcraft:hard_carbon_ingot',
    1
  );
  combining(
    event,
    1,
    'minecraft:diamond_block',
    1,
    'nuclearcraft:graphite_block',
    'kubejs:hard_carbon_block',
    1
  );

  combining(
    event,
    1,
    'nuclearcraft:tough_alloy_ingot',
    1,
    'nuclearcraft:hard_carbon_ingot',
    'nuclearcraft:extreme_ingot',
    1
  );
  combining(
    event,
    1,
    'kubejs:tough_alloy_block',
    1,
    'kubejs:hard_carbon_block',
    'kubejs:extreme_block',
    1
  );
  combining(
    event,
    1,
    'nuclearcraft:boron_ingot',
    1,
    'thermal:steel_ingot',
    'nuclearcraft:ferroboron_dust',
    1
  );
});