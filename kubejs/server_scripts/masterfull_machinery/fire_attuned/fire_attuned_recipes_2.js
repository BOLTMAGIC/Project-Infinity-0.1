priority: 1;
MMEvents.createProcesses((event) => {
  //spirit attuned gem recipe2 @occultism
  event
    .create('mm:spirit_attuned_recipe2')
    .structureId('mm:fire_attuned_structure2')
    .ticks(1)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:diamond',
        count: 40,
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
        fluid: 'minecraft:lava',
        amount: 20000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'occultism:spirit_attuned_gem',
        count: 40,
      },
    });

  //Infused Lava Crystal
  event
    .create('mm:infused_lava_crystal_recipe2')
    .structureId('mm:fire_attuned_structure2')
    .ticks(1)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'armorplus:lava_crystal',
        count: 40,
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
        fluid: 'minecraft:lava',
        amount: 10000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'armorplus:infused_lava_crystal',
        count: 40,
      },
    });

  //Blood Magic Life Essence Craft
  event
    .create('mm:blood_recipe2')
    .structureId('mm:fire_attuned_structure2')
    .ticks(10)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'botania:terrasteel_ingot',
        count: 40,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 1000000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'bloodmagic:life_essence_fluid',
        amount: 200000,
      },
    });

  //lava
  event
    .create('mm:cobble_to_lava_recipe2')
    .structureId('mm:fire_attuned_structure2')
    .ticks(2)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:cobblestone',
        count: 640,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 100000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'minecraft:lava',
        amount: 160000,
      },
    });

  //ether gas
  event
    .create('mm:ether_gas_recipe2')
    .structureId('mm:fire_attuned_structure2')
    .ticks(2)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:nether_star',
        count: 160,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'allthemodium:piglich_heart',
        count: 40,
      },
    })
    .input({
      type: 'mm:input/consume',
      chance: 0.0,
      ingredient: {
        type: 'mm:item',
        item: 'industrialforegoing:machine_frame_supreme',
        count: 10,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 10000000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'industrialforegoing:ether_gas',
        amount: 10000,
      },
    });

  //liquid sculk matter
  event
    .create('mm:liquid_sculk_matter_recipe2')
    .structureId('mm:fire_attuned_structure2')
    .ticks(2)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:warden_heart',
        count: 160,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:echo_shard',
        count: 160,
      },
    })
    .input({
      type: 'mm:input/consume',
      chance: 0.0,
      ingredient: {
        type: 'mm:item',
        item: 'ifeu:dragon_star',
        count: 10,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 100000000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'ifeu:liquid_sculk_matter',
        amount: 10000,
      },
    });

  //liquid dragon breath
  event
    .create('mm:liquid_dragon_breath_recipe2')
    .structureId('mm:fire_attuned_structure2')
    .ticks(2)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:dragon_breath',
        count: 160,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'draconicevolution:dragon_heart',
        count: 160,
      },
    })
    .input({
      type: 'mm:input/consume',
      chance: 0.0,
      ingredient: {
        type: 'mm:item',
        item: 'ifeu:ultimate_machine_frame',
        count: 10,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 10000000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'ifeu:liquid_dragon_breath',
        amount: 10000,
      },
    });

  //Quantum Infusion
  event
    .create('mm:quantum_infusion_recipe2')
    .structureId('mm:fire_attuned_structure2')
    .ticks(2)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'advanced_ae:quantum_infused_dust',
        count: 64,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'minecraft:water',
        amount: 256000,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 5120000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'advanced_ae:quantum_infusion_source',
        amount: 16000,
      },
    });
});
