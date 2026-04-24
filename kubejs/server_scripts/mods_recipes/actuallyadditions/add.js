ServerEvents.recipes((event) => {
  shapeless(event, 'actuallyadditions:ender_star', [
    'minecraft:nether_star',
    'minecraft:dragon_breath',
    'actuallyadditions:black_quartz',
    'minecraft:prismarine_shard',
  ]);

  create2x2same(event, 'actuallyadditions:black_quartz_brick_block', [
    'actuallyadditions:black_quartz_block',
  ]);
});