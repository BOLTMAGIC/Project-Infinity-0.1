ServerEvents.recipes((event) => {
  function compressing (event, gas_amount, gas_input, item_input, item_output) {
    event
      .custom({
        type: 'mekanism:compressing',
        chemicalInput: {
          amount: gas_amount / 200,
          gas: gas_input,
        },
        itemInput: {
          ingredient: {
            item: item_input,
          },
        },
        output: {
          item: item_output,
        },
      })
      .id('compressing_' + item_output.replace(/[:]/g, '_').toLowerCase());
  }

  compressing(
    event,
    1800,
    'mekanism:antimatter',
    'kubejs:compressed_enriched_shining',
    'kubejs:compressed_enriched_spectrum'
  );
  
  compressing(
    event,
    16200,
    'mekanism:antimatter',
    'kubejs:double_compressed_enriched_shining',
    'kubejs:double_compressed_enriched_spectrum'
  );
})