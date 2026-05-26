BlockEvents.broken(
  [
    'common_ore_library:aluminum_ore',
    'common_ore_library:zinc_ore',
    'common_ore_library:cobalt_ore',
    'common_ore_library:platinum_ore',
    'common_ore_library:iridium_ore',
    'common_ore_library:tungsten_ore',
  ],
  event => {
  const { block, player, level } = event;
  

  const oreConfigs = {
    'common_ore_library:aluminum_ore': {
      drop: 'common_ore_library:raw_aluminum',
      minTier: 'stone'
    },
    'common_ore_library:zinc_ore': {
      drop: 'common_ore_library:raw_zinc',
      minTier: 'stone'
    },
    'common_ore_library:cobalt_ore': {
      drop: 'common_ore_library:raw_cobalt',
      minTier: 'iron'
    },
    'common_ore_library:platinum_ore': {
      drop: 'common_ore_library:raw_platinum',
      minTier: 'diamond'
    },
    'common_ore_library:iridium_ore': {
      drop: 'common_ore_library:raw_iridium',
      minTier: 'diamond'
    },
    'common_ore_library:tungsten_ore': {
      drop: 'common_ore_library:raw_tungsten',
      minTier: 'diamond'
    }
  };

  const config = oreConfigs[block.id];

  const paxelTiers = {
    stone: ['mekanismtools:stone_paxel', 'mekanismtools:lapis_lazuli_paxel'],
    iron: ['mekanismtools:iron_paxel', 'mekanismtools:bronze_paxel', 'mekanismtools:osmium_paxel'],
    diamond: ['mekanismtools:diamond_paxel', 'mekanismtools:netherite_paxel', 'mekanismtools:refined_glowstone_paxel', 'mekanismtools:refined_obsidian_paxel', 'mekanismtools:steel_paxel']
  };

  function meetsTierRequirement(paxelId, requiredTier) {
    const tierOrder = ['stone', 'iron', 'diamond'];
    let foundTier = null;
    
    for (const [tier, items] of Object.entries(paxelTiers)) {
      if (items.includes(paxelId)) {
        foundTier = tier;
        break;
      }
    }
    
    if (!foundTier) return false;
    return tierOrder.indexOf(foundTier) >= tierOrder.indexOf(requiredTier);
  }
  
  const mainHand = player.mainHandItem;
  
  if (!meetsTierRequirement(mainHand.id, config.minTier)) return;
  
  const fortuneLevel = mainHand.enchantments.get('minecraft:fortune') || 0;
  
  let dropAmount = 1;
  const bonus = Math.floor(Math.random() * (fortuneLevel + 1));
  dropAmount += bonus;
  
  const ItemEntity = Java.loadClass('net.minecraft.world.entity.item.ItemEntity');
  const droppedItem = Item.of(config.drop, dropAmount);
  const itemEntity = new ItemEntity(level, block.x + 0.5, block.y + 0.5, block.z + 0.5, droppedItem);
  level.addFreshEntity(itemEntity);
});