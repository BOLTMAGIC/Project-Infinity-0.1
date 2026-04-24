const ids = [
  'botanypots:${color}_terracotta_botany_pot',
  'botanypots:${color}_terracotta_hopper_botany_pot',
  'botanypots:${color}_concrete_botany_pot',
  'botanypots:${color}_concrete_hopper_botany_pot',
  'botanypots:${color}_glazed_terracotta_botany_pot',
  'botanypots:${color}_glazed_terracotta_hopper_botany_pot',
  'botanypotstiers:elite_${color}_terracotta_botany_pot',
  'botanypotstiers:elite_${color}_terracotta_hopper_botany_pot',
  'botanypotstiers:elite_${color}_concrete_botany_pot',
  'botanypotstiers:elite_${color}_concrete_hopper_botany_pot',
  'botanypotstiers:elite_${color}_glazed_terracotta_botany_pot',
  'botanypotstiers:elite_${color}_glazed_terracotta_hopper_botany_pot',
  'botanypotstiers:ultra_${color}_terracotta_botany_pot',
  'botanypotstiers:ultra_${color}_terracotta_hopper_botany_pot',
  'botanypotstiers:ultra_${color}_concrete_botany_pot',
  'botanypotstiers:ultra_${color}_concrete_hopper_botany_pot',
  'botanypotstiers:ultra_${color}_glazed_terracotta_botany_pot',
  'botanypotstiers:ultra_${color}_glazed_terracotta_hopper_botany_pot',
  'botanypotstiers:creative_${color}_terracotta_botany_pot',
  'botanypotstiers:creative_${color}_terracotta_hopper_botany_pot',
  'botanypotstiers:creative_${color}_concrete_botany_pot',
  'botanypotstiers:creative_${color}_concrete_hopper_botany_pot',
  'botanypotstiers:creative_${color}_glazed_terracotta_botany_pot',
  'botanypotstiers:creative_${color}_glazed_terracotta_hopper_botany_pot',
];

ServerEvents.recipes((event) => {
  ids.forEach((id) => {
    Color.DYE.forEach((color) => {
      event.remove({ output: id.replace('${color}', color) });
    });
  });
});

ServerEvents.tags('item', (event) => {
  event.removeAll('botanypots:all_botany_pots');
});
