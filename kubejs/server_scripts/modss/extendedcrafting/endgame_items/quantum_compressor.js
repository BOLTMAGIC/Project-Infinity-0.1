ServerEvents.recipes((event) => {
  //Quantum Compressor
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCCCBA',
        'BBDEDBB',
        'CDFGFDC',
        'CEHIHEC',
        'CDFHFDC',
        'BBDEDBB',
        'ABCCCBA',
      ],
      key: {
        A: {
          item: 'extendedcrafting:black_iron_ingot',
        },
        B: {
          item: 'extendedcrafting:elite_component',
        },
        C: {
          item: 'extendedcrafting:black_iron_slate',
        },
        D: {
          item: 'armorplus:ender_dragon_scale',
        },
        E: {
          item: 'kubejs:infinity_8',
        },
        F: {
          item: 'mekanism:ultimate_compressing_factory',
        },
        G: {
          item: 'pneumaticcraft:advanced_air_compressor',
        },
        H: {
          item: 'expatternprovider:ex_inscriber',
        },
        I: {
          item: 'extendedcrafting:frame',
        },
      },
      result: {
        item: 'extendedcrafting:compressor',
      },
    })
    .id('extendedcrafting:compressor');
});
