// misc.js is for if a mod has less then 2 recipe changes it it's add.js
ServerEvents.recipes((event) => {
  //mod: actuallyadditions
  shapeless(event, 'actuallyadditions:ender_star', [
    'minecraft:nether_star',
    'minecraft:dragon_breath',
    'actuallyadditions:black_quartz',
    'minecraft:prismarine_shard',
  ]);

  create2x2same(event, 'actuallyadditions:black_quartz_brick_block', [
    'actuallyadditions:black_quartz_block',
  ]);

  //mod: angelblockrenewed
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

  //mod: avaritia
  create3x3same(event, 'avaritia:blaze_cube', ['avaritia_expand:blaze_nugget']);

  //mod: bigreactors
  event.smelting('bigreactors:benitoite_crystal', 'bigreactors:benitoite_ore');

  shapeless(event, '3x bigreactors:yellorium_ingot', [
    'mekanism:ingot_uranium',
    'mekanism:ingot_uranium',
    'mekanism:ingot_uranium',
  ]);

  //mod: born_in_chaos_v1
  event.smelting('born_in_chaos_v1:dark_metal_ingot','born_in_chaos_v1:pileof_dark_metal');

  //mod: botanypotstiers
  shapeless(event, 'botanypotstiers:creative_terracotta_hopper_botany_pot', [
    'botanypotstiers:creative_terracotta_botany_pot',
    'minecraft:hopper',
  ]);

  //mod: cataclysm
  create3x3same(event, 'cataclysm:enderite_block', [
    'cataclysm:enderite_ingot',
  ]);

  shapeless(event, '9x cataclysm:enderite_ingot', ['cataclysm:enderite_block']);

  //mod: draconicevolution
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

  //mod: mysticalagriculture
  create3x3(event, 'mysticalagriculture:master_infusion_crystal', [
    'mysticalagriculture:prosperity_shard',
    'kubejs:infinity_4',
    'mysticalagriculture:prosperity_shard',
    'kubejs:infinity_4',
    'matc:supremium_crystal',
    'kubejs:infinity_4',
    'mysticalagriculture:prosperity_shard',
    'kubejs:infinity_4',
    'mysticalagriculture:prosperity_shard',
  ]);

  create3x3(event, 'mysticalagriculture:master_infusion_crystal', [
    'kubejs:infinity_4',
    'mysticalagriculture:prosperity_shard',
    'kubejs:infinity_4',
    'mysticalagriculture:prosperity_shard',
    'matc:supremium_crystal',
    'mysticalagriculture:prosperity_shard',
    'kubejs:infinity_4',
    'mysticalagriculture:prosperity_shard',
    'kubejs:infinity_4',
  ]);

  //mod: enchantinginfuser
  create3x3(event, 'enchantinginfuser:enchanting_infuser', [
    'allthemodium:unobtainium_allthemodium_alloy_ingot',
    'minecraft:book',
    'allthemodium:unobtainium_allthemodium_alloy_ingot',
    'minecraft:amethyst_shard',
    'minecraft:crying_obsidian',
    'minecraft:amethyst_shard',
    'minecraft:crying_obsidian',
    'minecraft:enchanting_table',
    'minecraft:crying_obsidian',
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

  //mod: ender_dragon_loot
  create3x3(event, Item.of('ender_dragon_loot:dragon_upgrade_template', 2), [
    'minecraft:netherite_ingot',
    'mysticalagradditions:dragon_scale',
    'minecraft:netherite_ingot',
    'minecraft:netherite_ingot',
    'ender_dragon_loot:dragon_upgrade_template',
    'minecraft:netherite_ingot',
    'minecraft:netherite_ingot',
    'minecraft:netherite_ingot',
    'minecraft:netherite_ingot',
  ]);

  //mod: extendedcrafting
  shapeless(event, '9x extendedcrafting:crystaltine_ingot', [
    'extendedcrafting:crystaltine_block',
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

  //mod: functionalstorage
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

  //mod: gateways
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

  //mod: hostilenetworks
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

  //mod: industrialforegoing
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

  //mod: ironfurnaces
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

  //mod: logisticsnetworks
  create3x3(event, 'logisticsnetworks:mekanism_chemical_upgrade', [
    'mekanism:basic_chemical_tank',
    'mekanism_extras:alloy_radiance',
    'mekanism:basic_chemical_tank',
    'minecraft:chest',
    'logisticsnetworks:dimensional_upgrade',
    'minecraft:chest',
    'mekanism:basic_chemical_tank',
    'mekanism_extras:alloy_radiance',
    'mekanism:basic_chemical_tank',
  ]);

  //mod: patchouli
  shapeless(
    event,
    Item.of('patchouli:guide_book', '{"patchouli:book":"cyclic:guide_book"}'),
    ['minecraft:book', 'compressium:cobblestone_1']
  );

  shapeless(
    event,
    Item.of('patchouli:guide_book','{"patchouli:book":"patchouli:project_infinity"}'),
    ['minecraft:book', 'voidminers:rubetine']
  );

  //mod: projectexpansion
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

  //mod: refinedstorage
  shapeless(event, 'refinedstorage:creative_storage_block', [
    'refinedstorage:creative_storage_disk',
    'refinedstorage:machine_casing',
  ]);

  shapeless(event, 'refinedstorage:creative_fluid_storage_block', [
    'refinedstorage:creative_fluid_storage_disk',
    'refinedstorage:machine_casing',
  ]);

  //mod: rftoolsutility
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

  //mod: rsinfinitybooster
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

  //mod: sfm
  create3x3(event, Item.of('sfm:cable', 16), [
    'advanced_ae:quantum_alloy',
    'minecraft:light_weighted_pressure_plate',
    'kubejs:crystalline_alloy',
    'minecraft:iron_bars',
    '#forge:chests',
    'minecraft:iron_bars',
    'kubejs:crystalline_alloy',
    'minecraft:light_weighted_pressure_plate',
    'advanced_ae:quantum_alloy',
  ]);

  //mod: sophisticatedbackpacks
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

  //mod: telepastries
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

  //mod: twilightforest
  create3x3(event, Item.of('twilightforest:aurora_block', 8), [
    'minecraft:stone_bricks',
    'minecraft:stone_bricks',
    'minecraft:stone_bricks',
    'minecraft:stone_bricks',
    '#forge:dyes',
    'minecraft:stone_bricks',
    'minecraft:stone_bricks',
    'minecraft:stone_bricks',
    'minecraft:stone_bricks',
  ]);
});
