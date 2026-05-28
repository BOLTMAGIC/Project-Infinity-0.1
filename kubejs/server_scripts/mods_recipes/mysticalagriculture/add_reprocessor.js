ServerEvents.recipes((event) => {
  function reprocessor (event, crop, item_input, item_output) {
    event
      .custom({
        "type": "mysticalagriculture:reprocessor",
        "conditions": [
          {
            "type": "mysticalagriculture:crop_enabled",
            "crop": crop
          }
        ],
        "input": {
          "item": item_input
        },
        "result": {
          "count": 2,
          "item": item_output
        }
      })
      .id('mysticalagriculture_' + item_output.replace(/[:]/g, '_').toLowerCase() + '_reprocessor');
  }

  const seeds = [
    'mysticalagriculture:basalt_seeds',
    'mysticalagriculture:marble_seeds',
    'mysticalagriculture:hepatizon_seeds',
    'mysticalagriculture:slimesteel_seeds',
    'mysticalagriculture:amethyst_bronze_seeds',
    'mysticalagriculture:menril_seeds',
  ]

  seeds.forEach((seed) => {
    const crop = seed.replace('_seeds', '');
    const item_output = seed.replace('seeds', 'essence');
    reprocessor(event, crop, seed, item_output);
  })
});
