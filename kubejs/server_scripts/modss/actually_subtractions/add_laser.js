var items = [
  ['silentgems:carnelian_ore', 300],
  ['silentgems:topaz_ore', 250],
  ['silentgems:citrine_ore', 150],
  ['silentgems:heliodor_ore', 200],
  ['silentgems:moldavite_ore', 300],
  ['silentgems:peridot_ore', 500],
  ['silentgems:turquoise_ore', 300],
  ['silentgems:kyanite_ore', 250],
  ['silentgems:iolite_ore', 250],
  ['silentgems:alexandrite_ore', 300],
  ['silentgems:ammolite_ore', 300],
  ['silentgems:rose_quartz_ore', 300],
  ['silentgems:black_diamond_ore', 500],
  ['silentgems:white_diamond_ore', 500],
  ['thermal:sulfur_ore', 300],
  ['thermal:cinnabar_ore', 250],
  ['actuallyadditions:black_quartz_ore', 450],
];

function lasercraft(event, items) {
  event
    .custom({
      type: 'actuallyadditions:mining_lens',
      ingredient: {
        tag: 'forge:stone',
      },
      result: {
        item: items[0],
      },
      weight: items[1],
    })
    .id('actuallyadditions_' + items[0]);
}

ServerEvents.recipes((event) => {
  items.forEach((items) => {
    lasercraft(event, items);
  });
});
