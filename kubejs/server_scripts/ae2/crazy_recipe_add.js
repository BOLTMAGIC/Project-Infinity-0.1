ServerEvents.recipes((event) => {
  //Infinity 9 Block
  event
    .custom({
      type: 'crazyae2addons:cradle',
      result_block: 'kubejs:infinity_9_block',
      preview_nbt: 'kubejs:infinity_9_structure.nbt',
      pattern: {
        symbols: {
          A: ['minecraft:crying_obsidian'],
          B: ['kubejs:empowered_super_block'],
          C: ['advancednetherite:netherite_diamond_block'],
          D: ['ae2omnicells:ender_ingot_block'],
          E: ['botanicalextramachinery:saffron_dragonstone_block'],
          F: ['advanced_ae:quantum_alloy_block'],
          G: ['ae2omnicells:singularity_block'],
          H: ['kubejs:infinity_8_block'],
        },
        layers: [
          ['A A A A A', 'A B B B A', 'A B B B A', 'A B B B A', 'A A A A A'],
          ['E E F E E', 'E E D E E', 'F D G D F', 'E E D E E', 'E E F E E'],
          ['C C F C C', 'C C D C C', 'F D H D F', 'C C D C C', 'C C F C C'],
          ['E E F E E', 'E E D E E', 'F D G D F', 'E E D E E', 'E E F E E'],
          ['A A A A A', 'A B B B A', 'A B B B A', 'A B B B A', 'A A A A A'],
        ],
      },
    })
    .id('kubejs:ae2/crazy_entropy_cradle/infinity_9_block');

  //Spawner Extractor Recipe
  event
    .custom({
      type: 'crazyae2addons:cradle',
      result_block: 'crazyae2addons:spawner_extractor_controller',
      preview_nbt: 'kubejs:spawner_extractor_recipe.nbt',
      pattern: {
        symbols: {
          A: ['crazyae2addons:spawner_extractor_wall'],
          B: ['minecraft:obsidian'],
          C: ['crazyae2addons:energy_storage_256m'],
          D: ['minecraft:iron_block'],
          E: ['extendedcrafting:nether_star_block'],
          F: ['botanicalextramachinery:saffron_dragonstone_block'],
          G: ['ae2:fluix_block'],
          H: ['voidminers:rosarium_block'],
        },
        layers: [
          ['A A A A A', 'A B B B A', 'A B C B A', 'A B B B A', 'A A A A A'],
          ['A B B B A', 'B D D D B', 'B D E D B', 'B D D D B', 'A B B B A'],
          ['A B C B A', 'B F G F B', 'C G H G C', 'B F G F B', 'A B C B A'],
          ['A B B B A', 'B D D D B', 'B D E D B', 'B D D D B', 'A B B B A'],
          ['A A A A A', 'A B B B A', 'A B C B A', 'A B B B A', 'A A A A A'],
        ],
      },
    })
    .id('kubejs:ae2/crazy_entropy_cradle/spawner_extractor_controller');
});

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

  //Infinity 9 Block Research Data Drive
  event
    .custom({
      type: 'crazyae2addons:research',
      duration: 1206400,
      energy_per_tick: 500,
      gadget: true,
      consumables: [
        { item: 'extendedcrafting:nether_star_block', count: 64, computation: 469 },
        { item: 'extendedcrafting:nether_star_block', count: 64, computation: 469 },
        { item: 'extendedcrafting:nether_star_block', count: 64, computation: 469 },
        { item: 'botanicalextramachinery:aureate_ingot', count: 32, computation: 531 },
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
