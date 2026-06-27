ServerEvents.recipes((event) => {
  event.custom({
    type: 'bloodmagic:altar',
    altarSyphon: 20000,
    consumptionRate: 2500,
    drainRate: 2500,
    input: {
      item: 'mysticalagriculture:awakened_supremium_ingot',
    },
    output: {
      item: 'kubejs:zahraanite',
    },
    upgradeLevel: 4,
  });

  event.custom({
    type: 'bloodmagic:altar',
    altarSyphon: 50000,
    consumptionRate: 10000,
    drainRate: 10000,
    input: {
      item: 'kubejs:infinity_3',
    },
    output: {
      item: 'kubejs:infinity_4',
    },
    upgradeLevel: 4,
  });

  event.custom({
    type: 'bloodmagic:altar',
    altarSyphon: 9000,
    consumptionRate: 90,
    drainRate: 90,
    input: {
      item: 'compressium:stone_1',
    },
    output: {
      item: 'kubejs:compressed_slate',
    },
    upgradeLevel: 1,
  });

  event.custom({
    type: 'bloodmagic:altar',
    altarSyphon: 81000,
    consumptionRate: 81000,
    drainRate: 81000,
    input: {
      item: 'compressium:stone_2',
    },
    output: {
      item: 'kubejs:double_compressed_slate',
    },
    upgradeLevel: 4,
  });
  //#region BMAddon
  event
    .custom({
      type: 'bloodmagic:altar',
      altarSyphon: 1000000,
      consumptionRate: 100000,
      drainRate: 1000000,
      input: {
        item: 'ae2:speed_card',
      },
      output: {
        item: 'bmaddon:blood_magic_speed_card',
      },
      upgradeLevel: 3,
    })
    .id('bmaddon:altar_speed_card');

  event
    .custom({
      type: 'bloodmagic:altar',
      altarSyphon: 500000,
      consumptionRate: 50000,
      drainRate: 500000,
      input: {
        item: 'ae2:capacity_card',
      },
      output: {
        item: 'bmaddon:blood_altar_parallel_card',
      },
      upgradeLevel: 2,
    })
    .id('bmaddon:altar_parallel_card');

  event
    .custom({
      type: 'bloodmagic:altar',
      altarSyphon: 200000,
      consumptionRate: 20000,
      drainRate: 200000,
      input: {
        item: 'bloodmagic:dungeon_metal',
      },
      output: {
        item: 'bmaddon:blood_altar_tier_card_2',
      },
      upgradeLevel: 2,
    })
    .id('bmaddon:altar_tier_card_2');

  event
    .custom({
      type: 'bloodmagic:altar',
      altarSyphon: 500000,
      consumptionRate: 50000,
      drainRate: 500000,
      input: {
        item: 'bmaddon:blood_altar_tier_card_2',
      },
      output: {
        item: 'bmaddon:blood_altar_tier_card_3',
      },
      upgradeLevel: 3,
    })
    .id('bmaddon:altar_tier_card_3');

  event
    .custom({
      type: 'bloodmagic:altar',
      altarSyphon: 1000000,
      consumptionRate: 100000,
      drainRate: 1000000,
      input: {
        item: 'bmaddon:blood_altar_tier_card_3',
      },
      output: {
        item: 'bmaddon:blood_altar_tier_card_4',
      },
      upgradeLevel: 4,
    })
    .id('bmaddon:altar_tier_card_4');

  event
    .custom({
      type: 'bloodmagic:altar',
      altarSyphon: 10000000,
      consumptionRate: 1000000,
      drainRate: 10000000,
      input: {
        item: 'bmaddon:blood_altar_tier_card_4',
      },
      output: {
        item: 'bmaddon:blood_altar_tier_card_5',
      },
      upgradeLevel: 4,
    })
    .id('bmaddon:altar_tier_card_5');

  event
    .custom({
      type: 'bloodmagic:altar',
      altarSyphon: 200000,
      consumptionRate: 20000,
      drainRate: 200000,
      input: {
        item: 'expatternprovider:ex_molecular_assembler',
      },
      output: {
        item: 'bmaddon:blood_altar_assembler',
      },
      upgradeLevel: 2,
    })
    .id('bmaddon:altar_assembler');
});
