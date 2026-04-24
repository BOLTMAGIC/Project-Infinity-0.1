ServerEvents.recipes((event) => {
  event.smelting('armorplus:lava_crystal', 'armorplus:ore_lava_crystal_stone');
  
  event.smelting('armorplus:frost_crystal','armorplus:ore_frost_crystal_stone');

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
});