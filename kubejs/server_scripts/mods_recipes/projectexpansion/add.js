ServerEvents.recipes((event) => {
  event
    .shaped(
      Item.of('projectexpansion:basic_collector'),
      ['ABA', 'ACA', 'ADA'],
      {
        A: 'minecraft:glowstone',
        B: 'minecraft:lime_stained_glass',
        C: 'projecte:aeternalis_fuel_block',
        D: 'projecte:transmutation_table',
      }
    )
    .keepIngredient('projecte:transmutation_table');
  
  create3x3(event, 'projectexpansion:basic_emc_link', [
    'projecte:low_covalence_dust',
    'projecte:medium_covalence_dust',
    'projecte:high_covalence_dust',
    'projecte:aeternalis_fuel',
    'projecte:alchemical_chest',
    'projecte:aeternalis_fuel',
    'projecte:high_covalence_dust',
    'projecte:medium_covalence_dust',
    'projecte:low_covalence_dust',
  ]);
});