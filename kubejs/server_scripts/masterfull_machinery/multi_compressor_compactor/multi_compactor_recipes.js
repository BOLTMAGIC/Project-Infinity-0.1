// priority: 1;
function createCompactorRecipe(
  event,
  input,
  output,
  itemInputCount,
  extraInputs
) {
  extraInputs = extraInputs || [];

  var outputCount = Math.floor(itemInputCount / 4);
  var sanitizedOutput = output.replace(/:/g, '_');

  var builder = event
    .create('mm:multi_compactor_' + sanitizedOutput)
    .structureId('mm:multi_compactor_structure')
    .ticks(2)
    .input({
      type: 'mm:input/consume',
      ingredient: { type: 'mm:item', item: input, count: itemInputCount },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: { type: 'mm:energy', amount: 50000 },
    });

  extraInputs.forEach(function (inObj) {
    builder.input(inObj);
  });

  builder.output({
    type: 'mm:output/simple',
    ingredient: { type: 'mm:item', item: output, count: outputCount },
  });
}

MMEvents.createProcesses((event) => {
  createCompactorRecipe(
    event,
    'minecraft:coal',
    'projecte:alchemical_coal',
    256
  );
  createCompactorRecipe(
    event,
    'projecte:alchemical_coal',
    'projecte:mobius_fuel',
    256
  );
  createCompactorRecipe(
    event,
    'projecte:mobius_fuel',
    'projecte:aeternalis_fuel',
    256
  );
  createCompactorRecipe(
    event,
    'projecte:aeternalis_fuel',
    'projectexpansion:magenta_fuel',
    256
  );
  createCompactorRecipe(
    event,
    'projectexpansion:magenta_fuel',
    'projectexpansion:pink_fuel',
    256
  );
  createCompactorRecipe(
    event,
    'projectexpansion:pink_fuel',
    'projectexpansion:purple_fuel',
    128
  );
  createCompactorRecipe(
    event,
    'projectexpansion:purple_fuel',
    'projectexpansion:violet_fuel',
    128
  );
  createCompactorRecipe(
    event,
    'projectexpansion:violet_fuel',
    'projectexpansion:blue_fuel',
    128
  );
  createCompactorRecipe(
    event,
    'projectexpansion:blue_fuel',
    'projectexpansion:cyan_fuel',
    128
  );
  createCompactorRecipe(
    event,
    'projectexpansion:cyan_fuel',
    'projectexpansion:green_fuel',
    128
  );
  createCompactorRecipe(
    event,
    'projectexpansion:green_fuel',
    'projectexpansion:lime_fuel',
    64
  );
  createCompactorRecipe(
    event,
    'projectexpansion:lime_fuel',
    'projectexpansion:yellow_fuel',
    64
  );
  createCompactorRecipe(
    event,
    'projectexpansion:yellow_fuel',
    'projectexpansion:orange_fuel',
    64
  );
  createCompactorRecipe(
    event,
    'projectexpansion:orange_fuel',
    'projectexpansion:white_fuel',
    64
  );

  createCompactorRecipe(
    event,
    'mysticalagriculture:inferium_essence',
    'mysticalagriculture:prudentium_essence',
    256
  );
  createCompactorRecipe(
    event,
    'mysticalagriculture:prudentium_essence',
    'mysticalagriculture:tertium_essence',
    256
  );
  createCompactorRecipe(
    event,
    'mysticalagriculture:tertium_essence',
    'mysticalagriculture:imperium_essence',
    256
  );
  createCompactorRecipe(
    event,
    'mysticalagriculture:imperium_essence',
    'mysticalagriculture:supremium_essence',
    256
  );
  createCompactorRecipe(
    event,
    'mysticalagriculture:supremium_essence',
    'mysticalagriculture:awakened_supremium_essence',
    256,
    [
      {
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: 'mysticalagriculture:air_essence',
          count: 10,
        },
      },
      {
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: 'mysticalagriculture:earth_essence',
          count: 10,
        },
      },
      {
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: 'mysticalagriculture:water_essence',
          count: 10,
        },
      },
      {
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: 'mysticalagriculture:fire_essence',
          count: 10,
        },
      },
      {
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: 'mysticalagriculture:cognizant_dust',
          count: 4,
        },
      },
    ]
  );
  createCompactorRecipe(
    event,
    'mysticalagriculture:awakened_supremium_essence',
    'mysticalagradditions:insanium_essence',
    128
  );
  createCompactorRecipe(
    event,
    'mysticalagradditions:insanium_essence',
    'mysticalexpansion:extremium_essence',
    128
  );
  createCompactorRecipe(
    event,
    'mysticalexpansion:extremium_essence',
    'mysticalexpansion:etherium_essence',
    64
  );
  createCompactorRecipe(
    event,
    'mysticalexpansion:etherium_essence',
    'mysticalexpansion:divinium_essence',
    64
  );

  event
    .create('mm:coal_to_hellforged_parts')
    .structureId('mm:multi_compactor_structure')
    .ticks(1200)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'compressium:coal_2',
        count: 344064,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 2147483647,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'bloodmagic:hellforgedparts',
        count: 4,
      },
      chance: 0.133,
    });
});
