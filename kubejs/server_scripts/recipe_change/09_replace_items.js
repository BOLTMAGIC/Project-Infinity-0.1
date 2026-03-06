//replace items
ServerEvents.recipes((event) => {
  event.replaceInput(
    { output: 'extrahnn:upgrade_module_stack' },
    'minecraft:comparator',
    'kubejs:infinity_12'
  );
  event.replaceInput(
    { input: 'bigreactors:yellorium_ingot' },
    'bigreactors:yellorium_ingot',
    'mekanism:ingot_uranium'
  );
  event.replaceInput(
    { output: 'botania:spark', input: 'minecraft:gold_nugget' },
    'minecraft:gold_nugget',
    'minecraft:iron_nugget'
  );
  event.replaceInput(
    { input: 'avaritia:eternal_singularity' },
    'avaritia:eternal_singularity',
    'extendedcrafting:ultimate_singularity'
  );
  event.replaceInput(
    { input: 'avaritia:singularity' },
    'avaritia:singularity',
    'extendedcrafting:ultimate_singularity'
  );
  event.replaceInput(
    { output: 'projecte:gem_leggings' },
    'projecte:watch_of_flowing_time',
    'projecte:body_stone'
  );
  event.replaceInput(
    { output: 'draconicevolution:creative_capacitor' },
    'draconicevolution:chaotic_capacitor',
    'kubejs:chaotic_capacitor'
  );
  event.replaceInput(
    { output: 'ender_dragon_loot:dragon_hoe' },
    'ender_dragon_loot:dragon_scale',
    'mysticalagradditions:dragon_scale'
  );
  event.replaceInput(
    { output: 'cyclic:soulstone' },
    'thermal:netherite_nugget',
    'botanicalextramachinery:shadow_dragonstone'
  );
  event.replaceInput(
    { output: 'projecte:repair_talisman' },
    '#bookshelf:strings',
    'botanicalextramachinery:shadow_dragonstone'
  );
  event.replaceInput(
    { output: 'voidminers:ultimate_frame' },
    'minecraft:nether_star',
    'voidminers:ultimate_stellar_core'
  );
  event.replaceInput(
    { output: 'voidminers:ultimate_energy_modifier' },
    'minecraft:redstone',
    'voidminers:ultimate_stellar_core'
  );
  event.replaceInput(
    { output: 'voidminers:ultimate_speed_modifier' },
    'minecraft:sugar',
    'voidminers:ultimate_stellar_core'
  );
  event.replaceInput(
    { output: 'voidminers:ultimate_item_modifier' },
    'minecraft:diamond',
    'voidminers:ultimate_stellar_core'
  );
  event.replaceInput(
    { output: 'voidminers:solar_ultimate_frame' },
    'minecraft:nether_star',
    'voidminers:ultimate_stellar_core'
  );
  event.replaceInput(
    { output: 'voidminers:solar_ultimate_efficiency_modifier' },
    'minecraft:nether_star',
    'voidminers:ultimate_stellar_core'
  );
  event.replaceInput(
    { output: 'voidminers:solar_ultimate_weather_modifier' },
    'minecraft:nether_star',
    'voidminers:ultimate_stellar_core'
  );
  event.replaceInput(
    { output: 'voidminers:solar_ultimate_frame' },
    'minecraft:gold_ingot',
    'voidminers:solar_ultimate_block'
  );
  event.replaceInput(
    { output: 'voidminers:solar_ultimate_efficiency_modifier' },
    'minecraft:redstone_block',
    'voidminers:solar_ultimate_block'
  );
  event.replaceInput(
    { output: 'voidminers:solar_ultimate_weather_modifier' },
    'minecraft:phantom_membrane',
    'voidminers:solar_ultimate_block'
  );
  event.replaceInput(
    { output: 'voidminers:ultimate_block' },
    'minecraft:nether_star',
    'voidminers:ultimate_stellar_core'
  );
  event.replaceInput(
    { output: 'voidminers:solar_ultimate_block' },
    'minecraft:nether_star',
    'voidminers:ultimate_stellar_core'
  );
  event.replaceInput(
    { output: 'advanced_ae:hp_buffer_card' },
    'ae2:portable_item_cell_64k',
    'ae2omnicells:quantum_omni_cell_component_16m'
  );
  event.replaceInput(
    { output: 'advanced_ae:evasion_card' },
    'ae2:speed_card',
    'ae2omnicells:quantum_omni_cell_component_16m'
  );
  event.replaceInput(
    { output: 'extendedae_plus:infinity_biginteger_cell' },
    'minecraft:nether_star',
    'kubejs:infinity_12'
  );
  event.replaceInput(
    { output: 'advanced_ae:reaction_chamber' },
    'minecraft:bucket',
    'ae2omnicells:omni_link_processor'
  );
  event.replaceInput(
    { output: 'industrialforegoing:marine_fisher' },
    '#c:gears/iron',
    'allthemodium:unobtainium_gear'
  );
  event.replaceInput(
    { output: 'thermal:device_water_gen' },
    'minecraft:copper_ingot',
    'minecraft:diamond_block'
  );
  event.replaceInput(
    {
      output: Item.of(
        'expatternprovider:infinity_cell',
        '{record:{"#c":"ae2:i",id:"minecraft:cobblestone"}}'
      ),
    },
    'ae2:cell_component_16k',
    'ae2omnicells:quantum_omni_cell_component_256m'
  );
  event.replaceInput(
    {
      output: Item.of(
        'expatternprovider:infinity_cell',
        '{record:{"#c":"ae2:f",id:"minecraft:water"}}'
      ),
    },
    'ae2:cell_component_16k',
    'ae2omnicells:quantum_omni_cell_component_256m'
  );
  event.replaceInput(
    { output: 'industrialforegoing:supreme_black_hole_tank' },
    'minecraft:bucket',
    'industrialforegoing:advanced_black_hole_tank'
  );
  event.replaceInput(
    { output: 'industrialforegoing:advanced_black_hole_tank' },
    'minecraft:bucket',
    'industrialforegoing:simple_black_hole_tank'
  );
  event.replaceInput(
    { output: 'industrialforegoing:simple_black_hole_tank' },
    'minecraft:bucket',
    'industrialforegoing:pity_black_hole_tank'
  );
  event.replaceInput(
    { output: 'industrialforegoing:pity_black_hole_tank' },
    'minecraft:bucket',
    'industrialforegoing:common_black_hole_tank'
  );
  event.replaceInput(
    { output: 'industrialforegoing:supreme_black_hole_unit' },
    '#forge:chests/wooden',
    'industrialforegoing:advanced_black_hole_unit'
  );
  event.replaceInput(
    { output: 'industrialforegoing:advanced_black_hole_unit' },
    '#forge:chests/wooden',
    'industrialforegoing:simple_black_hole_unit'
  );
  event.replaceInput(
    { output: 'industrialforegoing:advanced_black_hole_unit' },
    '#forge:chests/wooden',
    'industrialforegoing:simple_black_hole_unit'
  );
  event.replaceInput(
    { output: 'industrialforegoing:simple_black_hole_unit' },
    '#forge:chests/wooden',
    'industrialforegoing:pity_black_hole_unit'
  );
  event.replaceInput(
    { output: 'industrialforegoing:pity_black_hole_unit' },
    '#forge:chests/wooden',
    'industrialforegoing:common_black_hole_unit'
  );
  event.replaceInput(
    { output: 'apotheosis:treasure_shelf' },
    'minecraft:diamond',
    'kubejs:infinity_8'
  );

  //Creative Item EvolvedMekanism
  event.replaceInput(
    { output: 'evolvedmekanism:creative_alloying_factory' },
    'evolvedmekanism:multiversal_alloying_factory',
    '#em_ev:alloying_factory'
  );
  event.replaceInput(
    { output: 'evolvedmekanism:creative_injecting_factory' },
    'evolvedmekanism:multiversal_injecting_factory',
    '#em_ev:injecting_factory'
  );
  event.replaceInput(
    { output: 'evolvedmekanism:creative_purifying_factory' },
    'evolvedmekanism:multiversal_purifying_factory',
    '#em_ev:purifying_factory'
  );
  event.replaceInput(
    { output: 'evolvedmekanism:creative_combining_factory' },
    'evolvedmekanism:multiversal_combining_factory',
    '#em_ev:combining_factory'
  );
  event.replaceInput(
    { output: 'evolvedmekanism:creative_compressing_factory' },
    'evolvedmekanism:multiversal_compressing_factory',
    '#em_ev:compressing_factory'
  );
  event.replaceInput(
    { output: 'evolvedmekanism:creative_crushing_factory' },
    'evolvedmekanism:multiversal_crushing_factory',
    '#em_ev:crushing_factory'
  );
  event.replaceInput(
    { output: 'evolvedmekanism:creative_enriching_factory' },
    'evolvedmekanism:multiversal_enriching_factory',
    '#em_ev:enriching_factory'
  );
  event.replaceInput(
    { output: 'evolvedmekanism:creative_sawing_factory' },
    'evolvedmekanism:multiversal_sawing_factory',
    '#em_ev:sawing_factory'
  );
  event.replaceInput(
    { output: 'evolvedmekanism:creative_smelting_factory' },
    'evolvedmekanism:multiversal_smelting_factory',
    '#em_ev:smelting_factory'
  );
  event.replaceInput(
    { output: 'evolvedmekanism:creative_infusing_factory' },
    'evolvedmekanism:multiversal_infusing_factory',
    '#em_ev:infusing_factory'
  );
  event.replaceInput(
    { output: 'evolvedmekanism:creative_pressurized_tube' },
    'evolvedmekanism:multiversal_pressurized_tube',
    '#em_ev:pressurized_tube'
  );
  event.replaceInput(
    { output: 'evolvedmekanism:creative_thermodynamic_conductor' },
    'evolvedmekanism:multiversal_thermodynamic_conductor',
    '#em_ev:thermodynamic_conductor'
  );
  event.replaceInput(
    { output: 'evolvedmekanism:creative_universal_cable' },
    'evolvedmekanism:multiversal_universal_cable',
    '#em_ev:universal_cable'
  );
  event.replaceInput(
    { output: 'evolvedmekanism:creative_mechanical_pipe' },
    'evolvedmekanism:multiversal_mechanical_pipe',
    '#em_ev:mechanical_pipe'
  );
  event.replaceInput(
    { output: 'evolvedmekanism:creative_logistical_transporter' },
    'evolvedmekanism:multiversal_logistical_transporter',
    '#em_ev:logistical_transporter'
  );
  event.replaceInput(
    { output: 'evolvedmekanism:creative_induction_cell' },
    'evolvedmekanism:multiversal_induction_cell',
    '#em_ev:induction_cell'
  );
  event.replaceInput(
    { output: 'evolvedmekanism:creative_induction_provider' },
    'evolvedmekanism:multiversal_induction_provider',
    '#em_ev:induction_provider'
  );
  event.replaceInput(
    { output: 'industrialforegoingsouls:soul_surge' },
    'minecraft:piston',
    'allthemodium:unobtainium_gear'
  );

  //Powah
  event.replaceOutput(
    { input: 'powah:battery_spirited' },
    'powah:battery_nitro',
    'kubejs:empty_battery_nitro'
  );
});
