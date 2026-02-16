// Category: cyclic
ServerEvents.recipes((event) => {
  shapeless(event, 'cyclic:gem_obsidian', [
    'cyclic:gem_amber',
    'minecraft:amethyst_block',
    'minecraft:emerald',
    'tconstruct:earth_slime_bucket',
  ]);

  shapeless(event, 'cyclic:gem_obsidian', [
    'cyclic:gem_amber',
    'minecraft:chorus_fruit',
    'minecraft:emerald',
    'tconstruct:earth_slime_bucket',
  ]);

  shapeless(event, 'cyclic:gem_obsidian', [
    'cyclic:gem_amber',
    'minecraft:obsidian',
    'minecraft:wither_rose',
    'tconstruct:earth_slime_bucket',
  ]);

  shapeless(event, '2x cyclic:gem_amber', [
    'tconstruct:magma_bucket',
    'minecraft:fire_charge',
    'minecraft:redstone_block',
    'minecraft:gold_ingot',
  ]);

  shapeless(event, '2x cyclic:gem_amber', [
    'cyclic:magma_bucket',
    'minecraft:fire_charge',
    'minecraft:redstone_block',
    'minecraft:gold_ingot',
  ]);

  shapeless(event, '2x cyclic:gem_amber', [
    'tconstruct:honey_bucket',
    'minecraft:fire_charge',
    'minecraft:magma_block',
    'minecraft:redstone',
  ]);

  shapeless(event, '2x cyclic:gem_amber', [
    'cyclic:honey_bucket',
    'minecraft:fire_charge',
    'minecraft:magma_block',
    'minecraft:redstone',
  ]);

  shapeless(
    event,
    Item.of('patchouli:guide_book', '{"patchouli:book":"cyclic:guide_book"}'),
    ['minecraft:book', 'compressium:cobblestone_1']
  );

  create3x3(event, 'cyclic:user', [
    'minecraft:gold_ingot',
    'minecraft:dispenser',
    'minecraft:gold_ingot',
    'minecraft:tripwire_hook',
    'compressium:cobblestone_1',
    'minecraft:tripwire_hook',
    'cyclic:flint_block',
    'cyclic:flint_block',
    'cyclic:flint_block',
  ]);

  create3x3(event, 'cyclic:anvil_magma', [
    'minecraft:magma_block',
    'minecraft:magma_block',
    'minecraft:magma_block',
    'minecraft:air',
    'compressium:cobblestone_1',
    'minecraft:air',
    'minecraft:obsidian',
    'cyclic:fireball',
    'minecraft:obsidian',
  ]);

  create3x3(event, 'cyclic:harvester', [
    'minecraft:emerald',
    'cyclic:obsidian_pressure_plate',
    'minecraft:emerald',
    'compressium:cobblestone_1',
    'cyclic:biomass',
    'compressium:cobblestone_1',
    'thermal:copper_nugget',
    'thermal:copper_nugget',
    'thermal:copper_nugget',
  ]);

  create3x3(event, 'cyclic:crusher', [
    'compressium:cobblestone_1',
    'thermal:copper_nugget',
    'compressium:cobblestone_1',
    'minecraft:stonecutter',
    'cyclic:flint_block',
    'minecraft:stonecutter',
    'compressium:cobblestone_1',
    'thermal:copper_nugget',
    'compressium:cobblestone_1',
  ]);

  create3x3(event, 'cyclic:dropper', [
    'thermal:copper_nugget',
    'compressium:cobblestone_1',
    'thermal:copper_nugget',
    'minecraft:air',
    'minecraft:dropper',
    'minecraft:air',
    'thermal:copper_nugget',
    'minecraft:iron_ingot',
    'thermal:copper_nugget',
  ]);
});

// Category: cobblefordays
ServerEvents.recipes((event) => {
  create3x3(event, 'cobblefordays:tier_2', [
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:water_bucket',
    'cobblefordays:tier_1',
    'minecraft:lava_bucket',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
  ]);

  create3x3(event, 'cobblefordays:tier_3', [
    'minecraft:iron_ingot',
    'minecraft:iron_ingot',
    'minecraft:iron_ingot',
    'minecraft:water_bucket',
    'cobblefordays:tier_2',
    'minecraft:lava_bucket',
    'minecraft:iron_ingot',
    'minecraft:iron_ingot',
    'minecraft:iron_ingot',
  ]);

  create3x3(event, 'cobblefordays:tier_4', [
    'minecraft:gold_ingot',
    'minecraft:gold_ingot',
    'minecraft:gold_ingot',
    'minecraft:water_bucket',
    'cobblefordays:tier_3',
    'minecraft:lava_bucket',
    'minecraft:gold_ingot',
    'minecraft:gold_ingot',
    'minecraft:gold_ingot',
  ]);

  create3x3(event, 'cobblefordays:tier_5', [
    'minecraft:diamond',
    'minecraft:diamond',
    'minecraft:diamond',
    'minecraft:water_bucket',
    'cobblefordays:tier_4',
    'minecraft:lava_bucket',
    'minecraft:diamond',
    'minecraft:diamond',
    'minecraft:diamond',
  ]);
});

// Category: telepastries
ServerEvents.recipes((event) => {
  create3x3(event, 'telepastries:custom_cake', [
    'minecraft:oak_log',
    'minecraft:oak_log',
    'minecraft:oak_log',
    'minecraft:oak_log',
    'minecraft:cake',
    'minecraft:oak_log',
    'minecraft:oak_log',
    'minecraft:oak_log',
    'minecraft:oak_log',
  ]);

  create3x3(event, 'telepastries:lost_city_cake', [
    'minecraft:skeleton_skull',
    'minecraft:diamond_block',
    'minecraft:skeleton_skull',
    'minecraft:white_bed',
    'minecraft:cake',
    'minecraft:skeleton_skull',
    'minecraft:skeleton_skull',
    'minecraft:diamond_block',
    'minecraft:skeleton_skull',
  ]);
});

// Category: botania
ServerEvents.recipes((event) => {
  event.smelting('actuallyadditions:black_quartz', 'botania:quartz_dark');

  create3x3(event, 'botania:blacker_lotus', [
    'actuallyadditions:empowered_enori_crystal',
    Item.of(
      'hostilenetworks:prediction',
      '{data_model:{id:"hostilenetworks:botania/gaia_spirit"}}'
    ).weakNBT(),
    'actuallyadditions:empowered_diamatine_crystal',
    'botanicalextramachinery:crystal_dragonstone',
    'botania:black_lotus',
    'botanicalextramachinery:crystal_dragonstone',
    'actuallyadditions:empowered_emeradic_crystal',
    'botanicalextramachinery:crystal_dragonstone',
    'actuallyadditions:empowered_void_crystal',
  ]);

  create2x2same(event, 'minecraft:cobblestone', ['botania:pebble']);
});

// Category: gateways
ServerEvents.recipes((event) => {
  shapeless(
    event,
    Item.of('gateways:gate_pearl', '{gateway:"gateways:emerald_grove_easy"}'),
    [
      'minecraft:ender_pearl',
      '#minecraft:flowers',
      '#minecraft:flowers',
      '#minecraft:flowers',
    ]
  );
});

