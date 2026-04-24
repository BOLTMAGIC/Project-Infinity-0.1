ServerEvents.recipes((event) => {
  //Infinity Ingot_8
  event
    .custom({
      type: 'draconicevolution:fusion_crafting',
      catalyst: {
        item: 'cataclysm:void_core',
      },
      ingredients: [
        {
          item: 'kubejs:infinity_7',
        },
        {
          item: 'kubejs:infinity_7',
        },
        {
          item: 'kubejs:infinity_7',
        },
        {
          item: 'kubejs:infinity_4',
        },
        {
          item: 'kubejs:infinity_5',
        },
        {
          item: 'kubejs:infinity_6',
        },
        {
          item: 'draconicevolution:medium_chaos_frag',
        },
        {
          item: 'bloodmagic:masterbloodorb',
        },
      ],
      result: {
        item: 'kubejs:infinity_8',
      },
      tier: 'CHAOTIC',
      total_energy: 128000000,
    })
    .id('kubejs:infinity_8')
    .keepIngredient('bloodmagic:masterbloodorb');

  //Unobtainium Ingot
  event
    .custom({
      type: 'draconicevolution:fusion_crafting',
      catalyst: {
        type: 'draconicevolution:ingredient_stack',
        count: 3,
        items: [
          {
            item: 'kubejs:starmetal_ingot',
          },
        ],
      },
      ingredients: [
        {
          item: 'allthemodium:vibranium_ingot',
        },
        {
          item: 'occultism:spirit_attuned_gem',
        },
        {
          item: 'thermal_extra:dragonsteel_ingot',
        },
        {
          item: 'botanicalextramachinery:saffron_dragonstone',
        },
        {
          item: 'mekanism:ultimate_control_circuit',
        },
        {
          item: 'mysticalexpansion:divinium_essence',
        },
        {
          item: 'mysticalexpansion:etherium_essence',
        },
        {
          item: 'mysticalexpansion:extremium_essence',
        },
        {
          item: 'draconicevolution:awakened_core',
        },
        {
          item: 'dimensionalpocketsii:dimensional_ingot_enhanced',
        },
      ],
      result: {
        item: 'allthemodium:unobtainium_ingot',
      },
      tier: 'WYVERN',
      total_energy: 50000000,
    })
    .id('allthemodium:unobtainium_ingot');
});
