ServerEvents.recipes((event) => {
  function crush (event, input, output_count, output) {
    const ingredient = input.startsWith('#')
      ? { tag: input.substring(1) }
      : { item: input };

    event
      .custom({
        type: 'mekanism:crushing',
        input: {
          ingredient: ingredient,
        },
        output: {
          count: output_count,
          item: output,
        },
      })
      .id('mek_' + output.replace(/[:]/g, '_').toLowerCase());
  }

  crush(
    event,
    'allthemodium:unobtainium_vibranium_alloy_ingot',
    1,
    'allthemodium:unobtainium_vibranium_alloy_dust'
  );
  crush(event, 'kubejs:blaze_gold_ingot', 1, 'kubejs:blaze_gold_dust');
  crush(event, 'kubejs:azure_silver_ingot', 1, 'kubejs:azure_silver_dust');
  crush(event, 'kubejs:azure_electrum_ingot', 1, 'kubejs:azure_electrum_dust');
  crush(event, 'kubejs:crimson_iron_ingot', 1, 'kubejs:crimson_iron_dust');
  crush(event, 'minecraft:sand', 1, 'exdeorum:dust');
  crush(event, 'kubejs:arcmetal_ore', 2, 'kubejs:raw_arcmetal');
  crush(event, 'kubejs:solarmetal_ore', 2, 'kubejs:raw_solarmetal');
  crush(event, 'kubejs:plasteel_ore', 2, 'kubejs:raw_plasteel');
  crush(event, 'kubejs:voidmetal_ore', 2, 'kubejs:raw_voidmetal');
  crush(event, '#forge:ingots/graphite', 1, 'bigreactors:graphite_dust');

  crush(event, 'draconicevolution:draconium_ingot', 1, 'draconicevolution:draconium_dust')

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
    'minecraft:netherite_scrap',
    'thermal_extra:dragonsteel_ingot',
    1
  );

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
    'nuclearcraft:lithium_ingot',
    1,
    'nuclearcraft:ferroboron_ingot',
    'nuclearcraft:tough_alloy_ingot',
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
    'nuclearcraft:hard_carbon_ingot',
    1,
    'nuclearcraft:tough_alloy_ingot',
    'nuclearcraft:extreme_ingot',
    1
  );
});

