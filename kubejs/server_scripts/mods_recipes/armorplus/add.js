ServerEvents.recipes((event) => {
  event.smelting('armorplus:lava_crystal', 'armorplus:ore_lava_crystal_stone');

  event.smelting(
    'armorplus:frost_crystal',
    'armorplus:ore_frost_crystal_stone'
  );

  event.smelting('2x armorplus:lava_crystal', 'armorplus:ore_lava_crystal');

  event.smelting('2x armorplus:frost_crystal', 'armorplus:ore_frost_crystal');

  event.smelting('armorplus:ender_dragon_scale', 'minecraft:dragon_egg');

  event.shaped(Item.of('armorplus:cobalt_helmet', 1), ['   ', 'AAA', 'A A'], {
    A: '#forge:ingots/cobalt',
  });

  event.shaped(
    Item.of('armorplus:cobalt_chestplate', 1),
    ['A A', 'AAA', 'AAA'],
    {
      A: '#forge:ingots/cobalt',
    }
  );

  event.shaped(Item.of('armorplus:cobalt_leggings', 1), ['AAA', 'A A', 'A A'], {
    A: '#forge:ingots/cobalt',
  });

  event.shaped(Item.of('armorplus:cobalt_boots', 1), ['   ', 'A A', 'A A'], {
    A: '#forge:ingots/cobalt',
  });

  event.shaped(
    Item.of('armorplus:manyullyn_helmet', 1),
    ['   ', 'AAA', 'A A'],
    {
      A: '#forge:ingots/manyullyn',
    }
  );

  event.shaped(
    Item.of('armorplus:manyullyn_chestplate', 1),
    ['A A', 'AAA', 'AAA'],
    {
      A: '#forge:ingots/manyullyn',
    }
  );

  event.shaped(
    Item.of('armorplus:manyullyn_leggings', 1),
    ['AAA', 'A A', 'A A'],
    {
      A: '#forge:ingots/manyullyn',
    }
  );

  event.shaped(Item.of('armorplus:manyullyn_boots', 1), ['   ', 'A A', 'A A'], {
    A: '#forge:ingots/manyullyn',
  });

  create3x3same(event, 'kubejs:block_of_en_iron', ['armorplus:en_iron']);
  create3x3same(event, 'kubejs:block_of_en_gold', ['armorplus:en_gold']);
  create3x3same(event, 'kubejs:block_of_en_diamond', ['armorplus:en_diamond']);
  create3x3same(event, 'kubejs:block_of_en_netherite', [
    'armorplus:en_netherite',
  ]);

  shapeless(event, '9x armorplus:en_iron', ['kubejs:block_of_en_iron']);
  shapeless(event, '9x armorplus:en_gold', ['kubejs:block_of_en_gold']);
  shapeless(event, '9x armorplus:en_diamond', ['kubejs:block_of_en_diamond']);
  shapeless(event, '9x armorplus:en_netherite', [
    'kubejs:block_of_en_netherite',
  ]);

  create3x3(event, (Item.of('kubejs:block_of_en_iron', 4)), [
    'minecraft:glowstone',
    'minecraft:glowstone',
    'minecraft:glowstone',
    'minecraft:glowstone',
    'minecraft:iron_block',
    'minecraft:glowstone',
    'minecraft:glowstone',
    'minecraft:glowstone',
    'minecraft:glowstone',
  ]);
  create3x3(event, (Item.of('kubejs:block_of_en_gold', 4)), [
    'minecraft:glowstone',
    'minecraft:glowstone',
    'minecraft:glowstone',
    'minecraft:glowstone',
    'minecraft:gold_block',
    'minecraft:glowstone',
    'minecraft:glowstone',
    'minecraft:glowstone',
    'minecraft:glowstone',
  ]);
  create3x3(event, (Item.of('kubejs:block_of_en_diamond', 4)), [
    'minecraft:glowstone',
    'minecraft:glowstone',
    'minecraft:glowstone',
    'minecraft:glowstone',
    'minecraft:diamond_block',
    'minecraft:glowstone',
    'minecraft:glowstone',
    'minecraft:glowstone',
    'minecraft:glowstone',
  ]);
  create3x3(event, (Item.of('kubejs:block_of_en_netherite', 4)), [
    'minecraft:glowstone',
    'minecraft:glowstone',
    'minecraft:glowstone',
    'minecraft:glowstone',
    'minecraft:netherite_block',
    'minecraft:glowstone',
    'minecraft:glowstone',
    'minecraft:glowstone',
    'minecraft:glowstone',
  ]);
});
