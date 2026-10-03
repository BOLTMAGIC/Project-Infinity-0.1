ServerEvents.recipes((event) => {
  function oxidizing (event, item_input, gas_output_amount, gas_output) {
    event
      .custom({
        type: 'mekanism:oxidizing',
        input: {
          ingredient: {
            item: item_input,
          },
        },
        output: {
          amount: gas_output_amount,
          gas: gas_output,
        },
      })
      .id(
        'oxi_' +
          gas_output_amount +
          '_' +
          gas_output.replace(/[:]/g, '_').toLowerCase()
      );
  }

  oxidizing(event, 'mekanism:ingot_osmium', 200, 'mekanism:osmium');

  oxidizing(event, 'mekanism:block_osmium', 1800, 'mekanism:osmium');

  oxidizing(event, 'mekanism_extras:enriched_osmium', 1600, 'mekanism:osmium');
  
  oxidizing(
    event,
    'kubejs:compressed_yellow_cake_uranium',
    2250,
    'mekanism:uranium_oxide'
  );
});
