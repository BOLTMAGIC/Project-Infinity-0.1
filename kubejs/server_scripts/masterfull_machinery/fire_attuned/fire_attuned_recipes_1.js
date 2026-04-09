priority: 1;
MMEvents.createProcesses((event) => {
  //spirit attuned gem recipe1 @occultism
  event
    .create('mm:spirit_attuned_recipe1')
    .structureId('mm:fire_attuned_structure1')
    .ticks(4)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:diamond',
        count: 4,
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
        amount: 2000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'occultism:spirit_attuned_gem',
        count: 4,
      },
    });

  //Infused Lava Crystal
  event
    .create('mm:infused_lava_crystal_recipe1')
    .structureId('mm:fire_attuned_structure1')
    .ticks(4)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'armorplus:lava_crystal',
        count: 4,
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
        amount: 1000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'armorplus:infused_lava_crystal',
        count: 4,
      },
    });

  //Blood Magic Life Essence Craft
  event
    .create('mm:blood_recipe1')
    .structureId('mm:fire_attuned_structure1')
    .ticks(40)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'botania:terrasteel_ingot',
        count: 4,
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
        fluid: 'bloodmagic:life_essence_fluid',
        amount: 20000,
      },
    });

  //lava
  event
    .create('mm:cobble_to_lava_recipe1')
    .structureId('mm:fire_attuned_structure1')
    .ticks(8)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:cobblestone',
        count: 64,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 10000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'minecraft:lava',
        amount: 16000,
      },
    });

  //ether gas
  event
    .create('mm:ether_gas_recipe1')
    .structureId('mm:fire_attuned_structure1')
    .ticks(8)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:nether_star',
        count: 16,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'allthemodium:piglich_heart',
        count: 4,
      },
    })
    .input({
      type: 'mm:input/consume',
      chance: 0.0,
      ingredient: {
        type: 'mm:item',
        item: 'industrialforegoing:machine_frame_supreme',
        count: 1,
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
        fluid: 'industrialforegoing:ether_gas',
        amount: 1000,
      },
    });

  //liquid sculk matter
  event
    .create('mm:liquid_sculk_matter_recipe1')
    .structureId('mm:fire_attuned_structure1')
    .ticks(8)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:warden_heart',
        count: 16,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:echo_shard',
        count: 16,
      },
    })
    .input({
      type: 'mm:input/consume',
      chance: 0.0,
      ingredient: {
        type: 'mm:item',
        item: 'ifeu:dragon_star',
        count: 1,
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
        fluid: 'ifeu:liquid_sculk_matter',
        amount: 1000,
      },
    });

  //liquid dragon breath
  event
    .create('mm:liquid_dragon_breath_recipe1')
    .structureId('mm:fire_attuned_structure1')
    .ticks(8)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:dragon_breath',
        count: 16,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'draconicevolution:dragon_heart',
        count: 16,
      },
    })
    .input({
      type: 'mm:input/consume',
      chance: 0.0,
      ingredient: {
        type: 'mm:item',
        item: 'ifeu:ultimate_machine_frame',
        count: 1,
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
        fluid: 'ifeu:liquid_dragon_breath',
        amount: 1000,
      },
    });

  //Quantum Infusion
  event
    .create('mm:quantum_infusion_recipe1')
    .structureId('mm:fire_attuned_structure1')
    .ticks(8)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'advanced_ae:quantum_infused_dust',
        count: 16,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'minecraft:water',
        amount: 64000,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 320000,
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
