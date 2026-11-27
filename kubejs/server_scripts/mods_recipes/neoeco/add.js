ServerEvents.recipes((event) => {
  event
    .custom({
      type: 'neoecoae:large_integrated_working_station',
      inputItems: [
        {
          item: 'kubejs:arcmetal_ingot',
          count: 64,
        },
        {
          item: 'kubejs:voidmetal_ingot',
          count: 64,
        },
        {
          item: 'kubejs:solarmetal_ingot',
          count: 64,
        },
        {
          item: 'thermal_extra:raw_meat_ingot',
          count: 256,
        },
        {
          item: 'twilightforest:magic_beans',
          count: 32,
        },
        {
          item: 'thermal_extra:abyssal_ingot',
          count: 64,
        },
        {
          item: 'botania:manasteel_ingot',
          count: 256,
        },
        {
          item: 'neoecoae:crystal_matrix',
          count: 32,
        },
        {
          item: 'industrialforegoing:pink_slime_ingot',
          count: 256,
        },
      ],
      inputFluid: {
        fluid: 'allthemodium:soul_lava',
        amount: 16000,
      },
      itemOutput: {
        count: 64,
        item: 'kubejs:empty_ingot',
      },
      energy: 16384000,
    })
    .id('kubejs:empty_ingot');
});
