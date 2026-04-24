ServerEvents.recipes((event) => {
  //Philosophers Stone
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCDEDCFA',
        'GHIJKJLHM',
        'DNOPQROND',
        'CJSTUVWJC',
        'EXYZaZYXE',
        'CJbVUTcJC',
        'DNORQPOND',
        'MHdJKJeHG',
        'AFCDEDCBA',
      ],
      key: {
        A: {
          item: 'armorplus:infused_frost_lava_crystal',
        },
        B: {
          item: 'armorplus:lava_crystal',
        },
        C: {
          item: 'voidminers:rosarium',
        },
        D: {
          item: 'mysticalagriculture:supremium_ingot',
        },
        E: {
          item: 'mysticalexpansion:divinium_essence',
        },
        F: {
          item: 'armorplus:infused_lava_crystal',
        },
        G: {
          item: 'armorplus:frost_crystal',
        },
        H: {
          item: 'bosses_of_mass_destruction:soul_star',
        },
        I: {
          item: 'cataclysm:flame_eye',
        },
        J: {
          item: 'pneumaticcraft:plastic_brick_red',
        },
        K: {
          item: 'botania:black_hole_talisman',
        },
        L: {
          item: 'cataclysm:mech_eye',
        },
        M: {
          item: 'armorplus:infused_frost_crystal',
        },
        N: {
          item: 'twilightforest:fiery_tears',
        },
        O: {
          item: 'enderio:octadic_capacitor',
        },
        P: {
          item: 'botania:third_eye',
        },
        Q: {
          item: 'twilightforest:ur_ghast_trophy',
        },
        R: {
          item: 'minecraft:ender_eye',
        },
        S: {
          item: 'cataclysm:desert_eye',
        },
        T: {
          item: 'compressium:cobblestone_8',
        },
        U: {
          item: 'draconicevolution:wyvern_core',
        },
        V: {
          item: 'ae2:matter_ball',
        },
        W: {
          item: 'cataclysm:monstrous_eye',
        },
        X: {
          item: 'actuallyadditions:empowered_restonia_crystal',
        },
        Y: {
          item: 'minecraft:ghast_tear',
        },
        Z: {
          item: 'kubejs:zahraanite',
        },
        a: {
          item: 'extendedcrafting:ultimate_singularity',
        },
        b: {
          item: 'cataclysm:abyss_eye',
        },
        c: {
          item: 'cataclysm:void_eye',
        },
        d: {
          item: 'cataclysm:cursed_eye',
        },
        e: {
          item: 'bosses_of_mass_destruction:blazing_eye',
        },
      },
      result: {
        item: 'projecte:philosophers_stone',
      },
    })
    .id('projecte:philosophers_stone');
});
