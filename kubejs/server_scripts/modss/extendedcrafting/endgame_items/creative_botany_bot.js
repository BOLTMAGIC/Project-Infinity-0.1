ServerEvents.recipes((event) => {
  //Creative Terracotta Botany Pot
  event.custom({
    type: 'extendedcrafting:shaped_table',
    pattern: ['A   A', 'AB CA', 'ADEDA', 'AFGHA', 'AAAAA'],
    key: {
      A: {
        item: 'minecraft:terracotta',
      },

      B: {
        item: 'exdeorum:diamond_watering_can',
      },
      C: {
        item: 'cyclic:soil',
      },
      D: {
        item: 'actuallyadditions:greenhouse_glass',
      },
      E: {
        item: 'botanypotstiers:ultra_terracotta_botany_pot',
      },
      F: {
        item: 'minecraft:water_bucket',
      },
      G: {
        item: 'kubejs:infinity_1',
      },
      H: {
        item: 'exdeorum:netherite_watering_can',
      },
    },
    result: {
      item: 'botanypotstiers:creative_terracotta_botany_pot',
    },
  });
});
