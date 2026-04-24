ServerEvents.recipes((event) => {
  //Dragon Egg Seeds
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AABBCBBAA',
        'AADDDDDAA',
        'BDEFEFEDB',
        'BDFGGGFDB',
        'CDEGHGEDC',
        'BDFGGGFDB',
        'BDEFEFEDB',
        'AADDDDDAA',
        'AABBCBBAA',
      ],
      key: {
        A: {
          item: 'mysticalagradditions:insanium_essence',
        },
        B: {
          item: 'extendedcrafting:enhanced_ender_ingot',
        },
        C: {
          item: 'mysticalagradditions:dragon_scale',
        },
        D: {
          item: 'armorplus:the_ultimate_material',
        },
        E: {
          item: 'avaritia:neutron_ingot',
        },
        F: {
          item: 'botania:dragonstone',
        },
        G: {
          item: 'minecraft:dragon_egg',
        },
        H: {
          item: 'kubejs:tier6_crafting_seed',
        },
      },
      result: {
        item: 'mysticalagriculture:dragon_egg_seeds',
      },
    })
    .id('mysticalagriculture:dragon_egg_seeds');
});
