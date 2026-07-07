BlockEvents.broken('cyclic:experience_pylon', (event) => {
  const { block, player } = event;

  const mainHand = player.mainHandItem;
  const offHand = player.offHandItem;

  console.log(mainHand, '  ', offHand);

  const item = mainHand.id == 'projecte:rm_morning_star' ? mainHand : offHand;

  if (item.id != 'projecte:rm_morning_star') return;

  if (!item.nbt) return;
  if (!item.nbt.Charge) return;
  if (item.nbt.Charge == 0) return;

  player.tell(
    Text.red(
      Text.translate(
        'text.kubejs.red_morningstar_aoe.block_break_canceled_1',
        block.item.getDisplayName().getString()
      )
    )
  );
  player.tell(
    Text.red(
      Text.translate('text.kubejs.red_morningstar_aoe.block_break_canceled_2')
    )
  );

  event.cancel();
});

BlockEvents.rightClicked((event) => {
  const { player, item } = event;

  if (item.id != 'projecte:rm_morning_star') return;

  if (player.persistentData['red_morningstar_aoe_disabled'] == false) return;

  if (item.nbt && item.nbt.Charge && item.nbt.Charge != 0) {
    player.tell(
      Text.red(Text.translate('text.kubejs.red_morningstar_aoe.disabled'))
    );
    event.cancel();
  }
});
