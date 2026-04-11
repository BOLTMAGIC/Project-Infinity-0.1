StartupEvents.registry('item', (e) => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  e.create('zahraanite');

  e.create('ultimate_gem')
    .tag('balm:gems')
    .tag('forge:gems')
    .displayName('§dUltimate Gem')
    .maxStackSize(64)
    .texture('kubejs:item/ultimate_gem')
    .glow(true);

  e.create('ultimate_prediction')
    .tag('kubejs:ultimate_prediction')
    .displayName('§dUltimate Prediction')
    .maxStackSize(64)
    .texture('kubejs:item/ultimate_prediction');

  e.create('ultimate_vanilla_prediction')
    .tag('kubejs:ultimate_vanilla_prediction')
    .displayName('§dUltimate Vanilla Prediction')
    .maxStackSize(64)
    .texture('kubejs:item/ultimate_vanilla_prediction');

  e.create('ultimate_boss_prediction')
    .tag('kubejs:ultimate_boss_prediction')
    .displayName('§dUltimate Boss Prediction')
    .maxStackSize(64)
    .texture('kubejs:item/wip');

  e.create('ultimate_misc_prediction')
    .tag('kubejs:ultimate_misc_prediction')
    .displayName('§dUltimate Misc Prediction')
    .maxStackSize(64)
    .texture('kubejs:item/wip');

  e.create('allthemodium_mesh')
    .tag('exdeorum:sieve_meshes')
    .displayName('§6Allthemodium Mesh')
    .maxStackSize(64)
    .texture('kubejs:item/allthemodium_mesh')
    .glow(true);

  e.create('vibranium_mesh')
    .tag('exdeorum:sieve_meshes')
    .displayName('§aVibranium Mesh')
    .maxStackSize(64)
    .texture('kubejs:item/vibranium_mesh')
    .glow(true);

  e.create('wither_token')
    .tag('kubejs:wither_token')
    .displayName('§7Wither Token')
    .maxStackSize(64)
    .texture('kubejs:item/wither_token');

  e.create('left_dragon_heart')
    .tag('kubejs:left_dragon_heart')
    .tag('kubejs:dragon_heart')
    .displayName('§aLeft Dragon Heart')
    .maxStackSize(64)
    .texture('kubejs:item/left_dragon_heart')
    .glow(true);

  e.create('right_dragon_heart')
    .tag('kubejs:right_dragon_heart')
    .tag('kubejs:dragon_heart')
    .displayName('§aRight Dragon Heart')
    .maxStackSize(64)
    .texture('kubejs:item/right_dragon_heart')
    .glow(true);

  e.create('ultimate_heart')
    .tag('kubejs:ultimate_heart')
    .displayName('§dUltimate Heart')
    .maxStackSize(64)
    .texture('kubejs:item/ultimate_heart');

  e.create('wither_heart')
    .tag('kubejs:wither_heart')
    .displayName('§7Wither Heart')
    .maxStackSize(64)
    .texture('kubejs:item/wither_heart');

  e.create('warden_heart')
    .tag('kubejs:warden_heart')
    .displayName('§1Warden Heart')
    .maxStackSize(64)
    .texture('kubejs:item/warden_heart');

  e.create('creeper_heart')
    .tag('kubejs:creeper_heart')
    .displayName('§2Creeper Heart')
    .maxStackSize(64)
    .texture('kubejs:item/creeper_heart');

  e.create('blaze_heart')
    .tag('kubejs:blaze_heart')
    .displayName('§6Blaze Heart')
    .maxStackSize(64)
    .texture('kubejs:item/blaze_heart');

  //infinity 1-12 items
  e.create('infinity_1')
    .tag('forge:ingots/infinity_1')
    .tag('ae2:metal_ingots')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_1');
  e.create('infinity_1_333333')
    .displayName('Infinity 1.333333')
    .tag('forge:ingots/infinity_1_333333')
    .tag('ae2:metal_ingots')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_1_333333');
  e.create('infinity_1_666666')
    .displayName('Infinity 1.666666')
    .tag('forge:ingots/infinity_1_666666')
    .tag('ae2:metal_ingots')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_1_666666');
  e.create('infinity_1_999999')
    .displayName('Infinity 1.999999')
    .tag('forge:ingots/infinity_1_999999')
    .tag('ae2:metal_ingots')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_1_999999');
  e.create('infinity_2')
    .tag('forge:ingots/infinity_2')
    .tag('ae2:metal_ingots')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_2');
  e.create('infinity_3')
    .tag('forge:ingots/infinity_3')
    .tag('ae2:metal_ingots')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_3');
  e.create('infinity_4')
    .tag('forge:ingots/infinity_4')
    .tag('ae2:metal_ingots')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_4');
  e.create('infinity_5')
    .tag('forge:ingots/infinity_5')
    .tag('ae2:metal_ingots')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_5');
  e.create('infinity_6')
    .tag('forge:ingots/infinity_6')
    .tag('ae2:metal_ingots')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_6');
  e.create('infinity_7')
    .tag('forge:ingots/infinity_7')
    .tag('ae2:metal_ingots')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_7');
  e.create('infinity_8')
    .tag('forge:ingots/infinity_8')
    .tag('ae2:metal_ingots')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_8');
  e.create('infinity_9')
    .tag('forge:ingots/infinity_9')
    .tag('ae2:metal_ingots')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_9');
  e.create('infinity_10')
    .tag('forge:ingots/infinity_10')
    .tag('ae2:metal_ingots')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_10');
  e.create('infinity_11')
    .tag('forge:ingots/infinity_11')
    .tag('ae2:metal_ingots')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_11');
  e.create('infinity_12')
    .tag('forge:ingots/infinity_12')
    .tag('ae2:metal_ingots')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_12');

  //silent items
  function createingot(e, input) {
    e.create(input)
      .tag('forge:ingots/' + input)
      .tag('ae2:metal_ingots')
      .tag('forge:ingots')
      .tag('balm:ingots')
      .texture('kubejs:item/silent/' + input);
  }

  createingot(e, 'arcmetal_ingot');
  createingot(e, 'azure_electrum_ingot');
  createingot(e, 'azure_silver_ingot');
  createingot(e, 'blaze_gold_ingot');
  createingot(e, 'bunny_steel_ingot');
  createingot(e, 'crimson_iron_ingot');
  createingot(e, 'crimson_steel_ingot');
  createingot(e, 'crystalline_alloy');
  createingot(e, 'midnight_iron_ingot');
  createingot(e, 'plasteel_ingot');
  createingot(e, 'solarmetal_ingot');
  createingot(e, 'tyrian_steel_ingot');
  createingot(e, 'voidmetal_ingot');
  createingot(e, 'sculk_alloy_ingot');

  function createdust(e, input) {
    e.create(input)
      .tag('forge:dusts/' + input)
      .tag('forge:dusts')
      .tag('c:dusts')
      .texture('kubejs:item/silent/' + input);
  }

  createdust(e, 'azure_electrum_dust');
  createdust(e, 'azure_silver_dust');
  createdust(e, 'blaze_gold_dust');
  createdust(e, 'crimson_iron_dust');
  createdust(e, 'crimson_steel_dust');
  createdust(e, 'starmetal_dust');
  createdust(e, 'tyrian_steel_dust');

  function createraw(e, input) {
    e.create(input)
      .tag('c:raw_materials/' + input)
      .tag('forge:raw_materials/' + input)
      .tag('forge:raw_materials')
      .texture('kubejs:item/silent/' + input);
  }

  createraw(e, 'raw_arcmetal');
  createraw(e, 'raw_plasteel');
  createraw(e, 'raw_solarmetal');
  createraw(e, 'raw_voidmetal');

  //starmetal ingot
  e.create('starmetal_ingot')
    .tag('forge:ingots/starmetal_ingot')
    .tag('ae2:metal_ingots')
    .tag('forge:ingots')
    .tag('balm:ingots');

  //coins
  e.create('apotheotic_coin').tag('minecraft:beacon_payment_items');
  e.create('infused_coin').tag('minecraft:beacon_payment_items');
  e.create('ascended_coin').tag('minecraft:beacon_payment_items');

  e.create('azure_silver_ore_chunk').tag('exdeorum:ore_chunks');

  //tier 1-6 crafting seeds
  e.create('tier1_crafting_seed')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier1_crafting_seed')
    .displayName('§aTier 1 Crafting Seed');
  e.create('tier2_crafting_seed')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier2_crafting_seed')
    .displayName('§2Tier 2 Crafting Seed');
  e.create('tier3_crafting_seed')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier3_crafting_seed')
    .displayName('§6Tier 3 Crafting Seed');
  e.create('tier4_crafting_seed')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier4_crafting_seed')
    .displayName('§9Tier 4 Crafting Seed');
  e.create('tier5_crafting_seed')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier5_crafting_seed')
    .displayName('§4Tier 5 Crafting Seed');
  e.create('tier6_crafting_seed')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier6_crafting_seed')
    .displayName('§5Tier 6 Crafting Seed');

  //tier 1-6 super essence and ultimate essence
  e.create('tier1_super_essence')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier1_super_essence')
    .displayName('§aTier 1 Super Essence');
  e.create('tier2_super_essence')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier2_super_essence')
    .displayName('§2Tier 2 Super Essence');
  e.create('tier3_super_essence')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier3_super_essence')
    .displayName('§6Tier 3 Super Essence');
  e.create('tier4_super_essence')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier4_super_essence')
    .displayName('§9Tier 4 Super Essence');
  e.create('tier5_super_essence')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier5_super_essence')
    .displayName('§4Tier 5 Super Essence');
  e.create('tier6_super_essence')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier6_super_essence')
    .displayName('§5Tier 6 Super Essence');
  e.create('infinity_essence')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/infinity_essence')
    .displayName('§dInfinity Essence');

  //Chaotic Essence
  e.create('chaotic_essence')
    .maxStackSize(64)
    .displayName('§5Chaotic Essence')
    .texture('kubejs:item/chaotic_essence')
    .glow(true)
    .tag('kubejs:chaotic_essence');

  //Chaotic Essence
  e.create('chaos_guardian_prediction')
    .maxStackSize(64)
    .displayName('§5Chaos Guardian Prediction')
    .texture('kubejs:item/chaos_guardian_prediction')
    .glow(true)
    .tag('kubejs:chaos_guardian_prediction');

  //Industrial Foregoing Addons
  function createAddon(e, input) {
    e.create(input)
      .texture('kubejs:item/industrial_forgegoing/' + input)
      .tag('industrialforegoing:addon')
      .displayName(
        input
          .replace(/_/g, ' ')
          .replace(
            /\w\S*/g,
            (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
          ) + ' Dummy Item'
      );
  }
  createAddon(e, 'efficiency_addon_1');
  createAddon(e, 'efficiency_addon_2');
  createAddon(e, 'efficiency_addon_3');
  createAddon(e, 'efficiency_addon_4');
  createAddon(e, 'efficiency_addon_5');
  createAddon(e, 'processing_addon_1');
  createAddon(e, 'processing_addon_2');
  createAddon(e, 'processing_addon_3');
  createAddon(e, 'processing_addon_4');
  createAddon(e, 'processing_addon_5');
  createAddon(e, 'speed_addon_1');
  createAddon(e, 'speed_addon_2');
  createAddon(e, 'speed_addon_3');
  createAddon(e, 'speed_addon_4');
  createAddon(e, 'speed_addon_5');

  //Draconic Evolution
  function createDraconic(e, input) {
    e.create(input)
      .texture('kubejs:item/draconic/' + input)
      .displayName(
        input
          .replace(/_/g, ' ')
          .replace(
            /\w\S*/g,
            (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
          ) + ' Dummy Item'
      );
  }
  createDraconic(e, 'creative_capacitor');
  createDraconic(e, 'chaotic_axe');
  createDraconic(e, 'chaotic_bow');
  createDraconic(e, 'chaotic_capacitor');
  createDraconic(e, 'chaotic_hoe');
  createDraconic(e, 'chaotic_pickaxe');
  createDraconic(e, 'chaotic_shovel');
  createDraconic(e, 'chaotic_staff');
  createDraconic(e, 'chaotic_sword');
  createDraconic(e, 'draconic_axe');
  createDraconic(e, 'draconic_bow');
  createDraconic(e, 'draconic_capacitor');
  createDraconic(e, 'draconic_hoe');
  createDraconic(e, 'draconic_pickaxe');
  createDraconic(e, 'draconic_shovel');
  createDraconic(e, 'draconic_staff');
  createDraconic(e, 'draconic_sword');
  createDraconic(e, 'wyvern_axe');
  createDraconic(e, 'wyvern_bow');
  createDraconic(e, 'wyvern_capacitor');
  createDraconic(e, 'wyvern_hoe');
  createDraconic(e, 'wyvern_pickaxe');
  createDraconic(e, 'wyvern_shovel');
  createDraconic(e, 'wyvern_sword');
  createDraconic(e, 'wyvern_chestpiece');
  createDraconic(e, 'draconic_chestpiece');
  createDraconic(e, 'chaotic_chestpiece');
  createDraconic(e, 'wyvern_necklace');
  createDraconic(e, 'draconic_necklace');
  createDraconic(e, 'chaotic_necklace');

  //Powah
  function createPowah(e, input) {
    e.create(input)
      .texture('kubejs:item/powah/' + input)
      .displayName(
        input
          .replace(/_/g, ' ')
          .replace(
            /\w\S*/g,
            (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
          )
          .replace(/(\w+)$/, '($1)') + ' Dummy Item'
      );
  }
  createPowah(e, 'full_battery_nitro');
  createPowah(e, 'empty_battery_nitro');

  //EnderIO Items
  function createEnderIO(e, input) {
    e.create(input)
      .texture('kubejs:item/enderio/' + input)
      .displayName(
        input
          .replace(/_/g, ' ')
          .replace(
            /\w\S*/g,
            (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
          ) + ' Dummy Item'
      );
  }
  createEnderIO(e, 'filled_witch_soul_vial');
  createEnderIO(e, 'filled_enderman_soul_vial');
  createEnderIO(e, 'filled_shulker_soul_vial');
  createEnderIO(e, 'filled_zombie_soul_vial');
  createEnderIO(e, 'filled_villager_soul_vial');

  e.create('tank_nbt_remover')
    .displayName('Tank NBT Remover')
    .texture('kubejs:item/tank_nbt_remover');
    
  function createMekanismCompressed (e, item) {
    e.create('compressed_enriched_' + item)
      .displayName('Compressed Enriched ' + item.charAt(0).toUpperCase() + item.slice(1))
      .texture('kubejs:item/mekanism/compressed_enriched_' + item);

    e.create('double_compressed_enriched_' + item)
      .displayName('Double Compressed Enriched ' + item.charAt(0).toUpperCase() + item.slice(1))
      .texture('kubejs:item/mekanism/double_compressed_enriched_' + item);
  }

  const mekanismEnrichedMaterialsToCompress = [
    'redstone',
    'carbon',
    'diamond',
    'refined_obsidian',
    'uranium',
    'better_gold',
    'plaslitherite',
    'radiance',
    'thermonuclear',
    'shining',
    'spectrum',
  ];

  mekanismEnrichedMaterialsToCompress.forEach((material) => {
    createMekanismCompressed(e, material);
  });

});

StartupEvents.registry('block', (event) => {
  event
    .create('compressed_block_of_gunpowder')
    .displayName('Compressed Block of Gunpowder')
    .soundType('gravel')
    .hardness(0.8)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/compressed_block_of_gunpowder');

  event
    .create('infinity_9_block')
    .displayName('Infinity 9 Block')
    .soundType('metal')
    .hardness(1.2)
    .resistance(2.0)
    .textureAll('kubejs:block/silent/infinity_9_block');

  event
    .create('infinity_8_block')
    .displayName('Infinity 8 Block')
    .soundType('metal')
    .hardness(1.2)
    .resistance(2.0)
    .textureAll('kubejs:block/silent/infinity_8_block');

  event
    .create('compressed_slate')
    .displayName('Compressed Slate')
    .soundType('metal')
    .hardness(0.8)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/compressed_slate');

  event
    .create('compressed_hellforgedparts')
    .displayName('Compressed Hellforged Parts')
    .soundType('metal')
    .hardness(1.0)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/compressed_hellforgedparts');

  event
    .create('double_compressed_slate')
    .displayName('Double Compressed Slate')
    .soundType('metal')
    .hardness(0.8)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/double_compressed_slate');

  event
    .create('double_compressed_iron_block')
    .displayName('Double Compressed Iron Block')
    .soundType('metal')
    .hardness(0.8)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/double_compressed_iron_block');

  event
    .create('radiance_alloy_block')
    .displayName('Radiance Alloy Block')
    .soundType('metal')
    .hardness(0.8)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/radiance_alloy_block');

  event
    .create('thermonuclear_alloy_block')
    .displayName('Thermonuclear Alloy Block')
    .soundType('metal')
    .hardness(0.8)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/thermonuclear_alloy_block');

  event
    .create('shining_alloy_block')
    .displayName('Shining Alloy Block')
    .soundType('metal')
    .hardness(0.8)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/shining_alloy_block');

  event
    .create('spectrum_alloy_block')
    .displayName('Spectrum Alloy Block')
    .soundType('metal')
    .hardness(0.8)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/spectrum_alloy_block');

  event
    .create('triple_compressed_iron_block')
    .displayName('Triple Compressed Iron Block')
    .soundType('metal')
    .hardness(0.8)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/triple_compressed_iron_block');

  event
    .create('pink_slime_block')
    .displayName('Pink Slime Block')
    .soundType('metal')
    .hardness(0.8)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/pink_slime_block');

  event
    .create('compressed_glass')
    .displayName('Compressed Glass')
    .soundType('glass')
    .glassSoundType()
    .hardness(0.5)
    .resistance(0.7)
    .defaultCutout()
    .textureAll('kubejs:block/silent/compressed_glass');

  event
    .create('chaotic_essence_block')
    .displayName('§5Chaotic Essence Block')
    .soundType('metal')
    .hardness(1.5)
    .resistance(3.0)
    .textureAll('kubejs:block/silent/chaotic_essence_block')
    .tag('kubejs:chaotic_essence_block');

  event
    .create('starmetal_block')
    .displayName('§1Starmetal Block')
    .soundType('metal')
    .hardness(1.0)
    .resistance(1.5)
    .textureAll('kubejs:block/silent/starmetal_block')
    .tag('kubejs:starmetal_block');

  event
    .create('empowered_super_block')
    .displayName('§dEmpowered Super Block')
    .soundType('metal')
    .hardness(1.0)
    .resistance(1.5)
    .textureAll('kubejs:block/silent/empowered_super_block')
    .tag('kubejs:empowered_super_block');
  event
    .create('auto_mechanical_sieve')
    .displayName('Auto Mechanical Sieve')
    .soundType('metal')
    .hardness(1.0)
    .resistance(1.5)
    .textureAll('kubejs:block/silent/auto_mechanical_sieve')
    .tag('kubejs:auto_mechanical_sieve');

  event
    .create('fake_mob_masher')
    .displayName('Fake Mob Masher')
    .soundType('metal')
    .hardness(1.0)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/fake_mob_masher');
});

StartupEvents.registry('block', (e) => {
  function createblock(e, input1, input2) {
    e.create(input1)
      .displayName(input2)
      .tag('forge:storage_blocks/' + input1)
      .tag('forge:storage_blocks')
      .tag('c:storage_blocks')
      .tagBlock('mineable/pickaxe')
      .soundType('metal')
      .resistance(6)
      .hardness(5)
      .requiresTool(true)
      .textureAll('kubejs:block/silent/' + input1);
  }

  createblock(e, 'arcmetal_block', 'Arcmetal Block');
  createblock(e, 'azure_electrum_block', 'Azure Electrum Block');
  createblock(e, 'azure_silver_block', 'Azure Silver Block');
  createblock(e, 'blaze_gold_block', 'Blaze Gold Block');
  createblock(e, 'bunny_steel_block', 'Bunny Steel Block');
  createblock(e, 'midnight_iron_block', 'Midnight Iron Block');
  createblock(e, 'plasteel_block', 'Plasteel Block');
  createblock(e, 'sculk_alloy_block', 'Sculk Alloy Block');
  createblock(e, 'solarmetal_block', 'Solarmetal Block');
  createblock(e, 'voidmetal_block', 'Voidmetal Block');

  function createore(e, input1, input2) {
    e.create(input1)
      .displayName(input2)
      .tagBlock('mineable/pickaxe')
      .soundType('metal')
      .resistance(6)
      .hardness(5)
      .requiresTool(true)
      .textureAll('kubejs:block/silent/' + input1);
  }

  createore(e, 'arcmetal_ore', 'Arcmetal Ore');
  createore(e, 'azure_silver_ore', 'Azure Silver Ore');
  createore(e, 'plasteel_ore', 'Plasteel Ore');
  createore(e, 'solarmetal_ore', 'Solarmetal Ore');
  createore(e, 'voidmetal_ore', 'Voidmetal Ore');
});

ItemEvents.modification((event) => {
  event.modify('rftoolsbase:infused_diamond', (item) => {
    item.maxStackSize = 64;
  });
  event.modify('dimensionalpocketsii:dimensional_ingot_enhanced', (item) => {
    item.maxStackSize = 64;
  });
  event.modify('silentgems:soul_gem', (item) => {
    item.maxStackSize = 64;
  });
  event.modify('cataclysm:void_core', (item) => {
    item.maxStackSize = 64;
  });
  event.modify('minecraft:ender_pearl', (item) => {
    item.maxStackSize = 64;
  });
  event.modify('exdeorum:sculk_core', (item) => {
    item.maxStackSize = 64;
  });
  event.modify(
    [
      'extrahnn:upgrade_speed',
      'extrahnn:upgrade_module_stack',
      'extrahnn:upgrade_data_kill',
    ],
    (item) => {
      item.maxStackSize = 1;
    }
  );
});
