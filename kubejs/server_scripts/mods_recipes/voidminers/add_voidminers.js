ServerEvents.recipes((event) => {
  const dimensionMap = {
    1: 'minecraft:overworld',
    2: 'minecraft:the_nether',
    3: 'minecraft:the_end',
  };

  /**
   * @param {number} dimensionId - 1 = Overworld, 2 = Nether, 3 = End
   * @param {number} minTier
   * @param {string[]} items
   * @param {number} weight
   */
  function voidminerBatch (dimensionId, minTier, items, weight) {
    const dimension = dimensionMap[dimensionId];
    if (!dimension) return;

    items.forEach((item) => {
      event
        .custom({
          type: 'voidminers:miner',
          dimension: dimension,
          minTier: minTier,
          output: {
            item: item,
            weight: weight,
          },
        })
        .id(
          `voidminer_${item.replace(/[:]/g, '_')}_${dimension.split(':')[1]}`
        );
    });
  }

  function voidminerBatch2 (dimensionId, minTier, items, weight) {
    const dimension = dimensionMap[dimensionId];
    if (!dimension) return;

    items.forEach((item) => {
      event
        .custom({
          type: 'voidminers:miner',
          allowHigherTiers: false,
          dimension: dimension,
          minTier: minTier,
          output: {
            item: item,
            weight: weight,
          },
        })
        .id(
          `voidminer_${item.replace(/[:]/g, '_')}_${dimension.split(':')[1]}` +
            minTier
        );
    });
  }

  voidminerBatch(3, 8, ['minecraft:dragon_egg'], 0.1);

  const base = [
    'carnelian',
    'topaz',
    'citrine',
    'heliodor',
    'moldavite',
    'peridot',
    'turquoise',
    'kyanite',
    'iolite',
    'alexandrite',
    'ammolite',
    'rose_quartz',
    'black_diamond',
    'white_diamond',
  ];

  const endgame = [
    'kubejs:infinity_essence',
    'extendedcrafting:ultimate_singularity',
    'kubejs:ultimate_gem',
    'kubejs:ultimate_prediction',
    'kubejs:ultimate_heart',
    'avaritia:ultimate_stew',
    'avaritia:infinity_catalyst',
  ];

  const overworldOres = base.map((gem) => `silentgems:${gem}_ore`);
  const deepslateOres = base.map((gem) => `silentgems:deepslate_${gem}_ore`);
  const netherOres = base.map((gem) => `silentgems:${gem}_nether_ore`);
  const endOres = base.map((gem) => `silentgems:${gem}_end_ore`);

  for (let tier = 2; tier <= 8; tier++) {
    voidminerBatch2(1, tier, overworldOres, 8.0);
  }
  for (let tier = 4; tier <= 8; tier++) {
    voidminerBatch2(1, tier, deepslateOres, 6.0);
  }
  for (let tier = 3; tier <= 8; tier++) {
    voidminerBatch2(2, tier, ['mysticalagriculture:soulium_ore'], 10.0);
  }
  for (let tier = 3; tier <= 8; tier++) {
    voidminerBatch2(1, tier, ['mekanism:uranium_ore'], 10.0);
  }
  for (let tier = 5; tier <= 8; tier++) {
    voidminerBatch2(2, tier, netherOres, 4.0);
  }
  for (let tier = 5; tier <= 8; tier++) {
    voidminerBatch2(2, tier, ['bigreactors:benitoite_ore'], 10.0);
  }
  for (let tier = 7; tier <= 8; tier++) {
    voidminerBatch2(3, tier, endOres, 2.5);
  }
  // voidminerBatch2(1, 6, ['allthemodium:allthemodium_ore'], 0.005);
  // voidminerBatch2(1, 7, ['allthemodium:allthemodium_ore'], 0.01);
  // voidminerBatch2(1, 8, ['allthemodium:allthemodium_ore'], 0.03);
  // voidminerBatch2(2, 7, ['allthemodium:vibranium_ore'], 0.005);
  // voidminerBatch2(2, 8, ['allthemodium:vibranium_ore'], 0.01);
  // voidminerBatch2(3, 8, ['allthemodium:unobtainium_ore'], 0.005);
  // voidminerBatch2(3, 9, ['allthemodium:unobtainium_ore'], 0.1);
  voidminerBatch2(3, 9, ['minecraft:coal'], 999.0);
  voidminerBatch2(3, 8, ['voidminers:ultimate_stellar_core'], 0.5);
  endgame.forEach((item) => {
    voidminerBatch2(3, 9, [item], 0.00000001);
  });
  voidminerBatch(3, 7, ['mekanism_extras:end_naquadah_ore'], 1.0);
});