// Category: industrialforegoing
ServerEvents.recipes((event) => {
  create3x3(event, 'industrialforegoing:mycelial_meatallurgic', [
    'minecraft:iron_ingot',
    'minecraft:iron_ingot',
    'minecraft:iron_ingot',
    'minecraft:iron_ingot',
    'industrialforegoing:meat_bucket',
    'minecraft:iron_ingot',
    'minecraft:redstone',
    'industrialforegoing:machine_frame_supreme',
    'minecraft:redstone',
  ]);
});

// Category: nuclearcraft_bigreactors
ServerEvents.recipes((event) => {
  event.smelting('bigreactors:benitoite_crystal', 'bigreactors:benitoite_ore');
});

// Category: advanced_ae
ServerEvents.recipes((event) => {
  create2x2(event, 'advanced_ae:adv_pattern_provider_upgrade', [
    'minecraft:iron_ingot',
    'ae2:capacity_card',
    'ae2:capacity_card',
    'ae2:engineering_processor',
  ]);

  create2x2(event, 'advanced_ae:adv_pattern_provider_capacity_upgrade', [
    'minecraft:iron_ingot',
    'minecraft:redstone',
    'minecraft:ender_pearl',
    'ae2:logic_processor',
  ]);

  create3x3(event, 'advanced_ae:adv_processing_pattern', [
    'ae2:charged_certus_quartz_crystal',
    'minecraft:redstone',
    'ae2:charged_certus_quartz_crystal',
    'ae2:blank_pattern',
    'advanced_ae:quantum_processor',
    'ae2:blank_pattern',
    'ae2:charged_certus_quartz_crystal',
    'minecraft:redstone',
    'ae2:charged_certus_quartz_crystal',
  ]);

  event.custom({
    type: 'advanced_ae:reaction',
    energy: 250000,
    fluid: {
      fluidStack: {
        Amount: 1000,
        FluidName: 'minecraft:water',
      },
    },
    input_items: [
      {
        amount: 4,
        ingredient: {
          item: 'ae2omnicells:singularity_block',
        },
      },
      {
        amount: 4,
        ingredient: {
          item: 'expatternprovider:silicon_block',
        },
      },
      {
        amount: 4,
        ingredient: {
          item: 'minecraft:redstone_block',
        },
      },
    ],
    output: {
      '#': 36,
      '#c': 'ae2:i',
      id: 'ae2omnicells:multidimensional_expansion_processor',
    },
  });
});

// Category: hostilenetworks
ServerEvents.recipes((event) => {
  create3x3(
    event,
    Item.of(
      'hostilenetworks:data_model',
      '{data_model:{data:6,id:"hostilenetworks:born_in_chaos/lord_pumpkinhead"}}'
    ),
    [
      'born_in_chaos_v1:bagof_candy',
      'born_in_chaos_v1:pumpkin_bullet',
      'born_in_chaos_v1:lord_pumpkinheads_hat_helmet',
      'born_in_chaos_v1:smoldering_infernal_ember',
      'born_in_chaos_v1:pumpkinhandgun',
      'born_in_chaos_v1:soulbane',
      'born_in_chaos_v1:magical_holiday_candy',
      Item.of(
        'hostilenetworks:data_model',
        '{data_model:{id:"hostilenetworks:born_in_chaos/lord_pumpkinhead"}}'
      ).weakNBT(),
      'born_in_chaos_v1:magical_holiday_candy',
    ]
  );
});

