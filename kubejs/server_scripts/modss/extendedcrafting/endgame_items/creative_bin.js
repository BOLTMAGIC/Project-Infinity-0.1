ServerEvents.recipes((event) => {
  //Creative Bin
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCCBCCBA',
        'BEFGEGFEB',
        'CFHIIIJFC',
        'KGLMNMOGK',
        'BEMNPNMEB',
        'KGQMNMRGK',
        'CFSIIITFC',
        'BEFGEGFEB',
        'ABCCBCCBA',
      ],
      key: {
        A: {
          item: 'emextras:infinite_multiversal_control_circuit',
        },
        B: {
          item: 'avaritia:infinity',
        },
        C: {
          item: 'extendedcrafting:the_ultimate_block',
        },
        E: {
          item: 'botanicalextramachinery:crimson_dragonstone_block',
        },
        F: {
          item: 'avaritia:neutron',
        },
        G: {
          item: 'compressium:cobblestone_9',
        },
        H: {
          item: 'evolvedmekanism:overclocked_bin',
        },
        I: {
          item: 'mysticalagradditions:creative_essence',
        },
        J: {
          item: 'evolvedmekanism:quantum_bin',
        },
        K: {
          item: 'kubejs:infinity_12',
        },
        L: {
          item: 'botanicalmachinery:mana_battery_creative',
        },
        M: {
          item: 'evolvedmekanism:alloy_creative',
        },
        N: {
          item: 'draconicevolution:creative_op_capacitor',
        },
        O: {
          item: 'mekanism:creative_chemical_tank',
        },
        P: {
          item: 'kubejs:infinity_12',
        },
        Q: {
          item: 'mekanism:creative_fluid_tank',
        },
        R: {
          item: 'pneumaticcraft:creative_compressor',
        },
        S: {
          item: 'evolvedmekanism:multiversal_bin',
        },
        T: {
          item: 'evolvedmekanism:dense_bin',
        },
      },
      result: {
        item: 'mekanism:creative_bin',
      },
    })
    .id('mekanism:creative_bin');
});
