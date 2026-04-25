ServerEvents.recipes((event) => {
  create3x3(event, 'minecraft:bell', [
    'minecraft:gold_nugget',
    'minecraft:gold_nugget',
    'minecraft:gold_nugget',
    'minecraft:gold_nugget',
    'minecraft:cobblestone',
    'minecraft:gold_nugget',
    'minecraft:gold_nugget',
    'minecraft:gold_nugget',
    'minecraft:gold_nugget',
  ]);

  shapeless(event, 'minecraft:wheat_seeds', ['minecraft:wheat']);

  create323(event, '8x minecraft:crying_obsidian', ['minecraft:obsidian']);

  shapeless(event, 'minecraft:oak_planks', ['minecraft:oak_slab','minecraft:oak_slab',]);
  shapeless(event, 'minecraft:spruce_planks', ['minecraft:spruce_slab','minecraft:spruce_slab',]);
  shapeless(event, 'minecraft:birch_planks', ['minecraft:birch_slab','minecraft:birch_slab',]);
  shapeless(event, 'minecraft:jungle_planks', ['minecraft:jungle_slab','minecraft:jungle_slab',]);
  shapeless(event, 'minecraft:acacia_planks', ['minecraft:acacia_slab','minecraft:acacia_slab',]);
  shapeless(event, 'minecraft:dark_oak_planks', ['minecraft:dark_oak_slab','minecraft:dark_oak_slab',]);
  shapeless(event, 'minecraft:mangrove_planks', ['minecraft:mangrove_slab','minecraft:mangrove_slab',]);
  shapeless(event, 'minecraft:cherry_planks', ['minecraft:cherry_slab','minecraft:cherry_slab',]);
  shapeless(event, 'minecraft:crimson_planks', ['minecraft:crimson_slab','minecraft:crimson_slab',]);
  shapeless(event, 'minecraft:warped_planks', ['minecraft:warped_slab','minecraft:warped_slab',]);
});
