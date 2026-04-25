ServerEvents.recipes((event) => {
  shapeless(event, '9x minecraft:glass', ['kubejs:compressed_glass']);
  shapeless(event, 'kubejs:compressed_glass', ['9x minecraft:glass']);
});
