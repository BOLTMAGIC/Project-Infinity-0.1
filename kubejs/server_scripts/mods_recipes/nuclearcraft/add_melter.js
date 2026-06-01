ServerEvents.recipes((event) => {
  event
    .custom({
      type: 'nuclearcraft:melter',
      input: [
        {
          tag: 'forge:slimeballs',
        },
      ],
      outputFluids: [
        {
          amount: 250,
          tag: 'tconstruct:earth_slime',
        },
      ],
      powerModifier: 1.0,
      radiation: 1.0,
      timeModifier: 1.0,
    })
    .id('tconstruct:earth_slime');
});
