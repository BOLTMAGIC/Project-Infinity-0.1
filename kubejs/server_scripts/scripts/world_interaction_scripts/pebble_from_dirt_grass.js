BlockEvents.rightClicked((event) => {
  const {block, player, level, server} = event;
  const COOLDOWN_TICKS = 1;

  if (level.dimension !== 'minecraft:overworld') return;

  if (block.id !== 'minecraft:grass_block' && block.id !== 'minecraft:dirt') return;

  if (!player.isCrouching()) return;
  if (!player.mainHandItem.isEmpty()) return;

  if (player.cooldowns.isOnCooldown('botania:pebble')) return;

  player.give('botania:pebble');
  player.cooldowns.addCooldown('botania:pebble', COOLDOWN_TICKS);

  level.runCommandSilent(
    `particle minecraft:block minecraft:grass_block ${block.x + 0.5} ${
      block.y + 1.0
    } ${block.z + 0.5} 0.25 0.25 0.25 0.02 7`
  );

  level.runCommandSilent(
    `particle minecraft:block minecraft:cobblestone ${block.x + 0.5} ${
      block.y + 1.0
    } ${block.z + 0.5} 0.25 0.25 0.25 0.02 7`
  );

  server.runCommandSilent(
    `playsound minecraft:block.grass.break block @a ${block.x + 0.5} ${
      block.y + 0.5
    } ${block.z + 0.5} 0.1 1`
  );
  
  event.cancel();
});
