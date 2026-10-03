ServerEvents.recipes((event) => {
  event.smelting('kubejs:compressed_glass', 'compressium:sand_1');
  event.smelting('compressium:stone_1', 'compressium:cobblestone_1');

  event.smelting('kubejs:starmetal_ingot', 'kubejs:starmetal_dust');
  event.blasting('kubejs:starmetal_ingot', 'kubejs:starmetal_dust');

  event.smelting('kubejs:arcmetal_ingot', 'kubejs:raw_arcmetal');
  event.blasting('kubejs:arcmetal_ingot', 'kubejs:raw_arcmetal');

  event.smelting('kubejs:arcmetal_ingot', 'kubejs:arcmetal_ore');
  event.blasting('kubejs:arcmetal_ingot', 'kubejs:arcmetal_ore');

  event.smelting('kubejs:voidmetal_ingot', 'kubejs:raw_voidmetal');
  event.blasting('kubejs:voidmetal_ingot', 'kubejs:raw_voidmetal');

  event.smelting('kubejs:voidmetal_ingot', 'kubejs:voidmetal_ore');
  event.blasting('kubejs:voidmetal_ingot', 'kubejs:voidmetal_ore');

  event.smelting('kubejs:crimson_steel_ingot', 'kubejs:crimson_steel_dust');
  event.blasting('kubejs:crimson_steel_ingot', 'kubejs:crimson_steel_dust');

  event.smelting('kubejs:crimson_iron_ingot', 'kubejs:crimson_iron_dust');
  event.blasting('kubejs:crimson_iron_ingot', 'kubejs:crimson_iron_dust');

  event.smelting('kubejs:solarmetal_ingot', 'kubejs:raw_solarmetal');
  event.blasting('kubejs:solarmetal_ingot', 'kubejs:raw_solarmetal');

  event.smelting('kubejs:solarmetal_ingot', 'kubejs:solarmetal_ore');
  event.blasting('kubejs:solarmetal_ingot', 'kubejs:solarmetal_ore');

  event.smelting('kubejs:plasteel_ingot', 'kubejs:raw_plasteel');
  event.blasting('kubejs:plasteel_ingot', 'kubejs:raw_plasteel');

  event.smelting('kubejs:plasteel_ingot', 'kubejs:plasteel_ore');
  event.blasting('kubejs:plasteel_ingot', 'kubejs:plasteel_ore');

  event.smelting('kubejs:azure_silver_ingot', 'kubejs:azure_silver_ore');
  event.blasting('kubejs:azure_silver_ingot', 'kubejs:azure_silver_ore');

  event.smelting('kubejs:azure_electrum_ingot', 'kubejs:azure_electrum_dust');
  event.blasting('kubejs:azure_electrum_ingot', 'kubejs:azure_electrum_dust');
});
