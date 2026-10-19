priority: 1;

const EF_TICKS1 = 400;
const EF_ENERGY1 = 1000000;
const EF_ETHER1 = 100;
const EF_ESSENCE1 = 64;

MMEvents.createProcesses((event) => {
  event
    .create('mm:flex_essence_t1')
    .structureId('mm:essenceforge_tier1_structure')
    .ticks(EF_TICKS1)
    .mode('flex')
    .input({
      type: 'mm:input/consume',
      ingredient: { type: 'mm:energy', amount: EF_ENERGY1 },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'industrialforegoing:ether_gas',
        amount: EF_ETHER1,
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
      max_types: 3,
      chance: 0,
      max_tier: 4,
    })
    .flexOutput('seed', '(.+)_seeds', '{ns}:$1_essence', EF_ESSENCE1);
});
