ServerEvents.recipes((event) => {
  //Creative Capacitor
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCDCBA',
        'BEFGFEB',
        'EFFHFFE',
        'EIJHJIE',
        'EFFHFFE',
        'BEFGFEB',
        'ABCDCBA',
      ],
      key: {
        A: {
          item: 'mysticalagradditions:creative_essence',
        },
        B: {
          item: 'kubejs:infinity_11',
        },
        C: {
          item: 'mekanism:creative_energy_cube',
        },
        D: {
          item: 'solarpanels:creative_energy_tablet',
        },
        E: {
          item: 'kubejs:tyrian_steel_ingot',
        },
        F: {
          item: 'botanicalextramachinery:crimson_ingot',
        },
        G: {
          item: 'botanicalextramachinery:crimson_dragonstone_block',
        },
        H: {
          type: 'forge:nbt',
          item: 'ironjetpacks:cell',
          count: 1,
          nbt: '{Id:\"ironjetpacks:creative\"}',
        },
        I: {
          item: 'botanicalextramachinery:crimson_dragonstone',
        },
        J: {
          item: 'projectexpansion:magenta_matter',
        },
      },
      result: {
        type: 'forge:nbt',
        item: 'ironjetpacks:capacitor',
        count: 1,
        nbt: '{Id:"ironjetpacks:creative"}',
      },
    })
    .id('creative_capacitor_ironjetpacks');
});
