//TO-DO "Add Souls to the recipes and the tanks dont have NBT";
ServerEvents.recipes((event) => {
  function ing (item, count) {
    return { ingredient: { item: item }, count: count };
  }

  function fluid (id, amount) {
    return { '#t': 'ae2:f', id: id, '#': amount };
  }

  function soul (amount) {
    return { '#t': 'industrialforegoingsouls:soul', '#': amount };
  }

  const baseItems = [
    ing('compressium:cobblestone_6', 1),
    ing('neoecoae:eco_item_cell_housing', 1),
    ing('industrialforegoing:supreme_black_hole_unit', 1),
    ing('insaneae2addons:super_singularity', 1),
    ing('ae2omnicells:quantum_omni_cell_component_256m', 3),
  ];

  const baseFluids = [
    fluid('insaneae2addons:research_fluid', 320000),
    fluid('advanced_ae:quantum_infusion_source', 320000),
  ];

  function addInfinityCell (index, cell) {
    const stage = index + 1;
    const researchId = `kubejs:infinity_cell_research/${cell.key}`;
    const recipeId = `kubejs:infinity_cell/${cell.key}`;

    const prerequisites =
      stage === 1
        ? ['molecularmanipulator:research/ae_foundation']
        : [`kubejs:infinity_cell_research/${cells[index - 1].key}`];

        console.info('AEINPUTS ' + cell.key + ': ' + JSON.stringify(baseFluids.concat(cell.souls || [])));

    event
      .custom({
        type: 'molecularmanipulator:matter_research',
        title: `Infinity Cell: ${cell.key}`,
        stage: stage,
        sort_order: 100 + stage,
        prerequisites: prerequisites,
        ingredients: [
          { ingredient: { item: 'ae2:fluix_crystal' }, count: 32 * stage },
        ],
        duration: 1200,
        ae_per_tick: 268435456,
        unlocks: [recipeId],
        depths: [
          { parallel: '1' },
          { material_multiplier: '2', parallel: '16' },
          { material_multiplier: '4', parallel: '256' },
          { material_multiplier: '8', parallel: '4096' },
          { material_multiplier: '16', parallel: '65536' },
          { material_multiplier: '32', parallel: '1048576' },
          { material_multiplier: '64', parallel: '16777216' },
          { material_multiplier: '128', parallel: '268435456' },
          { material_multiplier: '256', parallel: '9223372036854775807' },
        ],
      })
      .id(researchId);

    event
      .custom({
        type: 'molecularmanipulator:matter_fabrication',
        ingredients: baseItems.concat(
          cell.extra.map(function (e) {
            return ing(e.item, e.count);
          })
        ),
        aeinputs: baseFluids.concat(cell.souls || []),
        results: [
          {
            id: 'expatternprovider:infinity_cell',
            count: 1,
            nbt: `{record:{"#c":"ae2:${cell.type}",id:"${cell.recordId}"}}`,
          },
        ],
        processing_time: 1200,
        ae_per_tick: cell.aePerTick,
        requires_research: true,
      })
      .id(recipeId);
  }

  const cells = [
    // 1. Cobblestone Cell
    {
      key: 'cobblestone',
      type: 'i',
      recordId: 'minecraft:cobblestone',
      extra: [{ item: 'ae2omnicells:charged_ender_ingot', count: 256 }],
      aePerTick: 1024,
      souls: [soul(64)],
    },

    // 2. Water Cell
    {
      key: 'water',
      type: 'f',
      recordId: 'minecraft:water',
      extra: [
        { item: 'ae2:singularity', count: 128 },
        { item: 'advanced_ae:quantum_alloy_block', count: 64 },
        { item: 'industrialforegoing:pink_slime_ingot', count: 64 },
        { item: 'mekanism_extras:supreme_fluid_tank', count: 1 },
      ],
      aePerTick: 1024,
      souls: [soul(64)],
    },

    // 3. Water Cell
    {
      key: 'water_token',
      type: 'f',
      recordId: 'minecraft:water',
      extra: [
        { item: 'ae2:singularity', count: 128 },
        { item: 'advanced_ae:quantum_alloy_block', count: 64 },
        { item: 'industrialforegoing:pink_slime_ingot', count: 64 },
        { item: 'kubejs:fluid_tank_token', count: 1 },
      ],
      aePerTick: 1024,
      souls: [soul(64)],
    },

    // 4. Lava Cell
    {
      key: 'lava',
      type: 'f',
      recordId: 'minecraft:lava',
      extra: [
        { item: 'ae2:singularity', count: 128 },
        { item: 'advanced_ae:quantum_alloy_block', count: 64 },
        { item: 'industrialforegoing:pink_slime_ingot', count: 64 },
        { item: 'mekanism_extras:supreme_fluid_tank', count: 1 },
      ],
      aePerTick: 1024,
      souls: [soul(64)],
    },

    // 5. Lava Cell
    {
      key: 'lava_token',
      type: 'f',
      recordId: 'minecraft:lava',
      extra: [
        { item: 'ae2:singularity', count: 128 },
        { item: 'advanced_ae:quantum_alloy_block', count: 64 },
        { item: 'industrialforegoing:pink_slime_ingot', count: 64 },
        { item: 'kubejs:fluid_tank_token', count: 1 },
      ],
      aePerTick: 1024,
      souls: [soul(64)],
    },

    // 6. Gravel Cell
    {
      key: 'gravel',
      type: 'i',
      recordId: 'minecraft:gravel',
      extra: [
        { item: 'cyclic:flint_block', count: 128 },
        { item: 'botania:manasteel_block', count: 64 },
        { item: 'kubejs:radiance_alloy_block', count: 32 },
        { item: 'compressium:gravel_6', count: 1 },
      ],
      aePerTick: 2048,
      souls: [soul(64)],
    },

    // 7. Sand Cell
    {
      key: 'sand',
      type: 'i',
      recordId: 'minecraft:sand',
      extra: [
        { item: 'advanced_ae:quantum_alloy_block', count: 128 },
        { item: 'botania:manasteel_block', count: 64 },
        { item: 'armorplus:infused_frost_lava_crystal', count: 32 },
        { item: 'kubejs:radiance_alloy_block', count: 16 },
        { item: 'compressium:sand_6', count: 1 },
      ],
      aePerTick: 2048,
      souls: [soul(64)],
    },

    // 8. Dust Cell
    {
      key: 'dust',
      type: 'i',
      recordId: 'exdeorum:dust',
      extra: [
        { item: 'compressium:sand_4', count: 2 },
        { item: 'armorplus:lava_crystal', count: 256 },
        { item: 'twilightforest:uberous_soil', count: 8 },
        { item: 'kubejs:dust_6', count: 1 },
      ],
      aePerTick: 4096,
      souls: [soul(64)],
    },

    // 9. Dirt Cell
    {
      key: 'dirt',
      type: 'i',
      recordId: 'minecraft:dirt',
      extra: [
        { item: 'advanced_ae:quantum_alloy_block', count: 32 },
        { item: 'botania:manasteel_block', count: 16 },
        { item: 'mob_grinding_utils:delightful_dirt', count: 32 },
        { item: 'kubejs:radiance_alloy_block', count: 8 },
        { item: 'compressium:dirt_6', count: 1 },
      ],
      aePerTick: 4096,
      souls: [soul(64)],
    },

    // 10. Prosperity Shard Cell
    {
      key: 'prosperity_shard',
      type: 'i',
      recordId: 'mysticalagriculture:prosperity_shard',
      extra: [
        { item: 'mysticalagriculture:prosperity_ingot_block', count: 512 },
        { item: 'mysticalagriculture:fertilized_essence', count: 512 },
        { item: 'mysticalagriculture:inferium_essence', count: 256 },
        { item: 'mysticalagriculture:master_infusion_crystal', count: 1 },
      ],
      aePerTick: 8192,
      souls: [soul(64)],
    },

    // 11. Netherrack Cell
    {
      key: 'netherrack',
      type: 'i',
      recordId: 'minecraft:netherrack',
      extra: [
        { item: 'cataclysm:ignitium_block', count: 64 },
        { item: 'minecraft:netherite_block', count: 64 },
        { item: 'neoecoae:energized_superconductive_block', count: 16 },
        { item: 'compressium:netherrack_6', count: 1 },
      ],
      aePerTick: 8192,
      souls: [soul(64)],
    },

    // 12. Soul Sand Cell
    {
      key: 'soul_sand',
      type: 'i',
      recordId: 'minecraft:soul_sand',
      extra: [
        { item: 'mysticalagradditions:insanium_block', count: 64 },
        { item: 'extendedcrafting:black_iron_block', count: 64 },
        { item: 'neoecoae:crystal_matrix', count: 16 },
        { item: 'compressium:soulsand_6', count: 1 },
      ],
      aePerTick: 16384,
      souls: [soul(64)],
    },

    // 13. Blackstone Cell
    {
      key: 'blackstone',
      type: 'i',
      recordId: 'minecraft:blackstone',
      extra: [
        { item: 'compressium:netherrack_4', count: 2 },
        { item: 'minecraft:netherite_block', count: 64 },
        { item: 'minecraft:netherite_upgrade_smithing_template', count: 32 },
        { item: 'kubejs:blackstone_6', count: 1 },
      ],
      aePerTick: 16384,
      souls: [soul(64)],
    },

    // 14. End Stone Cell
    {
      key: 'end_stone',
      type: 'i',
      recordId: 'minecraft:end_stone',
      extra: [
        { item: 'kubejs:sculk_alloy_block', count: 64 },
        { item: 'kubejs:compressed_warden_tendril', count: 64 },
        { item: 'ifeu:dragon_star_block', count: 16 },
        { item: 'compressium:endstone_6', count: 1 },
      ],
      aePerTick: 32768,
      souls: [soul(64)],
    },

    // 15. Matter Ball Cell
    {
      key: 'matter_ball',
      type: 'i',
      recordId: 'ae2:matter_ball',
      extra: [
        { item: 'advanced_ae:shattered_singularity', count: 256 },
        { item: 'neoecoae:energized_fluix_crystal_block', count: 64 },
        { item: 'extendedae_plus:oblivion_singularity', count: 32 },
        { item: 'ae2omnicells:spent_nuclear_waste_singularity', count: 16 },
      ],
      aePerTick: 32768,
      souls: [soul(64)],
    },
  ];

  cells.forEach((cell, index) => {
    addInfinityCell(index, cell);
  });
});
