BlockEvents.rightClicked((event) => {
  const { player, item, block, facing } = event;

  if (item.isEmpty() || !block || block.id !== 'mekanism:creative_bin') return;

  if (item.isBlock() && player.isCrouching()) return;

  // Items always banned
  // format: 'string'|/^regex$/
  const bannedItems = [
    'industrialforegoing:infinity_backpack', // uuid based item, can't filter with NBT

    /^sophisticatedbackpacks:(.*backpack.*)$/, // uuid based item, can't filter with NBT

    /^sophisticatedstorage:.*shulker_box.*$/, // uuid based item, can't filter with NBT

    'cyclic:crate', // dumb item that doesn't use NBT correctly

    /^refinedstorage:.*_storage_(disk|block)$/, // uuid based item, can't filter with NBT
  ];

  // check for bannedItems
  for (const banned of bannedItems) {
    if (matchesPattern(item.id, banned)) {
      player.tell(Text.red('§lBanned Item:§r'));
      player.tell(
        Text.white(
          item.getDisplayName().getString() +
            ' cannot be inserted into the Creative Bin'
        )
      );
      event.cancel();
      return;
    }
  }

  /* Commented because not used, conditionalBannedItems should already cover these cases and is more flexible, but can be re-added if needed
  // Items only banned if they have NBT data (for the items losing their NBT data when empty)
  // format: 'string'|/^regex$/
  const bannedIfHasNBT = [
  ];

  // check for bannedIfHasNBT
  if (item.hasNBT()) {
    for (const bannedPattern of bannedIfHasNBT) {
      if (matchesPattern(item.id, bannedPattern)) {
        player.tell(Text.red("§lBlocked:§r "));
        player.tell(Text.white(item.getDisplayName().getString() + " has NBT data and cannot be inserted"));
        event.cancel();
        return;
      }
    }
  }
  */

  // Items only banned if they have certain NBT data (like containing items/fluids) that don't reset when empty
  // format: { pattern: 'string'|/^regex$/, nbtPath: 'NBT.PATH', check: (value) => boolean evaluation }
  const conditionalBannedItems = [
    {
      pattern: /^minecraft:.*shulker_box$/,
      nbtPath: 'BlockEntityTag.Items',
      check: (value) => value && value.length > 0,
    },

    {
      pattern: /^industrialforegoing:.*_black_hole_unit$/,
      nbtPath: 'BlockEntityTag.stored',
      check: (value) => value && value !== 0,
    },
    {
      pattern: /^industrialforegoing:.*_black_hole_tank$/,
      nbtPath: 'BlockEntityTag.tank.Amount',
      check: (value) => value && value !== 0,
    },

    {
      pattern: 'thermal:satchel',
      nbtPath: 'ItemInv.ItemInv',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: 'occultism:satchel',
      nbtPath: 'Items',
      check: (value) => value && value.length > 0,
    },

    {
      pattern: /^functionalstorage:.*$/,
      nbtPath: 'Tile',
      check: (value) => value,
    },

    {
      pattern: /^sophisticatedstorage:(.*barrel.*|.*chest.*)$/,
      nbtPath: 'uuid',
      check: (value) => value,
    },

    {
      pattern: 'mekanism:cardboard_box',
      nbtPath: 'mekData',
      check: (value) => value,
    },

    { pattern: /^ae2:.*_cell_.*$/, nbtPath: 'keys', check: (value) => value },

    {
      pattern: /^ae2additions:.*_cell_.*$/,
      nbtPath: 'keys',
      check: (value) => value,
    },
    {
      pattern: /^ae2additions:disk.*k$/,
      nbtPath: 'diskuuid',
      check: (value) => value,
    },

    {
      pattern: /^ae2omnicells:.*$/,
      nbtPath: 'ae_universal_cell_types_usage',
      check: (value) => value,
    },

    { pattern: /^ae2things:.*$/, nbtPath: 'diskuuid', check: (value) => value },

    { pattern: /^appflux:fe.*$/, nbtPath: 'power', check: (value) => value },

    { pattern: /^appbot:mana.*$/, nbtPath: 'amount', check: (value) => value },

    {
      pattern: /^megacells:mana.*$/,
      nbtPath: 'amount',
      check: (value) => value,
    },
    {
      pattern: /^megacells:.*_storage_cell_.*$/,
      nbtPath: 'keys',
      check: (value) => value,
    },

    { pattern: /^crazyae2addons:.*/, nbtPath: 'keys', check: (value) => value },

    {
      pattern: 'mbtool:mbtool',
      nbtPath: 'Inventory.Items',
      check: (value) => value && value.length > 0,
    },

    {
      pattern: /^.*qio_drive_.*/,
      nbtPath: 'mekData.qioMetaCount',
      check: (value) => value,
    },
  ];

  // check for conditionalBannedItems
  let nbtValue;
  for (const conditionalItem of conditionalBannedItems) {
    if (matchesPattern(item.id, conditionalItem.pattern)) {
      nbtValue = getNbtValue(item.nbt, conditionalItem.nbtPath);
      if (conditionalItem.check(nbtValue)) {
        player.tell(Text.red('§lBlocked:§r '));
        player.tell(
          Text.white(
            item.getDisplayName().getString() +
              ' contains items/fluids and cannot be inserted.'
          )
        );
        player.tell(Text.white('Empty it and try again'));
        event.cancel();
        return;
      }
    }
  }
});

function matchesPattern(itemId, pattern) {
  if (typeof pattern === 'string') return itemId === pattern;
  if (pattern instanceof RegExp) return pattern.test(itemId);
  return false;
}

function getNbtValue(nbt, path) {
  var parts = path.split('.');
  var value = nbt;
  for (var i = 0; i < parts.length; i++) {
    if (value === null || value === undefined) return undefined;
    value = value[parts[i]];
  }
  return value;
}
