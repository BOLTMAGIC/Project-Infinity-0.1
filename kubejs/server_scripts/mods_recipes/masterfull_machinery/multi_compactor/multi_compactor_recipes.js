// priority: 1;
function createCompactorRecipe(
  event,
  input,
  output,
  itemInputCount,
  extraInputs
) {
  extraInputs = extraInputs || [];

  var outputCount = Math.floor(itemInputCount / 4);
  var sanitizedOutput = output.replace(/:/g, '_');

  var builder = event
    .create('mm:multi_compactor_' + sanitizedOutput)
    .structureId('mm:multi_compactor_structure')
    .ticks(2)
    .input({
      type: 'mm:input/consume',
      ingredient: { type: 'mm:item', item: input, count: itemInputCount },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: { type: 'mm:energy', amount: 50000 },
    });

  extraInputs.forEach(function (inObj) {
    builder.input(inObj);
  });

  builder.output({
    type: 'mm:output/simple',
    ingredient: { type: 'mm:item', item: output, count: outputCount },
  });
}

function createSingularityRecipe(event, itemInput, singularityIdName) {
  if (!itemInput || !singularityIdName) return;

  var sanitizedName = singularityIdName.replace(/[^a-zA-Z0-9_]/g, '_');
  var recipeName = 'mm:multi_compactor_singularity_' + sanitizedName;

  event
    .create(recipeName)
    .structureId('mm:multi_compactor_structure')
    .ticks(1200)
    .input({
      type: 'mm:input/consume',
      ingredient: { type: 'mm:item', item: itemInput, count: 1 },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: { type: 'mm:item', item: 'mysticalagriculture:ultimate_essence', count: 81 },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: { type: 'mm:energy', amount: 2147483647 },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'extendedcrafting:singularity',
        count: 1,
        nbt: '{Id:"extendedcrafting:' + singularityIdName + '"}'
      }
    });
}

