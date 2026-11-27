ServerEvents.recipes((event) => {
  event
    .custom({
      type: 'enderio:slicing',
      energy: 10000,
      inputs: [
        {
          item: 'kubejs:infinity_5',
        },
        {
          item: 'allthemodium:unobtainium_ingot',
        },
        {
          item: 'kubejs:infinity_5',
        },
        {
          type: 'forge:partial_nbt',
          item: 'extendedcrafting:singularity',
          count: 1,
          nbt: '{Id:"extendedcrafting:lapis_lazuli"}',
        },
        {
          item: 'kubejs:infinity_5',
        },
        {
          type: 'forge:partial_nbt',
          item: 'extendedcrafting:singularity',
          count: 1,
          nbt: '{Id:"extendedcrafting:redstone_ingot"}',
        },
      ],
      output: {
        item: 'kubejs:infinity_6',
      },
    })
    .id('kubejs:infinity_6');
});