// Category: other_misc
ServerEvents.recipes((event) => {
  create3x3(event, 'minecraft:bell', [
    'minecraft:gold_nugget',
    'minecraft:gold_nugget',
    'minecraft:gold_nugget',
    'minecraft:gold_nugget',
    'minecraft:cobblestone',
    'minecraft:gold_nugget',
    'minecraft:gold_nugget',
    'minecraft:gold_nugget',
    'minecraft:gold_nugget',
  ]);

  shapeless(event, 'mob_grinding_utils:saw', ['kubejs:fake_mob_masher']);
  shapeless(event, 'kubejs:fake_mob_masher', ['mob_grinding_utils:saw']);

  create3x3(event, Item.of('rftoolsutility:computer_module', '{Damage:0}'), [
    'minecraft:air',
    Item.of('rftoolsutility:button_module', '{Damage:0}'),
    'minecraft:air',
    Item.of('rftoolsutility:counterplus_module', '{Damage:0}'),
    'minecraft:diamond_block',
    Item.of('rftoolsutility:fluidplus_module', '{Damage:0}'),
    'minecraft:air',
    Item.of('rftoolsutility:machineinformation_module', '{Damage:0}'),
    'minecraft:air',
  ]);

  shapeless(event, '9x mekanism_extras:alloy_radiance', [
    'kubejs:radiance_alloy_block',
  ]);
  shapeless(event, '9x mekanism_extras:alloy_thermonuclear', [
    'kubejs:thermonuclear_alloy_block',
  ]);
  shapeless(event, '9x mekanism_extras:alloy_shining', [
    'kubejs:shining_alloy_block',
  ]);
  shapeless(event, '9x mekanism_extras:alloy_spectrum', [
    'kubejs:spectrum_alloy_block',
  ]);

  create3x3same(event, 'kubejs:radiance_alloy_block', [
    'mekanism_extras:alloy_radiance',
  ]);
  create3x3same(event, 'kubejs:thermonuclear_alloy_block', [
    'mekanism_extras:alloy_thermonuclear',
  ]);
  create3x3same(event, 'kubejs:shining_alloy_block', [
    'mekanism_extras:alloy_shining',
  ]);
  create3x3same(event, 'kubejs:spectrum_alloy_block', [
    'mekanism_extras:alloy_spectrum',
  ]);

  create3x3(event, 'industrialforegoing:enchantment_applicator', [
    '#forge:plastic',
    '#forge:plastic',
    '#forge:plastic',
    'evolvedmekanism:alloy_hypercharged',
    'ifeu:ultimate_machine_frame',
    'mekanism_extras:alloy_radiance',
    'allthemodium:unobtainium_gear',
    'mekanism:alloy_atomic',
    'allthemodium:unobtainium_gear',
  ]);

  create3x3(event, 'sophisticatedstorage:pump_upgrade', [
    '#forge:glass',
    'minecraft:bucket',
    '#forge:glass',
    'minecraft:piston',
    'sophisticatedstorage:upgrade_base',
    'minecraft:sticky_piston',
    '#forge:glass',
    'minecraft:bucket',
    '#forge:glass',
  ]);

  create3x3(event, 'sophisticatedstorage:advanced_pump_upgrade', [
    'minecraft:diamond',
    'minecraft:dispenser',
    'minecraft:diamond',
    'minecraft:gold_ingot',
    'sophisticatedstorage:pump_upgrade',
    'minecraft:gold_ingot',
    'minecraft:redstone',
    'minecraft:redstone',
    'minecraft:redstone',
  ]);

  create3x3(event, 'enchantinginfuser:advanced_enchanting_infuser', [
    'allthemodium:unobtainium_gear',
    'minecraft:book',
    'allthemodium:unobtainium_gear',
    'minecraft:netherite_ingot',
    'minecraft:crying_obsidian',
    'minecraft:netherite_ingot',
    'minecraft:crying_obsidian',
    'enchantinginfuser:enchanting_infuser',
    'minecraft:crying_obsidian',
  ]);

  create3x3(event, 'custom_capacitors:ender_capacitor', [
    'extendedcrafting:ender_ingot',
    'enderio:sentient_ender',
    'extendedcrafting:enhanced_ender_ingot',
    'enderio:octadic_capacitor',
    'thermal:enderium_ingot',
    'enderio:octadic_capacitor',
    'extendedcrafting:enhanced_ender_ingot',
    'enderio:ender_crystal',
    'extendedcrafting:ender_ingot',
  ]);

  create3x3(event, 'custom_capacitors:cobalt_capacitor', [
    'common_ore_library:manyullyn_ingot',
    'tconstruct:hepatizon_ingot',
    'tconstruct:manyullyn_ingot',
    'tconstruct:queens_slime_ingot',
    'custom_capacitors:ender_capacitor',
    'tconstruct:queens_slime_ingot',
    'common_ore_library:manyullyn_ingot',
    'tconstruct:hepatizon_ingot',
    'tconstruct:manyullyn_ingot',
  ]);

  create3x3(event, 'custom_capacitors:precision_capacitor', [
    'mekanism_extras:alloy_shining',
    'bigreactors:ludicrite_ingot',
    'evolvedmekanism:alloy_singular',
    'bigreactors:ludicrite_ingot',
    'nuclearcraft:tough_alloy_ingot',
    'bigreactors:ludicrite_ingot',
    'custom_capacitors:cobalt_capacitor',
    'bigreactors:ludicrite_ingot',
    'custom_capacitors:cobalt_capacitor',
  ]);

  create3x3(event, 'custom_capacitors:fast_capacitor', [
    'custom_capacitors:precision_capacitor',
    'igleelib:iglium_upgrade_smithing_template',
    'cataclysm:cursium_upgrade_smithing_template',
    'dimensionalpocketsii:dimensional_upgrade_template',
    'custom_capacitors:precision_capacitor',
    'ender_dragon_loot:dragon_upgrade_template',
    'allthemodium:unobtainium_upgrade_smithing_template',
    'cataclysm:ignitium_upgrade_smithing_template',
    'custom_capacitors:precision_capacitor',
  ]);

  create3x3(event, 'sophisticatedstorage:xp_pump_upgrade', [
    'minecraft:redstone',
    'minecraft:ender_eye',
    'minecraft:redstone',
    'minecraft:experience_bottle',
    'sophisticatedstorage:advanced_pump_upgrade',
    'minecraft:experience_bottle',
    'minecraft:redstone',
    'minecraft:ender_eye',
    'minecraft:redstone',
  ]);

  create3x3(
    event,
    Item.of('sophisticatedstorage:iron_chest', '{woodType:"oak"}'),
    [
      'minecraft:iron_ingot',
      'minecraft:iron_ingot',
      'minecraft:iron_ingot',
      'minecraft:iron_ingot',
      'minecraft:chest',
      'minecraft:iron_ingot',
      'minecraft:iron_ingot',
      'minecraft:iron_ingot',
      'minecraft:iron_ingot',
    ]
  );
  event.shaped(Item.of('ae2:silicon', 20), ['EEE', ' E ', 'EEE'], {
    E: 'mysticalagriculture:silicon_essence',
  });

  event
    .shaped(
      Item.of('projectexpansion:basic_collector'),
      ['ABA', 'ACA', 'ADA'],
      {
        A: 'minecraft:glowstone',
        B: 'minecraft:lime_stained_glass',
        C: 'projecte:aeternalis_fuel_block',
        D: 'projecte:transmutation_table',
      }
    )
    .keepIngredient('projecte:transmutation_table');

  create3x3(event, 'advanced_ae:regeneration_card', [
    'ae2omnicells:quantum_omni_cell_16m',
    Item.of('armorplus:slayer_helmet', '{Damage:0}'),
    'ae2omnicells:quantum_omni_cell_16m',
    'aether:regeneration_stone',
    'advanced_ae:quantum_upgrade_base',
    'cyclic:heart',
    'ae2omnicells:quantum_omni_cell_16m',
    'draconicevolution:item_wyvern_auto_feed',
    'ae2omnicells:quantum_omni_cell_16m',
  ]);

  create3x3(
    event,
    Item.of('sophisticatedstorage:gold_chest', '{woodType:"oak"}'),
    [
      'minecraft:gold_ingot',
      'minecraft:gold_ingot',
      'minecraft:gold_ingot',
      'minecraft:gold_ingot',
      Item.of('sophisticatedstorage:iron_chest', '{woodType:"oak"}'),
      'minecraft:gold_ingot',
      'minecraft:gold_ingot',
      'minecraft:gold_ingot',
      'minecraft:gold_ingot',
    ]
  );

  shapeless(event, 'chemlib:titanium_ingot', ['nuclearcraft:titanium_ingot']);
  shapeless(event, 'chemlib:hafnium_ingot', ['nuclearcraft:hafnium_ingot']);
  shapeless(event, 'chemlib:lithium_ingot', ['nuclearcraft:lithium_ingot']);
  shapeless(event, 'chemlib:magnesium_ingot', ['nuclearcraft:magnesium_ingot']);
  shapeless(event, 'chemlib:strontium_ingot', ['nuclearcraft:strontium_ingot']);
  shapeless(event, 'chemlib:manganese_ingot', ['nuclearcraft:manganese_ingot']);
  shapeless(event, 'chemlib:yttrium_ingot', ['nuclearcraft:yttrium_ingot']);
  shapeless(event, 'chemlib:potassium_ingot', ['nuclearcraft:potassium_ingot']);
  shapeless(event, 'chemlib:zirconium_ingot', ['nuclearcraft:zirconium_ingot']);
  shapeless(event, 'chemlib:niobium_ingot', ['nuclearcraft:niobium_ingot']);
  shapeless(event, 'chemlib:thorium_ingot', ['nuclearcraft:thorium_ingot']);
  shapeless(event, 'chemlib:palladium_ingot', ['nuclearcraft:palladium_ingot']);

  shapeless(event, '2x voidminers:solar_ultimate_panel', [
    'kubejs:infinity_7',
    'kubejs:infinity_7',
    'kubejs:infinity_7',
    'kubejs:infinity_7',
    'voidminers:solar_ultimate_panel',
    'voidminers:ultimate_stellar_core',
    'voidminers:ultimate_stellar_core',
    'voidminers:ultimate_stellar_core',
    'voidminers:ultimate_stellar_core',
  ]);
  shapeless(event, '2x voidminers:ultimate_miner', [
    'kubejs:infinity_7',
    'kubejs:infinity_7',
    'kubejs:infinity_7',
    'kubejs:infinity_7',
    'voidminers:ultimate_miner',
    'voidminers:ultimate_stellar_core',
    'voidminers:ultimate_stellar_core',
    'voidminers:ultimate_stellar_core',
    'voidminers:ultimate_stellar_core',
  ]);
  create3x3same(event, 'minecraft:iron_nugget', ['voidminers:rubetine_block']);
  create3x3same(event, 'common_ore_library:brass_nugget', [
    'voidminers:aurantium_block',
  ]);
  create3x3same(event, 'extendedcrafting:redstone_nugget', [
    'voidminers:citrinetine_block',
  ]);
  create3x3same(event, 'minecraft:gold_nugget', ['voidminers:verdium_block']);
  create3x3same(event, 'thermal:steel_nugget', ['voidminers:azurine_block']);
  create3x3same(event, 'common_ore_library:manyullyn_nugget', [
    'voidminers:caerium_block',
  ]);
  create3x3same(event, 'botania:manasteel_nugget', [
    'voidminers:amethystine_block',
  ]);
  create3x3same(event, 'thermal:rose_gold_nugget', [
    'voidminers:rosarium_block',
  ]);
  create3x3same(event, 'thermal:netherite_nugget', [
    'voidminers:ultimate_block',
  ]);

  create3x3_EV_EX(event, 'evolvedmekanism:creative_alloying_factory', [
    '#em_ev:alloying_factory',
  ]);
  create3x3_EV_EX(event, 'evolvedmekanism:creative_injecting_factory', [
    '#em_ev:injecting_factory',
  ]);
  create3x3_EV_EX(event, 'evolvedmekanism:creative_purifying_factory', [
    '#em_ev:purifying_factory',
  ]);
  create3x3_EV_EX(event, 'evolvedmekanism:creative_combining_factory', [
    '#em_ev:combining_factory',
  ]);
  create3x3_EV_EX(event, 'evolvedmekanism:creative_compressing_factory', [
    '#em_ev:compressing_factory',
  ]);
  create3x3_EV_EX(event, 'evolvedmekanism:creative_crushing_factory', [
    '#em_ev:crushing_factory',
  ]);
  create3x3_EV_EX(event, 'evolvedmekanism:creative_enriching_factory', [
    '#em_ev:enriching_factory',
  ]);
  create3x3_EV_EX(event, 'evolvedmekanism:creative_sawing_factory', [
    '#em_ev:sawing_factory',
  ]);
  create3x3_EV_EX(event, 'evolvedmekanism:creative_smelting_factory', [
    '#em_ev:smelting_factory',
  ]);
  create3x3_EV_EX(event, 'evolvedmekanism:creative_infusing_factory', [
    '#em_ev:infusing_factory',
  ]);

  create3x3(event, 'evolvedmekanism:creative_induction_cell', [
    'mekanism:energy_tablet',
    '#em_ev:induction_cell',
    'mekanism:energy_tablet',
    '#em_ev:induction_cell',
    'mekanism:creative_energy_cube',
    '#em_ev:induction_cell',
    'mekanism:energy_tablet',
    '#em_ev:induction_cell',
    'mekanism:energy_tablet',
  ]);

  shapeless(event, '9x extendedcrafting:crystaltine_ingot', [
    'extendedcrafting:crystaltine_block',
  ]);

  // Draconic Evolution misc recipes
  create3x3(event, 'draconicevolution:grinder', [
    'draconicevolution:draconium_ingot',
    'kubejs:draconic_sword',
    'draconicevolution:draconium_ingot',
    'mythicbotany:alfsteel_sword',
    'draconicevolution:draconic_energy_core',
    'mysticalagriculture:awakened_supremium_sword',
    'draconicevolution:draconium_ingot',
    'minecraft:dragon_head',
    'draconicevolution:draconium_ingot',
  ]);

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
  });

  draconicItemsArray.forEach((item) => {
    reverseshapelessdraconic(event, item);
  });

  const draconicAdditionsItemsArray = [
    'wyvern_necklace',
    'draconic_necklace',
    'chaotic_necklace',
  ];

  draconicAdditionsItemsArray.forEach((item) => {
    shapelessdraconicadditions(event, item);
  });

  draconicAdditionsItemsArray.forEach((item) => {
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

  create3x3(
    event,
    Item.of('sophisticatedstorage:diamond_chest', '{woodType:"oak"}'),
    [
      'minecraft:diamond',
      'minecraft:diamond',
      'minecraft:diamond',
      'minecraft:diamond',
      Item.of('sophisticatedstorage:gold_chest', '{woodType:"oak"}'),
      'minecraft:diamond',
      'minecraft:diamond',
      'minecraft:diamond',
      'minecraft:diamond',
    ]
  );

  shapeless(
    event,
    Item.of('sophisticatedstorage:netherite_chest', '{woodType:"oak"}'),
    [
      'minecraft:netherite_ingot',
      Item.of('sophisticatedstorage:diamond_chest', '{woodType:"oak"}'),
    ]
  );

  create3x3(event, 'draconicevolution:item_draconic_flight', [
    'kubejs:infinity_1',
    'draconicevolution:wyvern_core',
    'kubejs:infinity_2',
    'draconicevolution:wyvern_core',
    'draconicevolution:item_wyvern_flight',
    'draconicevolution:wyvern_core',
    'kubejs:infinity_3',
    'minecraft:firework_rocket',
    'kubejs:infinity_4',
  ]);

  shapeless(event, '9x minecraft:end_stone', ['compressium:endstone_1']);
  shapeless(event, '9x minecraft:glass', ['kubejs:compressed_glass']);

  shapeless(event, 'kubejs:infinity_8_block', ['kubejs:infinity_8']);
  shapeless(event, 'kubejs:infinity_8', ['kubejs:infinity_8_block']);

  shapeless(event, '8x ironfurnaces:rainbow_plating', [
    'ironfurnaces:item_xmas',
    'ironfurnaces:iron_furnace',
    'ironfurnaces:gold_furnace',
    'ironfurnaces:diamond_furnace',
    'ironfurnaces:emerald_furnace',
    'ironfurnaces:obsidian_furnace',
    'ironfurnaces:crystal_furnace',
    'ironfurnaces:netherite_furnace',
  ]);

  create3x3(event, 'ironfurnaces:rainbow_core', [
    'minecraft:red_stained_glass',
    'minecraft:orange_stained_glass',
    'minecraft:yellow_stained_glass',
    'ironfurnaces:allthemodium_furnace',
    'ironfurnaces:vibranium_furnace',
    'ironfurnaces:unobtainium_furnace',
    'minecraft:blue_stained_glass',
    'minecraft:purple_stained_glass',
    'minecraft:magenta_stained_glass',
  ]);

  event.smelting('armorplus:lava_crystal', 'armorplus:ore_lava_crystal_stone');

  event.smelting('kubejs:compressed_glass', 'compressium:sand_1');

  event.smelting(
    'armorplus:frost_crystal',
    'armorplus:ore_frost_crystal_stone'
  );

  event.smelting('2x armorplus:lava_crystal', 'armorplus:ore_lava_crystal');

  event.smelting('2x armorplus:frost_crystal', 'armorplus:ore_frost_crystal');

  event.smelting(
    'born_in_chaos_v1:dark_metal_ingot',
    'born_in_chaos_v1:pileof_dark_metal'
  );

  event.smelting(
    'chisel_chipped_integration:technical_fan',
    'chisel_chipped_integration:technical_caution_framed_plates'
  );

  event.smelting(
    'chisel_chipped_integration:factory_blue_framed_circuit',
    'chisel_chipped_integration:factory_dotted_rusty_plate'
  );

  shapeless(event, 'minecraft:wheat_seeds', ['minecraft:wheat']);

  event.smelting('armorplus:ender_dragon_scale', 'minecraft:dragon_egg');

  shapeless(event, 'actuallyadditions:ender_star', [
    'minecraft:nether_star',
    'minecraft:dragon_breath',
    'actuallyadditions:black_quartz',
    'minecraft:prismarine_shard',
  ]);

  create2x2same(event, 'actuallyadditions:black_quartz_brick_block', [
    'actuallyadditions:black_quartz_block',
  ]);

  create3x3same(event, 'cataclysm:enderite_block', [
    'cataclysm:enderite_ingot',
  ]);

  shapeless(event, '9x cataclysm:enderite_ingot', ['cataclysm:enderite_block']);

  create323(event, '8x minecraft:crying_obsidian', ['minecraft:obsidian']);

  shapeless(event, 'botanypotstiers:creative_terracotta_hopper_botany_pot', [
    'botanypotstiers:creative_terracotta_botany_pot',
    'minecraft:hopper',
  ]);

  shapeless(
    event,
    Item.of(
      'patchouli:guide_book',
      '{"patchouli:book":"patchouli:project_infinity"}'
    ),
    ['minecraft:book', 'voidminers:rubetine']
  );

  shapeless(event, 'kubejs:infinity_2', [
    'kubejs:infinity_1_333333',
    'kubejs:infinity_1_666666',
    'kubejs:infinity_1_999999',
  ]);

  create3x3(event, 'mekanism:creative_energy_cube', [
    'evolvedmekanism:alloy_creative',
    'evolvedmekanism:creative_control_circuit',
    'evolvedmekanism:alloy_creative',
    'mekanism_extras:infinite_energy_cube',
    'minecraft:nether_star',
    'evolvedmekanism:multiversal_energy_cube',
    'evolvedmekanism:alloy_creative',
    'evolvedmekanism:creative_control_circuit',
    'evolvedmekanism:alloy_creative',
  ]);

  create3x3(event, 'angelblockrenewed:angel_block', [
    'minecraft:stick',
    'minecraft:feather',
    'minecraft:stick',
    'minecraft:feather',
    'minecraft:ender_eye',
    'minecraft:feather',
    'minecraft:stick',
    'minecraft:feather',
    'minecraft:stick',
  ]);

  shapeless(event, 'minecraft:oak_planks', [
    'minecraft:oak_slab',
    'minecraft:oak_slab',
  ]);

  event.shaped(Item.of('armorplus:cobalt_helmet', 1), ['   ', 'AAA', 'A A'], {
    A: '#forge:ingots/cobalt',
  });

  event.shaped(
    Item.of('armorplus:cobalt_chestplate', 1),
    ['A A', 'AAA', 'AAA'],
    {
      A: '#forge:ingots/cobalt',
    }
  );

  event.shaped(Item.of('armorplus:cobalt_leggings', 1), ['AAA', 'A A', 'A A'], {
    A: '#forge:ingots/cobalt',
  });

  event.shaped(Item.of('armorplus:cobalt_boots', 1), ['   ', 'A A', 'A A'], {
    A: '#forge:ingots/cobalt',
  });

  event.shaped(
    Item.of('armorplus:manyullyn_helmet', 1),
    ['   ', 'AAA', 'A A'],
    {
      A: '#forge:ingots/manyullyn',
    }
  );

  event.shaped(
    Item.of('armorplus:manyullyn_chestplate', 1),
    ['A A', 'AAA', 'AAA'],
    {
      A: '#forge:ingots/manyullyn',
    }
  );

  event.shaped(
    Item.of('armorplus:manyullyn_leggings', 1),
    ['AAA', 'A A', 'A A'],
    {
      A: '#forge:ingots/manyullyn',
    }
  );

  event.shaped(Item.of('armorplus:manyullyn_boots', 1), ['   ', 'A A', 'A A'], {
    A: '#forge:ingots/manyullyn',
  });

  create3x3same(event, 'avaritia:blaze_cube', ['avaritia_expand:blaze_nugget']);

  event.blasting('kubejs:azure_silver_ingot', ['kubejs:azure_silver_ore']);

  create3x3(event, 'sophisticatedbackpacks:stack_upgrade_omega_tier', [
    'sophisticatedbackpacks:stack_upgrade_tier_4',
    'sophisticatedbackpacks:stack_upgrade_tier_4',
    'sophisticatedbackpacks:stack_upgrade_tier_4',
    'sophisticatedbackpacks:stack_upgrade_tier_4',
    'kubejs:infinity_1',
    'sophisticatedbackpacks:stack_upgrade_tier_4',
    'sophisticatedbackpacks:stack_upgrade_tier_4',
    'sophisticatedbackpacks:stack_upgrade_tier_4',
    'sophisticatedbackpacks:stack_upgrade_tier_4',
  ]);
  create3x3(event, 'sophisticatedstorage:stack_upgrade_omega_tier', [
    'sophisticatedstorage:stack_upgrade_tier_5',
    'sophisticatedstorage:stack_upgrade_tier_5',
    'sophisticatedstorage:stack_upgrade_tier_5',
    'sophisticatedstorage:stack_upgrade_tier_5',
    'kubejs:infinity_1',
    'sophisticatedstorage:stack_upgrade_tier_5',
    'sophisticatedstorage:stack_upgrade_tier_5',
    'sophisticatedstorage:stack_upgrade_tier_5',
    'sophisticatedstorage:stack_upgrade_tier_5',
  ]);
});
// Category: Industrial Foregoing
ServerEvents.recipes((event) => {
  //Efficiency Addons
  event.shapeless('kubejs:efficiency_addon_1', 
    [Item.of('industrialforegoing:efficiency_addon_1', '{TitaniumAugment:{Efficiency:0.9f}}').strongNBT()]);
  event.shapeless('kubejs:efficiency_addon_2', 
    [Item.of('industrialforegoing:efficiency_addon_2', '{TitaniumAugment:{Efficiency:0.8f}}').strongNBT()]);
  event.shapeless('kubejs:efficiency_addon_3', 
    ['ifeu:efficiency_addon_3']);
  event.shapeless('kubejs:efficiency_addon_4', 
    ['ifeu:efficiency_addon_4']);
  event.shapeless('kubejs:efficiency_addon_5', 
    ['ifeu:efficiency_addon_5']);

  event.shapeless(Item.of('industrialforegoing:efficiency_addon_1', '{TitaniumAugment:{Efficiency:0.9f}}'), 
  ['kubejs:efficiency_addon_1']);
  event.shapeless(Item.of('industrialforegoing:efficiency_addon_2', '{TitaniumAugment:{Efficiency:0.8f}}'), 
  ['kubejs:efficiency_addon_2']);
  event.shapeless(Item.of('ifeu:efficiency_addon_3', '{TitaniumAugment:{Efficiency:0.7f}}'), 
  ['kubejs:efficiency_addon_3']);
  event.shapeless(Item.of('ifeu:efficiency_addon_4', '{TitaniumAugment:{Efficiency:0.6f}}'), 
  ['kubejs:efficiency_addon_4']);
  event.shapeless(Item.of('ifeu:efficiency_addon_5', '{TitaniumAugment:{Efficiency:0.5f}}'), 
  ['kubejs:efficiency_addon_5']);
  //Speed Addons
  event.shapeless('kubejs:speed_addon_1', 
    [Item.of('industrialforegoing:speed_addon_1', '{TitaniumAugment:{Speed:2.0f}}').strongNBT()]);
  event.shapeless('kubejs:speed_addon_2', 
    [Item.of('industrialforegoing:speed_addon_2', '{TitaniumAugment:{Speed:3.0f}}').strongNBT()]);
  event.shapeless('kubejs:speed_addon_3', 
    ['ifeu:speed_addon_3']);
  event.shapeless('kubejs:speed_addon_4', 
    ['ifeu:speed_addon_4']);
  event.shapeless('kubejs:speed_addon_5', 
    ['ifeu:speed_addon_5']);

  event.shapeless(Item.of('industrialforegoing:speed_addon_1', '{TitaniumAugment:{Speed:2.0f}}'), 
  ['kubejs:speed_addon_1']);
  event.shapeless(Item.of('industrialforegoing:speed_addon_2', '{TitaniumAugment:{Speed:3.0f}}'), 
  ['kubejs:speed_addon_2']);
  event.shapeless(Item.of('ifeu:speed_addon_3', '{TitaniumAugment:{Speed:4.0f}}'), 
  ['kubejs:speed_addon_3']);
  event.shapeless(Item.of('ifeu:speed_addon_4', '{TitaniumAugment:{Speed:5.0f}}'), 
  ['kubejs:speed_addon_4']);
  event.shapeless(Item.of('ifeu:speed_addon_5', '{TitaniumAugment:{Speed:6.0f}}'), 
  ['kubejs:speed_addon_5']);
  //Processing Addons
  event.shapeless('kubejs:processing_addon_1', 
    [Item.of('industrialforegoing:processing_addon_1', '{TitaniumAugment:{Processing:2.0f}}').strongNBT()]);
  event.shapeless('kubejs:processing_addon_2', 
    [Item.of('industrialforegoing:processing_addon_2', '{TitaniumAugment:{Processing:3.0f}}').strongNBT()]);
  event.shapeless('kubejs:processing_addon_3', ['ifeu:processing_addon_3']);
  event.shapeless('kubejs:processing_addon_4', ['ifeu:processing_addon_4']);
  event.shapeless('kubejs:processing_addon_5', ['ifeu:processing_addon_5']);

  event.shapeless(Item.of('industrialforegoing:processing_addon_1', '{TitaniumAugment:{Processing:2.0f}}'), ['kubejs:processing_addon_1']);
  event.shapeless(Item.of('industrialforegoing:processing_addon_2', '{TitaniumAugment:{Processing:3.0f}}'), ['kubejs:processing_addon_2']);
  event.shapeless(Item.of('ifeu:processing_addon_3', '{TitaniumAugment:{Processing:4.0f}}'), ['kubejs:processing_addon_3']);
  event.shapeless(Item.of('ifeu:processing_addon_4', '{TitaniumAugment:{Processing:5.0f}}'), ['kubejs:processing_addon_4']);
  event.shapeless(Item.of('ifeu:processing_addon_5', '{TitaniumAugment:{Processing:6.0f}}'), ['kubejs:processing_addon_5']);
});

