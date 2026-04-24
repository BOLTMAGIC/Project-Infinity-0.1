ServerEvents.recipes((event) => {
  //Transmutation Table Hand
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AABCBCBAA',
        'AADEFEGAA',
        'HIJKLMNOH',
        'CJKPQPMNR',
        'SFLQTQLFS',
        'CUMPQPKVR',
        'HOUMLKVIH',
        'AAGEFEDAA',
        'AAWRWRWAA',
      ],
      key: {
        A: {
          item: 'projecte:red_matter_block',
        },
        B: {
          item: 'sophisticatedbackpacks:crafting_upgrade',
        },
        C: {
          item: 'projectexpansion:blue_matter',
        },
        D: {
          item: 'compressium:coal_2',
        },
        E: {
          item: 'botania:red_string',
        },
        F: {
          item: 'thermal:sulfur_block',
        },
        G: {
          item: 'compressium:endstone_1',
        },
        H: {
          item: 'pneumaticcraft:plastic_brick_purple',
        },
        I: {
          item: 'compressium:copper_2',
        },
        J: {
          item: 'bloodmagic:dislocationrune2',
        },
        K: {
          item: 'botania:rune_greed',
        },
        L: {
          item: 'pneumaticcraft:printed_circuit_board',
        },
        M: {
          item: 'botania:rune_pride',
        },
        N: {
          item: 'bloodmagic:selfsacrificerune2',
        },
        O: {
          item: 'cyclic:flint_block',
        },
        P: {
          item: 'extendedcrafting:the_ultimate_ingot',
        },
        Q: {
          item: 'projectexpansion:cyan_matter',
        },
        R: {
          item: 'projectexpansion:violet_matter',
        },
        S: {
          item: 'compressium:obsidian_5',
        },
        T: {
          item: 'projecte:transmutation_table',
        },
        U: {
          item: 'bloodmagic:speedrune2',
        },
        V: {
          item: 'bloodmagic:sacrificerune2',
        },
        W: {
          item: 'extendedcrafting:the_ultimate_catalyst',
        },
      },
      result: {
        item: 'projecte:transmutation_tablet',
      },
    })
    .id('projecte:transmutation_tablet');
});
