BlockEvents.rightClicked((event) => {
  const {block, item, player, hand} = event;

  if (hand !== 'MAIN_HAND') event.cancel();

  if(
    !item
    || !block
    || item.id != 'kubejs:full_nbt_remover'
    || block.id != 'minecraft:grindstone'
  )
  return;

  let offHandItem = player.getHeldItem("off_hand");

  if (!offHandItem || !offHandItem.nbt) return;

  const bannedItems = [
    "mekanism:creative_bin",
    "mekanism:creative_fluid_tank"
  ]

  bannedItems.forEach((bannedItem) => {
    if (offHandItem.id == bannedItem) {
      player.tell(Text.white('Item is banned, unable to reset NBT'));
      event.cancel()
    }
  })

  if (offHandItem.nbt.Damage && offHandItem.nbt.Damage != 0) {
    player.tell(Text.white('Item is damaged, unable to reset NBT'));
  } else {
    offHandItem.nbt = null;
    player.tell(Text.white('NBT reset.'));
  }

  event.cancel();
});
