ServerEvents.recipes((event) => {
  //Nether Star
  event
    .custom({
      type: 'advanced_ae:reaction',
      energy: 200000,
      fluid: {
        fluidStack: {
          Amount: 50,
          FluidName: 'industrialforegoing:ether_gas',
        },
      },
      input_items: [
        {
          amount: 2,
          ingredient: {
            type: 'forge:nbt',
            item: 'hostilenetworks:prediction',
            count: 1,
            nbt: '{data_model:{id:"hostilenetworks:wither"}}',
          },
        },
        {
          amount: 1,
          ingredient: {
            item: 'powah:crystal_nitro',
          },
        },
      ],
      output: {
        '#': 16,
        '#c': 'ae2:i',
        id: 'minecraft:nether_star',
      },
    })
    .id('minecraft:nether_star_reaction_chamber');

  function reaction_chamber1 (event, item1, outputItem) {
    event
      .custom({
        type: 'advanced_ae:reaction',
        energy: 50000,
        fluid: {
          fluidStack: {
            Amount: 1000,
            FluidName: 'minecraft:water',
          },
        },
        input_items: [
          {
            amount: 4,
            ingredient: {
              item: item1,
            },
          },
          {
            amount: 4,
            ingredient: {
              item: 'expatternprovider:silicon_block',
            },
          },
          {
            amount: 4,
            ingredient: {
              item: 'minecraft:redstone_block',
            },
          },
        ],
        output: {
          '#': 36,
          '#c': 'ae2:i',
          id: outputItem,
        },
      })
      .id('reaction_chamber1' + outputItem.replace(/[:]/g, '_').toLowerCase());
  }

  function reaction_chamber2 (event, item1, outputItem) {
    event
      .custom({
        type: 'advanced_ae:reaction',
        energy: 200000,
        fluid: {
          fluidStack: {
            Amount: 1000,
            FluidName: 'minecraft:water',
          },
        },
        input_items: [
          {
            amount: 36,
            ingredient: {
              item: item1,
            },
          },
          {
            amount: 4,
            ingredient: {
              item: 'expatternprovider:silicon_block',
            },
          },
          {
            amount: 36,
            ingredient: {
              item: 'minecraft:redstone',
            },
          },
        ],
        output: {
          '#': 36,
          '#c': 'ae2:i',
          id: outputItem,
        },
      })
      .id('reaction_chamber2' + outputItem.replace(/[:]/g, '_').toLowerCase());
  }

    function reaction_chamber3 (event, item1, outputItem) {
    event
      .custom({
        type: 'advanced_ae:reaction',
        energy: 200000,
        fluid: {
          fluidStack: {
            Amount: 1000,
            FluidName: 'minecraft:water',
          },
        },
        input_items: [
          {
            amount: 9,
            ingredient: {
              item: item1,
            },
          },
          {
            amount: 4,
            ingredient: {
              item: 'expatternprovider:silicon_block',
            },
          },
          {
            amount: 4,
            ingredient: {
              item: 'minecraft:redstone_block',
            },
          },
        ],
        output: {
          '#': 36,
          '#c': 'ae2:i',
          id: outputItem,
        },
      })
      .id('reaction_chamber3' + outputItem.replace(/[:]/g, '_').toLowerCase());
  }

  reaction_chamber1(event, 'minecraft:gold_block', 'ae2:logic_processor');
  reaction_chamber3(event, 'ae2:quartz_block', 'ae2:calculation_processor');
  reaction_chamber1(event, 'ae2omnicells:ender_ingot_block', "ae2omnicells:omni_link_processor");
  reaction_chamber1(event, 'ae2omnicells:netherite_scrap_block', "ae2omnicells:complex_link_processor");
  reaction_chamber1(event, 'advanced_ae:quantum_alloy_block', "advanced_ae:quantum_processor");
  reaction_chamber1(
    event,
    'minecraft:diamond_block',
    'ae2:engineering_processor'
  );
  reaction_chamber1(
    event,
    'megacells:sky_steel_block',
    'megacells:accumulation_processor'
  );
  reaction_chamber2(
    event,
    'appflux:printed_energy_processor',
    'appflux:energy_processor'
  );

  event
    .custom({
      type: 'advanced_ae:reaction',
      energy: 200000,
      fluid: {
        fluidStack: {
          Amount: 1600,
          FluidName: 'advanced_ae:quantum_infusion_source',
        },
      },
      input_items: [
        {
          amount: 64,
          ingredient: {
            item: 'minecraft:copper_ingot',
          },
        },
        {
          amount: 64,
          ingredient: {
            item: 'advanced_ae:shattered_singularity',
          },
        },
        {
          amount: 7,
          ingredient: {
            item: 'ae2omnicells:singularity_block',
          },
        },
      ],
      output: {
        '#': 16,
        '#c': 'ae2:i',
        id: 'advanced_ae:quantum_alloy',
      },
    })
    .id('reaction_chamber3_advanced_ae_quantum_alloy');

  event
    .custom({
      type: 'advanced_ae:reaction',
      energy: 200000,
      fluid: {
        fluidStack: {
          Amount: 3200,
          FluidName: 'minecraft:lava',
        },
      },
      input_items: [
        {
          amount: 32,
          ingredient: {
            item: 'ae2:singularity',
          },
        },
        {
          amount: 64,
          ingredient: {
            tag: 'forge:dusts/ender_pearl',
          },
        },
        {
          amount: 64,
          ingredient: {
            item: 'ae2:sky_stone_block',
          },
        },
      ],
      output: {
        '#': 64,
        '#c': 'ae2:i',
        id: 'advanced_ae:shattered_singularity',
      },
    })
    .id('reaction_chamber3_advanced_ae_shattered_singularity');

  event
    .custom({
      type: 'advanced_ae:reaction',
      energy: 50000,
      fluid: {
        fluidStack: {
          Amount: 1000,
          FluidName: 'minecraft:water',
        },
      },
      input_items: [
        {
          amount: 64,
          ingredient: {
            item: 'appflux:charged_redstone',
          },
        },
      ],
      output: {
        '#': 64,
        '#c': 'ae2:i',
        id: 'appflux:printed_energy_processor',
      },
    })
    .id('reaction_chamber_appflux_printed_energy_processor');
});
