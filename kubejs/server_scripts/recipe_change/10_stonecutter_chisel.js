ServerEvents.recipes((event) => {
  function generateStonecutter (mod) {
    let tags = new Set();

    Ingredient.of(`@${mod}`)
      .getStacks()
      .forEach((item) => {
        if (!item.tags) return;

        let iter = item.tags.iterator();

        while (iter.hasNext()) {
          let tag = iter.next().location().toString();

          if (tag.startsWith(`${mod}:`)) {
            tags.add(tag);
          }
        }
      });

    tags.forEach((tag) => {
      let base = tag.split(':')[1];

      Ingredient.of(`#${tag}`)
        .getStacks()
        .forEach((item) => {
          event.stonecutting(item.id, [`#${tag}`, `minecraft:${base}`]);
        });
    });
  }

  generateStonecutter('chipped');
  generateStonecutter('rechiseled');
});
