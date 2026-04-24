//String Mesh --> Dirt
ServerEvents.recipes((event) => {
  const drops = {
    'minecraft:potato': 0.15,
    'minecraft:carrot': 0.15,
    'minecraft:wheat_seeds': 0.25,
    'minecraft:cocoa_beans': 0.25,
    'minecraft:pumpkin_seeds': 0.25,
    'minecraft:melon_seeds': 0.25,
    'minecraft:beetroot_seeds': 0.25,
    'minecraft:bamboo': 0.25,
    'minecraft:sugar_cane': 0.25,
    'minecraft:kelp': 0.25,
    'minecraft:golden_carrot': 0.01,
    'minecraft:cactus': 0.25,
    'occultism:datura': 0.25,
    'exdeorum:mycelium_spores': 0.25,
    'exdeorum:grass_seeds': 0.25,
    'integrateddynamics:menril_sapling': 0.10,
  };

  Object.entries(drops).forEach(([drops, base_chance]) => {
    event.custom({
      type: 'exdeorum:sieve',
      ingredient: { item: 'minecraft:dirt' },
      mesh: `exdeorum:string_mesh`,
      result: drops,
      result_amount: {
        type: 'minecraft:binomial',
        n: 1.0,
        p: base_chance,
      },
    });
  });
});
