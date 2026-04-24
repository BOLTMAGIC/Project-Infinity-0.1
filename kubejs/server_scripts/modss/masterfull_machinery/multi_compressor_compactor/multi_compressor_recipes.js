priority: 1;
MMEvents.createProcesses((event) => {
  const RECIPES = {
    abyssal_ingot: {
      inputItem: 'thermal_extra:abyssal_block',
    },
    allthemodium_ingot: {
      inputItem: 'allthemodium:allthemodium_block',
      count: 556,
    },
    aluminum: {
      inputItem: 'common_ore_library:aluminum_block',
    },
    awakened_draconium_ingot: {
      inputItem: 'draconicevolution:awakened_draconium_block',
      count: 556,
    },
    awakened_supremium_ingot: {
      inputItem: 'mysticalagriculture:awakened_supremium_ingot_block',
      count: 139,
    },
    black_iron_ingot: {
      inputItem: 'extendedcrafting:black_iron_block',
      count: 834,
    },
    brass_ingot: {
      inputItem: 'common_ore_library:brass_block',
    },
    bronze: {
      inputItem: 'thermal:bronze_block',
    },
    coal: {
      inputItem: 'minecraft:coal_block',
      count: 7408,
    },
    copper: {
      inputItem: 'minecraft:copper_block',
    },
    crystal_matrix_ingot: {
      inputItem: 'avaritia:crystal_matrix_ingot',
      count: 125,
    },
    dark_metal_ingot: {
      inputItem: 'born_in_chaos_v1:dark_metal_block',
      count: 278,
    },
    diamond: {
      inputItem: 'compressium:diamond_2',
      count: 69,
    },
    dimensional_ingot: {
      inputItem: 'dimensionalpocketsii:block_dimensional_metal',
      count: 1667,
    },
    draconium_ingot: {
      inputItem: 'draconicevolution:draconium_block',
      count: 834,
    },
    dragonsteel_ingot: {
      inputItem: 'thermal_extra:dragonsteel_block',
      count: 834,
    },
    electrum: {
      inputItem: 'thermal:electrum_block',
    },
    elementium_ingot: {
      inputItem: 'botania:elementium_block',
      count: 1667,
    },
    end_steel_ingot: {
      inputItem: 'enderio:end_steel_block',
    },
    ender_ingot: {
      inputItem: 'extendedcrafting:ender_ingot_block',
    },
    enderium_ingot: {
      inputItem: 'thermal:enderium_block',
    },
    enhanced_ender_ingot: {
      inputItem: 'extendedcrafting:enhanced_ender_ingot_block',
      count: 1111,
    },
    enhanced_gold: {
      inputItem: 'armorplus:en_gold',
      count: 20000,
    },
    enhanced_iron: {
      inputItem: 'armorplus:en_iron',
      count: 20000,
    },
    enhanced_netherite: {
      inputItem: 'armorplus:en_netherite',
      count: 20000,
    },
    ethereal_spirit: {
      inputItem: 'born_in_chaos_v1:ethereal_spirit',
      count: 12500,
    },
    extreme_ingot: {
      inputItem: 'nuclearcraft:extreme_ingot',
      count: 5000,
    },
    fiery_ingot: {
      inputItem: 'twilightforest:fiery_block',
      count: 1667,
    },
    flux_ingot: {
      inputItem: 'redstone_arsenal:flux_metal_block',
    },
    glowstone: {
      inputItem: 'minecraft:glowstone',
      count: 12500,
    },
    gold: {
      inputItem: 'compressium:gold_1',
      count: 617,
    },
    gunpowder: {
      inputItem: 'kubejs:compressed_block_of_gunpowder',
      count: 1235,
    },
    imperium_ingot: {
      inputItem: 'mysticalagriculture:imperium_ingot_block',
      count: 278,
    },
    inferium_ingot: {
      inputItem: 'mysticalagriculture:inferium_ingot_block',
      count: 1111,
    },
    ingot_iron_compressed: {
      inputItem: 'pneumaticcraft:compressed_iron_block',
      count: 1667,
    },
    ingot_osmium: {
      inputItem: 'mekanism:block_osmium',
    },
    ingot_refined_glowstone: {
      inputItem: 'mekanism:block_refined_glowstone',
      count: 1667,
    },
    ingot_refined_obsidian: {
      inputItem: 'mekanism:block_refined_obsidian',
      count: 1111,
    },
    invar: {
      inputItem: 'thermal:invar_block',
    },
    iridium_ingot: {
      inputItem: 'common_ore_library:iridium_block',
      count: 2223,
    },
    iron: {
      inputItem: 'compressium:iron_2',
      count: 138,
    },
    ironwood_ingot: {
      inputItem: 'twilightforest:ironwood_block',
      count: 1667,
    },
    knightmetal_ingot: {
      inputItem: 'twilightforest:knightmetal_block',
      count: 556,
    },
    lapis_lazuli: {
      inputItem: 'compressium:lapis_2',
      count: 138,
    },
    lead: {
      inputItem: 'thermal:lead_block',
    },
    lithium_ingot: {
      inputItem: 'nuclearcraft:lithium_block',
      count: 2223,
    },
    lumium_ingot: {
      inputItem: 'thermal:lumium_block',
      count: 1667,
    },
    manasteel_ingot: {
      inputItem: 'botania:manasteel_block',
    },
    manyullyn_ingot: {
      inputItem: 'common_ore_library:manyullyn_block',
      count: 2223,
    },
    netherite_diamond_ingot: {
      inputItem: 'advancednetherite:netherite_diamond_block',
      count: 139,
    },
    netherite_emerald_ingot: {
      inputItem: 'advancednetherite:netherite_emerald_block',
      count: 278,
    },
    netherite_gold_ingot: {
      inputItem: 'advancednetherite:netherite_gold_block',
      count: 556,
    },
    netherite_ingot: {
      inputItem: 'minecraft:netherite_block',
    },
    netherite_iron_ingot: {
      inputItem: 'advancednetherite:netherite_iron_block',
      count: 834,
    },
    nickel: {
      inputItem: 'thermal:nickel_block',
    },
    pink_slime_ingot: {
      inputItem: 'kubejs:pink_slime_block',
      count: 834,
    },
    platinum: {
      inputItem: 'common_ore_library:platinum_block',
    },
    prismalium_ingot: {
      inputItem: 'thermalendergy:prismalium_block',
    },
    prosperity_ingot: {
      inputItem: 'mysticalagriculture:prosperity_ingot_block',
    },
    prudentium_ingot: {
      inputItem: 'mysticalagriculture:prudentium_ingot_block',
      count: 834,
    },
    redstone_alloy_ingot: {
      inputItem: 'enderio:redstone_alloy_block',
    },
    redstone_ingot: {
      inputItem: 'extendedcrafting:redstone_ingot_block',
    },
    rose_gold_ingot: {
      inputItem: 'thermal:rose_gold_block',
    },
    sculk_alloy_ingot: {
      inputItem: 'kubejs:sculk_alloy_ingot',
      count: 1250,
    },
    shellite_ingot: {
      inputItem: 'thermal_extra:shellite_block',
      count: 278,
    },
    signalum_ingot: {
      inputItem: 'thermal:signalum_block',
    },
    silver: {
      inputItem: 'thermal:silver_block',
    },
    sky_steel_ingot: {
      inputItem: 'megacells:sky_steel_block',
    },
    soul_infused_ingot: {
      inputItem: 'thermal_extra:soul_infused_block',
    },
    soulium_ingot: {
      inputItem: 'mysticalagriculture:soulium_ingot_block',
      count: 278,
    },
    stainless_steel_ingot: {
      inputItem: 'nuclearcraft:stainless_steel_ingot',
      count: 1250,
    },
    steel: {
      inputItem: 'thermal:steel_block',
    },
    supremium_ingot: {
      inputItem: 'mysticalagriculture:supremium_ingot_block',
      count: 139,
    },
    tertium_ingot: {
      inputItem: 'mysticalagriculture:tertium_ingot_block',
      count: 556,
    },
    tin: {
      inputItem: 'thermal:tin_block',
    },
    tough_alloy_ingot: {
      inputItem: 'nuclearcraft:tough_alloy_ingot',
      count: 7500,
    },
    twinite_ingot: {
      inputItem: 'thermal_extra:twinite_block',
      count: 2223,
    },
    unobtainium_allthemodium_alloy_ingot: {
      inputItem: 'allthemodium:unobtainium_allthemodium_alloy_ingot',
      count: 125,
    },
    unobtainium_ingot: {
      inputItem: 'allthemodium:unobtainium_block',
      count: 56,
    },
    unobtainium_vibranium_alloy_ingot: {
      inputItem: 'allthemodium:unobtainium_vibranium_alloy_ingot',
      count: 125,
    },
    vibranium_ingot: {
      inputItem: 'allthemodium:vibranium_block',
      count: 111,
    },
  };

  // 125 = 125
  // 500 = 56
  // 1000 = 111
  // 1250 = 139
  // 2500 = 278
  // 5000 = 556
  // 7500 = 834
  // 10000 = 1111
  // 12500 = 1389
  // 15000 = 1667
  // 20000 = 2223
  // 25000 = 2778
  // 50000 = 5556
  // 66666 = 7408
  // 100000 = 11111

  const DEFAULT_COUNT = 2778; //25000 ingots for 1 singularity
  const ENERGY_AMOUNT = 5000000; // Amount of energy required for the process.
  const LAVA_AMOUNT = 20000; // Amount of lava required for the process.

  for (const [material, config] of Object.entries(RECIPES)) {
    event
      .create(`mm:singularity_${material}_recipe`)
      .structureId('mm:multi_compressor_structure')
      .ticks(8)
      .input({
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:energy',
          amount: ENERGY_AMOUNT,
        },
      })
      .input({
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:fluid',
          fluid: 'minecraft:lava',
          amount: LAVA_AMOUNT,
        },
      })
      .input({
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: config.inputItem,
          count: config.count || DEFAULT_COUNT,
        },
      })
      .output({
        type: 'mm:output/simple',
        ingredient: {
          type: 'mm:item',
          item: `kubejs:quantum_hyperdense_${material}_singularity`,
          count: 1,
        },
      });
  }
});
