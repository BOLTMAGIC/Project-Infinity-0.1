ServerEvents.recipes((event) => {
  //Creative Energy Panel
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AAAAAAA',
        'AAAAAAA',
        'EEEEEEE',
        'BBBBBBB',
        'CBDEDBC',
        'CFBDBFC',
        'CCGBGCC',
      ],
      key: {
        A: {
          item: 'kubejs:infinity_12',
        },
        B: {
          item: 'solarpanels:creative_solar_element',
        },
        C: {
          item: 'voidminers:rosarium_block',
        },
        D: {
          item: 'apotheosis:infused_breath',
        },
        E: {
          item: 'botania:corporea_index',
        },
        F: {
          item: 'pneumaticcraft:plastic_brick_magenta',
        },
        G: {
          item: 'solarpanels:creative_energy_tablet',
        },
        E: {
          item: 'solarpanels:photonic_solar_panel',
        },
      },
      result: {
        item: 'solarpanels:creative_solar_panel',
      },
    })
    .id('solarpanels:creative_solar_panel');
});
