ServerEvents.recipes((event) => {
  //Cosmic Meatballs
  event
    .custom({
      type: 'extendedcrafting:shapeless_table',
      ingredients: [
        'avaritia:neutron_pile',
        'avaritia:neutron_nugget',
        'minecraft:beef',
        'minecraft:cooked_beef',
        'minecraft:porkchop',
        'minecraft:cooked_porkchop',
        'minecraft:mutton',
        'minecraft:cooked_mutton',
        'minecraft:chicken',
        'minecraft:cooked_chicken',
        'minecraft:rabbit',
        'minecraft:cooked_rabbit',
        'minecraft:cod',
        'minecraft:cooked_cod',
        'minecraft:salmon',
        'minecraft:cooked_salmon',
        'twilightforest:raw_venison',
        'twilightforest:cooked_venison',
        'twilightforest:raw_meef',
        'twilightforest:cooked_meef',
        'exdeorum:silk_worm',
        'exdeorum:cooked_silk_worm',
        'twilightforest:torchberries',
        'twilightforest:hydra_chop',
        'twilightforest:magic_beans',
        'twilightforest:meef_stroganoff',
        'outer_end:stalker_meat',
        'outer_end:cooked_stalker_meat',
        'minecraft:rotten_flesh',
      ],
      result: { item: '8x avaritia:cosmic_meatballs' },
    })
    .id('avaritia:cosmic_meatballs');
});
