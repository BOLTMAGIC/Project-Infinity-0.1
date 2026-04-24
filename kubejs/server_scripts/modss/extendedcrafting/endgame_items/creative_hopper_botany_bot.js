ServerEvents.recipes((event) => {
  //Creative Hopper Botany Pot
  event.custom({
    type: 'extendedcrafting:shaped_table',
    pattern: ['A   A', 'ABCDA', 'AEFEA', 'AGHIA', 'AAAAA'],
    key: {
      A: {
        item: 'minecraft:terracotta',
      },
      B: {
        item: 'exdeorum:diamond_watering_can',
      },
      C: {
        item: 'minecraft:hopper',
      },
      D: {
        item: 'cyclic:soil',
      },
      E: {
        item: 'actuallyadditions:greenhouse_glass',
      },
      F: {
        item: 'botanypotstiers:ultra_terracotta_botany_pot',
      },
      G: {
        item: 'minecraft:water_bucket',
      },
      H: {
        item: 'kubejs:infinity_1',
      },
      I: {
        item: 'exdeorum:netherite_watering_can',
      },
    },
    result: {
      item: 'botanypotstiers:creative_terracotta_hopper_botany_pot',
    },
  });
});
