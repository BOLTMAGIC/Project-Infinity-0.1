ServerEvents.recipes((event) => {
  create3x3(event, Item.of('rftoolsutility:computer_module', '{Damage:0}'), [
    'minecraft:air',
    Item.of('rftoolsutility:button_module', '{Damage:0}'),
    'minecraft:air',
    Item.of('rftoolsutility:counterplus_module', '{Damage:0}'),
    'minecraft:diamond_block',
    Item.of('rftoolsutility:fluidplus_module', '{Damage:0}'),
    'minecraft:air',
    Item.of('rftoolsutility:machineinformation_module', '{Damage:0}'),
    'minecraft:air',
  ]);
});