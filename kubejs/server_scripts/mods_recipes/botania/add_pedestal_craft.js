ServerEvents.recipes((event) => {
  // Wither Aconite Mythic Botany
  function addWitherAconiteRecipe(dataValue) {
    const recipeId =
      dataValue === 1254
        ? 'mythicbotany:wither_aconite'
        : `mythicbotany:wither_aconite_${dataValue}`;
    event
      .custom({
        type: 'botania:petal_apothecary',
        ingredients: [
          {
            type: 'forge:partial_nbt',
            item: 'hostilenetworks:data_model',
            count: 1,
            nbt: `{data_model:{data:${dataValue},id:"hostilenetworks:wither"}}`,
          },
          { item: 'mythicbotany:exoblaze' },
          { item: 'botania:bubbell' },
          { item: 'botania:dandelifeon' },
          { item: 'botania:endoflame' },
          { item: 'botania:exoflame' },
          { item: 'botania:entropinnyum' },
          { item: 'botania:gourmaryllis' },
          { item: 'botania:fallen_kanade' },
          { item: 'botania:hopperhock' },
          { item: 'botania:heisei_dream' },
          { item: 'botania:hydroangeas' },
          { item: 'botania:loonium' },
          { item: 'botania:marimorphosis' },
          { item: 'botania:orechid_ignem' },
          { item: 'botania:orechid' },
        ],
        output: {
          item: 'mythicbotany:wither_aconite',
        },
        reagent: {
          tag: 'botania:seed_apothecary_reagent',
        },
      })
      .id(recipeId);
  }

  for (let data = 1254; data < 1272; data++) {
    addWitherAconiteRecipe(data);
  }
  //hydroangeas
  event
    .custom({
      type: 'botania:petal_apothecary',
      ingredients: [
        {
          tag: 'botania:petals/blue',
        },
        {
          tag: 'botania:petals/blue',
        },
        {
          tag: 'botania:petals/cyan',
        },
        {
          tag: 'botania:petals/cyan',
        },
        {
          item: 'minecraft:lapis_lazuli',
        },
      ],
      output: {
        item: 'botania:hydroangeas',
      },
      reagent: {
        tag: 'botania:seed_apothecary_reagent',
      },
    })
    .id('botania:hydroangeas');
  //pure daisy
  event
    .custom({
      type: 'botania:petal_apothecary',
      ingredients: [
        {
          tag: 'botania:petals/white',
        },
        {
          tag: 'botania:petals/white',
        },
        {
          tag: 'botania:petals/white',
        },
        {
          tag: 'botania:petals/white',
        },
        {
          item: 'minecraft:bone_meal',
        },
      ],
      output: {
        item: 'botania:pure_daisy',
      },
      reagent: {
        tag: 'botania:seed_apothecary_reagent',
      },
    })
    .id('botania:pure_daisy');
});
