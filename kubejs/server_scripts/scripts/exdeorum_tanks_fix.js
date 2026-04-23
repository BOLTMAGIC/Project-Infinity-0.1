BlockEvents.rightClicked((event) => {
  const { item, block, player, hand, level } = event;

  if (hand !== 'MAIN_HAND') return;

  const blockRegex = /^exdeorum:.*barrel.*/;

  if (!blockRegex.test(block.id)) return;

  const itemRegex = /^.*mekanism.*:.*fluid_tank/;

  if (!itemRegex.test(item.id)) return;
  if (!item.nbt) return;

  if (block.entityData.tank.Amount != 1000.0) return;

  if (item.nbt.mekData.FluidTanks[0].stored.Amount < 1000) return;

  if (block.entityData.tank.FluidName == 'exdeorum:witch_water' && item.nbt.mekData.FluidTanks[0].stored.FluidName == 'minecraft:lava') {
    block.setEntityData({tank:{Amount: 0, FluidName: 'minecraft:empty'}});
    block.setEntityData({item:{Items:[{Count:true,Slot:0,id:"minecraft:netherrack"}],Size:1}});

    level.markAndNotifyBlock(block.pos, level.getChunk(block.pos), block.blockState, block.blockState, 3, 512)

    item.nbt.mekData.FluidTanks[0].stored.Amount -= 1000;

    if (item.nbt.mekData.FluidTanks[0].stored.Amount == 0.0) {
      item.nbt = null;
    }

    event.cancel();
  }

  if (block.entityData.tank.FluidName == 'minecraft:lava' && item.nbt.mekData.FluidTanks[0].stored.FluidName == 'exdeorum:witch_water') {
    block.setEntityData({tank:{Amount: 0, FluidName: 'minecraft:empty'}});
    block.setEntityData({item:{Items:[{Count:true,Slot:0,id:"minecraft:blackstone"}],Size:1}});

    level.markAndNotifyBlock(block.pos, level.getChunk(block.pos), block.blockState, block.blockState, 3, 512)

    item.nbt.mekData.FluidTanks[0].stored.Amount -= 1000;

    if (item.nbt.mekData.FluidTanks[0].stored.Amount == 0.0) {
      item.nbt = null;
    }

    event.cancel();
  }

  if (block.entityData.tank.FluidName == 'minecraft:water' && item.nbt.mekData.FluidTanks[0].stored.FluidName == 'minecraft:milk') {
    block.setEntityData({tank:{Amount: 0, FluidName: 'minecraft:empty'}});
    block.setEntityData({item:{Items:[{Count:true,Slot:0,id:"minecraft:slime_block"}],Size:1}});

    level.markAndNotifyBlock(block.pos, level.getChunk(block.pos), block.blockState, block.blockState, 3, 512)

    item.nbt.mekData.FluidTanks[0].stored.Amount -= 1000;

    if (item.nbt.mekData.FluidTanks[0].stored.Amount == 0.0) {
      item.nbt = null;
    }

    event.cancel();
  }
});
