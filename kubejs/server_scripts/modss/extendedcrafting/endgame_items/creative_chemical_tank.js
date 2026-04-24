ServerEvents.recipes((event) => {
  //Creative Chemical Tank
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCDDEFGH',
        'IJDKLMNOB',
        'PNMMKKMDC',
        'QMKRSTMKD',
        'DUKVWVKXD',
        'DKMYZaKMb',
        'CDMKKMMNc',
        'BdNMeKDfg',
        'hijkDDCBl',
      ],
      key: {
        A: {
          type: 'forge:partial_nbt',
          item: 'mekanism:ultimate_chemical_tank',
          count: 1,
          nbt: '{mekData:{PigmentTanks:[{Tank:0b,stored:{amount:8192000L,pigmentName:\"mekanism:yellow\"}}]}}',
        },
        B: {
          item: 'evolvedmekanism:multiversal_chemical_tank',
        },
        C: {
          item: 'evolvedmekanism:alloy_creative',
        },
        D: {
          item: 'kubejs:infinity_12',
        },
        E: {
          type: 'forge:partial_nbt',
          item: 'mekanism:ultimate_chemical_tank',
          count: 1,
          nbt: '{mekData:{PigmentTanks:[{Tank:0b,stored:{amount:8192000L,pigmentName:\"mekanism:green\"}}]}}',
        },
        F: {
          type: 'forge:partial_nbt',
          item: 'mekanism:ultimate_chemical_tank',
          count: 1,
          nbt: '{mekData:{PigmentTanks:[{Tank:0b,stored:{amount:8192000L,pigmentName:\"mekanism:lime\"}}]}}',
        },
        G: {
          type: 'forge:partial_nbt',
          item: 'mekanism:ultimate_chemical_tank',
          count: 1,
          nbt: '{mekData:{PigmentTanks:[{Tank:0b,stored:{amount:8192000L,pigmentName:\"mekanism:cyan\"}}]}}',
        },
        H: {
          type: 'forge:partial_nbt',
          item: 'mekanism:ultimate_chemical_tank',
          count: 1,
          nbt: '{mekData:{PigmentTanks:[{Tank:0b,stored:{amount:8192000L,pigmentName:\"mekanism:light_blue\"}}]}}',
        },
        I: {
          type: 'forge:partial_nbt',
          item: 'mekanism:ultimate_chemical_tank',
          count: 1,
          nbt: '{mekData:{PigmentTanks:[{Tank:0b,stored:{amount:8192000L,pigmentName:\"mekanism:orange\"}}]}}',
        },
        J: {
          type: 'forge:partial_nbt',
          item: 'mekanism:ultimate_chemical_tank',
          count: 1,
          nbt: '{mekData:{GasTanks:[{Tank:0b,stored:{amount:8192000L,gasName:\"mekanism:chlorine\"}}]}}',
        },
        K: {
          item: 'avaritia:infinity_ingot',
        },
        L: {
          type: 'forge:partial_nbt',
          item: 'mekanism:ultimate_chemical_tank',
          count: 1,
          nbt: '{mekData:{GasTanks:[{Tank:0b,stored:{amount:8192000L,gasName:\"mekanism:fissile_fuel\"}}]}}',
        },
        M: {
          item: 'extendedcrafting:the_ultimate_ingot',
        },
        N: {
          item: 'evolvedmekanism:creative_control_circuit',
        },
        O: {
          type: 'forge:partial_nbt',
          item: 'mekanism:ultimate_chemical_tank',
          count: 1,
          nbt: '{mekData:{GasTanks:[{Tank:0b,stored:{amount:8192000L,gasName:\"mekanismgenerators:tritium\"}}]}}',
        },
        P: {
          type: 'forge:partial_nbt',
          item: 'mekanism:ultimate_chemical_tank',
          count: 1,
          nbt: '{mekData:{PigmentTanks:[{Tank:0b,stored:{amount:8192000L,pigmentName:\"mekanism:red\"}}]}}',
        },
        Q: {
          type: 'forge:partial_nbt',
          item: 'mekanism:ultimate_chemical_tank',
          count: 1,
          nbt: '{mekData:{PigmentTanks:[{Tank:0b,stored:{amount:8192000L,pigmentName:\"mekanism:brown\"}}]}}',
        },
        R: {
          type: 'forge:partial_nbt',
          item: 'evolvedmekanism:overclocked_chemical_tank',
          count: 1,
          nbt: '{mekData:{GasTanks:[{Tank:0b,stored:{amount:65536000L,gasName:\"mekanism:oxygen\"}}]}}',
        },
        S: {
          type: 'forge:partial_nbt',
          item: 'mekanism:advanced_chemical_tank',
          count: 1,
          nbt: '{mekData:{GasTanks:[{Tank:0b,stored:{amount:256000L,gasName:\"mekanism:antimatter\"}}]}}',
        },
        T: {
          type: 'forge:partial_nbt',
          item: 'evolvedmekanism:overclocked_chemical_tank',
          count: 1,
          nbt: '{mekData:{GasTanks:[{Tank:0b,stored:{amount:65536000L,gasName:\"mekanism:hydrogen\"}}]}}',
        },
        U: {
          type: 'forge:partial_nbt',
          item: 'mekanism:ultimate_chemical_tank',
          count: 1,
          nbt: '{mekData:{GasTanks:[{Tank:0b,stored:{amount:8192000L,gasName:\"mekanism:uranium_hexafluoride\"}}]}}',
        },
        V: {
          type: 'forge:partial_nbt',
          item: 'extendedcrafting:singularity',
          count: 1,
          nbt: '{Id:\"extendedcrafting:ingot_osmium\"}',
        },
        W: {
          item: 'avaritia:neutron_collector',
        },
        X: {
          type: 'forge:partial_nbt',
          item: 'mekanism:ultimate_chemical_tank',
          count: 1,
          nbt: '{mekData:{GasTanks:[{Tank:0b,stored:{amount:8192000L,gasName:\"mekanism:sulfuric_acid\"}}]}}',
        },
        Y: {
          type: 'forge:partial_nbt',
          item: 'mekanism:elite_chemical_tank',
          count: 1,
          nbt: '{mekData:{SlurryTanks:[{Tank:0b,stored:{amount:1024000L,slurryName:\"allthemodium:clean_allthemodium\"}}]}}',
        },
        Z: {
          type: 'forge:partial_nbt',
          item: 'mekanism:elite_chemical_tank',
          count: 1,
          nbt: '{mekData:{SlurryTanks:[{Tank:0b,stored:{amount:1024000L,slurryName:\"allthemodium:clean_unobtainium\"}}]}}',
        },
        a: {
          type: 'forge:partial_nbt',
          item: 'mekanism:elite_chemical_tank',
          count: 1,
          nbt: '{mekData:{SlurryTanks:[{Tank:0b,stored:{amount:1024000L,slurryName:\"allthemodium:clean_vibranium\"}}]}}',
        },
        b: {
          type: 'forge:partial_nbt',
          item: 'mekanism:ultimate_chemical_tank',
          count: 1,
          nbt: '{mekData:{PigmentTanks:[{Tank:0b,stored:{amount:8192000L,pigmentName:\"mekanism:blue\"}}]}}',
        },
        c: {
          type: 'forge:partial_nbt',
          item: 'mekanism:ultimate_chemical_tank',
          count: 1,
          nbt: '{mekData:{PigmentTanks:[{Tank:0b,stored:{amount:8192000L,pigmentName:\"mekanism:purple\"}}]}}',
        },
        d: {
          type: 'forge:partial_nbt',
          item: 'mekanism:ultimate_chemical_tank',
          count: 1,
          nbt: '{mekData:{GasTanks:[{Tank:0b,stored:{amount:8192000L,gasName:\"mekanismgenerators:deuterium\"}}]}}',
        },
        e: {
          type: 'forge:partial_nbt',
          item: 'mekanism:ultimate_chemical_tank',
          count: 1,
          nbt: '{mekData:{GasTanks:[{Tank:0b,stored:{amount:8192000L,gasName:\"mekanism:sulfur_trioxide\"}}]}}',
        },
        f: {
          type: 'forge:partial_nbt',
          item: 'mekanism:ultimate_chemical_tank',
          count: 1,
          nbt: '{mekData:{GasTanks:[{Tank:0b,stored:{amount:8192000L,gasName:\"mekanism:sodium\"}}]}}',
        },
        g: {
          type: 'forge:partial_nbt',
          item: 'mekanism:ultimate_chemical_tank',
          count: 1,
          nbt: '{mekData:{PigmentTanks:[{Tank:0b,stored:{amount:8192000L,pigmentName:\"mekanism:magenta\"}}]}}',
        },
        h: {
          type: 'forge:partial_nbt',
          item: 'mekanism:ultimate_chemical_tank',
          count: 1,
          nbt: '{mekData:{PigmentTanks:[{Tank:0b,stored:{amount:8192000L,pigmentName:\"mekanism:black\"}}]}}',
        },
        i: {
          type: 'forge:partial_nbt',
          item: 'mekanism:ultimate_chemical_tank',
          count: 1,
          nbt: '{mekData:{PigmentTanks:[{Tank:0b,stored:{amount:8192000L,pigmentName:\"mekanism:gray\"}}]}}',
        },
        j: {
          type: 'forge:partial_nbt',
          item: 'mekanism:ultimate_chemical_tank',
          count: 1,
          nbt: '{mekData:{PigmentTanks:[{Tank:0b,stored:{amount:8192000L,pigmentName:\"mekanism:light_gray\"}}]}}',
        },
        k: {
          type: 'forge:partial_nbt',
          item: 'mekanism:ultimate_chemical_tank',
          count: 1,
          nbt: '{mekData:{PigmentTanks:[{Tank:0b,stored:{amount:8192000L,pigmentName:\"mekanism:white\"}}]}}',
        },
        l: {
          type: 'forge:partial_nbt',
          item: 'mekanism:ultimate_chemical_tank',
          count: 1,
          nbt: '{mekData:{PigmentTanks:[{Tank:0b,stored:{amount:8192000L,pigmentName:\"mekanism:pink\"}}]}}',
        },
      },
      result: {
        item: 'mekanism:creative_chemical_tank',
      },
    })
    .id('mekanism:creative_chemical_tank');
});
