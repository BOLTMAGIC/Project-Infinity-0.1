ServerEvents.commandRegistry(event => {
  const { commands: Commands } = event

  event.register(
    Commands.literal('project_e_aoe')
      .requires(src => src.hasPermission(0))
      .executes(ctx => {
        const { player, server } = ctx.source
        const pData = player.persistentData
        if (player == null) return 0

        pData['project_e_aoe_disabled'] = !pData['project_e_aoe_disabled']
        
        player.tell([
          Text.literal('Project E AOE is now : '),
          pData['project_e_aoe_disabled'] == false ? Text.green('Enabled') : Text.red('Disabled')
        ]);

        return 1
      })
  )
})

PlayerEvents.loggedIn(event => {
  if (event.player.persistentData['project_e_aoe_disabled'] == null) {
    event.player.persistentData['project_e_aoe_disabled'] = true;
  }
})