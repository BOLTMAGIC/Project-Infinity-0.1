//Netherite Varient Hammers
StartupEvents.registry('item', (event) => {
  event
    .create('netherite_iron_hammer', 'pickaxe')
    .tier('netherite')
    .modifyTier((tier) => {
      tier.uses = 2313;
    });

  event
    .create('netherite_gold_hammer', 'pickaxe')
    .tier('netherite')
    .modifyTier((tier) => {
      tier.uses = 2313;
    });

  event
    .create('netherite_emerald_hammer', 'pickaxe')
    .tier('netherite')
    .modifyTier((tier) => {
      tier.uses = 2651;
    });

  event
    .create('netherite_diamond_hammer', 'pickaxe')
    .tier('netherite')
    .modifyTier((tier) => {
      tier.uses = 3092;
    });
});

//ATM Varient Hammers
StartupEvents.registry('item', (event) => {
  const $HammerItem = Java.loadClass("thedarkcolour.exdeorum.item.HammerItem")
  const $Tier = Java.loadClass("net.minecraft.world.item.Tier")
  const $Item$Properties = Java.loadClass("net.minecraft.world.item.Item$Properties")

  let hammers = [
    { ingot: "allthemodium",       speed: 10 },
    { ingot: "vibranium",          speed: 12 },
    { ingot: "unobtainium",        speed: 14 },
    { ingot: "allthemodium_alloy", speed: 16 }
  ]

  hammers.forEach(hammer => {
    event.createCustom(
      hammer.ingot + '_hammer',
      () =>
        new $HammerItem(
          new JavaAdapter($Tier, {
            /*getLevel*/ m_6604_ () {
              return 5;
            },
            /*getUses*/ m_6609_ () {
              return 0;
            },
            /*getSpeed*/ m_6624_ () {
              return hammer.speed;
            },
            /*getAttackDamageBonus*/ m_6631_ () {
              return 11.0;
            },
            /*getEnchantmentValue*/ m_6601_ () {
              return 85;
            },
            /*getRepairIngredient*/ m_6282_ () {
              return Ingredient.of('#forge:ingots/' + hammer.ingot);
            },
          }),
          new $Item$Properties()
        )
    );
  })
});
