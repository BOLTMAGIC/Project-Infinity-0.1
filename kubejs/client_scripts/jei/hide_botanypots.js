JEIEvents.hideItems((event) => {
  const colors = [
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray',
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black',
  ];
  const types = [
    '_terracotta_botany_pot',
    '_terracotta_hopper_botany_pot',
    '_concrete_botany_pot',
    '_concrete_hopper_botany_pot',
    '_glazed_terracotta_botany_pot',
    '_glazed_terracotta_hopper_botany_pot',
  ];
  colors.forEach((color) => {
    types.forEach((type) => {
      event.hide(`botanypots:${color}${type}`);
      event.hide(`botanypotstiers:elite_${color}${type}`);
      event.hide(`botanypotstiers:ultra_${color}${type}`);
      event.hide(`botanypotstiers:creative_${color}${type}`);
    });
  });
});
