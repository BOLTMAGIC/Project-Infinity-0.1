ServerEvents.recipes((event) => {
  shapeless(event, 'powah:battery_nitro', ['kubejs:empty_battery_nitro']);
  shapeless(event, 'kubejs:empty_battery_nitro', ['powah:battery_nitro']);
});