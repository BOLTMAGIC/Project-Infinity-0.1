const EF_TICKS3 = 100;
const EF_ENERGY3 = 800000000;
const EF_ETHER3 = 250;
const EF_ETHER3_T6 = 500;
const EF_ESSENCE3 = 512;

MMEvents.createProcesses((event) => {
  const createEssenceProcess = (id, etherAmount) => {
    return event
      .create(id)
      .structureId('mm:essenceforge_tier3_structure')
      .ticks(EF_TICKS3)
      .mode('flex')
      .input({
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:energy',
          amount: EF_ENERGY3,
        },
      })
      .input({
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:fluid',
          fluid: 'industrialforegoing:ether_gas',
          amount: etherAmount,
        },
      });
  };

  createEssenceProcess('mm:flex_essence_t3', EF_ETHER3)
    .input({
      type: 'mm:input/flex',
      as: 'seed',
      ingredient: {
        type: 'mm:item',
        tag: 'mysticalagriculture:seeds',
        count: 1,
      },
      max_types: 5,
      chance: 0,
      max_tier: 5,
    })
    .flexOutput('seed', '(.+)_seeds', '{ns}:$1_essence', EF_ESSENCE3);

  createEssenceProcess('mm:flex_essence_t3_t6', EF_ETHER3_T6)
    .parallelProcessing(true)
    .input({
      type: 'mm:input/flex',
      as: 't6',
      ingredient: {
        type: 'mm:item',
        tag: 'mysticalagriculture:seeds',
        count: 1,
      },
      chance: 0,
      min_tier: 6,
      max_tier: 6,
    })
    .flexMatch('t6', '{ma:crux}', 1, 0)
    .flexOutput('t6', '(.+)', '{ma:essence}', EF_ESSENCE3);

  event
    .create('mm:essenceforge_tier3_inferium_seed')
    .structureId('mm:essenceforge_tier3_structure')
    .ticks(EF_TICKS3)
    .input({
      type: 'mm:input/consume',
      ingredient: { type: 'mm:energy', amount: EF_ENERGY3 },
    })
    .input({
      type: 'mm:input/consume',
      chance: 0.0,
      ingredient: {
        type: 'mm:item',
        item: 'mysticalagriculture:inferium_seeds',
        count: 1,
      },
    })
    .input({
      type: 'mm:input/consume',
      chance: 0.0,
      ingredient: {
        type: 'mm:item',
        item: 'mysticalagradditions:insanium_block',
        count: 128,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'pneumaticcraft:memory_essence_bucket',
        count: 6,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'mob_grinding_utils:solid_xp_baby',
        count: 32,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'ifeu:liquid_dragon_breath',
        amount: 2500,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'mysticalagradditions:insanium_essence',
        count: 3072,
      },
    });
});
