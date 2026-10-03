ServerEvents.recipes((event) => {
  function infusion_conversion (
    event,
    item_input,
    amount_output,
    infusion_type_output
  ) {
    event
      .custom({
        type: 'mekanism:infusion_conversion',
        input: {
          ingredient: {
            item: item_input,
          },
        },
        output: {
          amount: amount_output,
          infuse_type: infusion_type_output,
        },
      })
      .id(
        'mek_' +
          infusion_type_output.replace(/[:]/g, '_').toLowerCase() +
          '_from_' +
          item_input.replace(/[:]/g, '_').toLowerCase()
      );
  }

  const mekanismEnrichedMaterialsToCompress = [
    { id: 'redstone', mod: 'mekanism', normal_amount: 80 },
    { id: 'carbon', mod: 'mekanism', normal_amount: 80 },
    { id: 'diamond', mod: 'mekanism', normal_amount: 80 },
    { id: 'refined_obsidian', mod: 'mekanism', normal_amount: 80 },
    { id: 'uranium', mod: 'evolvedmekanism', normal_amount: 80 },
    { id: 'better_gold', mod: 'evolvedmekanism', normal_amount: 80 },
    { id: 'plaslitherite', mod: 'evolvedmekanism', normal_amount: 80 },
    { id: 'radiance', mod: 'mekanism_extras', normal_amount: 80 },
    { id: 'thermonuclear', mod: 'mekanism_extras', normal_amount: 40 },
    { id: 'shining', mod: 'mekanism_extras', normal_amount: 40 },
    { id: 'spectrum', mod: 'mekanism_extras', normal_amount: 50 },
  ];

  mekanismEnrichedMaterialsToCompress.forEach((material) => {
    infusion_conversion(
      event,
      'kubejs:compressed_enriched_' + material.id,
      material.normal_amount * 9,
      material.mod + ':' + material.id
    );

    infusion_conversion(
      event,
      'kubejs:double_compressed_enriched_' + material.id,
      material.normal_amount * 9 * 9,
      material.mod + ':' + material.id
    );
  });
});
