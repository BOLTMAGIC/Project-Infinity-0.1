const items_ae2additions = {
  'ae2additions:65536k_crafting_storage': {
    outputs: ['ae2additions:cell_component_65536', 'ae2:crafting_unit']
  },
  'ae2additions:16384k_crafting_storage': {
    outputs: ['ae2additions:cell_component_16384', 'ae2:crafting_unit']
  },
  'ae2additions:4096k_crafting_storage': {
    outputs: ['ae2additions:cell_component_4096', 'ae2:crafting_unit']
  },
  'ae2additions:1024k_crafting_storage': {
    outputs: ['ae2additions:cell_component_1024', 'ae2:crafting_unit']
  },
};

ItemEvents.rightClicked((event) => {
  const { player, item } = event;
  
  if (!player.isCrouching()) return;
  if (item.isEmpty()) return;
  
  const itemData = items_ae2additions[item.id];
  if (itemData) {
    item.count--;
    itemData.outputs.forEach(output => player.give(output));
    
    event.cancel();
  }
});