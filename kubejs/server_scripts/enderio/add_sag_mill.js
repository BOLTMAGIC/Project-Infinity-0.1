ServerEvents.recipes((event) => {
  sag_milling(event, 'compressium:stone_1', '2x compressium:cobblestone_1');
  sag_milling(event, 'compressium:stone_2', '2x compressium:cobblestone_2');
  sag_milling(event, 'compressium:stone_3', '2x compressium:cobblestone_3');
  sag_milling(event, 'compressium:cobblestone_1', '2x compressium:gravel_1');
  sag_milling(event, 'compressium:cobblestone_2', '2x compressium:gravel_2');
  sag_milling(event, 'compressium:cobblestone_3', '2x compressium:gravel_3');
  sag_milling(event, 'compressium:gravel_1', '2x compressium:sand_1');
  sag_milling(event, 'compressium:gravel_2', '2x compressium:sand_2');
  sag_milling(event, 'compressium:gravel_3', '2x compressium:sand_3');
  sag_milling(event, 'minecraft:sand', '2x exdeorum:dust');
  sag_milling(
    event,
    'compressium:netherrack_1',
    '2x compressium:crushed_netherrack_1'
  );
  sag_milling(
    event,
    'compressium:endstone_1',
    '2x compressium:crushed_end_stone_1'
  );
  sag_milling(event, 'kubejs:blaze_gold_ingot', 'kubejs:blaze_gold_dust');
  sag_milling(event, 'kubejs:azure_silver_ingot', 'kubejs:azure_silver_dust');
  sag_milling(
    event,
    'kubejs:azure_electrum_ingot',
    'kubejs:azure_electrum_dust'
  );
  sag_milling(event, 'kubejs:arcmetal_ore', '2x kubejs:raw_arcmetal');
  sag_milling(event, 'kubejs:solarmetal_ore', '2x kubejs:raw_solarmetal');
  sag_milling(event, 'kubejs:plasteel_ore', '2x kubejs:raw_plasteel');
  sag_milling(event, 'kubejs:voidmetal_ore', '2x kubejs:raw_voidmetal');
});

function sag_milling(event, input, output) {
  event
    .custom({
      type: 'enderio:sag_milling',
      input: { item: input },
      outputs: [
        {
          item: {
            item: output,
          },
        },
      ],
      energy: 5000,
    })
    .id('sag_milling_' + output);
}
