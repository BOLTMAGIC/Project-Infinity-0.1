priority: 1;
MMEvents.createProcesses((event) => {

  const addRecipe = (id, inputItems, inputFluids, outputItems, energy) => {
    if (!energy) energy = 10000;
    let count;
    let itemFluid;

    let recipe = event.create(id)
      .structureId('mm:auto_crusher_structure1')
      .ticks(8)
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

  addRecipe('mm:crushed_blackstone_recipe1', ['4x minecraft:blackstone'], ['250x minecraft:water'], ['8x exdeorum:crushed_blackstone']);
  addRecipe('mm:crushed_netherrack_recipe1', ['4x minecraft:netherrack'], ['250x minecraft:lava'], ['8x exdeorum:crushed_netherrack']);
  addRecipe('mm:gravel_recipe1', ['4x minecraft:cobblestone'], ['250x minecraft:water'], ['8x minecraft:gravel']);
  addRecipe('mm:sand_recipe1', ['4x minecraft:gravel'], ['250x minecraft:water'], ['8x minecraft:sand']);
  addRecipe('mm:dust_recipe1', ['4x minecraft:sand'], ['250x minecraft:water'], ['8x exdeorum:dust']);
  addRecipe('mm:crushed_end_stone_recipe1', ['4x minecraft:end_stone'], ['250x minecraft:lava'], ['8x exdeorum:crushed_end_stone']);
  addRecipe('mm:cobblestone_recipe21', false, ['16000x minecraft:water', '16000x minecraft:lava'], ['256x minecraft:cobblestone'], 100000);
  addRecipe('mm:blaze_gold_dust_recipe1', ['1x kubejs:blaze_gold_ingot'], false, ['1x kubejs:blaze_gold_dust']);
  addRecipe('mm:azure_silver_dust_recipe1', ['1x kubejs:azure_silver_ingot'], false, ['1x kubejs:azure_silver_dust']);
  addRecipe('mm:azure_electrum_dust_recipe1', ['1x kubejs:azure_electrum_ingot'], false, ['1x kubejs:azure_electrum_dust']);
  addRecipe('mm:ender_pearl_dust_recipe1', ['1x minecraft:ender_pearl'], false, ['1x thermal:ender_pearl_dust']);
  addRecipe('mm:grains_of_piezallity_recipe1', ['8x enderio:pulsating_crystal'], false, ['8x enderio:pulsating_powder']);
  addRecipe('mm:flux_dust_recipe1', ['4x minecraft:redstone', '1x minecraft:obsidian'], false, ['4x fluxnetworks:flux_dust']);

  //raw_eclipsealloy
  event
    .create('mm:raw_eclipsealloy_recipe1')
    .structureId('mm:auto_crusher_structure1')
    .ticks(8)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:netherite_block',
        count: 16,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'justdirethings:time_crystal',
        count: 4,
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
        amount: 40000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'justdirethings:raw_eclipsealloy',
        count: 64,
      },
    });
});
