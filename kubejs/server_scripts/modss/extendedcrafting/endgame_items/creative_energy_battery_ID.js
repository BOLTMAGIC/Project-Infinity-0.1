ServerEvents.recipes((event) => {
  //Creative Energy Battery (Integrated Dynamics)
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCDEDFGH',
        'BICBDGFJG',
        'KCLMNMOFK',
        'CKKNNNKKF',
        'PBQRSRTGU',
        'VKKNNNKKW',
        'KVOMNMLWK',
        'BJVBDGWIG',
        'HBVDEDWGA',
      ],
      key: {
        A: {
          item: 'integratedtunnels:part_exporter_world_block',
        },
        B: {
          item: 'integrateddynamics:crystalized_menril_block',
        },
        C: {
          item: 'botanicalextramachinery:crystal_dragonstone_block',
        },
        D: {
          item: 'integratedtunnels:part_player_simulator',
        },
        E: {
          type: 'forge:nbt',
          item: 'solarpanels:creative_energy_tablet',
          count: 1,
          nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:\"2000000000\"}]}}',
        },
        F: {
          item: 'botanicalextramachinery:shadow_ingot_block',
        },
        G: {
          item: 'integratedterminals:chorus_glass',
        },
        H: {
          item: 'integratedtunnels:part_importer_world_block',
        },
        I: {
          item: 'integratedtunnels:part_exporter_world_energy',
        },
        J: {
          item: 'integratedtunnels:part_importer_world_item',
        },
        K: {
          item: 'kubejs:infinity_12',
        },
        L: {
          item: 'integratedtunnels:part_exporter_world_fluid',
        },
        M: {
          item: 'avaritia:infinity_ingot',
        },
        N: {
          item: 'extendedcrafting:the_ultimate_ingot',
        },
        O: {
          item: 'integratedtunnels:part_importer_world_fluid',
        },
        P: {
          type: 'forge:nbt',
          item: 'solarpanels:improved_energy_tablet',
          count: 1,
          nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:\"3000000\"}]}}',
        },
        Q: {
          type: 'forge:nbt',
          item: 'evolvedmekanism:quantum_fluid_tank',
          count: 1,
          nbt: '{mekData:{FluidTanks:[{Tank:0b,stored:{Amount:1024000,FluidName:\"integrateddynamics:menril_resin\"}}]}}',
        },
        R: {
          item: 'extendedcrafting:the_ultimate_block',
        },
        S: {
          item: 'avaritia:infinity',
        },
        T: {
          type: 'forge:nbt',
          item: 'evolvedmekanism:quantum_fluid_tank',
          count: 1,
          nbt: '{mekData:{FluidTanks:[{Tank:0b,stored:{Amount:1024000,FluidName:\"integrateddynamics:liquid_chorus\"}}]}}',
        },
        U: {
          type: 'forge:nbt',
          item: 'solarpanels:quantum_energy_tablet',
          count: 1,
          nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:\"9000000\"}]}}',
        },
        V: {
          item: 'botanicalextramachinery:crystal_ingot_block',
        },
        W: {
          item: 'botanicalextramachinery:shadow_dragonstone_block',
        },
      },
      result: {
        item: 'integrateddynamics:energy_battery_creative',
      },
    })
    .id('integrateddynamics:energy_battery_creative');
});
