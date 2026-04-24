ServerEvents.recipes((event) => {
  // [input, output, count, includeMechanical]
  const ores = [
    ['kubejs:arcmetal_ore', 'kubejs:raw_arcmetal', 2, true],
    ['kubejs:solarmetal_ore', 'kubejs:raw_plasteel', 2, true],
    ['kubejs:plasteel_ore', 'kubejs:raw_solarmetal', 2, true],
    ['kubejs:voidmetal_ore', 'kubejs:raw_voidmetal', 2, true],
  ];

  function toSafeId(str) {
    return str.toLowerCase().replace(/:/g, '_');
  }

  function createCrushRecipe(type, idPrefix, input, output, count) {
    const safeId = toSafeId(output);
    event
      .custom({
        type: type,
        item: {
          item: input,
        },
        result: {
          items: [
            {
              item: {
                item: output,
                count: count,
              },
            },
          ],
        },
        duration: 40,
      })
      .id(`${idPrefix}${safeId}`);
  }

  // Rezepte generieren
  ores.forEach(([input, output, count, includeMechanical]) => {
    createCrushRecipe(
      'integrateddynamics:squeezer',
      'id_',
      input,
      output,
      count
    );
    if (includeMechanical) {
      createCrushRecipe(
        'integrateddynamics:mechanical_squeezer',
        'idm_',
        input,
        output,
        count
      );
    }
  });
});
