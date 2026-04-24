ItemEvents.rightClicked((event) => {
  const { player, item } = event;

  if (!player.isCrouching()) return;
  if (item.isEmpty()) return;

  const items = {
    'extendedae_plus:1024x_crafting_accelerator': {
      outputs: [
        'ae2:cell_component_256k',
        'ae2:cell_component_256k',
        'extendedae_plus:256x_crafting_accelerator',
      ],
    },
    'extendedae_plus:256x_crafting_accelerator': {
      outputs: ['ae2:cell_component_256k', 'ae2:crafting_accelerator'],
    },
    'extendedae_plus:64x_crafting_accelerator': {
      outputs: ['ae2:cell_component_64k', 'ae2:crafting_accelerator'],
    },
    'extendedae_plus:16x_crafting_accelerator': {
      outputs: ['ae2:cell_component_16k', 'ae2:crafting_accelerator'],
    },
    'extendedae_plus:4x_crafting_accelerator': {
      outputs: ['ae2:cell_component_4k', 'ae2:crafting_accelerator'],
    },
  };

  const itemData = items[item.id];
  const stackSize = item.count;
  if (itemData) {
    item.count = 0;
    for (let i = 0; i < stackSize; i++) {
      itemData.outputs.forEach((output) => player.give(output));
    }
    event.cancel();
  }
});
