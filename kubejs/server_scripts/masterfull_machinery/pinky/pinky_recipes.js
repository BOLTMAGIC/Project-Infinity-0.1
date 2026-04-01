priority: 1;
MMEvents.createProcesses((event) => {
  //Pink Slime Fluid
  event
    .create('mm:pinky_recipe1')
    .structureId('mm:pinky_structure')
    .ticks(16)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:pink_dye',
        count: 16,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:iron_ingot',
        count: 16,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 16384,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'minecraft:water',
        amount: 16000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'industrialforegoing:pink_slime_ingot',
        count: 4,
      },
    });

  //Crimson Iron Ingot
  event
    .create('mm:pinky_recipe2')
    .structureId('mm:pinky_structure')
    .ticks(16)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:iron_ingot',
        count: 8,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 16384,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:redstone',
        count: 4,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'bloodmagic:life_essence_fluid',
        amount: 1000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:crimson_iron_ingot',
        count: 4,
      },
    });
});
