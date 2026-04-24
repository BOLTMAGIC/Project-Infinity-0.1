ServerEvents.recipes((event) => {
  function crush(event, input, output_count, output) {
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
      .id('mek_crusher' + output.replace(/[:]/g, '_').toLowerCase());
  }

  crush(event, 'thermal:electrum_ingot', 1, 'thermal:electrum_dust');
  crush(event, 'thermal:invar_ingot', 1, 'thermal:invar_dust');
  crush(event, 'thermal:constantan_ingot', 1, 'thermal:constantan_dust');
  crush(event, 'thermal:rose_gold_ingot', 1, 'thermal:rose_gold_dust');
  crush(event, 'thermal:ruby', 1, 'thermal:ruby_dust');
  crush(event, 'thermal:sapphire', 1, 'thermal:sapphire_dust');
  crush(event, 'thermal:apatite', 1, 'thermal:apatite_dust');
  crush(event, 'thermal:cinnabar', 1, 'thermal:cinnabar_dust');
  crush(event, 'thermal:niter', 1, 'thermal:niter_dust');
  crush(event, 'thermal:sulfur', 1, 'thermal:sulfur_dust');
  crush(event, '#minecraft:logs', 8, 'thermal:sawdust');
  crush(event, 'minecraft:ender_pearl', 1, 'thermal:ender_pearl_dust');
  crush(event, 'minecraft:quartz', 1, 'thermal:quartz_dust');
  crush(event, 'thermal:signalum_ingot', 1, 'thermal:signalum_dust');
  crush(event, 'thermal:lumium_ingot', 1, 'thermal:lumium_dust');
  crush(event, 'thermal:enderium_ingot', 1, 'thermal:enderium_dust');
  crush(
    event,
    'thermalendergy:prismalium_ingot',
    1,
    'thermalendergy:prismalium_dust'
  );
  crush(
    event,
    'thermalendergy:melodium_ingot',
    1,
    'thermalendergy:melodium_dust'
  );
  crush(
    event,
    'thermalendergy:stellarium_ingot',
    1,
    'thermalendergy:stellarium_dust'
  );
  crush(event, 'minecraft:amethyst_shard', 1, 'thermal_extra:amethyst_dust');
  crush(
    event,
    '#minecraft:soul_fire_base_blocks',
    1,
    'thermal_extra:soul_sand_dust'
  );
  crush(
    event,
    'thermal_extra:soul_infused_ingot',
    1,
    'thermal_extra:soul_infused_dust'
  );
  crush(
    event,
    'thermal_extra:shellite_ingot',
    1,
    'thermal_extra:shellite_dust'
  );
  crush(event, 'thermal_extra:twinite_ingot', 1, 'thermal_extra:twinite_dust');
  crush(
    event,
    'thermal_extra:dragonsteel_ingot',
    1,
    'thermal_extra:dragonsteel_dust'
  );
  crush(event, 'thermal_extra:abyssal_ingot', 1, 'thermal_extra:abyssal_dust');
});
