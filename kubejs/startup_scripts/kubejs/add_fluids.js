StartupEvents.registry('fluid', (event) => {
  event
    .create('molten_basalz')
    .thickTexture(0x800000)
    .noBucket()
    .tag('kubejs:molten_basalz');
  event
    .create('molten_blizz')
    .thickTexture(0x00c6e0)
    .noBucket()
    .tag('kubejs:molten_blizz');
  event
    .create('molten_blitz')
    .thickTexture(0xedfdff)
    .noBucket()
    .tag('kubejs:molten_blitz');

  event
    .create('cryotheum_coolant')
    .thickTexture(0xa1fff7)
    .noBucket()
    .tag('kubejs:cryotheum_coolant');
});
