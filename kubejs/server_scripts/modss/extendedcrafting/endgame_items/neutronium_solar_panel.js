ServerEvents.recipes((event) => {
  //Neutronium Solar Panel
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABBBCBBBD',
        'BBEEFEEBB',
        'BEG H IEB',
        'BE JJJ EB',
        'KFHJLJHFM',
        'BE JJJ EB',
        'BEN H OEB',
        'BBEEFEEBB',
        'PBBBQBBBR',
      ],
      key: {
        A: {
          item: 'actuallyadditions:empowered_enori_crystal_block',
        },
        B: {
          item: 'avaritia:neutron_ingot',
        },
        C: {
          item: 'actuallyadditions:empowered_restonia_crystal_block',
        },
        D: {
          item: 'actuallyadditions:empowered_palis_crystal_block',
        },
        E: {
          item: 'avaritia:crystal_matrix_ingot',
        },
        F: {
          item: 'solarflux:sp_de.chaotic',
        },
        G: {
          item: 'botania:gaia_ingot',
        },
        H: {
          item: 'avaritia:neutron_nugget',
        },
        I: {
          item: 'kubejs:azure_electrum_ingot',
        },
        J: {
          item: 'avaritia:neutron_pile',
        },
        K: {
          item: 'actuallyadditions:empowered_diamatine_crystal_block',
        },
        L: {
          item: 'kubejs:infinity_6',
        },
        M: {
          item: 'actuallyadditions:empowered_void_crystal_block',
        },
        N: {
          item: 'kubejs:tyrian_steel_ingot',
        },
        O: {
          item: 'kubejs:azure_silver_ingot',
        },
        P: {
          item: 'mysticalexpansion:etherium_ingot',
        },
        Q: {
          item: 'mysticalexpansion:extremium_ingot',
        },
        R: {
          item: 'mysticalexpansion:divinium_ingot',
        },
      },
      result: {
        item: '2x solarflux:sp_avaritia.neutronium',
      },
    })
    .id('solarflux:sp_avaritia.neutronium');
});
