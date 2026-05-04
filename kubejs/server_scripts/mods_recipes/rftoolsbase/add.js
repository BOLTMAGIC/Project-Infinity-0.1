ServerEvents.recipes((event) => {
  event.shapeless(
    `4x rftoolsbase:dimensionalshard`,
    `rftoolsdim:dimensional_blank_block`
  );
  event.shapeless(
    `3x rftoolsbase:dimensionalshard`,
    `rftoolsdim:dimensional_block`
  );
  event.shapeless(
    `3x rftoolsbase:dimensionalshard`,
    `rftoolsdim:dimensional_small_blocks`
  );
  event.shapeless(
    `2x rftoolsbase:dimensionalshard`,
    `rftoolsdim:dimensional_cross_block`
  );
  event.shapeless(
    `2x rftoolsbase:dimensionalshard`,
    `rftoolsdim:dimensional_cross2_block`
  );
  event.shapeless(
    `2x rftoolsbase:dimensionalshard`,
    `rftoolsdim:dimensional_pattern1_block`
  );
  event.shapeless(
    `2x rftoolsbase:dimensionalshard`,
    `rftoolsdim:dimensional_pattern2_block`
  );

  create3x3(event, 'rftoolsbuilder:shape_card_void', [
    'kubejs:infinity_4',
    'minecraft:obsidian',
    'kubejs:infinity_4',
    'minecraft:obsidian',
    'rftoolsbuilder:shape_card_quarry',
    'minecraft:obsidian',
    'kubejs:infinity_4',
    'minecraft:obsidian',
    'kubejs:infinity_4',
  ]);
});
