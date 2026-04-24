ServerEvents.recipes((event) => {
  //Tome of Knowledge
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCBCBCBA',
        'DEFGHGFED',
        'IJGKLKGJM',
        'NFKOPOKFQ',
        'IEPRSRPEM',
        'NFKOPOKFQ',
        'IJGKLKGJM',
        'DEFGHGFED',
        'ATUTUTUTA',
      ],
      key: {
        A: {
          item: 'mob_grinding_utils:tank_sink',
        },
        B: {
          item: 'cyclic:xpjuice_bucket',
        },
        C: {
          item: 'apotheosis:ender_library',
        },
        D: {
          item: 'enderio:xp_juice_bucket',
        },
        E: {
          item: 'projectexpansion:white_matter',
        },
        F: {
          item: 'avaritia:infinity_ingot',
        },
        G: {
          item: 'minecraft:popped_chorus_fruit',
        },
        H: {
          item: 'draconicevolution:chaotic_core',
        },
        I: {
          item: 'apotheosis:infused_hellshelf',
        },
        J: {
          item: 'megacells:cell_component_256m',
        },
        K: {
          item: 'projectexpansion:fading_matter',
        },
        L: {
          item: 'avaritia:crystal_matrix',
        },
        M: {
          item: 'apotheosis:infused_seashelf',
        },
        N: {
          item: 'expatternprovider:ex_molecular_assembler',
        },
        O: {
          item: 'tconstruct:clear_glass',
        },
        P: {
          item: 'bloodmagic:seersigil',
        },
        Q: {
          item: 'ae2:molecular_assembler',
        },
        R: {
          item: 'rftoolsdim:knowledge_holder',
        },
        S: {
          item: 'projecte:transmutation_tablet',
        },
        T: {
          item: 'mob_grinding_utils:fluid_xp_bucket',
        },
        U: {
          item: 'kubejs:infinity_11',
        },
      },
      result: {
        item: 'projecte:tome',
      },
    })
    .id('projecte:tome');
});
