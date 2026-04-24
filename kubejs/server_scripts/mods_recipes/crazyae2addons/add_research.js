ServerEvents.recipes((event) => {
  //Infinity 9 Block Research Data Drive
  event
    .custom({
      type: 'crazyae2addons:research',
      duration: 41472000,
      energy_per_tick: 500,
      gadget: true,
      consumables: [
        {
          item: 'crazyae2addons:super_singularity',
          count: 64,
          computation: 432,
        },
        {
          item: 'evolvedmekanism:block_better_gold',
          count: 64,
          computation: 594,
        },
        {
          item: 'evolvedmekanism:block_plaslitherite',
          count: 64,
          computation: 432,
        },
        { item: 'botania:terrasteel_block', count: 64, computation: 810 },
        {
          item: 'allthemodium:unobtainium_vibranium_alloy_block',
          count: 64,
          computation: 675,
        },
        { item: 'ae2:dense_energy_cell', count: 64, computation: 594 },
        { item: 'ae2:dense_energy_cell', count: 64, computation: 750 },
        { item: 'ae2:fluix_block', count: 64, computation: 432 },
      ],
      drive: true,
      unlock: {
        key: 'kubejs:infinity_9_block_research',
        label: 'Infinity 9',
        item: 'kubejs:infinity_9',
      },
    })
    .id('kubejs:ae2/crazy_recipe_add/infinity_9_block_drive');

  //Entity Ticker Research Data Drive
  event
    .custom({
      type: 'crazyae2addons:research',
      duration: 1206400,
      energy_per_tick: 500,
      gadget: true,
      consumables: [
        { item: 'botanicalextramachinery:aureate_ingot', count: 32, computation: 531 },
        { item: 'extendedcrafting:nether_star_block', count: 64, computation: 469 },
        { item: 'extendedcrafting:nether_star_block', count: 64, computation: 469 },
        { item: 'extendedcrafting:nether_star_block', count: 64, computation: 469 },
        { item: 'botanicalextramachinery:aureate_ingot', count: 32, computation: 531 },
        { item: 'extendedcrafting:nether_star_block', count: 64, computation: 469 },
        { item: 'extendedcrafting:nether_star_block', count: 64, computation: 469 },
        { item: 'extendedcrafting:nether_star_block', count: 64, computation: 469 },
      ],
      drive: true,
      unlock: {
        key: 'crazyae2addons:entity_ticker_research',
        label: 'Entity ticker',
        item: 'crazyae2addons:entity_ticker',
      },
    })
    .id('kubejs:ae2/crazy_recipe_add/entity_ticker_drive');
});
