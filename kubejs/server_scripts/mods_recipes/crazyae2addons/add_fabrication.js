ServerEvents.recipes((event) => {
  //Infinity 9 Block --> Ingot
  event
    .custom({
      type: 'crazyae2addons:fabrication',
      input: { item: 'kubejs:infinity_9_block' },
      input_count: 1,
      fluid_input: { fluid: 'ifeu:liquid_dragon_breath', amount: 500 },
      output: { item: 'kubejs:infinity_9', count: 1 },
      required_key: 'kubejs:infinity_9_block_research',
    })
    .id('kubejs:ae2/crazy_entropy_cradle/infinity_9_block_to_ingot');
});