ServerEvents.recipes((event) => {
  function infuse (
    event,
    chemicalInput,
    chemicalAmount,
    input,
    input_amount,
    output,
    output_count
  ) {
    event
      .custom({
        type: 'mekanism:metallurgic_infusing',
        chemicalInput: {
          amount: chemicalAmount,
          tag: chemicalInput,
        },
        itemInput: {
          amount: input_amount,
          ingredient: {
            item: input,
          },
        },
        output: {
          item: output,
          count: output_count,
        },
      })
      .id('mek_' + output.replace(/[:]/g, '_').toLowerCase());
  }

  function nucleosynthesizing (event, gasAmount, input, output) {
    event
      .custom({
        type: 'mekanism:nucleosynthesizing',
        duration: 1000,
        gasInput: {
          amount: gasAmount,
          gas: 'mekanism:antimatter',
        },
        itemInput: {
          ingredient: {
            item: input,
          },
        },
        output: {
          item: output,
        },
      })
      .id('mek_' + output.replace(/[:]/g, '_').toLowerCase());
  }

  infuse(
    event,
    'mekanism:redstone',
    90,
    'minecraft:iron_block',
    1,
    'evolvedmekanism:block_alloy_infused',
    1
  );
  infuse(
    event,
    'mekanism:diamond',
    180,
    'evolvedmekanism:block_alloy_infused',
    1,
    'evolvedmekanism:block_alloy_reinforced',
    1
  );
  infuse(
    event,
    'mekanism:refined_obsidian',
    360,
    'evolvedmekanism:block_alloy_reinforced',
    1,
    'evolvedmekanism:block_alloy_atomic',
    1
  );
  nucleosynthesizing(
    event,
    450,
    'evolvedmekanism:block_alloy_hypercharged',
    'evolvedmekanism:block_alloy_subatomic'
  );
  infuse(
    event,
    'evolvedmekanism:uranium',
    180,
    'evolvedmekanism:block_alloy_atomic',
    1,
    'evolvedmekanism:block_alloy_hypercharged',
    1
  );
  infuse(
    event,
    'evolvedmekanism:better_gold',
    180,
    'evolvedmekanism:block_alloy_subatomic',
    1,
    'evolvedmekanism:block_alloy_singular',
    1
  );
  infuse(
    event,
    'evolvedmekanism:plaslitherite',
    180,
    'evolvedmekanism:block_alloy_singular',
    1,
    'evolvedmekanism:block_alloy_exoversal',
    1
  );
  infuse(
    event,
    'mekanism_extras:radiance',
    360,
    'evolvedmekanism:block_alloy_atomic',
    1,
    'kubejs:radiance_alloy_block',
    1
  );
  infuse(
    event,
    'mekanism_extras:thermonuclear',
    1080,
    'kubejs:radiance_alloy_block',
    1,
    'kubejs:thermonuclear_alloy_block',
    1
  );
  infuse(
    event,
    'mekanism_extras:shining',
    1440,
    'kubejs:thermonuclear_alloy_block',
    1,
    'kubejs:shining_alloy_block',
    1
  );
  infuse(
    event,
    'mekanism_extras:spectrum',
    1800,
    'kubejs:shining_alloy_block',
    1,
    'kubejs:spectrum_alloy_block',
    1
  );

    function infusion_conversion (event, item_input, amount_output, infusion_type_output) {
    event
      .custom({
        "type": "mekanism:infusion_conversion",
        "input": {
          "ingredient": {
            "item": item_input,
          }
        },
        "output": {
          "amount": amount_output,
          "infuse_type": infusion_type_output,
        }
      })
      .id('mek_' + infusion_type_output.replace(/[:]/g, '_').toLowerCase() + '_from_' + item_input.replace(/[:]/g, '_').toLowerCase());
  }

  infusion_conversion(event, 'kubejs:compressed_enriched_redstone_x1', 720, 'mekanism:redstone');
  infusion_conversion(event, 'kubejs:compressed_enriched_redstone_x2', 6480, 'mekanism:redstone');
  infusion_conversion(event, 'kubejs:compressed_enriched_carbon_x1', 720, 'mekanism:carbon');
  infusion_conversion(event, 'kubejs:compressed_enriched_carbon_x2', 6480, 'mekanism:carbon');
  infusion_conversion(event, 'kubejs:compressed_enriched_diamond_x1', 720, 'mekanism:diamond');
  infusion_conversion(event, 'kubejs:compressed_enriched_diamond_x2', 6480, 'mekanism:diamond');
  infusion_conversion(event, 'kubejs:compressed_enriched_refined_obsidian_x1', 720, 'mekanism:refined_obsidian');
  infusion_conversion(event, 'kubejs:compressed_enriched_refined_obsidian_x2', 6480, 'mekanism:refined_obsidian');

  function enriching (event, item_input, item_output) {
    event
      .custom({
        "type": "mekanism:enriching",
        "input": {
          "ingredient": {
            "item": item_input,
          }
        },
        "output": {
          "item": item_output,
        }
      })
      .id('mek_' + item_output.replace(/[:]/g, '_').toLowerCase() + '_from_' + item_input.replace(/[:]/g, '_').toLowerCase());
  }

  enriching(event, 'minecraft:redstone_block', 'kubejs:compressed_enriched_redstone_x1');
  enriching(event, 'compressium:redstone_1', 'kubejs:compressed_enriched_redstone_x2');
  enriching(event, 'minecraft:coal_block', 'kubejs:compressed_enriched_carbon_x1');
  enriching(event, 'compressium:coal_1', 'kubejs:compressed_enriched_carbon_x2');
  enriching(event, 'minecraft:diamond_block', 'kubejs:compressed_enriched_diamond_x1');
  enriching(event, 'compressium:diamond_1', 'kubejs:compressed_enriched_diamond_x2');
});
