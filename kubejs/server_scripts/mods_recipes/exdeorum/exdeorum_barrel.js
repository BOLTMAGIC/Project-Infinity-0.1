ServerEvents.recipes((event) => {
    //Sand to Clay compressed
  event.custom({
    type: 'exdeorum:barrel_mixing',
    fluid: 'minecraft:water',
    fluid_amount: 1000,
    ingredient: { item: 'exdeorum:compressed_dust' },
    result: 'compressium:clay_1',
  });
});
