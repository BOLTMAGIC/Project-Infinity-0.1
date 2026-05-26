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
    consumptionRate: 810,
    drainRate: 810,
    input: {
      item: 'compressium:stone_2',
    },
    output: {
      item: 'kubejs:double_compressed_slate',
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
  event.custom({
    type: 'bloodmagic:altar',
    altarSyphon: 100000,
    consumptionRate: 200,
    drainRate: 200,
    input: {
      item: 'ae2:speed_card',
    },
    output: {
      item: 'bmaddon:blood_magic_speed_card',
    },
    upgradeLevel: 3,
  });

  event.custom({
    type: 'bloodmagic:altar',
    altarSyphon: 50000,
    consumptionRate: 150,
    drainRate: 150,
    input: {
      item: 'ae2:capacity_card',
    },
    output: {
      item: 'bmaddon:blood_altar_parallel_card',
    },
    upgradeLevel: 2,
  });

  event.custom({
    type: 'bloodmagic:altar',
    altarSyphon: 20000,
    consumptionRate: 100,
    drainRate: 100,
    input: {
      item: 'bloodmagic:altarcapacityrune',
    },
    output: {
      item: 'bmaddon:blood_altar_tier_card_2',
    },
    upgradeLevel: 1,
  });

  event.custom({
    type: 'bloodmagic:altar',
    altarSyphon: 50000,
    consumptionRate: 150,
    drainRate: 150,
    input: {
      item: 'bmaddon:blood_altar_tier_card_2',
    },
    output: {
      item: 'bmaddon:blood_altar_tier_card_3',
    },
    upgradeLevel: 2,
  });

  event.custom({
    type: 'bloodmagic:altar',
    altarSyphon: 100000,
    consumptionRate: 200,
    drainRate: 200,
    input: {
      item: 'bmaddon:blood_altar_tier_card_3',
    },
    output: {
      item: 'bmaddon:blood_altar_tier_card_4',
    },
    upgradeLevel: 3,
  });

  event.custom({
    type: 'bloodmagic:altar',
    altarSyphon: 200000,
    consumptionRate: 250,
    drainRate: 250,
    input: {
      item: 'bmaddon:blood_altar_tier_card_4',
    },
    output: {
      item: 'bmaddon:blood_altar_tier_card_5',
    },
    upgradeLevel: 4,
  });

  event.custom({
    type: 'bloodmagic:altar',
    altarSyphon: 200000,
    consumptionRate: 500,
    drainRate: 500,
    input: {
      item: 'ae2:molecular_assembler',
    },
    output: {
      item: 'bmaddon:blood_altar_assembler',
    },
    upgradeLevel: 3,
  });
});
