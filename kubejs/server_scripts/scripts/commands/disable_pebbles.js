ServerEvents.commandRegistry((event) => {
  const { commands: Commands } = event;

  event.register(
    Commands.literal('ProjectInfinity').then(
      Commands.literal('pebble')
        .then(
          Commands.literal('disable').executes((ctx) => {
            const { player, server } = ctx.source;
            const pData = player.persistentData;
            if (player == null) return 0;

            pData['pebble_disabled'] = true;

            player.tell([
              Text.translate('text.kubejs.pebble.state'),
              Text.red(Text.translate('text.kubejs.pebble.state.disabled')),
            ]);

            return 1;
          })
        )
        .then(
          Commands.literal('enable').executes((ctx) => {
            const { player, server } = ctx.source;
            const pData = player.persistentData;
            if (player == null) return 0;

            pData['pebble_disabled'] = false;

            player.tell([
              Text.translate('text.kubejs.pebble.state'),
              Text.green(Text.translate('text.kubejs.pebble.state.enabled')),
            ]);

            return 1;
          })
        )
    )
  );
});

PlayerEvents.loggedIn((event) => {
  if (event.player.persistentData['pebble_disabled'] == null) {
    event.player.persistentData['pebble_disabled'] = false;
  }
});