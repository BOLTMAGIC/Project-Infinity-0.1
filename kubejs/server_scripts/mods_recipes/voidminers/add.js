ServerEvents.recipes((event) => {
  shapeless(event, '2x voidminers:solar_ultimate_panel', [
    'kubejs:infinity_7',
    'kubejs:infinity_7',
    'kubejs:infinity_7',
    'kubejs:infinity_7',
    'voidminers:solar_ultimate_panel',
    'voidminers:ultimate_stellar_core',
    'voidminers:ultimate_stellar_core',
    'voidminers:ultimate_stellar_core',
    'voidminers:ultimate_stellar_core',
  ]);
  shapeless(event, '2x voidminers:ultimate_miner', [
    'kubejs:infinity_7',
    'kubejs:infinity_7',
    'kubejs:infinity_7',
    'kubejs:infinity_7',
    'voidminers:ultimate_miner',
    'voidminers:ultimate_stellar_core',
    'voidminers:ultimate_stellar_core',
    'voidminers:ultimate_stellar_core',
    'voidminers:ultimate_stellar_core',
  ]);
  create3x3same(event, 'minecraft:iron_nugget', ['voidminers:rubetine_block']);
  create3x3same(event, 'common_ore_library:brass_nugget', [
    'voidminers:aurantium_block',
  ]);
  create3x3same(event, 'extendedcrafting:redstone_nugget', [
    'voidminers:citrinetine_block',
  ]);
  create3x3same(event, 'minecraft:gold_nugget', ['voidminers:verdium_block']);
  create3x3same(event, 'thermal:steel_nugget', ['voidminers:azurine_block']);
  create3x3same(event, 'common_ore_library:manyullyn_nugget', [
    'voidminers:caerium_block',
  ]);
  create3x3same(event, 'botania:manasteel_nugget', [
    'voidminers:amethystine_block',
  ]);
  create3x3same(event, 'thermal:rose_gold_nugget', [
    'voidminers:rosarium_block',
  ]);
  create3x3same(event, 'thermal:netherite_nugget', [
    'voidminers:ultimate_block',
  ]);
});
