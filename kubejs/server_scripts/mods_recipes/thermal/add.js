ServerEvents.recipes((event) => {
  event
    .shapeless('thermal:steel_ingot', [
      'minecraft:iron_ingot',
      'minecraft:coal',
      'minecraft:coal',
      'minecraft:coal',
      'minecraft:coal',
      '#kubejs:hammers_with_durability',
    ])
    .damageIngredient('#kubejs:hammers_with_durability', 1);

  event
    .shapeless('thermal:steel_block', [
      'minecraft:iron_block',
      'minecraft:coal_block',
      'minecraft:coal_block',
      'minecraft:coal_block',
      'minecraft:coal_block',
      '#kubejs:hammers_with_no_durability',
    ])
    .keepIngredient('#kubejs:hammers_with_no_durability');
});

const getResultId = (result) => {
  const entry = result[0];
  const id = entry.fluid ?? entry.item;

  if (!id) {
    throw new Error(`Invalid result: ${JSON.stringify(entry)}`);
  }

  return id.split(':')[1];
};

const componentAssembly = (event, energy, ingredients, result) => {
  event
    .custom({
      type: 'thermal_extra:component_assembly',
      energy: energy,
      ingredients: ingredients,
      result: result,
    })
    .id(`component_assembly/${getResultId(result)}`);
};

ServerEvents.recipes((event) => {
  componentAssembly(
    event,
    500000,
    [
      { count: 1, item: 'molecularmanipulator:white_hole' },
      { count: 1, item: 'mekanism:pellet_antimatter' },
      { amount: 1000, fluid: 'advanced_ae:quantum_infusion_source' },
    ],
    [{ amount: 500, fluid: 'kubejs:neutronium_condensate_fluid' }]
  );
});
