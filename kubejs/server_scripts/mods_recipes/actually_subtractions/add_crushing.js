ServerEvents.recipes((event) => {
  function crush(event, input, output_count, output) {
    event
      .custom({
        type: 'actuallyadditions:crushing',
        ingredient: {
          item: input,
        },
        result: [
          {
            result: {
              Count: output_count,
              id: output,
            },
          },
        ],
      })
      .id('aa_' + output);
  }

  crush(event, 'kubejs:arcmetal_ore', 2, 'kubejs:raw_arcmetal');
  crush(event, 'kubejs:solarmetal_ore', 2, 'kubejs:raw_solarmetal');
  crush(event, 'kubejs:plasteel_ore', 2, 'kubejs:raw_plasteel');
  crush(event, 'kubejs:voidmetal_ore', 2, 'kubejs:raw_voidmetal');
  crush(event, 'kubejs:azure_silver_ingot', 1, 'kubejs:azure_silver_dust');
  crush(event, 'kubejs:blaze_gold_ingot', 1, 'kubejs:blaze_gold_dust');
  crush(event, 'kubejs:azure_electrum_ingot', 1, 'kubejs:azure_electrum_dust');
});
