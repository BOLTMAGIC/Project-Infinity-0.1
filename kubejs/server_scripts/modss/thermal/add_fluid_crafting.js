ServerEvents.recipes((event) => {
  //Crimson Iron Ingot
  event.custom({
    type: 'thermal:crystallizer',
    energy: 10000,
    ingredients: [
      {
        count: 8,
        item: 'minecraft:iron_ingot',
      },
      {
        count: 4,
        item: 'minecraft:redstone',
      },
      {
        amount: 1000,
        fluid: 'bloodmagic:life_essence_fluid',
      },
    ],
    result: [
      {
        count: 4,
        item: 'kubejs:crimson_iron_ingot',
      },
    ],
  });
});
