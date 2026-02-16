ItemEvents.tooltip((event) => {
  // Avaritia
  event.add(
    ['avaritia:infinity_pickaxe', 'avaritia:infinity_shovel'],
    Text.translate('tooltip.avaritia.infinity_tools')
  );

  // NuclearCraft - Water Collectors
  event.add(
    'nuclearcraft:water_collector',
    Text.translate('tooltip.nuclearcraft.water_collector', '200')
  );
  event.add(
    'nuclearcraft:compact_water_collector',
    Text.translate('tooltip.nuclearcraft.water_collector', '2,000')
  );
  event.add(
    'nuclearcraft:dense_water_collector',
    Text.translate('tooltip.nuclearcraft.water_collector', '10,000')
  );

  // Allthemodium
  event.add(
    'allthemodium:allthemodium_upgrade_smithing_template',
    Text.translate('tooltip.allthemodium.upgrade')
  );

  // EnderIO Conduits
  const conduits = [
    { id: 'enderio:conductive_conduit', val: '2,024' },
    { id: 'enderio:energetic_conduit', val: '8,192' },
    { id: 'enderio:vibrant_conduit', val: '32,768' },
    { id: 'enderio:endsteel_conduit', val: '131,072' },
    { id: 'enderio:lumium_conduit', val: '524,288' },
    { id: 'enderio:signalum_conduit', val: '2,097,152' },
    { id: 'enderio:enderium_conduit', val: '4,194,304' },
    { id: 'enderio:sculk_superconductor_conduit', val: '134,217,728' },
    { id: 'enderio:energy_conduit', val: '2,147,483,647' }
  ];

  conduits.forEach(conduit => {
    event.add(conduit.id, Text.translate('tooltip.enderio.conduit_transfer', conduit.val));
  });

  // KubeJS Credits
  event.add(
    ['kubejs:infinity_7', 'kubejs:infinity_8'],
    Text.translate('tooltip.kubejs.texture_credit', 'Astrageldon')
  );
  event.add(
    'kubejs:infinity_9',
    Text.translate('tooltip.kubejs.texture_credit', 'Elpximso')
  );

  // --- Master Machinery Ports Tooltips ---

  // Item Ports
  event.add(
    ['mm:tiny_item_port_input', 'mm:tiny_item_port_output'],
    Text.translate('tooltip.mm.item_port_1')
  );
  event.add(
    ['mm:small_item_port_input', 'mm:small_item_port_output'],
    Text.translate('tooltip.mm.item_port', ['2x2', '4'])
  );
  event.add(
    ['mm:normal_item_port_input', 'mm:normal_item_port_output'],
    Text.translate('tooltip.mm.item_port', ['3x3', '9'])
  );
  event.add(
    ['mm:big_item_port_input', 'mm:big_item_port_output'],
    Text.translate('tooltip.mm.item_port', ['4x4', '16'])
  );
  event.add(
    ['mm:enormous_item_port_input', 'mm:enormous_item_port_output'],
    Text.translate('tooltip.mm.item_port', ['5x5', '25'])
  );
  event.add(
    ['mm:gigantic_item_port_input', 'mm:gigantic_item_port_output'],
    Text.translate('tooltip.mm.item_port', ['6x6', '36'])
  );
  event.add(
    ['mm:colossal_item_port_input', 'mm:colossal_item_port_output'],
    Text.translate('tooltip.mm.item_port', ['6x8', '48'])
  );
  event.add(
    ['mm:titanic_item_port_input', 'mm:titanic_item_port_output', 'mm:compressed_titanic_item_port_input', 'mm:compressed_titanic_item_port_output'],
    Text.translate('tooltip.mm.item_port', ['8x12', '96'])
  );

    event.add(
    ['kubejs:fake_mob_masher'],
    Text.translate('item.kubejs.fake_mob_masher')
  );
  

  // Fluid Ports
  const fluidPorts = [
    { id: 'mm:small_fluid_port', val: '640,000' },
    { id: 'mm:normal_fluid_port', val: '2,560,000' },
    { id: 'mm:big_fluid_port', val: '10,240,000' },
    { id: 'mm:enormous_fluid_port', val: '163,840,000' },
    { id: 'mm:gigantic_fluid_port', val: '2,147,483,647' }
  ];

  fluidPorts.forEach(port => {
    event.add(
      [`${port.id}_input`, `${port.id}_output`],
      Text.translate('tooltip.mm.fluid_port', port.val)
    );
  });

  // Energy Ports
  event.add(
    ['mm:tiny_energy_port_input', 'mm:tiny_energy_port_output'],
    Text.translate('tooltip.mm.energy_port', ['25,000', '5,000', '2,500'])
  );
  event.add(
    ['mm:small_energy_port_input', 'mm:small_energy_port_output'],
    Text.translate('tooltip.mm.energy_port', ['100,000', '20,000', '10,000'])
  );
  event.add(
    ['mm:normal_energy_port_input', 'mm:normal_energy_port_output'],
    Text.translate('tooltip.mm.energy_port', ['1,000,000', '200,000', '100,000'])
  );
  event.add(
    ['mm:big_energy_port_input', 'mm:big_energy_port_output'],
    Text.translate('tooltip.mm.energy_port', ['10,000,000', '2,000,000', '1,000,000'])
  );
  event.add(
    ['mm:enormous_energy_port_input', 'mm:enormous_energy_port_output'],
    Text.translate('tooltip.mm.energy_port', ['25,000,000', '5,000,000', '2,500,000'])
  );
  event.add(
    ['mm:gigantic_energy_port_input', 'mm:gigantic_energy_port_output'],
    Text.translate('tooltip.mm.energy_port_gigantic', '2,147,483,647')
  );

  // Mekanism Gas Ports
  event.add(
    ['mm:colossal_gas_port_input', 'mm:colossal_gas_port_output'],
    Text.translate('tooltip.mm.gas_port', '2,147,483,647')
  );

  // Compact Machines
  event.add(
    ['compactmachines:machine_maximum', 'compactmachines:machine_giant', 'compactmachines:machine_large'],
    Text.translate('tooltip.compactmachines.warning')
  );

  // --- Advanced Tooltips ---

  const holdShiftText = () => [
    Text.translate('tooltip.general.hold').gold(),
    Text.translate('tooltip.general.shift').yellow(),
    Text.translate('tooltip.general.more_info').gold()
  ];

  event.addAdvanced(['mm:multi_compactor_controller'], (item, advanced, text) => {
    let refundText = Text.translate('tooltip.mm.controller_refund');
    text.add(1, refundText.white()); 
  });

  event.addAdvanced(
    ['avaritia:neutron_pile', 'avaritia:neutron_nugget', 'avaritia:neutron_ingot'],
    (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, holdShiftText());
      } else {
        text.add(1, Text.translate('tooltip.avaritia.neutron').green().bold(true));
      }
    }
  );

  event.addAdvanced(['mekanism_extras:end_naquadah_ore'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, holdShiftText());
    } else {
      text.add(1, Text.translate('tooltip.mekanism_extras.naquadah').green());
    }
    text.remove(2);
  });

  event.addAdvanced(['mbtool:mbtool'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, holdShiftText());
    } else {
      text.add(1, Text.translate('tooltip.mbtool.usage_1').green());
      text.add(2, Text.translate('tooltip.mbtool.usage_2').green());
    }
  });

  event.addAdvanced(['armorplus:lava_crystal'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(2, holdShiftText());
    } else {
      text.add(1, Text.translate('tooltip.armorplus.lava_crystal').green());
    }
  });

  event.addAdvanced(['armorplus:frost_crystal'], (item, advanced, text) => {
    if (!event.shift) {
      text.remove(1);
      text.add(1, holdShiftText());
    } else {
      text.add(1, Text.translate('tooltip.armorplus.frost_crystal_1').green());
      text.add(2, Text.translate('tooltip.armorplus.frost_crystal_2').white());
      text.remove(3);
    }
  });

  event.addAdvanced(
    [
      'kubejs:arcmetal_ore',
      'kubejs:solarmetal_ore',
      'kubejs:plasteel_ore',
      'kubejs:voidmetal_ore',
    ],
    (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, holdShiftText());
      } else {
        text.add(1, Text.translate('tooltip.kubejs.ore_mining_dim').green());
      }
    }
  );

  event.addAdvanced(
    ['born_in_chaos_v1:chaos_component'],
    (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, holdShiftText());
      } else {
        text.add(1, Text.translate('tooltip.born_in_chaos.chaos_component').green());
      }
    }
  );

  event.addAdvanced(['occultism:iesnium_ore'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, holdShiftText());
    } else {
      text.add(1, Text.translate('tooltip.occultism.iesnium').green());
    }
  });

  // Credit Recipes
  const kemCredits = [
    'integrateddynamics:energy_battery_creative',
    'evolvedmekanism:creative_personal_barrel',
    'evolvedmekanism:creative_personal_chest',
    'mekanism:creative_energy_cube',
    'mekanism:creative_chemical_tank',
    'mm:advanced_awakening_altar_controller',
    'botanicalextramachinery:catalyst_mana_infinity',
    'botanicalmachinery:mana_battery_creative'
  ];

  event.addAdvanced(kemCredits, (item, advanced, text) => {
    text.add(1, Text.translate('tooltip.credit.recipe_added', 'Kem5540').red());
  });

  event.addAdvanced(['pneumaticcraft:creative_compressor'], (item, advanced, text) => {
    text.add(1, Text.translate('tooltip.credit.recipe_added', 'Itz_izumito').red());
  });

  event.addAdvanced(
    [
      'born_in_chaos_v1:lord_pumpkinheads_hat_helmet',
      'born_in_chaos_v1:transmuting_elixir',
    ],
    (item, advanced, text) => {
      text.add(1, Text.translate('tooltip.born_in_chaos.pumpkinhead').green());
    }
  );

  event.addAdvanced(['kubejs:ultimate_prediction'], (item, advanced, text) => {
    text.add(1, Text.translate('tooltip.credit.recipe_item_added', 'realspinelle').red());
    text.add(2, Text.translate('tooltip.credit.joke').red());
  });

  event.addAdvanced(['mekanism:creative_bin'], (item, advanced, text) => {
    text.add(1, Text.translate('tooltip.credit.recipe_added', 'RxDnz').red());
    text.add(2, Text.translate('tooltip.credit.joke').red());
  });

  event.addAdvanced(
    ['ae2omnicells:multidimensional_expansion_processor'],
    (item, advanced, text) => {
      text.add(1, Text.translate('tooltip.credit.recipe_added', 'Anti').red());
    }
  );
  //Industrial Foregoing Addons Warning
  const addons = [
    'kubejs:speed_addon_1',
    'kubejs:speed_addon_2',
    'kubejs:speed_addon_3',
    'kubejs:speed_addon_4',
    'kubejs:speed_addon_5',
    'kubejs:speed_addon_6',
    'kubejs:efficiency_addon_1',
    'kubejs:efficiency_addon_2',
    'kubejs:efficiency_addon_3',
    'kubejs:efficiency_addon_4',
    'kubejs:efficiency_addon_5',
    'kubejs:efficiency_addon_6',
    'kubejs:processing_addon_1',
    'kubejs:processing_addon_2',
    'kubejs:processing_addon_3',
    'kubejs:processing_addon_4',
    'kubejs:processing_addon_5',
    'kubejs:processing_addon_6',
  ];

  for (const addon of addons) {
    event.add(
      addon,
      Text.translate('tooltip.industrialforegoing.addon_warning'))
    ;
  }
});