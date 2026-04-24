ServerEvents.recipes((event) => {
  shapeless(
    event,
    Item.of('gateways:gate_pearl', '{gateway:"gateways:emerald_grove_easy"}'),
    [
      'minecraft:ender_pearl',
      '#minecraft:flowers',
      '#minecraft:flowers',
      '#minecraft:flowers',
    ]
  );
});