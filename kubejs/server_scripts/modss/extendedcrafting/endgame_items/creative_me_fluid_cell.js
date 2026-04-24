ServerEvents.recipes((event) => {
  //Creative ME Fluid Cell
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AABCDCBAA',
        'AEBFGFBEA',
        'BBBHIHBBB',
        'IGBJKJBGI',
        'DBIKLKIBD',
        'IGBJKJBGI',
        'BBBHIHBBB',
        'AEBFGFBEA',
        'AABCDCBAA',
      ],
      key: {
        A: {
          item: 'projectexpansion:fading_matter',
        },
        B: {
          item: 'kubejs:infinity_12',
        },
        C: {
          item: 'functionalstorage:creative_vending_upgrade',
        },
        D: {
          item: 'avaritia:endest_pearl',
        },
        E: {
          item: 'megacells:fluid_storage_cell_256m',
        },
        F: {
          item: 'pneumaticcraft:printed_circuit_board',
        },
        G: {
          item: 'evolvedmekanism:alloy_creative',
        },
        H: {
          item: 'avaritia:infinity_ingot',
        },
        I: {
          item: 'ironfurnaces:million_furnace',
        },
        J: {
          item: 'projecte:condenser_mk2',
        },
        K: {
          item: 'industrialforegoing:supreme_black_hole_tank',
        },
        L: {
          item: 'mekanism:creative_bin',
        },
      },
      result: {
        item: 'ae2:creative_fluid_cell',
      },
    })
    .id('ae2:creative_fluid_cell');
});