// Category: Hostile Networks
ServerEvents.recipes((event) => {
  shapeless(event, 'kubejs:chaos_guardian_prediction', [
    Item.of(
      'hostilenetworks:prediction',
      '{data_model:{id:"hostilenetworks:draconicevolution/draconic_guardian"}}'
    ).weakNBT(),
  ]);
});

// Category: Functional Storage
ServerEvents.recipes((event) => {
  create3x3(event, 'functionalstorage:max_storage_upgrade', [
    'functionalstorage:netherite_upgrade',
    'functionalstorage:netherite_upgrade',
    'functionalstorage:netherite_upgrade',
    'functionalstorage:netherite_upgrade',
    'kubejs:infinity_1',
    'functionalstorage:netherite_upgrade',
    'functionalstorage:netherite_upgrade',
    'functionalstorage:netherite_upgrade',
    'functionalstorage:netherite_upgrade',
  ]);
});

// Category: extendedcrafting_projecte
ServerEvents.recipes((event) => {
  create3x3(event, 'projectexpansion:basic_emc_link', [
    'projecte:low_covalence_dust',
    'projecte:medium_covalence_dust',
    'projecte:high_covalence_dust',
    'projecte:aeternalis_fuel',
    'projecte:alchemical_chest',
    'projecte:aeternalis_fuel',
    'projecte:high_covalence_dust',
    'projecte:medium_covalence_dust',
    'projecte:low_covalence_dust',
  ]);

  create3x3(event, 'extendedcrafting:redstone_ingot', [
    'minecraft:iron_ingot',
    'minecraft:redstone',
    'minecraft:air',
    'minecraft:air',
    'minecraft:air',
    'minecraft:air',
    'minecraft:air',
    'minecraft:air',
    'minecraft:air',
  ]);

  create3x3(event, Item.of('projecte:medium_covalence_dust', 40), [
    'minecraft:air',
    'minecraft:air',
    'minecraft:air',
    'minecraft:redstone',
    'minecraft:air',
    'minecraft:iron_ingot',
    'minecraft:air',
    'minecraft:air',
    'minecraft:air',
  ]);
});

