ServerEvents.recipes((event) => {
  //Creative Jetpack
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        ' A     A ',
        'ABA   ABA',
        'CBCDEDCBC',
        'FBFGHGFBF',
        'IJIKLKIJI',
        'FBFGHGFBF',
        'CBCDMDCBC',
        'ABA   ABA',
        ' A     A ',
      ],
      key: {
        A: {
          type: 'forge:nbt',
          item: 'ironjetpacks:jetpack',
          count: 1,
          nbt: '{Energy:12000000,Id:\"ironjetpacks:steel\",Throttle:1.0d}',
        },
        B: {
          item: 'kubejs:infinity_12',
        },
        C: {
          type: 'forge:nbt',
          item: 'ironjetpacks:jetpack',
          count: 1,
          nbt: '{Energy:100000,Id:\"ironjetpacks:stone\",Throttle:1.0d}',
        },
        D: {
          item: 'evolvedmekanism:block_plaslitherite',
        },
        E: {
          type: 'forge:nbt',
          item: 'ironjetpacks:capacitor',
          count: 1,
          nbt: '{Id:\"ironjetpacks:creative\"}',
        },
        F: {
          type: 'forge:nbt',
          item: 'ironjetpacks:jetpack',
          count: 1,
          nbt: '{Energy:12000000,Id:\"ironjetpacks:invar\",Throttle:1.0d}',
        },
        G: {
          type: 'forge:nbt',
          item: 'ironjetpacks:jetpack',
          count: 1,
          nbt: '{Energy:48000000,Id:\"ironjetpacks:emerald\",Throttle:1.0d}',
        },
        H: {
          item: 'evolvedmekanism:creative_control_circuit',
        },
        I: {
          type: 'forge:nbt',
          item: 'ironjetpacks:jetpack',
          count: 1,
          nbt: '{Energy:1200000,Id:\"ironjetpacks:silver\",Throttle:1.0d}',
        },
        J: {
          type: 'forge:nbt',
          item: 'ironjetpacks:thruster',
          count: 1,
          nbt: '{Id:\"ironjetpacks:creative\"}',
        },
        K: {
          item: 'ironjetpacks:strap',
        },
        L: {
          item: 'better_angel_ring:angel_ring',
        },
        M: {
          type: 'forge:nbt',
          item: 'solarpanels:creative_energy_tablet',
          count: 1,
          nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:\"2000000000\"}]}}',
        },
      },
      result: {
        type: 'forge:nbt',
        item: 'ironjetpacks:jetpack',
        count: 1,
        nbt: '{Id:"ironjetpacks:creative",Throttle:1.0d}',
      },
    })
    .id('creative_jetpack');
});
