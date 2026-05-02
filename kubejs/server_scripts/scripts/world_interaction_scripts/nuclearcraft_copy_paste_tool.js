BlockEvents.rightClicked((event) => {
  const { item, block, player, level} = event;

  if (
    !item
    || item.id != 'kubejs:nuclearcraft_copy_paste_tool'
    || !block
    || !block.id.startsWith('nuclearcraft')
    || !block.entityData
    || !block.entityData.Content
  )
  return;

  function removeUpgrades(blockUpgrades, player) {
    if (blockUpgrades[0]) {
      let blockUpgradeID = blockUpgrades[0].id;
      let blockUpgradeCount = blockUpgrades[0].Count;

      player.give(blockUpgradeCount + 'x ' + blockUpgradeID);

      blockUpgrades.shift();
    }
  }

  function addUpgrades(blockUpgrades, copiedUpgrades, player) {
    if (copiedUpgrades[0]) {
      let copiedUpgradeID = copiedUpgrades[0].id;
      let copiedUpgradeCount = copiedUpgrades[0].Count;

      if(takeItems(player.inventory, copiedUpgradeID, copiedUpgradeCount)) {
        blockUpgrades.push(copiedUpgrades[0]);
        copiedUpgrades.shift();
        return;
      }

      player.tell(Text.white('Missing ' + Item.of(copiedUpgradeID).getDisplayName().getString() + ' in player inventory.'));
      copiedUpgrades.shift();
    }
  }

  function takeItems(inventory, item, count) {
    if (inventory.count(item) < count) return false;
    for (let i = 0; i < inventory.slots; i++) {
        count -= inventory.extractItem(inventory.find(item), count, false).count;
        if (count == 0) return true;
    }
  }
  
  let blockDisplayName = Item.of(block.id).getDisplayName().getString().slice(1, -1);

  if (player.isCrouching()) {
    item.nbt = block.entityData;
    item.nbt.display = {Name:'{"text":"Nuclearcraft Copy Paste Tool : ' + blockDisplayName + '"}'}

    player.tell(Text.white(blockDisplayName + ' settings copied.'));
    event.cancel();
  }

  if (!item.nbt) {
    player.tell(Text.white('Nothing to paste'));
    event.cancel();
  }

  let copiedID = item.nbt.id;

  if (block.id != copiedID){
    player.tell(Text.white('Copied machine is not the same as this machine'));
    event.cancel();
  }

  let copiedSideMap = item.nbt.Content.itemHandler.sideMap;
  let copiedRedstoneMode = item.nbt.Info.redstoneMode;

  block.setEntityData({Content:{itemHandler:{sideMap:copiedSideMap}}});
  block.setEntityData({Info:{redstoneMode:copiedRedstoneMode}});

  let copiedUpgrades = item.nbt.Info.upgrades.Items.concat();

  let blockUpgrades = block.entityData.Info.upgrades.Items.concat();

  while (blockUpgrades.length > 0) {
    removeUpgrades(blockUpgrades, player);
  }

  while (copiedUpgrades.length > 0) {
    addUpgrades(blockUpgrades, copiedUpgrades, player);
  }

  block.setEntityData({Info:{upgrades:{Items:blockUpgrades}}});

  level.markAndNotifyBlock(block.pos, level.getChunk(block.pos), block.blockState, block.blockState, 3, 512);
  player.tell(Text.white(blockDisplayName + ' configuration pasted'));
  
  event.cancel();
});
