ServerEvents.recipes((event) => {
  //Neutron Collector
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'UUZZZZZZZVV',
        'UABBBCBBBAV',
        'ZBDECCCEDBZ',
        'ZBFGHIHGFBZ',
        'ZBJHKKKHLBZ',
        'ZJJMNOPQLLZ',
        'ZBJHKKKHLBZ',
        'ZBFRHIHRFBZ',
        'ZBDESSSEDBZ',
        'WTBBBSBBBTX',
        'WWZZZZZZZXX',
      ],
      key: {
        A: {
          item: 'advancednetherite:netherite_emerald_block',
        },
        B: {
          item: 'actuallyadditions:empowered_enori_crystal_block',
        },
        C: {
          item: 'silentgems:rose_quartz_block',
        },
        D: {
          item: 'extendedcrafting:the_ultimate_ingot',
        },
        E: {
          item: 'draconicevolution:chaotic_core',
        },
        F: {
          item: 'draconicevolution:awakened_core',
        },
        G: {
          item: 'advancednetherite:netherite_iron_block',
        },
        H: {
          item: 'armorplus:compressed_infused_lava_crystal',
        },
        I: {
          item: 'minecraft:netherite_block',
        },
        J: {
          item: 'botania:red_quartz',
        },
        K: {
          item: 'minecraft:amethyst_cluster',
        },
        L: {
          item: 'botania:elf_quartz',
        },
        M: {
          item: 'cataclysm:ancient_metal_block',
        },
        N: {
          item: 'fluxnetworks:flux_block',
        },
        O: {
          item: 'cataclysm:enderite_block',
        },
        P: {
          item: 'cataclysm:witherite_block',
        },
        Q: {
          item: 'cataclysm:ignitium_block',
        },
        R: {
          item: 'advancednetherite:netherite_gold_block',
        },
        S: {
          item: 'botania:sunny_quartz',
        },
        T: {
          item: 'advancednetherite:netherite_diamond_block',
        },
        U: {
          item: 'botania:lavender_quartz',
        },
        V: {
          item: 'botania:blaze_quartz',
        },
        W: {
          item: 'minecraft:quartz_block',
        },
        X: {
          item: 'botania:mana_quartz',
        },
        Z: {
          item: 'projecte:dark_matter',
        },
      },
      result: {
        item: 'avaritia:neutron_collector',
      },
    })
    .id('avaritia:neutron_collector');
});
