ServerEvents.recipes((event) => {
  shapeless(event, 'mob_grinding_utils:saw', ['kubejs:fake_mob_masher']);
  shapeless(event, 'kubejs:fake_mob_masher', ['mob_grinding_utils:saw']);
});
