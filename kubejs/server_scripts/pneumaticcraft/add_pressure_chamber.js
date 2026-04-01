ServerEvents.recipes((event) => {
  // Global counter to track unique IDs
  let recipeCounter = new Map();

  // Make unique IDs for recipes by appending a counter if the base ID has already been used
  function getUniqueId(baseId) {
    if (!recipeCounter.has(baseId)) {
      recipeCounter.set(baseId, 0);
      return baseId;
    }
    const count = recipeCounter.get(baseId) + 1;
    recipeCounter.set(baseId, count);
    return `${baseId}_${count}`;
  }

  // For recipes with only one type of ingredient up to 64 
  function pressureChamberSimple(
    event,
    input_item,
    input_count,
    output_item,
    output_count,
    pressure
  ) {
    if (pressure === undefined) pressure = 4.0;

    const formattedInputs = [{
      type: 'pneumaticcraft:stacked_item',
      count: input_count,
      item: input_item
    }];

    const baseId = `${output_item.replace(/:/g, '_')}`;
    const uniqueId = getUniqueId(baseId);

    event.custom({
      type: 'pneumaticcraft:pressure_chamber',
      inputs: formattedInputs,
      pressure: pressure,
      results: [
        {
          item: output_item,
          count: output_count
        }
      ]
    }).id(uniqueId);
  }

  // For recipes that require multiple ingredients / multiple stacks of the same ingredient
  function pressureChamberMultiple(
    event,
    inputs,
    output_item,
    output_count,
    pressure
  ) {
    if (pressure === undefined) pressure = 4.0;

    const formattedInputs = inputs.map(input => ({
      type: 'pneumaticcraft:stacked_item',
      count: input.count,
      item: input.item
    }));

    const baseId = `${output_item.replace(/:/g, '_')}`;
    const uniqueId = getUniqueId(baseId);

    event.custom({
      type: 'pneumaticcraft:pressure_chamber',
      inputs: formattedInputs,
      pressure: pressure,
      results: [
        {
          item: output_item,
          count: output_count
        }
      ]
    }).id(uniqueId);
  }

  // Réinitialiser le compteur pour chaque nouveau chargement
  recipeCounter.clear();
  
  pressureChamberSimple(event, 'kubejs:infinity_4', 3, 'kubejs:infinity_5', 1);
  pressureChamberSimple(event, 'kubejs:infinity_4', 15, 'kubejs:infinity_5', 5);
  pressureChamberSimple(event, 'kubejs:infinity_4', 30, 'kubejs:infinity_5', 10);
  pressureChamberSimple(event, 'kubejs:infinity_4', 45, 'kubejs:infinity_5', 15);
  pressureChamberSimple(event, 'kubejs:infinity_4', 60, 'kubejs:infinity_5', 20);

  pressureChamberMultiple(event, [
    { count: 64, item: 'kubejs:infinity_4' },
    { count: 64, item: 'kubejs:infinity_4' }
  ], 'kubejs:infinity_5', 45);

  pressureChamberSimple(event, 'compressium:iron_1', 1, 'kubejs:double_compressed_iron_block', 1);
  pressureChamberSimple(event, 'compressium:iron_2', 1, 'kubejs:triple_compressed_iron_block', 1);

  pressureChamberMultiple(event, [
    { count: 8, item: 'extendedcrafting:basic_component' },
    { count: 2, item: 'extendedcrafting:basic_catalyst' },
    { count: 4, item: 'avaritia:double_compressed_crafting_table' },
    { count: 2, item: 'extendedcrafting:black_iron_slate' },
    { count: 4, item: 'extendedcrafting:advanced_component' },
    { count: 1, item: 'extendedcrafting:advanced_catalyst' },
    { count: 1, item: 'extendedcrafting:ender_ingot_block' },
    { count: 1, item: 'redstone_arsenal:flux_metal_block' }
  ], 'extendedcrafting:advanced_table', 1);
});