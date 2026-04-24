priority: 1;
MMEvents.createProcesses((event) => {
  function addDissolverRecipe (id, data) {
    function parseInput (input) {
      if (input.startsWith('#')) {
        return {
          type: 'mm:item',
          tag: input.substring(1),
          count: 64,
        };
      } else {
        return {
          type: 'mm:item',
          item: input,
          count: 64,
        };
      }
    }

    const recipe = event
      .create(`mm:${id}tier2_recipe`)
      .structureId('mm:mega_dissolver_structure2')
      .ticks(16);

    recipe.input({
      type: 'mm:input/consume',
      ingredient: parseInput(data.input),
    });

    recipe.input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 320000,
      },
    });

    for (const out of data.outputs) {
      recipe.output({
        type: 'mm:output/simple',
        chance: out.chance ?? 1,
        ingredient: {
          type: 'mm:item',
          item: out.item,
          count: out.count * 64,
        },
      });
    }
  }

  const recipes = [
    //------------------ Recipe Definitions -----------------//
    // End Stone
    {
      id: 'end_stone',
      input: '#chipped:end_stone',
      outputs: [
        { item: 'chemlib:silicon_dioxide', count: 1, chance: 0.7003 },
        { item: 'chemlib:mercury', count: 1, chance: 0.1401 },
        { item: 'chemlib:lithium', count: 1, chance: 0.1401 },
        { item: 'chemlib:neodymium', count: 1, chance: 0.014 },
        { item: 'chemlib:thorium', count: 1, chance: 0.0056 },
      ],
    },
    // Music Discs
    {
      id: 'discs',
      input: '#minecraft:music_discs',
      outputs: [
        { item: 'chemlib:polyvinyl_chloride', count: 64, chance: 1.0 },
        { item: 'chemlib:lead', count: 16, chance: 1.0 },
        { item: 'chemlib:cadmium', count: 16, chance: 1.0 },
      ],
    },
    // Fire Coral Fan
    {
      id: 'fire_coral_fan',
      input: 'minecraft:fire_coral_fan',
      outputs: [
        { item: 'chemlib:calcium_carbonate', count: 4, chance: 1.0 },
        { item: 'chemlib:cobalt_nitrate', count: 2, chance: 1.0 },
      ],
    },
    // Granite
    {
      id: 'granite',
      input: '#chipped:granite',
      outputs: [
        { item: 'chemlib:silicon_dioxide', count: 1, chance: 0.4348 },
        { item: 'chemlib:aluminum', count: 1, chance: 0.2174 },
        { item: 'chemlib:iron', count: 1, chance: 0.087 },
        { item: 'chemlib:potassium_oxide', count: 1, chance: 0.087 },
        { item: 'chemlib:radium', count: 1, chance: 0.0652 },
        { item: 'chemlib:manganese', count: 1, chance: 0.0652 },
        { item: 'chemlib:technetium', count: 1, chance: 0.0435 },
      ],
    },
    //Ghast Tear
    {
      id: 'ghast_tear',
      input: 'minecraft:ghast_tear',
      outputs: [{ item: 'chemlib:polonium', count: 16, chance: 1.0 }],
    },
    //Shulker Shell
    {
      id: 'shulker_shell',
      input: 'minecraft:shulker_shell',
      outputs: [
        { item: 'chemlib:lutetium', count: 8, chance: 1.0 },
        { item: 'chemlib:calcium_carbonate', count: 8, chance: 1.0 },
      ],
    },
    //Soul Sand
    {
      id: 'soul_sand',
      input: '#chipped:soul_sand',
      outputs: [
        { item: 'chemlib:silicon_dioxide', count: 4, chance: 1.0 },
        { item: 'chemlib:thulium', count: 1, chance: 1.0 },
      ],
    },
    //Ender Pearl
    {
      id: 'ender_pearl',
      input: 'minecraft:ender_pearl',
      outputs: [
        { item: 'chemlib:silicon', count: 16, chance: 1.0 },
        { item: 'chemlib:neodymium', count: 16, chance: 1.0 },
        { item: 'chemlib:mercury', count: 16, chance: 1.0 },
      ],
    },
    //Phantom Membrane
    {
      id: 'phantom_membrane',
      input: 'minecraft:phantom_membrane',
      outputs: [{ item: 'chemlib:cerium', count: 8, chance: 1.0 }],
    },
    //Quartz
    {
      id: 'quartz',
      input: 'minecraft:quartz',
      outputs: [
        { item: 'chemlib:silicon_dioxide', count: 32, chance: 1.0 },
        { item: 'chemlib:barium', count: 16, chance: 1.0 },
      ],
    },
    //Diorite
    {
      id: 'diorite',
      input: '#chipped:diorite',
      outputs: [
        { item: 'chemlib:silicon_dioxide', count: 1, chance: 0.3509 },
        { item: 'chemlib:aluminum_oxide', count: 1, chance: 0.1404 },
        { item: 'chemlib:potassium_chloride', count: 1, chance: 0.1404 },
        { item: 'chemlib:tin', count: 1, chance: 0.1053 },
        { item: 'chemlib:iron', count: 1, chance: 0.0702 },
        { item: 'chemlib:osmium', count: 1, chance: 0.0702 },
        { item: 'chemlib:manganese', count: 1, chance: 0.0702 },
        { item: 'chemlib:indium', count: 1, chance: 0.0526 },
      ],
    },
    //Signalum Ingot
    {
      id: 'signalum_ingot',
      input: '#forge:ingots/signalum',
      outputs: [
        { item: 'chemlib:copper', count: 16, chance: 0.6 },
        { item: 'chemlib:silver', count: 16, chance: 0.2 },
        { item: 'chemlib:strontium_carbonate', count: 16, chance: 0.1 },
        { item: 'chemlib:iron_oxide', count: 16, chance: 0.1 },
      ],
    },
    //Stone
    {
      id: 'stone',
      input: 'minecraft:stone',
      outputs: [
        { item: 'minecraft:air', count: 2, chance: 0.6431 },
        { item: 'chemlib:silicon_dioxide', count: 2, chance: 0.1608 },
        { item: 'chemlib:iron', count: 2, chance: 0.0643 },
        { item: 'chemlib:aluminum', count: 2, chance: 0.0322 },
        { item: 'chemlib:gold', count: 2, chance: 0.0225 },
        { item: 'chemlib:zirconium', count: 2, chance: 0.0193 },
        { item: 'chemlib:tungsten', count: 2, chance: 0.0161 },
        { item: 'chemlib:gallium', count: 2, chance: 0.0161 },
        { item: 'chemlib:nickel', count: 2, chance: 0.0161 },
        { item: 'chemlib:dysprosium', count: 2, chance: 0.0096 },
      ],
    },
    //Purple Dye
    {
      id: 'purple_dye',
      input: '#forge:dyes/purple',
      outputs: [
        { item: 'chemlib:potassium_permanganate', count: 4, chance: 1.0 },
      ],
    },
    //Deepslate
    {
      id: 'deepslate',
      input: '#apotheosis:deepslate',
      outputs: [
        { item: 'minecraft:air', count: 2, chance: 0.5263 },
        { item: 'chemlib:silicon_dioxide', count: 2, chance: 0.2632 },
        { item: 'chemlib:iron', count: 2, chance: 0.0526 },
        { item: 'chemlib:osmium', count: 2, chance: 0.0263 },
        { item: 'chemlib:gold', count: 2, chance: 0.0263 },
        { item: 'chemlib:aluminum', count: 2, chance: 0.0263 },
        { item: 'chemlib:silver', count: 2, chance: 0.0263 },
        { item: 'chemlib:europium', count: 2, chance: 0.0132 },
        { item: 'chemlib:terbium', count: 2, chance: 0.0132 },
        { item: 'chemlib:scandium', count: 2, chance: 0.0132 },
        { item: 'chemlib:yttrium', count: 2, chance: 0.0132 },
      ],
    },
    //Potato
    {
      id: 'potato',
      input: 'minecraft:potato',
      outputs: [
        { item: 'chemlib:potassium', count: 5, chance: 0.7143 },
        { item: 'chemlib:starch', count: 1, chance: 0.2857 },
      ],
    },
    //Emerald
    {
      id: 'emerald',
      input: 'minecraft:emerald',
      outputs: [
        { item: 'chemlib:chromium', count: 8, chance: 1.0 },
        { item: 'chemlib:beryllium', count: 8, chance: 1.0 },
        { item: 'chemlib:vanadium', count: 4, chance: 1.0 },
      ],
    },
    //Light Gray Dye
    {
      id: 'light_gray_dye',
      input: 'minecraft:light_gray_dye',
      outputs: [{ item: 'chemlib:magnesium_sulfate', count: 4, chance: 1.0 }],
    },
    //Lapis Lazuli Block
    {
      id: 'lapis_lazuli_block',
      input: '#forge:storage_blocks/lapis',
      outputs: [
        { item: 'chemlib:sodium', count: 54, chance: 1.0 },
        { item: 'chemlib:mullite', count: 27, chance: 1.0 },
        { item: 'chemlib:calcium_sulfide', count: 18, chance: 1.0 },
        { item: 'chemlib:silicon', count: 27, chance: 1.0 },
      ],
    },
    //Dark Prismarine
    {
      id: 'dark_prismarine',
      input: '#chipped:dark_prismarine',
      outputs: [
        { item: 'chemlib:niobium', count: 24, chance: 1.0 },
        { item: 'chemlib:selenium', count: 8, chance: 1.0 },
        { item: 'chemlib:titanium_oxide', count: 4, chance: 1.0 },
        { item: 'chemlib:beryl', count: 32, chance: 1.0 },
      ],
    },
    //Following recipes are added by Water_Element!!! Thank you
    //Thorium Ingot
    {
      id: 'thorium_ingot',
      input: 'nuclearcraft:thorium_ingot',
      outputs: [{ item: 'chemlib:thorium', count: 16, chance: 1.0 }],
    },
    //Platinum Ingot
    {
      id: 'platinum_ingot',
      input: 'common_ore_library:platinum_ingot',
      outputs: [{ item: 'chemlib:platinum', count: 16, chance: 1.0 }],
    },
    //Cobalt Ingot
    {
      id: 'cobalt_ingot',
      input: 'common_ore_library:cobalt_ingot',
      outputs: [{ item: 'chemlib:cobalt', count: 16, chance: 1.0 }],
    },
    //Osmium Ingot
    {
      id: 'osmium_ingot',
      input: 'mekanism:ingot_osmium',
      outputs: [{ item: 'chemlib:osmium', count: 16, chance: 1.0 }],
    },
    //Magnesium Ingot
    {
      id: 'magnesium_ingot',
      input: 'nuclearcraft:magnesium_ingot',
      outputs: [{ item: 'chemlib:magnesium', count: 16, chance: 1.0 }],
    },
    //Orange Dye
    {
      id: 'orange_dye',
      input: '#forge:dyes/orange',
      outputs: [
        { item: 'chemlib:potassium_dichromate', count: 4, chance: 1.0 },
      ],
    },
    //Potassium Dichromate
    {
      id: 'potassium_dichromate',
      input: 'chemlib:potassium_dichromate',
      outputs: [
        { item: 'chemlib:oxygen', count: 7, chance: 1.0 },
        { item: 'chemlib:chromium', count: 2, chance: 1.0 },
        { item: 'chemlib:potassium', count: 2, chance: 1.0 },
      ],
    },
    //Glowstone
    {
      id: 'glowstone',
      input: 'minecraft:glowstone',
      outputs: [{ item: 'chemlib:phosphorus', count: 16, chance: 1.0 }],
    },
    //Glowstone Dust
    {
      id: 'glowstone_dust',
      input: '#forge:dusts/glowstone',
      outputs: [{ item: 'chemlib:phosphorus', count: 4, chance: 1.0 }],
    },
    //Lithium Ingot
    {
      id: 'lithium_ingot',
      input: 'nuclearcraft:lithium_ingot',
      outputs: [{ item: 'chemlib:lithium', count: 16, chance: 1.0 }],
    },
    //Gunpowder
    {
      id: 'gunpowder',
      input: '#forge:gunpowder',
      outputs: [
        { item: 'chemlib:potassium_nitrate', count: 2, chance: 1.0 },
        { item: 'chemlib:sulfur', count: 8, chance: 1.0 },
        { item: 'chemlib:graphite', count: 2, chance: 1.0 },
      ],
    },
    //Silver Ingot
    {
      id: 'silver_ingot',
      input: 'thermal:silver_ingot',
      outputs: [{ item: 'chemlib:silver', count: 16, chance: 1.0 }],
    },
    //Nickel Ingot
    {
      id: 'nickel_ingot',
      input: 'thermal:nickel_ingot',
      outputs: [{ item: 'chemlib:nickel', count: 16, chance: 1.0 }],
    },
    //Graphite
    {
      id: 'graphite',
      input: 'chemlib:graphite',
      outputs: [{ item: 'chemlib:carbon', count: 4, chance: 1.0 }],
    },
    //Netherite Ingot
    {
      id: 'netherite_ingot',
      input: 'minecraft:netherite_ingot',
      outputs: [
        { item: 'chemlib:tungsten', count: 64, chance: 1.0 },
        { item: 'chemlib:gold', count: 64, chance: 1.0 },
        { item: 'chemlib:carbon', count: 64, chance: 1.0 },
      ],
    },
    //Gold Ingot
    {
      id: 'gold_ingot',
      input: 'minecraft:gold_ingot',
      outputs: [{ item: 'chemlib:gold', count: 16, chance: 1.0 }],
    },
    //Coal
    {
      id: 'coal',
      input: '#forge:gems/coal',
      outputs: [{ item: 'chemlib:graphite', count: 2, chance: 1.0 }],
    },
    //Diamond
    {
      id: 'diamond',
      input: '#forge:gems/diamond',
      outputs: [{ item: 'chemlib:graphite', count: 128, chance: 1.0 }],
    },
    //Tin Ingot
    {
      id: 'tin_ingot',
      input: 'thermal:tin_ingot',
      outputs: [{ item: 'chemlib:tin', count: 16, chance: 1.0 }],
    },
    //Zinc Ingot
    {
      id: 'zinc_ingot',
      input: 'common_ore_library:zinc_ingot',
      outputs: [{ item: 'chemlib:zinc', count: 16, chance: 1.0 }],
    },
    //Copper Ingot
    {
      id: 'copper_ingot',
      input: 'minecraft:copper_ingot',
      outputs: [{ item: 'chemlib:copper', count: 16, chance: 1.0 }],
    },
    //Iron Ingot
    {
      id: 'iron_ingot',
      input: 'minecraft:iron_ingot',
      outputs: [{ item: 'chemlib:iron', count: 16, chance: 1.0 }],
    },
    //Aluminum Ingot
    {
      id: 'aluminum_ingot',
      input: 'common_ore_library:aluminum_ingot',
      outputs: [{ item: 'chemlib:aluminum', count: 16, chance: 1.0 }],
    },
    //Calcium Carbonate
    {
      id: 'calcium_carbonate',
      input: 'chemlib:calcium_carbonate',
      outputs: [
        { item: 'chemlib:calcium', count: 1, chance: 1.0 },
        { item: 'chemlib:carbonate', count: 1, chance: 1.0 },
      ],
    },
    //Calcium Sufide
    {
      id: 'calcium_sulfide',
      input: 'chemlib:calcium_sulfide',
      outputs: [
        { item: 'chemlib:calcium', count: 1, chance: 1.0 },
        { item: 'chemlib:sulfur', count: 1, chance: 1.0 },
      ],
    },
    //Light Blue Dye
    {
      id: 'light_blue_dye',
      input: '#forge:dyes/light_blue',
      outputs: [
        { item: 'chemlib:cobalt_aluminate', count: 2, chance: 1.0 },
        { item: 'chemlib:antimony_trioxide', count: 2, chance: 1.0 },
      ],
    },
    //Antimony Trioxide
    {
      id: 'antimony_trioxide',
      input: 'chemlib:antimony_trioxide',
      outputs: [
        { item: 'chemlib:antimony', count: 2, chance: 1.0 },
        { item: 'chemlib:oxygen', count: 3, chance: 1.0 },
      ],
    },
    //Cobalt Aluminate
    {
      id: 'cobalt_aluminate',
      input: 'chemlib:cobalt_aluminate',
      outputs: [
        { item: 'chemlib:oxygen', count: 4, chance: 1.0 },
        { item: 'chemlib:cobalt', count: 1, chance: 1.0 },
        { item: 'chemlib:aluminum', count: 2, chance: 1.0 },
      ],
    },
    //Iridium Ingot
    {
      id: 'iridium_ingot',
      input: 'common_ore_library:iridium_ingot',
      outputs: [{ item: 'chemlib:iridium', count: 16, chance: 1.0 }],
    },
    //Tungsten Ingot
    {
      id: 'tungsten_ingot',
      input: 'common_ore_library:tungsten_ingot',
      outputs: [{ item: 'chemlib:tungsten', count: 16, chance: 1.0 }],
    },
    //Lead Ingot
    {
      id: 'lead_ingot',
      input: 'thermal:lead_ingot',
      outputs: [{ item: 'chemlib:lead', count: 16, chance: 1.0 }],
    },

    //------------------ Recipe Definitions End -----------------//
  ];

  recipes.forEach((r) => addDissolverRecipe(r.id, r));
});
