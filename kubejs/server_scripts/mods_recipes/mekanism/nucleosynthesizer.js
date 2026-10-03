ServerEvents.recipes((event) => {
  function nucleosynthesizing (event, gasAmount, duration, input, output) {
    event
      .custom({
        type: 'mekanism:nucleosynthesizing',
        duration: duration,
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

  nucleosynthesizing(
    event,
    450,
    1000,
    'evolvedmekanism:block_alloy_hypercharged',
    'evolvedmekanism:block_alloy_subatomic'
  );

  nucleosynthesizing(
    event,
    9,
    2000,
    'kubejs:compressed_enriched_thermonuclear',
    'kubejs:compressed_enriched_shining'
  );

  nucleosynthesizing(
    event,
    81,
    2000,
    'kubejs:double_compressed_enriched_thermonuclear',
    'kubejs:double_compressed_enriched_shining'
  );
})