ServerEvents.recipes((event) => {
  const recipe_list = [];
  const mult = 16;
  const t = 256;

  function processor(event, output, input) {
    generic(event, [output, 1], [input, 1, "ae2:silicon", 1, "minecraft:redstone", 1]);
  }

  function generic(event, output, inputs, power) {
    const recipe_id = `kubejs:omniwell_${output[0].split(":")[1]}`;
    recipe_list.push(recipe_id);
    const ing = [];

    for (let i = 0; i < inputs.length; i += 2) {
      ing.push({ ingredient: { item: inputs[i] }, count: (inputs[i + 1] * mult) });
    }
    if (power === undefined) power = 256;

    event.custom({
      type: "molecularmanipulator:matter_fabrication",
      ingredients: ing,
      results: [{ id: output[0], count: (output[1] * mult) }],
      processing_time: t,
      ae_per_tick: power,
      requires_research: true,
    }).id(recipe_id);
  }

  function w_fluid(event, output, inputs, fluid, power) {
    const recipe_id = `kubejs:omniwell_${output[0].split(":")[1]}`;
    recipe_list.push(recipe_id);
    const ing = [];

    for (let i = 0; i < inputs.length; i += 2) {
      ing.push({ ingredient: { item: inputs[i] }, count: (inputs[i + 1] * mult) });
    }

    if (power === undefined) power = 256;

    event.custom({
      type: "molecularmanipulator:matter_fabrication",
      ingredients: ing,
      fluid_input: { id: fluid[0], amount: (fluid[1] * mult) },
      results: [{ id: output[0], count: (output[1] * mult) }],
      processing_time: t,
      ae_per_tick: power,
      requires_research: true,
    }).id(recipe_id);
  }
  // AE2
  w_fluid(event, ["ae2:singularity", 1], ["ae2:matter_ball", 64], ["minecraft:lava", 100], 1024 * 1024 * 16 / t);

  // Applied Flux
  processor(event, "appflux:energy_processor", "appflux:charged_redstone");
  generic(event, ["appflux:sky_harden_insulating_resin", 2], ["appflux:redstone_crystal", 1, "appflux:harden_insulating_resin", 1, "ae2:sky_stone_block", 1]);
  generic(event, ["appflux:redstone_crystal", 1], ["minecraft:redstone_block", 1, "ae2:fluix_dust", 1, "ae2:sky_dust", 1]);
  generic(event, ["appflux:charged_redstone", 1], ["appflux:redstone_crystal", 1]);

  //AAE
  w_fluid(event, ["advanced_ae:quantum_alloy", 1], ["minecraft:copper_ingot", 4, "advanced_ae:shattered_singularity", 4, "ae2:singularity", 4], ["advanced_ae:quantum_infusion_source", 1000]);
  w_fluid(event, ["advanced_ae:quantum_alloy_plate", 1], ["advanced_ae:quantum_alloy", 8, "minecraft:netherite_ingot", 2, "minecraft:nether_star", 1], ["advanced_ae:quantum_infusion_source", 1000]);

  event.custom({
    type: "molecularmanipulator:matter_fabrication",
    ingredients: [{ ingredient: { item: "advanced_ae:quantum_infused_dust" }, count: mult }],
    fluid_input: { id: "minecraft:water", amount: (4000 * mult) },
    fluid_result: { id: "advanced_ae:quantum_infusion_source", amount: (1000 * mult) },
    processing_time: t,
    ae_per_tick: 256,
    requires_research: true,
  }).id("kubejs:omniwell_quantum_infusion");
  recipe_list.push("kubejs:omniwell_quantum_infusion");

  // MEGA Cells
  generic(event, ["megacells:accumulation_processor", 1], ["megacells:sky_steel_ingot", 1, "ae2:fluix_dust", 1, "minecraft:redstone", 1]);
  w_fluid(event, ["megacells:sky_steel_ingot", 2], ["ae2:charged_certus_quartz_crystal", 1, "minecraft:iron_ingot", 1, "ae2:sky_stone_block", 1], ["minecraft:lava", 1000]);

  // OMNI Cells
  processor(event, "ae2omnicells:omni_link_processor", "ae2omnicells:ender_ingot");
  processor(event, "ae2omnicells:complex_link_processor", "minecraft:netherite_scrap");
  processor(event, "ae2omnicells:multidimensional_expansion_processor", "ae2:singularity");
  generic(event, ["ae2omnicells:ender_ingot", 2], ["thermal:ender_pearl_dust", 1, "minecraft:iron_ingot", 1, "ae2:certus_quartz_dust", 1]);
  generic(event, ["ae2omnicells:charged_ender_ingot", 1], ["ae2omnicells:ender_ingot", 1]);

  //EAE+
  w_fluid(event, ["extendedae_plus:oblivion_singularity", 1], ["ae2:singularity", 2, "minecraft:nether_star", 1, "advanced_ae:quantum_alloy_plate", 4], ["advanced_ae:quantum_infusion_source", 2000]);

  // NEO ECO
  generic(event, ["neoecoae:superconducting_processor", 1], ["neoecoae:energized_superconductive_ingot", 1, "neoecoae:crystal_matrix", 1, "ae2:silicon", 1]);

  // Pack Custom
  event.custom({
    type: "molecularmanipulator:matter_fabrication",
    "ae_inputs": [
      {
        "#t": "ae2:i",
        "id": "hostilenetworks:prediction",
        "tag": { data_model: { id: "hostilenetworks:wither" } },
        "#": 2 * mult,
      },
      { "#t": "ae2:i", "id": "powah:crystal_nitro", "#": mult },
      { "#t": "ae2:f", "id": "industrialforegoing:ether_gas", "#": (50 * mult) },
    ],
    "ae_outputs": [{ "#t": "ae2:i", "id": "minecraft:nether_star", "#": (16 * mult) }],
    processing_time: t,
    ae_per_tick: 256,
    requires_research: true,
  }).id("kubejs:omniwell_nether_star");
  recipe_list.push("kubejs:omniwell_nether_star");

  // Research
  event.custom({
    type: "molecularmanipulator:matter_research",
    title: "Reaction Chamber Research",
    sort_order: 100,
    prerequisites: ["molecularmanipulator:research/ae_foundation"],
    ingredients: [{ ingredient: { item: "advanced_ae:reaction_chamber" }, count: "1" }],
    duration: 1200,
    ae_per_tick: 1024,
    unlocks: recipe_list,
  }).id("kubejs:omni_reaction_chamber");
});
