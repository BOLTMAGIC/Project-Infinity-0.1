priority: 1;
MMEvents.createProcesses((event) => {

  const addRecipe = (id, inputItems, inputFluids, outputItems, energy) => {
    if (!energy) energy = 160000;
    let count;
    let itemFluid;

    let recipe = event.create(id)
      .structureId('mm:auto_crusher_structure2')
      .ticks(4)
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

  addRecipe('mm:crushed_blackstone_recipe2', ['16x minecraft:blackstone'], ['1000x minecraft:water'], ['32x exdeorum:crushed_blackstone']);
  addRecipe('mm:crushed_netherrack_recipe2', ['16x minecraft:netherrack'], ['1000x minecraft:lava'], ['32x exdeorum:crushed_netherrack']);
  addRecipe('mm:gravel_recipe2', ['16x minecraft:cobblestone'], ['1000x minecraft:water'], ['32x minecraft:gravel']);
  addRecipe('mm:sand_recipe2', ['16x minecraft:gravel'], ['1000x minecraft:water'], ['32x minecraft:sand']);
  addRecipe('mm:dust_recipe2', ['16x minecraft:sand'], ['1000x minecraft:water'], ['32x exdeorum:dust']);
  addRecipe('mm:crushed_end_stone_recipe2', ['16x minecraft:end_stone'], ['1000x minecraft:lava'], ['32x exdeorum:crushed_end_stone']);
  addRecipe('mm:cobblestone_recipe22', false, ['32000x minecraft:water', '32000x minecraft:lava'], ['1024x minecraft:cobblestone'], 3200000);
  addRecipe('mm:blaze_gold_dust_recipe2', ['16x kubejs:blaze_gold_ingot'], false, ['16x kubejs:blaze_gold_dust']);
  addRecipe('mm:azure_silver_dust_recipe2', ['16x kubejs:azure_silver_ingot'], false, ['16x kubejs:azure_silver_dust']);
  addRecipe('mm:azure_electrum_dust_recipe2', ['16x kubejs:azure_electrum_ingot'], false, ['16x kubejs:azure_electrum_dust']);
  addRecipe('mm:ender_pearl_dust_recipe2', ['16x minecraft:ender_pearl'], false, ['16x thermal:ender_pearl_dust']);
  addRecipe('mm:grains_of_piezallity_recipe2', ['32x enderio:pulsating_crystal'], false, ['32x enderio:pulsating_powder']);
  addRecipe('mm:flux_dust_recipe2', ['32x minecraft:redstone', '1x minecraft:obsidian'], false, ['32x fluxnetworks:flux_dust'], 40000);

  //raw_eclipsealloy
  event
    .create('mm:raw_eclipsealloy_recipe2')
    .structureId('mm:auto_crusher_structure2')
    .ticks(4)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:netherite_block',
        count: 64,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'justdirethings:time_crystal',
        count: 8,
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
        amount: 160000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'justdirethings:raw_eclipsealloy',
        count: 256,
      },
    });
});
