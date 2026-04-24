ServerEvents.recipes((event) => {
  //Transmutation Table
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AABCDCBAA',
        'AAEFGFEAA',
        'BEHIGIHEB',
        'CFJKLKJFC',
        'DGGLMLGGD',
        'CFJKLKJFC',
        'BENIGINEB',
        'AAEFGFEAA',
        'AABCDCBAA',
      ],
      key: {
        A: {
          item: 'projecte:dm_furnace',
        },
        B: {
          item: 'evolvedmekanism:alloy_exoversal',
        },
        C: {
          item: 'compressium:sand_3',
        },
        D: {
          item: 'enderio:end_steel_block',
        },
        E: {
          item: 'kubejs:infinity_7',
        },
        F: {
          item: 'kubejs:empty_battery_nitro',
        },
        G: {
          item: 'mysticalagradditions:insanium_ingot',
        },
        H: {
          item: 'draconicevolution:awakened_crafting_injector',
        },
        I: {
          item: 'projectexpansion:pink_matter',
        },
        J: {
          item: 'projectexpansion:magenta_matter',
        },
        K: {
          item: 'mysticalagriculture:awakened_supremium_ingot',
        },
        L: {
          item: 'projectexpansion:purple_matter',
        },
        M: {
          item: 'projectexpansion:violet_matter_block',
        },
        N: {
          item: 'pneumaticcraft:printed_circuit_board',
        },
      },
      result: {
        item: 'projecte:transmutation_table',
      },
    })
    .id('projecte:transmutation_table');
});
