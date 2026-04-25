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
});
