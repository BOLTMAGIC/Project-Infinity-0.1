BlockEvents.rightClicked((event) => {
  const {block, item, player, hand} = event;

  if (hand !== 'MAIN_HAND') event.cancel();

  if(
    !item
    || !block
    || item.id != 'kubejs:universal_wireless_terminal_uncrafter'
    || block.id != 'minecraft:grindstone'
  )
  return;

  const terminalNBTtoItemId = {
    'crafting' : 'ae2:wireless_crafting_terminal',
    'ex_pattern_access' : 'expatternprovider:wireless_ex_pat',
    'pattern_access' : 'ae2wtlib:wireless_pattern_access_terminal',
    'pattern_encoding' : 'ae2wtlib:wireless_pattern_encoding_terminal',
    'quantum_crafter' : 'advanced_ae:wireless_quantum_crafter_terminal',
    'transmutation' : 'appliede:wireless_transmutation_terminal',
    'wireless_emitter_terminal' : 'crazyae2addons:wireless_emitter_terminal',
    'wireless_notification_terminal' : 'crazyae2addons:wireless_notification_terminal',
    'wireless_redstone_terminal' : 'crazyae2addons:wireless_redstone_terminal'
  }
  
  item.count = 0;

  Object.keys(terminalNBTtoItemId).forEach(key => {
    if (item.nbt.hasOwnProperty(key)) {
      player.give(terminalNBTtoItemId[key]);
    }
  });

  event.cancel();
});
