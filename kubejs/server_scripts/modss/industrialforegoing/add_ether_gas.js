//ether gas from piglich inside fluid laser
ServerEvents.recipes((event) => {
  event.custom({
  type: "industrialforegoing:laser_drill_fluid",
  catalyst: {
    item: "industrialforegoing:laser_lens11"
  },
  entity: "allthemodium:piglich",
  output: "{Amount:25,FluidName:\"industrialforegoing:ether_gas\"}",
  pointer: 0,
  rarity: [
    {
      blacklist: {},
      depth_max: 256,
      depth_min: 0,
      weight: 8,
      whitelist: {}
    }
  ]
  }).id('kubejs:industrialforegoing/laser_drill_fluid/ether_gas_piglich');
});