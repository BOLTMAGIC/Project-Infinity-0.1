LootJS.modifiers((event) => {
  event
    .addLootTypeModifier(LootType.ENTITY, LootType.CHEST)
    .removeLoot(['@everlastingabilities'])
    .removeLoot(['everlastingabilities:inject_ability_totem'])
});

LootJS.modifiers((event) => {
  event
    .addLootTypeModifier(LootType.ENTITY, LootType.CHEST)
    .removeLoot(['twilightforest:lifedrain_scepter']);
});

LootJS.modifiers((event) => {
  event
    .addEntityLootModifier('allthemodium:piglich')
    .removeLoot([
      'allthemodium:allthemodium_helmet',
      'allthemodium:allthemodium_chestplate',
      'allthemodium:allthemodium_leggings',
      'allthemodium:allthemodium_boots',
      'allthemodium:allthemodium_carrot',
      'allthemodium:allthemodium_apple',
    ])
    .randomChance(0.125)
    .addLoot('allthemodium:piglich_heart');
});

LootJS.modifiers((event) => {
  event
    .addLootTypeModifier(LootType.ENTITY, LootType.CHEST)
    .removeLoot([/.*dimlet*/]);
});
