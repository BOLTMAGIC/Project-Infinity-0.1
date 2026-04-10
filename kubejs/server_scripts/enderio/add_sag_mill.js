ServerEvents.recipes((event) => {
  sag_milling(event, 'compressium:stone_1', ['compressium:cobblestone_1', 2]);
  sag_milling(event, 'compressium:stone_2', ['compressium:cobblestone_2', 2]);
  sag_milling(event, 'compressium:stone_3', ['compressium:cobblestone_3', 2]);
  sag_milling(event, 'compressium:cobblestone_1', ['compressium:gravel_1', 2]);
  sag_milling(event, 'compressium:cobblestone_2', ['compressium:gravel_2', 2]);
  sag_milling(event, 'compressium:cobblestone_3', ['compressium:gravel_3', 2]);
  sag_milling(event, 'compressium:gravel_1', ['compressium:sand_1', 2]);
  sag_milling(event, 'compressium:gravel_2', ['compressium:sand_2', 2]);
  sag_milling(event, 'compressium:gravel_3', ['compressium:sand_3', 2]);
  sag_milling(event, 'minecraft:sand', ['exdeorum:dust', 2]);
  sag_milling(event, 'compressium:netherrack_1', [
    'compressium:crushed_netherrack_1',
    2,
  ]);
  sag_milling(
    event,
    'compressium:endstone_1',
    ['compressium:crushed_end_stone_1', 2],
    2
  );
  sag_milling(event, 'kubejs:blaze_gold_ingot', ['kubejs:blaze_gold_dust', 1]);
  sag_milling(event, 'kubejs:azure_silver_ingot', [
    'kubejs:azure_silver_dust',
    1,
  ]);
  sag_milling(event, 'kubejs:azure_electrum_ingot', [
    'kubejs:azure_electrum_dust',
    1,
  ]);
  sag_milling(event, 'kubejs:arcmetal_ore', ['kubejs:raw_arcmetal', 2]);
  sag_milling(event, 'kubejs:solarmetal_ore', ['kubejs:raw_solarmetal', 2]);
  sag_milling(event, 'kubejs:plasteel_ore', ['kubejs:raw_plasteel', 2]);
  sag_milling(event, 'kubejs:voidmetal_ore', ['kubejs:raw_voidmetal', 2]);
});

function sag_milling(event, input, output, outputCount) {
  // support passing output as either a string or an array [item, count]
  let itemName = output;
  let count = outputCount ? outputCount : 1;
  if (Array.isArray(output)) {
    itemName = output[0];
    if (output[1] !== undefined) count = output[1];
  }

  event
    .custom({
      type: 'enderio:sag_milling',
      input: { item: input },
      outputs: [
        {
          item: itemName,
          count: count,
        },
      ],
      energy: 5000,
    })
    .id('sag_milling_' + itemName.replace(':', '_'));
}
