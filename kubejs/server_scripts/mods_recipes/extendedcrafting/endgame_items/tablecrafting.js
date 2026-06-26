ServerEvents.recipes((event) => {
  //Elite Table
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: ['AABAA', 'ACDCA', 'EDFDE', 'ACDCA', 'AABAA'],
      key: {
        A: {
          item: 'extendedcrafting:elite_component',
        },
        B: {
          item: 'extendedcrafting:elite_catalyst',
        },
        C: {
          item: 'minecraft:netherite_ingot',
        },
        D: {
          item: 'rftoolsbase:infused_diamond',
        },
        E: {
          item: 'extendedcrafting:advanced_table',
        },
        F: {
          item: 'botania:dragonstone_block',
        },
      },
      result: {
        item: 'extendedcrafting:elite_table',
      },
    })
    .id('extendedcrafting:elite_table');

  //Ultimate Table
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AAABAAA',
        'ACCBCCA',
        'ACDEDCA',
        'BGEFGBB',
        'ACDEDCA',
        'ACCBCCA',
        'AAABAAA',
      ],
      key: {
        A: {
          item: 'extendedcrafting:ultimate_catalyst',
        },
        B: {
          item: 'enderio:vibrant_alloy_ingot',
        },
        C: {
          item: 'kubejs:starmetal_ingot',
        },
        D: {
          item: 'actuallyadditions:empowered_emeradic_crystal',
        },
        E: {
          item: 'actuallyadditions:empowered_void_crystal',
        },
        F: {
          item: 'bloodmagic:masterbloodorb',
        },
        G: {
          item: 'extendedcrafting:elite_table',
        },
      },
      result: {
        item: 'extendedcrafting:ultimate_table',
      },
    })
    .id('extendedcrafting:ultimate_table');

  //Epic Table
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCDEDCBA',
        'BFGGHIIFB',
        'CJKLLLKJC',
        'MNOPQPRNM',
        'ESXQTQXSE',
        'MUOPQPRUM',
        'CJVWWWVJC',
        'BFIIHGGFB',
        'ABCDEDCBA',
      ],
      key: {
        A: {
          item: 'extendedcrafting:redstone_component',
        },
        B: {
          item: 'extendedcrafting:enhanced_redstone_component',
        },
        C: {
          item: 'extendedcrafting:enhanced_ender_component',
        },
        D: {
          item: 'projecte:dark_matter_block',
        },
        E: {
          item: 'extendedcrafting:redstone_catalyst',
        },
        F: {
          item: 'extendedcrafting:ender_component',
        },
        G: {
          item: 'projectexpansion:purple_matter_block',
        },
        H: {
          item: 'powah:nitro_crystal_block',
        },
        I: {
          item: 'projectexpansion:pink_matter_block',
        },
        J: {
          item: 'projectexpansion:magenta_matter_block',
        },
        K: {
          item: 'actuallyadditions:empowered_enori_crystal_block',
        },
        L: {
          item: 'extendedcrafting:enhanced_redstone_catalyst',
        },
        M: {
          item: 'projecte:red_matter_block',
        },
        N: {
          item: 'actuallyadditions:empowered_restonia_crystal_block',
        },
        O: {
          item: 'extendedcrafting:crystaltine_catalyst',
        },
        P: {
          item: 'extendedcrafting:crystaltine_component',
        },
        Q: {
          item: 'mekanism:pellet_antimatter',
        },
        R: {
          item: 'extendedcrafting:ender_catalyst',
        },
        S: {
          item: 'actuallyadditions:empowered_diamatine_crystal_block',
        },
        T: {
          item: 'avaritia:endest_pearl',
        },
        U: {
          item: 'actuallyadditions:empowered_palis_crystal_block',
        },
        V: {
          item: 'actuallyadditions:empowered_void_crystal_block',
        },
        W: {
          item: 'extendedcrafting:enhanced_ender_catalyst',
        },
        X: {
          item: 'extendedcrafting:elite_table',
        },
      },
      result: {
        item: 'extendedcrafting:epic_table',
      },
    })
    .id('extendedcrafting:epic_table');

  // extendedcrafting:legendary_table
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCCCDCCCEF',
        'BCGHHIHHGCE',
        'CGHJKLKJHGC',
        'CHJMLNLOJHC',
        'CHKLNPNLKHC',
        'DILNQRQNLID',
        'CHKLNPNLKHC',
        'CHJOLNLMJHC',
        'CGHJKLKJHGC',
        'SCGHHIHHGCT',
        'USCCCDCCCTV',
      ],
      key: {
        A: {
          item: 'allthemodium:unobtainium_rod',
        },
        B: {
          item: 'woot_revived:diamond_shard',
        },
        C: {
          item: 'ifeu:dragon_star',
        },
        D: {
          item: 'botanicalextramachinery:aureate_dragonstone',
        },
        E: {
          item: 'bfr:solidified_waste',
        },
        F: {
          item: 'allthemodium:vibranium_rod',
        },
        G: {
          item: 'draconicevolution:awakened_draconium_ingot',
        },
        H: {
          item: 'justdirethings:time_crystal',
        },
        I: {
          item: 'kubejs:infinity_essence',
        },
        J: {
          item: 'justdirethings:blazegold_ingot',
        },
        K: {
          item: 'justdirethings:eclipsealloy_ingot',
        },
        L: {
          item: 'extendedcrafting:black_iron_slate',
        },
        M: {
          item: 'kubejs:ultimate_gem',
        },
        N: {
          item: 'extendedcrafting:enhanced_ender_component',
        },
        O: {
          item: 'avaritia:ultimate_stew',
        },
        P: {
          item: 'minecraft:netherite_block',
        },
        Q: {
          item: 'extendedcrafting:epic_table',
        },
        R: {
          item: 'extendedcrafting:enhanced_ender_catalyst',
        },
        S: {
          item: 'mekanism_extras:alloy_thermonuclear',
        },
        T: {
          item: 'extendedcrafting:crystaltine_ingot',
        },
        U: {
          item: 'allthemodium:piglich_heart',
        },
        V: {
          item: 'allthemodium:allthemodium_rod',
        },
      },
      result: {
        item: 'extendedcrafting:legendary_table',
      },
    })
    .id('extendedcrafting:legendary_table');
});
