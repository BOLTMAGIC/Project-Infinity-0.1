BlockEvents.rightClicked((event) => {
  const { item, block, server, player, hand } = event;

  if (hand !== 'MAIN_HAND') return;

  if (
    block.id !== 'cataclysm:boss_respawner' &&
    block.id !== 'cataclysm:cursed_tombstone'
  )
    return;

  if (item.id !== 'minecraft:stick') {
    player.tell(
      Text.white(
        'Right-clicking with a stick will break the ' +
          block.item.getDisplayName().getString() +
          '.'
      )
    );
    if (block.id === 'cataclysm:cursed_tombstone') {
      player.tell(
        Text.white(
          'Break the ' +
            block.item.getDisplayName().getString() +
            ' before it activates, otherwise the boss will respawn.'
        )
      );
    }
    event.cancel();
    return;
  }

  const pos = block.pos;

  block.set('minecraft:air');

  server.runCommandSilent(
    `playsound minecraft:block.stone.break block @a ${pos.x} ${pos.y} ${pos.z} 1 1`
  );

  event.cancel();
});
