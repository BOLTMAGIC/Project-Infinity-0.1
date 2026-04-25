ServerEvents.recipes((event) => {
  event.smelting(
    'chisel_chipped_integration:technical_fan',
    'chisel_chipped_integration:technical_caution_framed_plates'
  );

  event.smelting(
    'chisel_chipped_integration:factory_blue_framed_circuit',
    'chisel_chipped_integration:factory_dotted_rusty_plate'
  );

  create3x3(
    event,
    Item.of('chisel_chipped_integration:futura_fabulously_wavy', 3),
    [
      'chisel_chipped_integration:futura_gray_screen',
      'chisel_chipped_integration:futura_gray_screen',
      'chisel_chipped_integration:futura_gray_screen',
      'minecraft:air',
      'minecraft:air',
      'minecraft:air',
      'minecraft:air',
      'minecraft:air',
      'minecraft:air',
    ]
  );

  create3x3(
    event,
    Item.of('chisel_chipped_integration:futura_mysterious_cube', 3),
    [
      'chisel_chipped_integration:futura_gray_screen',
      'chisel_chipped_integration:futura_gray_screen',
      'minecraft:air',
      'chisel_chipped_integration:futura_gray_screen',
      'minecraft:air',
      'minecraft:air',
      'minecraft:air',
      'minecraft:air',
      'minecraft:air',
    ]
  );

  create3x3(
    event,
    Item.of('chisel_chipped_integration:futura_cyan_screen', 3),
    [
      'chisel_chipped_integration:futura_gray_screen',
      'chisel_chipped_integration:futura_gray_screen',
      'minecraft:air',
      'minecraft:air',
      'minecraft:air',
      'minecraft:air',
      'chisel_chipped_integration:futura_gray_screen',
      'minecraft:air',
      'minecraft:air',
    ]
  );

  create3x3(
    event,
    Item.of('chisel_chipped_integration:futura_me_controller', 3),
    [
      'chisel_chipped_integration:futura_gray_screen',
      'minecraft:air',
      'chisel_chipped_integration:futura_gray_screen',
      'minecraft:air',
      'minecraft:air',
      'minecraft:air',
      'chisel_chipped_integration:futura_gray_screen',
      'minecraft:air',
      'minecraft:air',
    ]
  );

  create3x3(
    event,
    Item.of('chisel_chipped_integration:futura_rainbowliciously_wavy', 3),
    [
      'minecraft:air',
      'minecraft:air',
      'minecraft:air',
      'minecraft:air',
      'minecraft:air',
      'chisel_chipped_integration:futura_gray_screen',
      'minecraft:air',
      'chisel_chipped_integration:futura_gray_screen',
      'chisel_chipped_integration:futura_gray_screen',
    ]
  );

  create3x3(
    event,
    Item.of('chisel_chipped_integration:futura_purple_me_controller', 3),
    [
      'chisel_chipped_integration:futura_gray_screen',
      'minecraft:air',
      'minecraft:air',
      'chisel_chipped_integration:futura_gray_screen',
      'minecraft:air',
      'minecraft:air',
      'minecraft:air',
      'minecraft:air',
      'chisel_chipped_integration:futura_gray_screen',
    ]
  );
  
  create3x3(
    event,
    Item.of('chisel_chipped_integration:futura_me_controller_ae_2', 3),
    [
      'minecraft:air',
      'chisel_chipped_integration:futura_gray_screen',
      'minecraft:air',
      'chisel_chipped_integration:futura_gray_screen',
      'minecraft:air',
      'chisel_chipped_integration:futura_gray_screen',
      'minecraft:air',
      'minecraft:air',
      'minecraft:air',
    ]
  );
});