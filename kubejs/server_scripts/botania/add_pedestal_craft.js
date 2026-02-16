ServerEvents.recipes((event) => {
  //Wither Aconite Mythic Botany 1
  event
    .custom({
      type: 'botania:petal_apothecary',
      ingredients: [
        {
          type: 'forge:partial_nbt',
          item: 'hostilenetworks:data_model',
          count: 1,
          nbt: '{data_model:{data:1254,id:"hostilenetworks:wither"}}',
        },
        {
          item: 'mythicbotany:exoblaze',
        },
        {
          item: 'botania:bubbell',
        },
        {
          item: 'botania:dandelifeon',
        },
        {
          item: 'botania:endoflame',
        },
        {
          item: 'botania:exoflame',
        },
        {
          item: 'botania:entropinnyum',
        },
        {
          item: 'botania:gourmaryllis',
        },
        {
          item: 'botania:fallen_kanade',
        },
        {
          item: 'botania:hopperhock',
        },
        {
          item: 'botania:heisei_dream',
        },
        {
          item: 'botania:hydroangeas',
        },
        {
          item: 'botania:loonium',
        },
        {
          item: 'botania:marimorphosis',
        },
        {
          item: 'botania:orechid_ignem',
        },
        {
          item: 'botania:orechid',
        },
      ],
      output: {
        item: 'mythicbotany:wither_aconite',
      },
      reagent: {
        tag: 'botania:seed_apothecary_reagent',
      },
    })
    .id('mythicbotany:wither_aconite1');

      //Wither Aconite Mythic Botany 2
  event
    .custom({
      type: 'botania:petal_apothecary',
      ingredients: [
        {
          type: 'forge:partial_nbt',
          item: 'hostilenetworks:data_model',
          count: 1,
          nbt: '{data_model:{data:1255,id:"hostilenetworks:wither"}}',
        },
        {
          item: 'mythicbotany:exoblaze',
        },
        {
          item: 'botania:bubbell',
        },
        {
          item: 'botania:dandelifeon',
        },
        {
          item: 'botania:endoflame',
        },
        {
          item: 'botania:exoflame',
        },
        {
          item: 'botania:entropinnyum',
        },
        {
          item: 'botania:gourmaryllis',
        },
        {
          item: 'botania:fallen_kanade',
        },
        {
          item: 'botania:hopperhock',
        },
        {
          item: 'botania:heisei_dream',
        },
        {
          item: 'botania:hydroangeas',
        },
        {
          item: 'botania:loonium',
        },
        {
          item: 'botania:marimorphosis',
        },
        {
          item: 'botania:orechid_ignem',
        },
        {
          item: 'botania:orechid',
        },
      ],
      output: {
        item: 'mythicbotany:wither_aconite',
      },
      reagent: {
        tag: 'botania:seed_apothecary_reagent',
      },
    })
    .id('mythicbotany:wither_aconite2');
});
