priority: 1;

const EF_TICKS2 = 200;
const EF_ENERGY2 = 10000000;
const EF_ETHER2 = 150;
const EF_ESSENCE2 = 256;

MMEvents.createProcesses((event) => {
  event
    .create('mm:flex_essence_t2')
    .structureId('mm:essenceforge_tier2_structure')
    .ticks(EF_TICKS2)
    .mode('flex')
    .input({
      type: 'mm:input/consume',
      ingredient: { type: 'mm:energy', amount: EF_ENERGY2 },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'industrialforegoing:ether_gas',
        amount: EF_ETHER2,
      },
    })
    .input({
      type: 'mm:input/flex',
      as: 'seed',
      ingredient: {
        type: 'mm:item',
        tag: 'mysticalagriculture:seeds',
        count: 1,
      },
      max_types: 6,
      chance: 0,
      max_tier: 5,
    })
    .flexOutput('seed', '(.+)_seeds', '{ns}:$1_essence', EF_ESSENCE2);

  event
    .create('mm:essenceforge_tier2_inferium_seed')
    .structureId('mm:essenceforge_tier2_structure')
    .ticks(100)
    .input({
      type: 'mm:input/consume',
      ingredient: { type: 'mm:energy', amount: 1000000000 },
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
        item: 'mysticalagriculture:awakened_supremium_block',
        count: 64,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'pneumaticcraft:memory_essence_bucket',
        count: 4,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'mob_grinding_utils:solid_xp_baby',
        count: 8,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'ifeu:liquid_dragon_breath',
        amount: 1000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'mysticalagriculture:awakened_supremium_essence',
        count: 1536,
      },
    });
});