// Category: refinedstorage
ServerEvents.recipes((event) => {
  create3x3(event, 'rsinfinitybooster:infinity_card', [
    'minecraft:ender_eye',
    'refinedstorage:range_upgrade',
    'minecraft:ender_eye',
    'refinedstorage:range_upgrade',
    'minecraft:nether_star',
    'refinedstorage:range_upgrade',
    'minecraft:netherite_ingot',
    'minecraft:netherite_ingot',
    'minecraft:netherite_ingot',
  ]);

  create3x3(event, 'rsinfinitybooster:dimension_card', [
    'rsinfinitybooster:infinity_card',
    'minecraft:nether_star',
    'rsinfinitybooster:infinity_card',
    'minecraft:nether_star',
    'minecraft:ender_eye',
    'minecraft:nether_star',
    'rsinfinitybooster:infinity_card',
    'minecraft:nether_star',
    'rsinfinitybooster:infinity_card',
  ]);

  shapeless(event, 'refinedstorage:creative_storage_block', [
    'refinedstorage:creative_storage_disk',
    'refinedstorage:machine_casing',
  ]);

  shapeless(event, 'refinedstorage:creative_fluid_storage_block', [
    'refinedstorage:creative_fluid_storage_disk',
    'refinedstorage:machine_casing',
  ]);
  create3x3(
    event,
    Item.of('chisel_chipped_integration:futura_fabulously_wavy', 3),
    [
      'chisel_chipped_integration:futura_gray_screen',
      'chisel_chipped_integration:futura_gray_screen',
      'chisel_chipped_integration:futura_gray_screen',
      'minecraft:air',
      'minecraft:air',
      'minecraft:air',
      'minecraft:air',
      'minecraft:air',
      'minecraft:air',
    ]
  );
  create3x3(
    event,
    Item.of('chisel_chipped_integration:futura_mysterious_cube', 3),
    [
      'chisel_chipped_integration:futura_gray_screen',
      'chisel_chipped_integration:futura_gray_screen',
      'minecraft:air',
      'chisel_chipped_integration:futura_gray_screen',
      'minecraft:air',
      'minecraft:air',
      'minecraft:air',
      'minecraft:air',
      'minecraft:air',
    ]
  );
  create3x3(
    event,
    Item.of('chisel_chipped_integration:futura_cyan_screen', 3),
    [
      'chisel_chipped_integration:futura_gray_screen',
      'chisel_chipped_integration:futura_gray_screen',
      'minecraft:air',
      'minecraft:air',
      'minecraft:air',
      'minecraft:air',
      'chisel_chipped_integration:futura_gray_screen',
      'minecraft:air',
      'minecraft:air',
    ]
  );
  create3x3(
    event,
    Item.of('chisel_chipped_integration:futura_me_controller', 3),
    [
      'chisel_chipped_integration:futura_gray_screen',
      'minecraft:air',
      'chisel_chipped_integration:futura_gray_screen',
      'minecraft:air',
      'minecraft:air',
      'minecraft:air',
      'chisel_chipped_integration:futura_gray_screen',
      'minecraft:air',
      'minecraft:air',
    ]
  );
  create3x3(
    event,
    Item.of('chisel_chipped_integration:futura_rainbowliciously_wavy', 3),
    [
      'minecraft:air',
      'minecraft:air',
      'minecraft:air',
      'minecraft:air',
      'minecraft:air',
      'chisel_chipped_integration:futura_gray_screen',
      'minecraft:air',
      'chisel_chipped_integration:futura_gray_screen',
      'chisel_chipped_integration:futura_gray_screen',
    ]
  );
  create3x3(
    event,
    Item.of('chisel_chipped_integration:futura_purple_me_controller', 3),
    [
      'chisel_chipped_integration:futura_gray_screen',
      'minecraft:air',
      'minecraft:air',
      'chisel_chipped_integration:futura_gray_screen',
      'minecraft:air',
      'minecraft:air',
      'minecraft:air',
      'minecraft:air',
      'chisel_chipped_integration:futura_gray_screen',
    ]
  );
  create3x3(
    event,
    Item.of('chisel_chipped_integration:futura_me_controller_ae_2', 3),
    [
      'minecraft:air',
      'chisel_chipped_integration:futura_gray_screen',
      'minecraft:air',
      'chisel_chipped_integration:futura_gray_screen',
      'minecraft:air',
      'chisel_chipped_integration:futura_gray_screen',
      'minecraft:air',
      'minecraft:air',
      'minecraft:air',
    ]
  );
  //Category: IronJetpacks
  //Tier 0
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:wood",Throttle:1.0d}'),
    [
      '#minecraft:planks',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:wood"}'),
      'ironjetpacks:strap',
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:wood"}'),
    ]
  );
  //Tier 1
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:stone",Throttle:1.0d}'),
    [
      '#forge:stone',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:stone"}'),
      Item.of(
        'ironjetpacks:jetpack',
        '{Id:"ironjetpacks:wood",Throttle:1.0d}'
      ).weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:stone"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:copper",Throttle:1.0d}'),
    [
      '#forge:ingots/copper',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:copper"}'),
      Item.of(
        'ironjetpacks:jetpack',
        '{Id:"ironjetpacks:wood",Throttle:1.0d}'
      ).weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:copper"}'),
    ]
  );
  //Tier 2
  //Copper to Iron/Bronze/Silver
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:iron",Throttle:1.0d}'),
    [
      '#forge:ingots/iron',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:iron"}'),
      Item.of(
        'ironjetpacks:jetpack',
        '{Id:"ironjetpacks:copper",Throttle:1.0d}'
      ).weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:iron"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:bronze",Throttle:1.0d}'),
    [
      '#forge:ingots/bronze',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:bronze"}'),
      Item.of(
        'ironjetpacks:jetpack',
        '{Id:"ironjetpacks:copper",Throttle:1.0d}'
      ).weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:bronze"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:silver",Throttle:1.0d}'),
    [
      '#forge:ingots/silver',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:silver"}'),
      Item.of(
        'ironjetpacks:jetpack',
        '{Id:"ironjetpacks:copper",Throttle:1.0d}'
      ).weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:silver"}'),
    ]
  );
  //Stone to Iron/Bronze/Silver
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:iron",Throttle:1.0d}'),
    [
      '#forge:ingots/iron',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:iron"}'),
      Item.of(
        'ironjetpacks:jetpack',
        '{Id:"ironjetpacks:stone",Throttle:1.0d}'
      ).weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:iron"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:bronze",Throttle:1.0d}'),
    [
      '#forge:ingots/bronze',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:bronze"}'),
      Item.of(
        'ironjetpacks:jetpack',
        '{Id:"ironjetpacks:stone",Throttle:1.0d}'
      ).weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:bronze"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:silver",Throttle:1.0d}'),
    [
      '#forge:ingots/silver',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:silver"}'),
      Item.of(
        'ironjetpacks:jetpack',
        '{Id:"ironjetpacks:stone",Throttle:1.0d}'
      ).weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:silver"}'),
    ]
  );
  //Tier 3
  //Iron to Gold/Steel/Electrum/Invar
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:gold",Throttle:1.0d}'),
    [
      '#forge:ingots/gold',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:gold"}'),
      Item.of(
        'ironjetpacks:jetpack',
        '{Id:"ironjetpacks:iron",Throttle:1.0d}'
      ).weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:gold"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:steel",Throttle:1.0d}'),
    [
      '#forge:ingots/steel',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:steel"}'),
      Item.of(
        'ironjetpacks:jetpack',
        '{Id:"ironjetpacks:iron",Throttle:1.0d}'
      ).weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:steel"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of(
      'ironjetpacks:jetpack',
      '{Id:"ironjetpacks:electrum",Throttle:1.0d}'
    ),
    [
      '#forge:ingots/electrum',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:electrum"}'),
      Item.of(
        'ironjetpacks:jetpack',
        '{Id:"ironjetpacks:iron",Throttle:1.0d}'
      ).weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:electrum"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:invar",Throttle:1.0d}'),
    [
      '#forge:ingots/invar',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:invar"}'),
      Item.of(
        'ironjetpacks:jetpack',
        '{Id:"ironjetpacks:iron",Throttle:1.0d}'
      ).weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:invar"}'),
    ]
  );
  //Bronze to Gold/Steel/Electrum/Invar
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:gold",Throttle:1.0d}'),
    [
      '#forge:ingots/gold',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:gold"}'),
      Item.of(
        'ironjetpacks:jetpack',
        '{Id:"ironjetpacks:bronze",Throttle:1.0d}'
      ).weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:gold"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:steel",Throttle:1.0d}'),
    [
      '#forge:ingots/steel',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:steel"}'),
      Item.of(
        'ironjetpacks:jetpack',
        '{Id:"ironjetpacks:bronze",Throttle:1.0d}'
      ).weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:steel"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of(
      'ironjetpacks:jetpack',
      '{Id:"ironjetpacks:electrum",Throttle:1.0d}'
    ),
    [
      '#forge:ingots/electrum',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:electrum"}'),
      Item.of(
        'ironjetpacks:jetpack',
        '{Id:"ironjetpacks:bronze",Throttle:1.0d}'
      ).weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:electrum"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:invar",Throttle:1.0d}'),
    [
      '#forge:ingots/invar',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:invar"}'),
      Item.of(
        'ironjetpacks:jetpack',
        '{Id:"ironjetpacks:bronze",Throttle:1.0d}'
      ).weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:invar"}'),
    ]
  );
  //Silver to Gold/Steel/Electrum/Invar
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:gold",Throttle:1.0d}'),
    [
      '#forge:ingots/gold',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:gold"}'),
      Item.of(
        'ironjetpacks:jetpack',
        '{Id:"ironjetpacks:silver",Throttle:1.0d}'
      ).weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:gold"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:steel",Throttle:1.0d}'),
    [
      '#forge:ingots/steel',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:steel"}'),
      Item.of(
        'ironjetpacks:jetpack',
        '{Id:"ironjetpacks:silver",Throttle:1.0d}'
      ).weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:steel"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of(
      'ironjetpacks:jetpack',
      '{Id:"ironjetpacks:electrum",Throttle:1.0d}'
    ),
    [
      '#forge:ingots/electrum',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:electrum"}'),
      Item.of(
        'ironjetpacks:jetpack',
        '{Id:"ironjetpacks:silver",Throttle:1.0d}'
      ).weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:electrum"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:invar",Throttle:1.0d}'),
    [
      '#forge:ingots/invar',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:invar"}'),
      Item.of(
        'ironjetpacks:jetpack',
        '{Id:"ironjetpacks:silver",Throttle:1.0d}'
      ).weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:invar"}'),
    ]
  );
  //Tier 4
  //Gold to Diamond/Platinum
  create3x3jetpack(
    event,
    Item.of(
      'ironjetpacks:jetpack',
      '{Id:"ironjetpacks:diamond",Throttle:1.0d}'
    ),
    [
      '#forge:gems/diamond',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:diamond"}'),
      Item.of(
        'ironjetpacks:jetpack',
        '{Id:"ironjetpacks:gold",Throttle:1.0d}'
      ).weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:diamond"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of(
      'ironjetpacks:jetpack',
      '{Id:"ironjetpacks:platinum",Throttle:1.0d}'
    ),
    [
      '#forge:ingots/platinum',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:platinum"}'),
      Item.of(
        'ironjetpacks:jetpack',
        '{Id:"ironjetpacks:gold",Throttle:1.0d}'
      ).weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:platinum"}'),
    ]
  );
  //Steel to Diamond/Platinum
  create3x3jetpack(
    event,
    Item.of(
      'ironjetpacks:jetpack',
      '{Id:"ironjetpacks:diamond",Throttle:1.0d}'
    ),
    [
      '#forge:gems/diamond',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:diamond"}'),
      Item.of(
        'ironjetpacks:jetpack',
        '{Id:"ironjetpacks:steel",Throttle:1.0d}'
      ).weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:diamond"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of(
      'ironjetpacks:jetpack',
      '{Id:"ironjetpacks:platinum",Throttle:1.0d}'
    ),
    [
      '#forge:ingots/platinum',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:platinum"}'),
      Item.of(
        'ironjetpacks:jetpack',
        '{Id:"ironjetpacks:steel",Throttle:1.0d}'
      ).weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:platinum"}'),
    ]
  );
  //Electrum to Diamond/Platinum
  create3x3jetpack(
    event,
    Item.of(
      'ironjetpacks:jetpack',
      '{Id:"ironjetpacks:diamond",Throttle:1.0d}'
    ),
    [
      '#forge:gems/diamond',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:diamond"}'),
      Item.of(
        'ironjetpacks:jetpack',
        '{Id:"ironjetpacks:electrum",Throttle:1.0d}'
      ).weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:diamond"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of(
      'ironjetpacks:jetpack',
      '{Id:"ironjetpacks:platinum",Throttle:1.0d}'
    ),
    [
      '#forge:ingots/platinum',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:platinum"}'),
      Item.of(
        'ironjetpacks:jetpack',
        '{Id:"ironjetpacks:electrum",Throttle:1.0d}'
      ).weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:platinum"}'),
    ]
  );
  //Invar to Diamond/Platinum
  create3x3jetpack(
    event,
    Item.of(
      'ironjetpacks:jetpack',
      '{Id:"ironjetpacks:diamond",Throttle:1.0d}'
    ),
    [
      '#forge:gems/diamond',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:diamond"}'),
      Item.of(
        'ironjetpacks:jetpack',
        '{Id:"ironjetpacks:invar",Throttle:1.0d}'
      ).weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:diamond"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of(
      'ironjetpacks:jetpack',
      '{Id:"ironjetpacks:platinum",Throttle:1.0d}'
    ),
    [
      '#forge:ingots/platinum',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:platinum"}'),
      Item.of(
        'ironjetpacks:jetpack',
        '{Id:"ironjetpacks:invar",Throttle:1.0d}'
      ).weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:platinum"}'),
    ]
  );
  //Tier 5
  //Diamond to Emerald
  create3x3(
    event,
    Item.of(
      'ironjetpacks:jetpack',
      '{Id:"ironjetpacks:emerald",Throttle:1.0d}'
    ),
    [
      'minecraft:emerald',
      Item.of(
        'ironjetpacks:capacitor',
        '{Id:"ironjetpacks:emerald"}'
      ).weakNBT(),
      'minecraft:emerald',
      'minecraft:emerald',
      Item.of(
        'ironjetpacks:jetpack',
        '{Id:"ironjetpacks:diamond",Throttle:1.0d}'
      ).weakNBT(),
      'minecraft:emerald',
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:emerald"}').weakNBT(),
      'kubejs:infinity_1',
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:emerald"}').weakNBT(),
    ]
  );
  //Platinum to Emerald
  create3x3(
    event,
    Item.of(
      'ironjetpacks:jetpack',
      '{Id:"ironjetpacks:emerald",Throttle:1.0d}'
    ),
    [
      'minecraft:emerald',
      Item.of(
        'ironjetpacks:capacitor',
        '{Id:"ironjetpacks:emerald"}'
      ).weakNBT(),
      'minecraft:emerald',
      'minecraft:emerald',
      Item.of(
        'ironjetpacks:jetpack',
        '{Id:"ironjetpacks:platinum",Throttle:1.0d}'
      ).weakNBT(),
      'minecraft:emerald',
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:emerald"}').weakNBT(),
      'kubejs:infinity_1',
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:emerald"}').weakNBT(),
    ]
  );

  //Powah Battery
  event.shapeless(`powah:battery_nitro`, `kubejs:empty_battery_nitro`);
  event.shapeless(`kubejs:empty_battery_nitro`, `powah:battery_nitro`);
});
