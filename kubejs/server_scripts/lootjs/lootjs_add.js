let bronze_coin = LootEntry.of("kubejs:apotheotic_coin").when((c) =>
  c.randomChance(0.0025)
);
let silver_coin = LootEntry.of('kubejs:infused_coin').when((c) =>
  c.randomChance(0.00025)
);
let gold_coin = LootEntry.of("kubejs:ascended_coin").when((c) =>
  c.randomChance(0.000001)
);

LootJS.modifiers((event) => {
  event
    .addLootTypeModifier([LootType.ENTITY])
    .matchEntity((entity) => {
      entity.isMonster(true);
    })
    .killedByPlayer() 
    .addLoot([bronze_coin, silver_coin, gold_coin]);
});

LootJS.modifiers((event) => {
  event
    .addLootTableModifier('cataclysm:entities/ender_golem')
    .addLoot('4x cataclysm:enderite_ingot');
});

LootJS.modifiers((event) => {
  event
    .addLootTableModifier('minecraft:entities/blaze')
    .randomChance(0.5)
    .addLoot('kubejs:blaze_heart');
});

LootJS.modifiers((event) => {
  event
    .addLootTableModifier('minecraft:entities/creeper')
    .randomChance(0.5)
    .addLoot('kubejs:creeper_heart');
});

LootJS.modifiers((event) => {
  event
    .addLootTableModifier('minecraft:entities/warden')
    .randomChance(0.5)
    .addLoot('kubejs:warden_heart');
});

LootJS.modifiers((event) => {
  event
    .addLootTypeModifier(LootType.ENTITY)
    .anyDimension("minecraft:overworld")
    .randomChance(0.01)
    .addLoot('bosses_of_mass_destruction:soul_star');
});

//arcmetal
LootJS.modifiers((event) => {
  const stickWhenFortune = LootEntry.of('kubejs:raw_arcmetal')
    .applyOreBonus('minecraft:fortune')
    .when((c) =>
      c.matchMainHand(ItemFilter.hasEnchantment('minecraft:fortune'))
    );
  const appleWhenSilkTouch = LootEntry.of("kubejs:arcmetal_ore").when((c) =>
    c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
  );
  const metal = 'kubejs:raw_arcmetal';

  event
    .addBlockLootModifier('kubejs:arcmetal_ore')
    .removeLoot(Ingredient.all)
    .addAlternativesLoot(stickWhenFortune, appleWhenSilkTouch, metal);
});
//plasteel
LootJS.modifiers((event) => {
  const stickWhenFortune = LootEntry.of('kubejs:raw_plasteel')
    .applyOreBonus('minecraft:fortune')
    .when((c) =>
      c.matchMainHand(ItemFilter.hasEnchantment('minecraft:fortune'))
    );
  const appleWhenSilkTouch = LootEntry.of("kubejs:plasteel_ore").when((c) =>
    c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
  );
  const metal = 'kubejs:raw_plasteel';

  event
    .addBlockLootModifier('kubejs:plasteel_ore')
    .removeLoot(Ingredient.all)
    .addAlternativesLoot(stickWhenFortune, appleWhenSilkTouch, metal);
});
//solarmetal
LootJS.modifiers((event) => {
  const stickWhenFortune = LootEntry.of('kubejs:raw_solarmetal')
    .applyOreBonus('minecraft:fortune')
    .when((c) =>
      c.matchMainHand(ItemFilter.hasEnchantment('minecraft:fortune'))
    );
  const appleWhenSilkTouch = LootEntry.of("kubejs:solarmetal_ore").when((c) =>
    c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
  );
  const metal = 'kubejs:raw_solarmetal';

  event
    .addBlockLootModifier('kubejs:solarmetal_ore')
    .removeLoot(Ingredient.all)
    .addAlternativesLoot(stickWhenFortune, appleWhenSilkTouch, metal);
});
//voidmetal
LootJS.modifiers((event) => {
  const stickWhenFortune = LootEntry.of('kubejs:raw_voidmetal')
    .applyOreBonus('minecraft:fortune')
    .when((c) =>
      c.matchMainHand(ItemFilter.hasEnchantment('minecraft:fortune'))
    );
  const appleWhenSilkTouch = LootEntry.of("kubejs:voidmetal_ore").when((c) =>
    c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
  );
  const metal = 'kubejs:raw_voidmetal';

  event
    .addBlockLootModifier('kubejs:voidmetal_ore')
    .removeLoot(Ingredient.all)
    .addAlternativesLoot(stickWhenFortune, appleWhenSilkTouch, metal);
});

//azure silver
LootJS.modifiers((event) => {
  const stickWhenFortune = LootEntry.of('kubejs:azure_silver_ingot')
    .applyOreBonus('minecraft:fortune')
    .when((c) =>
      c.matchMainHand(ItemFilter.hasEnchantment('minecraft:fortune'))
    );
  const applyWhenSilkTouch = LootEntry.of("kubejs:azure_silver_ore").when((c) =>
    c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
  );
  // Currently lacks a raw ore
  const metal = "kubejs:azure_silver_ingot";

  event
    .addBlockLootModifier('kubejs:azure_silver_ore')
    .removeLoot(Ingredient.all)
    .addAlternativesLoot(stickWhenFortune, applyWhenSilkTouch ,metal);
});

//'allthemodium:allthemodium_upgrade_smithing_template'
LootJS.modifiers((event) => {
  event
    .addLootTableModifier('minecraft:chests/ancient_city')
    .randomChance(0.025)
    .addLoot('allthemodium:allthemodium_upgrade_smithing_template');
});