MMEvents.createProcesses((event) => {
  createCompactorRecipe(
    event,
    'minecraft:coal',
    'projecte:alchemical_coal',
    256
  );
  createCompactorRecipe(
    event,
    'projecte:alchemical_coal',
    'projecte:mobius_fuel',
    256
  );
  createCompactorRecipe(
    event,
    'projecte:mobius_fuel',
    'projecte:aeternalis_fuel',
    256
  );
  createCompactorRecipe(
    event,
    'projecte:aeternalis_fuel',
    'projectexpansion:magenta_fuel',
    256
  );
  createCompactorRecipe(
    event,
    'projectexpansion:magenta_fuel',
    'projectexpansion:pink_fuel',
    256
  );
  createCompactorRecipe(
    event,
    'projectexpansion:pink_fuel',
    'projectexpansion:purple_fuel',
    128
  );
  createCompactorRecipe(
    event,
    'projectexpansion:purple_fuel',
    'projectexpansion:violet_fuel',
    128
  );
  createCompactorRecipe(
    event,
    'projectexpansion:violet_fuel',
    'projectexpansion:blue_fuel',
    128
  );
  createCompactorRecipe(
    event,
    'projectexpansion:blue_fuel',
    'projectexpansion:cyan_fuel',
    128
  );
  createCompactorRecipe(
    event,
    'projectexpansion:cyan_fuel',
    'projectexpansion:green_fuel',
    128
  );
  createCompactorRecipe(
    event,
    'projectexpansion:green_fuel',
    'projectexpansion:lime_fuel',
    64
  );
  createCompactorRecipe(
    event,
    'projectexpansion:lime_fuel',
    'projectexpansion:yellow_fuel',
    64
  );
  createCompactorRecipe(
    event,
    'projectexpansion:yellow_fuel',
    'projectexpansion:orange_fuel',
    64
  );
  createCompactorRecipe(
    event,
    'projectexpansion:orange_fuel',
    'projectexpansion:white_fuel',
    64
  );

  createCompactorRecipe(
    event,
    'mysticalagriculture:inferium_essence',
    'mysticalagriculture:prudentium_essence',
    256
  );
  createCompactorRecipe(
    event,
    'mysticalagriculture:prudentium_essence',
    'mysticalagriculture:tertium_essence',
    256
  );
  createCompactorRecipe(
    event,
    'mysticalagriculture:tertium_essence',
    'mysticalagriculture:imperium_essence',
    256
  );
  createCompactorRecipe(
    event,
    'mysticalagriculture:imperium_essence',
    'mysticalagriculture:supremium_essence',
    256
  );
  createCompactorRecipe(
    event,
    'mysticalagriculture:awakened_supremium_essence',
    'mysticalagradditions:insanium_essence',
    128
  );
  createCompactorRecipe(
    event,
    'mysticalagradditions:insanium_essence',
    'mysticalexpansion:extremium_essence',
    128
  );
  createCompactorRecipe(
    event,
    'mysticalexpansion:extremium_essence',
    'mysticalexpansion:etherium_essence',
    64
  );
  createCompactorRecipe(
    event,
    'mysticalexpansion:etherium_essence',
    'mysticalexpansion:divinium_essence',
    64
  );

  createSingularityRecipe(event, 'thermal_extra:twinite_ingot', 'twinite_ingot');
  createSingularityRecipe(event, 'thermal:electrum_ingot', 'electrum');
  createSingularityRecipe(event, 'minecraft:lapis_lazuli', 'lapis_lazuli');
  createSingularityRecipe(event, 'mysticalagriculture:prosperity_ingot', 'prosperity_ingot');
  createSingularityRecipe(event, 'minecraft:gunpowder', 'gunpowder');
  createSingularityRecipe(event, 'thermal:rose_gold_ingot', 'rose_gold_ingot');
  createSingularityRecipe(event, 'kubejs:sculk_alloy_ingot', 'sculk_alloy_ingot');
  createSingularityRecipe(event, 'thermal:signalum_ingot', 'signalum_ingot');
  createSingularityRecipe(event, 'avaritia:crystal_matrix_ingot', 'crystal_matrix_ingot');
  createSingularityRecipe(event, 'allthemodium:unobtainium_allthemodium_alloy_ingot', 'unobtainium_allthemodium_alloy_ingot');
  createSingularityRecipe(event, 'mysticalagriculture:awakened_supremium_ingot', 'awakened_supremium_ingot');
  createSingularityRecipe(event, 'minecraft:diamond', 'diamond');
  createSingularityRecipe(event, 'minecraft:iron_ingot', 'iron');
  createSingularityRecipe(event, 'advancednetherite:netherite_gold_ingot', 'netherite_gold_ingot');
  createSingularityRecipe(event, 'born_in_chaos_v1:ethereal_spirit', 'ethereal_spirit');
  createSingularityRecipe(event, 'thermal:nickel_ingot', 'nickel');
  createSingularityRecipe(event, 'mysticalagriculture:soulium_ingot', 'soulium_ingot');
  createSingularityRecipe(event, 'mekanism:ingot_refined_obsidian', 'ingot_refined_obsidian');
  createSingularityRecipe(event, 'botania:elementium_ingot', 'elementium_ingot');
  createSingularityRecipe(event, 'nuclearcraft:lithium_ingot', 'lithium_ingot');
  createSingularityRecipe(event, 'advancednetherite:netherite_emerald_ingot', 'netherite_emerald_ingot');
  createSingularityRecipe(event, 'megacells:sky_steel_ingot', 'sky_steel_ingot');
  createSingularityRecipe(event, 'thermal:steel_ingot', 'steel');
  createSingularityRecipe(event, 'thermal:enderium_ingot', 'enderium_ingot');
  createSingularityRecipe(event, 'advancednetherite:netherite_iron_ingot', 'netherite_iron_ingot');
  createSingularityRecipe(event, 'dimensionalpocketsii:dimensional_ingot', 'dimensional_ingot');
  createSingularityRecipe(event, 'born_in_chaos_v1:dark_metal_ingot', 'dark_metal_ingot');
  createSingularityRecipe(event, 'thermal_extra:dragonsteel_ingot', 'dragonsteel_ingot');
  createSingularityRecipe(event, 'advancednetherite:netherite_diamond_ingot', 'netherite_diamond_ingot');
  createSingularityRecipe(event, 'mysticalagriculture:tertium_ingot', 'tertium_ingot');
  createSingularityRecipe(event, 'draconicevolution:awakened_draconium_ingot', 'awakened_draconium_ingot');
  createSingularityRecipe(event, 'common_ore_library:aluminum_ingot', 'aluminum');
  createSingularityRecipe(event, 'extendedcrafting:black_iron_ingot', 'black_iron_ingot');
  createSingularityRecipe(event, 'thermal:silver_ingot', 'silver');
  createSingularityRecipe(event, 'minecraft:copper_ingot', 'copper');
  createSingularityRecipe(event, 'mekanism:ingot_osmium', 'ingot_osmium');
  createSingularityRecipe(event, 'botania:manasteel_ingot', 'manasteel_ingot');
  createSingularityRecipe(event, 'pneumaticcraft:ingot_iron_compressed', 'ingot_iron_compressed');
  createSingularityRecipe(event, 'mysticalagriculture:inferium_ingot', 'inferium_ingot');
  createSingularityRecipe(event, 'minecraft:netherite_ingot', 'netherite_ingot');
  createSingularityRecipe(event, 'allthemodium:unobtainium_vibranium_alloy_ingot', 'unobtainium_vibranium_alloy_ingot');
  createSingularityRecipe(event, 'enderio:redstone_alloy_ingot', 'redstone_alloy_ingot');
  createSingularityRecipe(event, 'enderio:end_steel_ingot', 'end_steel_ingot');
  createSingularityRecipe(event, 'industrialforegoing:pink_slime_ingot', 'pink_slime_ingot');
  createSingularityRecipe(event, 'thermal:bronze_ingot', 'bronze');
  createSingularityRecipe(event, 'twilightforest:fiery_ingot', 'fiery_ingot');
  createSingularityRecipe(event, 'redstone_arsenal:flux_ingot', 'flux_ingot');
  createSingularityRecipe(event, 'thermalendergy:prismalium_ingot', 'prismalium_ingot');
  createSingularityRecipe(event, 'armorplus:en_gold', 'enhanced_gold');
  createSingularityRecipe(event, 'thermal:invar_ingot', 'invar');
  createSingularityRecipe(event, 'allthemodium:vibranium_ingot', 'vibranium_ingot');
  createSingularityRecipe(event, 'minecraft:coal', 'coal');
  createSingularityRecipe(event, 'allthemodium:allthemodium_ingot', 'allthemodium_ingot');
  createSingularityRecipe(event, 'nuclearcraft:tough_alloy_ingot', 'tough_alloy_ingot');
  createSingularityRecipe(event, 'draconicevolution:draconium_ingot', 'draconium_ingot');
  createSingularityRecipe(event, 'common_ore_library:iridium_ingot', 'iridium_ingot');
  createSingularityRecipe(event, 'mekanism:ingot_refined_glowstone', 'ingot_refined_glowstone');
  createSingularityRecipe(event, 'twilightforest:knightmetal_ingot', 'knightmetal_ingot');
  createSingularityRecipe(event, 'common_ore_library:platinum_ingot', 'platinum');
  createSingularityRecipe(event, 'nuclearcraft:stainless_steel_ingot', 'stainless_steel_ingot');
  createSingularityRecipe(event, 'minecraft:glowstone_dust', 'glowstone');
  createSingularityRecipe(event, 'mysticalagriculture:supremium_ingot', 'supremium_ingot');
  createSingularityRecipe(event, 'mysticalagriculture:imperium_ingot', 'imperium_ingot');
  createSingularityRecipe(event, 'thermal_extra:soul_infused_ingot', 'soul_infused_ingot');
  createSingularityRecipe(event, 'extendedcrafting:redstone_ingot', 'redstone_ingot');
  createSingularityRecipe(event, 'mysticalagriculture:prudentium_ingot', 'prudentium_ingot');
  createSingularityRecipe(event, 'common_ore_library:manyullyn_ingot', 'manyullyn_ingot');
  createSingularityRecipe(event, 'thermal_extra:shellite_ingot', 'shellite_ingot');
  createSingularityRecipe(event, 'armorplus:en_netherite', 'enhanced_netherite');
  createSingularityRecipe(event, 'thermal:tin_ingot', 'tin');
  createSingularityRecipe(event, 'thermal:lumium_ingot', 'lumium_ingot');
  createSingularityRecipe(event, 'extendedcrafting:ender_ingot', 'ender_ingot');
  createSingularityRecipe(event, 'allthemodium:unobtainium_ingot', 'unobtainium_ingot');
  createSingularityRecipe(event, 'armorplus:en_iron', 'enhanced_iron');
  createSingularityRecipe(event, 'extendedcrafting:enhanced_ender_ingot', 'enhanced_ender_ingot');
  createSingularityRecipe(event, 'thermal:lead_ingot', 'lead');
  createSingularityRecipe(event, 'nuclearcraft:extreme_ingot', 'extreme_ingot');
  createSingularityRecipe(event, 'minecraft:gold_ingot', 'gold');
  createSingularityRecipe(event, 'twilightforest:ironwood_ingot', 'ironwood_ingot');
  createSingularityRecipe(event, 'common_ore_library:brass_ingot', 'brass_ingot');
  createSingularityRecipe(event, 'thermal_extra:abyssal_ingot', 'abyssal_ingot');
  

  event
    .create('mm:coal_to_hellforged_parts')
    .structureId('mm:multi_compactor_structure')
    .ticks(1200)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'compressium:coal_2',
        count: 344064,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 2147483647,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'bloodmagic:hellforgedparts',
        count: 1,
      },
      chance: 0.133,
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'bloodmagic:hellforgedparts',
        count: 1,
      },
      chance: 0.133,
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'bloodmagic:hellforgedparts',
        count: 1,
      },
      chance: 0.133,
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'bloodmagic:hellforgedparts',
        count: 1,
      },
      chance: 0.133,
    });

      event
    .create('mm:silentgem_to_hellforged_parts')
    .structureId('mm:multi_compactor_structure')
    .ticks(1200)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        tag: 'silentgems:ores',
        count: 344064,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 2147483647,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'bloodmagic:hellforgedparts',
        count: 1,
      },
      chance: 0.02,
    })

          event
    .create('mm:silentgem_to_hellforged_parts2')
    .structureId('mm:multi_compactor_structure')
    .ticks(1200)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        tag: 'silentgems:goodgems',
        count: 344064,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 2147483647,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'bloodmagic:hellforgedparts',
        count: 1,
      },
      chance: 0.02,
    })
});