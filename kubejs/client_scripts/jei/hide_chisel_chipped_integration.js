JEIEvents.hideItems((event) => {
  let config = JsonIO.read('kubejs/config/jei_config.json')
  if (config.chisel_chipped_integration == false) {
    return;
  }

  let keepSpecificItems = [
    'chisel_chipped_integration:futura_mysterious_cube',
    'chisel_chipped_integration:futura_me_controller_ae_2',
    'chisel_chipped_integration:futura_fabulously_wavy',
    'chisel_chipped_integration:futura_purple_me_controller',
    'chisel_chipped_integration:futura_rainbowliciously_wavy',
    'chisel_chipped_integration:futura_cyan_screen',
    'chisel_chipped_integration:futura_gray_screen',
    'chisel_chipped_integration:futura_me_controller',
    'chisel_chipped_integration:technical_fan',
    'chisel_chipped_integration:factory_blue_framed_circuit',
    'chisel_chipped_integration:factory_blue_wireframe',
    'chisel_chipped_integration:factory_dotted_rusty_plate',
    'chisel_chipped_integration:factory_ice_ice_ice',
    'chisel_chipped_integration:laboratory_small_steel',
    'chisel_chipped_integration:technical_caution_framed_plates',
    'chisel_chipped_integration:ender_offset_wand',
  ];
  
  let chiselChippedIntegrationItems = Ingredient.of('@chisel_chipped_integration').getItemIds();
  
  chiselChippedIntegrationItems.forEach(itemId => {
    let isSpecificKeep = keepSpecificItems.includes(itemId);
    
    if (!isSpecificKeep) {
      event.hide(itemId);
    }
  });
});