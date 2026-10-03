ServerEvents.recipes((event) => {
  function enriching (event, item_input, item_output, inputAmount, outputCount) {
    event
      .custom({
        type: 'mekanism:enriching',
        input: {
          amount: inputAmount ? inputAmount : 1,
          ingredient: {
            item: item_input,
          },
        },
        output: {
          item: item_output,
          count: outputCount ? outputCount : 1,
        },
      })
      .id('enriching_' + item_output.replace(/[:]/g, '_').toLowerCase());
  }

  enriching(
    event,
    'minecraft:redstone_block',
    'kubejs:compressed_enriched_redstone'
  );
  enriching(
    event,
    'compressium:redstone_1',
    'kubejs:double_compressed_enriched_redstone'
  );
  enriching(event, 'minecraft:coal_block', 'kubejs:compressed_enriched_carbon');
  enriching(
    event,
    'compressium:coal_1',
    'kubejs:double_compressed_enriched_carbon'
  );
  enriching(
    event,
    'minecraft:diamond_block',
    'kubejs:compressed_enriched_diamond'
  );
  enriching(
    event,
    'compressium:diamond_1',
    'kubejs:double_compressed_enriched_diamond'
  );
  enriching(
    event,
    'mekanism:block_uranium',
    'kubejs:compressed_yellow_cake_uranium',
    1,
    2
  );
})