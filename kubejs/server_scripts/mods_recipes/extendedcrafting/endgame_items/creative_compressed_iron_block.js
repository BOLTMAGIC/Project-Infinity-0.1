ServerEvents.recipes((event) => {
  // Creative Compressed Iron Block
  event.custom({
    type: 'extendedcrafting:shaped_table',
    tier: 4,
    pattern: [
      'ABCDEFCBA',
      'BGHIJKHLB',
      'MHNOPONHM',
      'FKOONOOQD',
      'EJPNRNPJE',
      'DSOONOOKF',
      'MHNOPONHM',
      'BTHKJUHVB',
      'ABWFEDXBA'
    ],
    key: {
      A: { item: 'kubejs:empowered_super_block' },
      B: { item: 'kubejs:infinity_8' },
      C: { item: 'pneumaticcraft:thermal_lagging' },
      D: { item: 'pneumaticcraft:heat_pipe' },
      E: { item: 'pneumaticcraft:printed_circuit_board' },
      F: { item: 'pneumaticcraft:heat_sink' },
      G: { item: 'pneumaticcraft:solar_compressor' },
      H: { item: 'pneumaticcraft:advanced_pressure_tube' },
      I: {
        type: 'forge:nbt',
        item: 'pneumaticcraft:guard_drone',
        nbt: { 'pneumaticcraft:air': 120000 }
      },
      J: { item: 'nuclearcraft:supercold_ice_block' },
      K: { item: 'pneumaticcraft:lpg_bucket' },
      L: { item: 'pneumaticcraft:flux_compressor' },
      M: { item: 'projectexpansion:blue_matter' },
      N: { item: 'kubejs:triple_compressed_iron_block' },
      O: { item: 'pneumaticcraft:compressed_iron_block' },
      P: {
        type: 'forge:nbt',
        item: 'cyclic:charm_fire',
        nbt: { Damage: 0 }
      },
      Q: {
        type: 'forge:nbt',
        item: 'pneumaticcraft:harvesting_drone',
        nbt: { 'pneumaticcraft:air': 120000 }
      },
      R: {
        type: 'forge:nbt',
        item: 'extendedcrafting:singularity',
        nbt: { Id: 'extendedcrafting:ingot_iron_compressed' }
      },
      S: {
        type: 'forge:nbt',
        item: 'pneumaticcraft:collector_drone',
        nbt: { 'pneumaticcraft:air': 120000 }
      },
      T: { item: 'pneumaticcraft:advanced_liquid_compressor' },
      U: {
        type: 'forge:nbt',
        item: 'pneumaticcraft:logistics_drone',
        nbt: { 'pneumaticcraft:air': 120000 }
      },
      V: { item: 'pneumaticcraft:advanced_air_compressor' },
      W: {
        type: 'forge:nbt',
        item: 'expatternprovider:infinity_cell',
        nbt: { record: { '#c': 'ae2:f', id: 'minecraft:lava' } }
      },
      X: {
        type: 'forge:nbt',
        item: 'expatternprovider:infinity_cell',
        nbt: { record: { '#c': 'ae2:f', id: 'minecraft:water' } }
      }
    },
    result: {
      item: 'pneumaticcraft:creative_compressed_iron_block'
    }
  }).id('pneumaticcraft:creative_compressed_iron_block');
});