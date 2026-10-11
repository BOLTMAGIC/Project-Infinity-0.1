priority: 1;
MMEvents.createProcesses((event) => {

  const addRecipe = (id, inputItems, inputFluids, outputItems, energy) => {
    if (!energy) energy = 640000;
    let count;
    let itemFluid;

    let recipe = event.create(id)
      .structureId('mm:auto_crusher_structure3')
      .ticks(1)
      .input({
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:energy',
          amount: energy
        }
      });
    
    if (inputItems) {
        inputItems.forEach(element => {
          count = element.split('x', 1);
          itemFluid = element.slice(element.indexOf('x') + 2);

          recipe.input({
            type: 'mm:input/consume',
            ingredient: {
              type: 'mm:item',
              item: itemFluid,
              count: count
            }
          });
      });
    }
    

    if (inputFluids) {
      inputFluids.forEach(element => {
        count = element.split('x', 1);
        itemFluid = element.slice(element.indexOf('x') + 2);

        recipe.input({
          type: 'mm:input/consume',
          ingredient: {
            type: 'mm:fluid',
            fluid: itemFluid,
            amount: count
          }
        });
      });
    }

    outputItems.forEach(element => {
      count = element.split('x', 1);
      itemFluid = element.slice(element.indexOf('x') + 2);

      recipe.output({
        type: 'mm:output/simple',
        ingredient: {
          type: 'mm:item',
          item: itemFluid,
          count: count
        }
      });
    });
  }

  addRecipe('mm:crushed_blackstone_recipe3', ['64x minecraft:blackstone'], ['4000x minecraft:water'], ['128x exdeorum:crushed_blackstone']);
  addRecipe('mm:crushed_netherrack_recipe3', ['64x minecraft:netherrack'], ['4000x minecraft:lava'], ['128x exdeorum:crushed_netherrack']);
  addRecipe('mm:gravel_recipe3', ['64x minecraft:cobblestone'], ['4000x minecraft:water'], ['128x minecraft:gravel']);
  addRecipe('mm:sand_recipe3', ['64x minecraft:gravel'], ['4000x minecraft:water'], ['128x minecraft:sand']);
  addRecipe('mm:dust_recipe3', ['64x minecraft:sand'], ['4000x minecraft:water'], ['128x exdeorum:dust']);
  addRecipe('mm:crushed_end_stone_recipe3', ['64x minecraft:end_stone'], ['4000x minecraft:lava'], ['128x exdeorum:crushed_end_stone']);
  addRecipe('mm:cobblestone_recipe23', false, ['64000x minecraft:water', '64000x minecraft:lava'], ['6144x minecraft:cobblestone'], 12800000);
  addRecipe('mm:blaze_gold_dust_recipe3', ['64x kubejs:blaze_gold_ingot'], false, ['64x kubejs:blaze_gold_dust']);
  addRecipe('mm:azure_silver_dust_recipe3', ['64x kubejs:azure_silver_ingot'], false, ['64x kubejs:azure_silver_dust']);
  addRecipe('mm:azure_electrum_dust_recipe3', ['64x kubejs:azure_electrum_ingot'], false, ['64x kubejs:azure_electrum_dust']);
  addRecipe('mm:ender_pearl_dust_recipe3', ['64x minecraft:ender_pearl'], false, ['64x thermal:ender_pearl_dust']);
  addRecipe('mm:grains_of_piezallity_recipe3', ['64x enderio:pulsating_crystal'], false, ['64x enderio:pulsating_powder']);
  addRecipe('mm:flux_dust_recipe3', ['64x minecraft:redstone', '1x minecraft:obsidian'], false, ['64x fluxnetworks:flux_dust'], 160000);

  //raw_eclipsealloy
  event
    .create('mm:raw_eclipsealloy_recipe3')
    .structureId('mm:auto_crusher_structure3')
    .ticks(1)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:netherite_block',
        count: 256,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'justdirethings:time_crystal',
        count: 16,
      },
    })
    .input({
      type: 'mm:input/consume',
      chance: 0.0,
      ingredient: {
        type: 'mm:item',
        item: 'justdirethings:gooblock_tier4',
        count: 1,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 640000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'justdirethings:raw_eclipsealloy',
        count: 1024,
      },
    });
});
