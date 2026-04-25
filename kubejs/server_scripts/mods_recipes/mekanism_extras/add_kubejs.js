ServerEvents.recipes((event) => {
  shapeless(event, '9x mekanism_extras:alloy_radiance', [
    'kubejs:radiance_alloy_block',
  ]);
  create3x3same(event, 'kubejs:radiance_alloy_block', [
    'mekanism_extras:alloy_radiance',
  ]);

  shapeless(event, '9x mekanism_extras:alloy_thermonuclear', [
    'kubejs:thermonuclear_alloy_block',
  ]);
  create3x3same(event, 'kubejs:thermonuclear_alloy_block', [
    'mekanism_extras:alloy_thermonuclear',
  ]);

  shapeless(event, '9x mekanism_extras:alloy_shining', [
    'kubejs:shining_alloy_block',
  ]);
  create3x3same(event, 'kubejs:shining_alloy_block', [
    'mekanism_extras:alloy_shining',
  ]);

  shapeless(event, '9x mekanism_extras:alloy_spectrum', [
    'kubejs:spectrum_alloy_block',
  ]);
  create3x3same(event, 'kubejs:spectrum_alloy_block', [
    'mekanism_extras:alloy_spectrum',
  ]);
});