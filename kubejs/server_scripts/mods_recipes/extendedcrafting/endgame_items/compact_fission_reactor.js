ServerEvents.recipes((event) => {
  //Compact Fission Reactor
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AAAAAAAAA',
        'BCBDBEBFB',
        'CBDBEBFBG',
        'HIJKLMNOP',
        'IHQRQRQPO',
        'HINSLTJOP',
        'UVWVWVWVU',
        'VWVWVWVWV',
        'XXXXXXXXX',
      ],
      key: {
        A: {
          item: 'mekanismgenerators:reactor_glass',
        },
        B: {
          item: 'mekanism:alloy_atomic',
        },
        C: {
          item: 'evolvedmekanism:alloy_singular',
        },
        D: {
          item: 'mekanism_extras:alloy_thermonuclear',
        },
        E: {
          item: 'mekanism_extras:alloy_shining',
        },
        F: {
          item: 'evolvedmekanism:alloy_subatomic',
        },
        G: {
          item: 'mekanism:pellet_antimatter',
        },
        H: {
          item: 'mekanism:alloy_infused',
        },
        I: {
          item: 'mekanism:alloy_reinforced',
        },
        J: {
          item: 'evolvedmekanism:alloy_exoversal',
        },
        K: {
          type: 'forge:partial_nbt',
          item: 'mekanism:basic_chemical_tank',
          count: 1,
          nbt: '{mekData:{InfusionTanks:[{Tank:0b,stored:{amount:64000L,infuseTypeName:"evolvedmekanism:plaslitherite"}}]}}',
        },
        L: {
          item: 'emextras:cosmic_dense_control_circuit',
        },
        M: {
          type: 'forge:partial_nbt',
          item: 'mekanism:basic_chemical_tank',
          count: 1,
          nbt: '{mekData:{GasTanks:[{Tank:0b,stored:{amount:64000L,gasName:"mekanism_extras:molten_thermonuclear"}}]}}',
        },
        N: {
          item: 'mekanism_extras:alloy_spectrum',
        },
        O: {
          item: 'mekanism_extras:alloy_radiance',
        },
        P: {
          item: 'evolvedmekanism:alloy_hypercharged',
        },
        Q: {
          item: 'emextras:infinite_multiversal_control_circuit',
        },
        R: {
          item: 'evolvedmekanism:multiversal_control_circuit',
        },
        S: {
          type: 'forge:partial_nbt',
          item: 'mekanism:basic_chemical_tank',
          count: 1,
          nbt: '{mekData:{GasTanks:[{Tank:0b,stored:{amount:64000L,gasName:"mekanism_extras:naquadah_hexafluoride"}}]}}',
        },
        T: {
          type: 'forge:partial_nbt',
          item: 'mekanism:basic_chemical_tank',
          count: 1,
          nbt: '{mekData:{InfusionTanks:[{Tank:0b,stored:{amount:64000L,infuseTypeName:"evolvedmekanism:better_gold"}}]}}',
        },
        U: {
          item: 'mekanismgenerators:control_rod_assembly',
        },
        V: {
          item: 'mekanism:pellet_polonium',
        },
        W: {
          item: 'mekanismgenerators:fission_fuel_assembly',
        },
        X: {
          item: 'mekanismgenerators:fission_reactor_casing',
        },
      },
      result: {
        item: 'compactmekanismmachines:compact_fission_reactor',
      },
    })
    .id('compactmekanismmachines:compact_fission_reactor');
});
