ServerEvents.recipes((event) => {
  //Crystaltine Ingot
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCDCEA',
        'DFGHGFD',
        'IJFFFJI',
        'DFGHGFD',
        'ABCDCEA',
        '       ',
        '       ',
      ],
      key: {
        A: {
          item: 'botania:mana_diamond',
        },
        B: {
          item: 'armorplus:infused_lava_crystal',
        },
        C: {
          item: 'occultism:iesnium_ingot',
        },
        D: {
          item: 'rftoolsbase:infused_diamond',
        },
        E: {
          item: 'armorplus:infused_frost_crystal',
        },
        F: {
          item: 'kubejs:crystalline_alloy',
        },
        G: {
          item: 'tconstruct:slimesteel_ingot',
        },
        H: {
          item: 'armorplus:infused_frost_lava_crystal',
        },
        I: {
          item: 'mekanism:crystal_osmium',
        },
        J: {
          item: 'ae2:fluix_crystal',
        },
      },
      result: {
        item: 'extendedcrafting:crystaltine_ingot',
      },
    })
    .id('extendedcrafting:crystaltine_ingot');
});
