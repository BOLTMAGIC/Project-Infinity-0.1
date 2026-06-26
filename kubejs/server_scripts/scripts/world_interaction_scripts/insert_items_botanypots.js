BlockEvents.rightClicked(
  [
    'botanypots:terracotta_botany_pot',
    'botanypots:terracotta_hopper_botany_pot',
    'botanypotstiers:elite_terracotta_botany_pot',
    'botanypotstiers:elite_terracotta_hopper_botany_pot',
    'botanypotstiers:ultra_terracotta_botany_pot',
    'botanypotstiers:ultra_terracotta_hopper_botany_pot',
    'botanypotstiers:creative_terracotta_botany_pot',
    'botanypotstiers:creative_terracotta_hopper_botany_pot',
  ],
  (event) => {
  const { item, block, player, hand, level} = event;

  if (
    item.isEmpty()
    || player.isCrouching()
  )
  return;

  const allowedBlocks = [
    "mysticalagriculture:supremium_farmland",
    "mysticalagriculture:tertium_farmland",
    "extendedcrafting:the_ultimate_block",
    "avaritia:infinity",
    "mysticalagradditions:insanium_farmland",
    "born_in_chaos_v1:fel_soil",
    "minecraft:farmland",
    "mob_grinding_utils:delightful_dirt",
    "mysticalagriculture:imperium_farmland",
    "minecraft:rooted_dirt",
    "mysticalagriculture:inferium_farmland",
    "minecraft:deepslate_coal_ore",
    "minecraft:granite",
    "minecraft:basalt",
    "minecraft:birch_log",
    "minecraft:netherrack",
    "minecraft:diorite",
    "minecraft:deepslate_copper_ore",
    "minecraft:brown_mushroom_block",
    "minecraft:podzol",
    "minecraft:mycelium",
    "minecraft:deepslate_lapis_ore",
    "minecraft:nether_quartz_ore",
    "minecraft:cobblestone",
    "minecraft:spruce_wood",
    "minecraft:salmon_bucket",
    "minecraft:grass_block",
    "minecraft:dirt",
    "mysticalagriculture:prudentium_farmland",
    "minecraft:cod_bucket",
    "minecraft:tropical_fish_bucket",
    "minecraft:clay",
    "minecraft:coarse_dirt",
    "minecraft:dirt_path",
    "allthemodium:unobtainium_block",
    "minecraft:deepslate_diamond_ore",
    "minecraft:coal_ore",
    "minecraft:blackstone",
    "minecraft:stone",
    "minecraft:mossy_cobblestone",
    "minecraft:nether_gold_ore",
    "minecraft:deepslate_iron_ore",
    "minecraft:deepslate_emerald_ore",
    "minecraft:lapis_ore",
    "minecraft:redstone_ore",
    "minecraft:acacia_wood",
    "minecraft:red_mushroom_block",
    "minecraft:dripstone_block",
    "minecraft:warped_nylium",
    "minecraft:crimson_nylium",
    "minecraft:deepslate_redstone_ore",
    "minecraft:copper_ore",
    "minecraft:dark_oak_log",
    "minecraft:moss_block",
    "occultism:iesnium_block",
    "minecraft:gold_ore",
    "minecraft:deepslate_gold_ore",
    "minecraft:iron_ore",
    "minecraft:deepslate",
    "minecraft:diamond_ore",
    "minecraft:birch_wood",
    "minecraft:jungle_log",
    "minecraft:mushroom_stem",
    "minecraft:soul_sand",
    "minecraft:spruce_log",
    "minecraft:emerald_ore",
    "minecraft:water_bucket",
    "minecraft:end_stone",
    "twilightforest:uberous_soil",
    "snad:snad",
    "born_in_chaos_v1:dark_metal_block",
    "minecraft:andesite",
    "minecraft:oak_log",
    "minecraft:acacia_log",
    "minecraft:jungle_wood",
    "minecraft:dark_oak_wood",
    "minecraft:oak_wood",
    "mysticalagradditions:nitro_crystal_crux",
    "minecraft:soul_soil",
    "minecraft:dried_kelp_block",
    "mysticalagradditions:neutronium_crux",
    "minecraft:sand",
    "snad:red_snad",
    "allthemodium:vibranium_block",
    "minecraft:hay_block",
    "minecraft:red_sand",
    "mysticalagradditions:gaia_spirit_crux",
    "mysticalagradditions:awakened_draconium_crux",
    "mysticalagradditions:nether_star_crux",
    "mysticalagradditions:dragon_egg_crux",
  ]

  allowedBlocks.forEach(b => {
    if (item.id == b) {
      let items = block.entityData.Inventory.Items

      if (items[0] && items[0].Slot == false) return;
      if (items[1] && items[1].Slot == false) return;
      
      if (items[0]) {
        items.push({Slot:false,id:item.id,Count:true})
      }
      else {
        items.push({Slot:false,id:item.id,Count:true})
      }

      block.setEntityData({Inventory:{Items:items}});
      level.markAndNotifyBlock(block.pos, level.getChunk(block.pos), block.blockState, block.blockState, 3, 512);

      player.mainHandItem.count--;

      event.cancel();
    }
  });

  if (
    item.hasTag('forge:seeds')
    || item.hasTag('forge:plants')
    || item.hasTag('forge:crops')
    || item.hasTag('minecraft:flowers')
    || item.hasTag('forge:sapling')
    || item.hasTag('minecraft:saplings')
    || item.hasTag('forge:mushrooms')
  ) {
    let items = block.entityData.Inventory.Items
    if (items[0] && items[0].Slot == true) return;
    if (items[1] && items[1].Slot == true) return;

    if (items[0]) {
      items.push({Slot:true,id:item.id,Count:true})
    }
    else {
      items.push({Slot:true,id:item.id,Count:true})
    }

    block.setEntityData({Inventory:{Items:items}});
    level.markAndNotifyBlock(block.pos, level.getChunk(block.pos), block.blockState, block.blockState, 3, 512);

    player.mainHandItem.count--;

    event.cancel();
  }
});
