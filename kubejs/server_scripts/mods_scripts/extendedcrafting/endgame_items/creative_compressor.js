ServerEvents.recipes((event) => {
  //Creative Compressor
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCDEDCBA',
        'BFGHIHJFB',
        'CGKLLLKMC',
        'DHNOPQRHD',
        'EINPSPRIE',
        'DHNQPORHD',
        'CMKTTTKUC',
        'BFJHIHUFB',
        'ABCDEDCBA',
      ],
      key: {
        A: {
          item: 'avaritia:infinity_ingot',
        },
        B: {
          item: 'avaritia:neutron_ingot',
        },
        C: {
          item: 'kubejs:ultimate_gem',
        },
        D: {
          item: 'extendedcrafting:the_ultimate_ingot',
        },
        E: {
          item: 'avaritia:infinity_catalyst',
        },
        F: {
          type: 'forge:nbt',
          item: 'extendedcrafting:singularity',
          count: 1,
          nbt: '{Id:"extendedcrafting:ingot_iron_compressed"}',
        },
        G: {
          item: 'pneumaticcraft:air_compressor',
        },
        H: {
          item: 'kubejs:infinity_12',
        },
        I: {
          item: 'avaritia:neutron_gear',
        },
        J: {
          item: 'kubejs:ultimate_prediction',
        },
        K: {
          item: 'pneumaticcraft:flux_compressor',
        },
        L: {
          item: 'pneumaticcraft:speed_upgrade',
        },
        M: {
          item: 'mysticalagradditions:creative_essence',
        },
        N: {
          item: 'pneumaticcraft:volume_upgrade',
        },
        O: {
          item: 'pneumaticcraft:advanced_liquid_compressor',
        },
        P: {
          item: 'pneumaticcraft:advanced_pressure_tube',
        },
        Q: {
          item: 'pneumaticcraft:advanced_air_compressor',
        },
        R: {
          item: 'pneumaticcraft:inventory_upgrade',
        },
        S: {
          item: 'pneumaticcraft:pneumatic_dynamo',
        },
        T: {
          item: 'pneumaticcraft:chunkloader_upgrade',
        },
        U: {
          item: 'pneumaticcraft:liquid_compressor',
        },
      },
      result: {
        item: 'pneumaticcraft:creative_compressor',
      },
    })
    .id('pneumaticcraft:creative_compressor');
});
