ServerEvents.recipes((event) => {
  create3x3same(event, 'cataclysm:enderite_block', [
    'cataclysm:enderite_ingot',
  ]);

  shapeless(event, '9x cataclysm:enderite_ingot', ['cataclysm:enderite_block']);
});