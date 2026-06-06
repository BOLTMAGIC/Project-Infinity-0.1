ServerEvents.commandRegistry(event => {
  const { commands: Commands } = event

  event.register(
    Commands.literal('red_morningstar_aoe')
      .requires(src => src.hasPermission(0))
      .executes(ctx => {
        const { player, server } = ctx.source
        const pData = player.persistentData
        if (player == null) return 0

        pData['red_morningstar_aoe_disabled'] = !pData['red_morningstar_aoe_disabled']
        
        player.tell([
          Text.literal('Red Morningstar AOE is now : '),
          pData['red_morningstar_aoe_disabled'] == false ? Text.green('Enabled') : Text.red('Disabled')
        ]);

        return 1
      })
  )
})

PlayerEvents.loggedIn(event => {
  if (event.player.persistentData['red_morningstar_aoe_disabled'] == null) {
    event.player.persistentData['red_morningstar_aoe_disabled'] = true;
  }
})