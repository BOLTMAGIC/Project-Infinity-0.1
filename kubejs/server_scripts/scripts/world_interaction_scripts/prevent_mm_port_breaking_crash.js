BlockEvents.broken(
  [
    'mm:super_compressed_titanic_item_port_input',
    'mm:super_compressed_titanic_item_port_output'
  ],
  event => {
    const { block, player } = event;

    let stacks = block.entityData.MMStorage.handler.stacks;

    let itemCount = 0;

    stacks.forEach(stack => {
      console.log(stack)
      itemCount += stack.Count;
    });

    if (itemCount > 50000) {
      player.tell([
        Text.red('Too many items in this block, breaking disabled !')
      ]);
      event.cancel();
    }
});
