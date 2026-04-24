priority: 0;
LootJS.modifiers((event) => {
  event
    .addLootTypeModifier(LootType.ENTITY, LootType.CHEST)
    .removeLoot(['@everlastingabilities'])
    .removeLoot(['everlastingabilities:inject_ability_totem'])
    .removeLoot([
      'born_in_chaos_v1:pumpkin_staff',
      'born_in_chaos_v1:soul_cutlass',
    ]);
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
  event.disableLootModification(/.*swasher*/);
});

LootJS.modifiers((event) => {
  event.addLootTypeModifier(LootType.FISHING, LootType.ENTITY).removeLoot([/.*swasher*/]);
  event.addLootTypeModifier(LootType.ENTITY).removeLoot([/.*melting_pan*/]);
});

LootJS.modifiers((event) => {
  event
    .addLootTypeModifier(LootType.ENTITY, LootType.CHEST)
    .removeLoot([/.*dimlet*/]);
});