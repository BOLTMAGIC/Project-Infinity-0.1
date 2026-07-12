ServerEvents.recipes((event) => {
  event
    .custom({
      type: 'evolvedmekanism:alloying',
      extraInput: {
        amount: 2,
        ingredient: [
          {
            tag: 'forge:storage_blocks/diamond',
          },
          {
            tag: 'chipped:diamond_block',
          },
        ],
      },
      secondExtraInput: {
        amount: 1,
        ingredient: {
          item: 'ae2omnicells:netherite_scrap_block',
        },
      },
      mainInput: {
        amount: 2,
        ingredient: {
          item: 'minecraft:sculk',
        },
      },
      output: {
        item: 'thermal_extra:abyssal_block',
        count: 1,
      },
    })
    .id('kubejs:thermal_extra/abyssal_block');
});
