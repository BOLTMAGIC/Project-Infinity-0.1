ServerEvents.recipes((event) => {
  event.smelting('bigreactors:benitoite_crystal', 'bigreactors:benitoite_ore');

  shapeless(event, '3x bigreactors:yellorium_ingot', [
    'mekanism:ingot_uranium',
    'mekanism:ingot_uranium',
    'mekanism:ingot_uranium',
  ]);
});