BlockEvents.rightClicked('minecraft:grindstone', (event) => {
  const { item, player, hand} = event;

  if (hand !== 'MAIN_HAND') event.cancel();

  if(
    !item ||
    item.id != 'kubejs:extra_data_model_uncrafter' ||
    !item.nbt ||
    !item.nbt.data_model ||
    !item.nbt.data_model.ids
  )
  return;
  
  item.count = 0;

  // TODO : remove the blacklist in 0.0.51.0
  const blacklist = [
    'hostilenetworks:twilightforest/carminite_golem',
    'hostilenetworks:born_in_chaos/maggot',
    'hostilenetworks:cataclysm/deepling_warlock',
    'hostilenetworks:twilightforest/fire_beetle',
    'hostilenetworks:born_in_chaos/glutton_fish',
    'hostilenetworks:twilightforest/helmet_crab',
    'hostilenetworks:twilightforest/kobold',
    'hostilenetworks:twilightforest/raven',
    'hostilenetworks:born_in_chaos/restless_spirit',
    'hostilenetworks:born_in_chaos/spirit_guide',
    'hostilenetworks:the_outer_end/stalker',
    'hostilenetworks:twilightforest/towerwood_borer',
    'hostilenetworks:twilightforest/stable_ice_core',
    'hostilenetworks:twilightforest/winter_wolf',
    'hostilenetworks:twilightforest/wraith',
    'hostilenetworks:twilightforest/yeti'
  ];

  item.nbt.data_model.ids.forEach(mobID => {
      const str = mobID.toString();
      const mobIDString = str.slice(1, -1);
      if (!blacklist.includes(mobIDString)) {
        console.log(`Giving player data model for ${mobIDString}`);
        player.give(Item.of('hostilenetworks:data_model', `{data_model:{data:1254,id:"${mobIDString}"}}`));
      }
  });

  event.cancel();
});
