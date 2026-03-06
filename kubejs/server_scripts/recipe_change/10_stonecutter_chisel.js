let getMaterial = (item) => {
  const material = item.split(':')[1];
  const parts = material.split('_');

  const getAllCombinations = (arr) => {
    let combinations = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j <= arr.length; j++) {
        combinations.push(arr.slice(i, j).join('_'));
      }
    }
    return combinations;
  };

  const combinations = getAllCombinations(parts);

  for (let part of combinations) {
    if (Item.exists(`minecraft:${part}_block`)) return part + '_block';
    if (Item.exists(`minecraft:${part}`)) return part;
  }

  console.warn(`Could not find material for item: ${item}`);
  return null;
};
ServerEvents.tags('item', (e) => {
  Ingredient.of('@rechiseled').itemIds.forEach((item) => {
    // skip the chisel itself since it's tagged but shouldn't be added
    if (item === 'rechiseled:chisel') return;
    const material = getMaterial(item);
    if (material) {
      e.add(`rechiseled:${material}`, item);
    }
  });

  e.add('craftoria:decor_stations', [
    'chipped:botanist_workbench',
    'chipped:glassblower',
    'chipped:carpenters_table',
    'chipped:loom_table',
    'chipped:mason_table',
    'chipped:alchemy_bench',
    'chipped:tinkering_table',
    'chipped:watering_can',
    'chipped:alchemy_book',
    'chipped:saw',
    'chipped:needles',
    'chipped:chisel',
    'chipped:multimeter',
  ]);
});

ServerEvents.recipes((e) => {
  Ingredient.of('@rechiseled').stacks.forEach((item) => {
    // skip the chisel itself since it's tagged but we don't want recipes for it
    if (item.id === 'rechiseled:chisel') return;
    const material = getMaterial(item.id);
    if (material)
      e.stonecutting(item.id, [
        Ingredient.of(`#rechiseled:${material}`),
        `minecraft:${material}`,
      ]);
  });

  let chippedThings = [];
  Ingredient.of('@chipped').stacks.forEach((item) => {
    if (!item.tags) return;
    // manually iterate the tag stream using an iterator to avoid access issues
    let tagsArray = [];
    const it = item.tags.iterator();
    while (it.hasNext()) {
      tagsArray.push(it.next());
    }
    // skip if the decor station tag is present
    if (tagsArray.indexOf('craftoria:decor_stations') !== -1) return;
    tagsArray.forEach((tag) => {
      if (chippedThings.indexOf(`#${tag}`) !== -1) return;
      if (tag.namespace === 'chipped') chippedThings.push(`#${tag}`);
    });
  });

  chippedThings.forEach((tag) => {
    Ingredient.of(tag).stacks.forEach((item) => {
      e.stonecutting(item.id, [tag, `minecraft:${tag.split(':')[1]}`]);
    });
  });
});
