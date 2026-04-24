const COOLDOWN_TICKS = 1;

BlockEvents.rightClicked((event) => {
  const player = event.player;
  const block = event.block;
  const level = event.level;

  if (level.dimension !== 'minecraft:overworld') return;

  if (block.id !== 'minecraft:grass_block') return;

  if (!player.isCrouching()) return;
  if (!player.mainHandItem.isEmpty()) return;

  if (player.cooldowns.isOnCooldown('botania:pebble')) return;

  player.give('botania:pebble');
  player.cooldowns.addCooldown('botania:pebble', COOLDOWN_TICKS);

  level.runCommandSilent(
    `particle minecraft:block minecraft:grass_block ${block.x + 0.5} ${
      block.y + 1.0
    } ${block.z + 0.5} 0.25 0.25 0.25 0.02 15`
  );

  level.runCommandSilent(
    `playsound minecraft:block.grass.break players @a ${block.x + 0.5} ${
      block.y + 0.5
    } ${block.z + 0.5} 0.7 0.95`
  );

  event.cancel();
});
