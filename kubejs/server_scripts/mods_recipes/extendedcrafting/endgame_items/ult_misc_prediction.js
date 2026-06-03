ServerEvents.recipes((event) => {
  //Ultimate Misc Prediction
  event
    .custom({
      type: 'extendedcrafting:shapeless_table',
      ingredients: [
        {
          type: 'forge:nbt',
          item: 'hostilenetworks:prediction',
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:thermal/basalz"}}',
        },
        {
          type: 'forge:nbt',
          item: 'hostilenetworks:prediction',
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:thermal/blitz"}}',
        },
        {
          type: 'forge:nbt',
          item: 'hostilenetworks:prediction',
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:thermal/blizz"}}',
        },
        {
          type: 'forge:nbt',
          item: 'hostilenetworks:prediction',
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:born_in_chaos/dark_vortex"}}',
        },
        {
          type: 'forge:nbt',
          item: 'hostilenetworks:prediction',
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:twilightforest/death_tome"}}',
        },
        {
          type: 'forge:nbt',
          item: 'hostilenetworks:prediction',
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:twilightforest/deer"}}',
        },
        {
          type: 'forge:nbt',
          item: 'hostilenetworks:prediction',
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:born_in_chaos/dire_hound_leader"}}',
        },
        {
          type: 'forge:nbt',
          item: 'hostilenetworks:prediction',
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:twilightforest/minotaur"}}',
        },
        {
          type: 'forge:nbt',
          item: 'hostilenetworks:prediction',
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:born_in_chaos/missioner"}}',
        },
        {
          type: 'forge:nbt',
          item: 'hostilenetworks:prediction',
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:twilightforest/redcap"}}',
        },
        {
          type: 'forge:nbt',
          item: 'hostilenetworks:prediction',
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:twilightforest/skeleton_druid"}}',
        },
        {
          type: 'forge:nbt',
          item: 'hostilenetworks:prediction',
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:twilightforest/troll"}}',
        },
        {
          type: 'forge:nbt',
          item: 'hostilenetworks:prediction',
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:twilightforest/giant"}}',
        },
        {
          type: 'forge:nbt',
          item: 'hostilenetworks:prediction',
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:twilightforest/goblin"}}',
        },
      ],
      result: {
        item: 'kubejs:ultimate_misc_prediction',
      },
    })
    .id('kubejs:ultimate_misc_prediction');
});
