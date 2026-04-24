ServerEvents.recipes((event) => {
  shapeless(
    event,
    Item.of('patchouli:guide_book', '{"patchouli:book":"cyclic:guide_book"}'),
    ['minecraft:book', 'compressium:cobblestone_1']
  );

  shapeless(
    event,
    Item.of('patchouli:guide_book','{"patchouli:book":"patchouli:project_infinity"}'),
    ['minecraft:book', 'voidminers:rubetine']
  );
});
