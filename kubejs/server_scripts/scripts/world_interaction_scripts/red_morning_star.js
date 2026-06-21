BlockEvents.broken(
  [
    'cyclic:experience_pylon'
  ],
  event => {
    const { block, player } = event;

    const mainHand = player.mainHandItem;
    const offHand = player.offHandItem;

    if (
      mainHand.id != 'projecte:rm_morning_star' && 
      offHand.id != 'projecte:rm_morning_star'
    ) return;
    
    if (
      mainHand.nbt.Charge == 0 || 
      offHand.nbt.Charge == 0
    ) return;

    player.tell(
      Text.red(
        'Breaking of ' +
          block.item.getDisplayName().getString() +
          ' prevented to avoid voiding it.'
      )
    );
    player.tell(
      Text.red(
        'Use a non-charged Red Morningstar or another tool to break it.'
      )
    );

    event.cancel();
});

BlockEvents.rightClicked('projecte:rm_morning_star', event => {
  const { player, item } = event;

  if (player.persistentData['red_morningstar_aoe_disabled'] == false) return;

  if (
    item.nbt && item.nbt.Charge &&
    item.nbt.Charge != 0)
    {
    player.tell(
      Text.red(
        'Red Morningstar AOE is disabled, do /red_morningstar_aoe to enable'
      )
    );
    event.cancel();
  }
});
