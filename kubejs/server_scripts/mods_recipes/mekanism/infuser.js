ServerEvents.recipes((event) => {
  function infuse (
    event,
    chemicalInput,
    chemicalAmount,
    input,
    input_amount,
    output,
    output_count
  ) {
    event
      .custom({
        type: 'mekanism:metallurgic_infusing',
        chemicalInput: {
          amount: chemicalAmount,
          tag: chemicalInput,
        },
        itemInput: {
          amount: input_amount,
          ingredient: {
            item: input,
          },
        },
        output: {
          item: output,
          count: output_count,
        },
      })
      .id('mek_' + output.replace(/[:]/g, '_').toLowerCase());
  }

  infuse(
    event,
    'mekanism:redstone',
    90,
    'minecraft:iron_block',
    1,
    'evolvedmekanism:block_alloy_infused',
    1
  );
  
  infuse(
    event,
    'mekanism:diamond',
    180,
    'evolvedmekanism:block_alloy_infused',
    1,
    'evolvedmekanism:block_alloy_reinforced',
    1
  );

  infuse(
    event,
    'mekanism:refined_obsidian',
    360,
    'evolvedmekanism:block_alloy_reinforced',
    1,
    'evolvedmekanism:block_alloy_atomic',
    1
  );

  infuse(
    event,
    'evolvedmekanism:uranium',
    180,
    'evolvedmekanism:block_alloy_atomic',
    1,
    'evolvedmekanism:block_alloy_hypercharged',
    1
  );

  infuse(
    event,
    'evolvedmekanism:better_gold',
    180,
    'evolvedmekanism:block_alloy_subatomic',
    1,
    'evolvedmekanism:block_alloy_singular',
    1
  );

  infuse(
    event,
    'evolvedmekanism:plaslitherite',
    180,
    'evolvedmekanism:block_alloy_singular',
    1,
    'evolvedmekanism:block_alloy_exoversal',
    1
  );

  infuse(
    event,
    'mekanism_extras:radiance',
    360,
    'evolvedmekanism:block_alloy_atomic',
    1,
    'kubejs:radiance_alloy_block',
    1
  );

  infuse(
    event,
    'mekanism_extras:thermonuclear',
    1080,
    'kubejs:radiance_alloy_block',
    1,
    'kubejs:thermonuclear_alloy_block',
    1
  );

  infuse(
    event,
    'mekanism_extras:shining',
    1440,
    'kubejs:thermonuclear_alloy_block',
    1,
    'kubejs:shining_alloy_block',
    1
  );

  infuse(
    event,
    'mekanism_extras:spectrum',
    1800,
    'kubejs:shining_alloy_block',
    1,
    'kubejs:spectrum_alloy_block',
    1
  );
})