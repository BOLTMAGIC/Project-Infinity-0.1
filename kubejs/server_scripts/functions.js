//priority: 9999999;

// 'all' = log every function, or set to a single function name (e.g. 'create3x3'), or '' to disable
// used to find which recipe we broke :)
// set to '' before publishing the modpack
let debug = '';

function debugLog (name, output, input) {
  if (debug == 'all' || debug == name) {
    console.log(`[${name}] output: ${output}`);
    if (input !== undefined) {
      console.log(`[${name}] input: ${input}`);
    }
  }
}

function shapeless (event, output, input) {
  debugLog('shapeless', output, input);
  event.shapeless(output, input);
}

function shapelessdraconic (event, output) {
  debugLog(
    'shapelessdraconic',
    `draconicevolution:${output} <- kubejs:${output}`
  );
  event.shapeless(`draconicevolution:${output}`, `kubejs:${output}`);
}

function reverseshapelessdraconic (event, output) {
  debugLog(
    'reverseshapelessdraconic',
    `kubejs:${output} <- draconicevolution:${output}`
  );
  event.shapeless(`kubejs:${output}`, `draconicevolution:${output}`);
}

function shapelessdraconicadditions (event, output) {
  debugLog(
    'shapelessdraconicadditions',
    `draconicadditions:${output} <- kubejs:${output}`
  );
  event.shapeless(`draconicadditions:${output}`, `kubejs:${output}`);
}

function reverseshapelessdraconicadditions (event, output) {
  debugLog(
    'reverseshapelessdraconicadditions',
    `kubejs:${output} <- draconicadditions:${output}`
  );
  event.shapeless(`kubejs:${output}`, `draconicadditions:${output}`);
}

function create323 (event, output, input) {
  debugLog('create323', output, input);
  event.shaped(output, ['000', '0 0', '000'], {
    0: input[0],
  });
}

function create_conduit_craft (event, output, input) {
  debugLog('create_conduit_craft', output, input);
  event.shaped(output, ['000', '111', '000'], {
    0: input[0],
    1: input[1],
  });
}

function create_conduit_craft2 (event, output, input) {
  debugLog('create_conduit_craft2', output, input);
  event.shaped(output, ['000', '121', '000'], {
    0: input[0],
    1: input[1],
    2: input[2],
  });
}

function create2x2 (event, output, input) {
  debugLog('create2x2', output, input);
  event.shaped(output, ['01', '23'], {
    0: input[0],
    1: input[1],
    2: input[2],
    3: input[3],
  });
}

function create2x2same (event, output, input) {
  debugLog('create2x2same', output, input);
  event.shaped(output, ['00', '00'], {
    0: input[0],
  });
}

function create3x3 (event, output, input) {
  debugLog('create3x3', output, input);
  event.shaped(output, ['012', '345', '678'], {
    0: input[0],
    1: input[1],
    2: input[2],
    3: input[3],
    4: input[4],
    5: input[5],
    6: input[6],
    7: input[7],
    8: input[8],
  });
}

function create3x3_EV_EX (event, output, input) {
  debugLog('create3x3_EV_EX', output, input);
  event.shaped(output, ['010', '232', '010'], {
    0: 'evolvedmekanism:alloy_creative',
    1: 'evolvedmekanism:creative_control_circuit',
    2: 'minecraft:nether_star',
    3: input[0],
  });
}

function create3x3same (event, output, input) {
  debugLog('create3x3same', output, input);
  event.shaped(output, ['000', '000', '000'], {
    0: input[0],
  });
}

function seedtiercrafting1 (event, output, input) {
  debugLog('seedtiercrafting1', output, input);
  event.shaped(output, ['121', '202', '121'], {
    0: 'kubejs:tier1_crafting_seed',
    1: input[0],
    2: 'mysticalagriculture:inferium_essence',
  });
}

function seedtiercrafting2 (event, output, input) {
  debugLog('seedtiercrafting2', output, input);
  event.shaped(output, ['121', '202', '121'], {
    0: 'kubejs:tier2_crafting_seed',
    1: input[0],
    2: 'mysticalagriculture:prudentium_essence',
  });
}

function seedtiercrafting2extra (event, output, input) {
  debugLog('seedtiercrafting2extra', output, input);
  event.shaped(output, ['123', '202', '321'], {
    0: 'kubejs:tier2_crafting_seed',
    1: input[0],
    2: 'mysticalagriculture:prudentium_essence',
    3: input[1],
  });
}

function seedtiermobcrafting2 (event, output, input) {
  debugLog('seedtiermobcrafting2', output, input);
  event.shaped(output, ['121', '202', '121'], {
    0: 'mysticalagriculture:soulium_seed_base',
    1: input[0].weakNBT(),
    2: 'mysticalagriculture:prudentium_essence',
  });
}

function create3x3jetpack (event, output, input) {
  debugLog('create3x3jetpack', output, input);
  event.shaped(output, ['010', '020', '343'], {
    0: input[0],
    1: input[1].weakNBT(),
    2: input[2],
    3: input[3].weakNBT(),
    4: 'minecraft:air',
  });
}
