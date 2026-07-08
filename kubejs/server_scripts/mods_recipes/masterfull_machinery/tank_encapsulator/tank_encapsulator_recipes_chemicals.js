priority: 1;
MMEvents.createProcesses((event) => {
  const chemicalTanks = {
    basic: {
      capacity: 64000,
      id: 'mekanism:basic_chemical_tank'
    },
    advanced: {
      capacity: 128000,
      id: 'mekanism:advanced_chemical_tank'
    },
    elite: {
      capacity: 1024000,
      id: 'mekanism:elite_chemical_tank'
    },
    ultimate: {
      capacity: 8192000,
      id: 'mekanism:ultimate_chemical_tank'
    },
    absolute: {
      capacity: 131072000,
      id: 'mekanism_extras:absolute_chemical_tank'
    },
    supreme: {
      capacity: 4194304000,
      id: 'mekanism_extras:supreme_chemical_tank'
    },
    cosmic: {
      capacity: 268435456000,
      id: 'mekanism_extras:cosmic_chemical_tank'
    },
    infinite: {
      capacity: 34359738368000,
      id: 'mekanism_extras:infinite_chemical_tank'
    }
  }

  const TICKS = 20

  const modIDToTranslationKey = {
    mekanism: [
      'gas.mekanism.',
      'pigment.mekanism.',
      'slurry.mekanism.',
      'infuse_type.mekanism.'
    ],
    mekanismgenerators: ['gas.mekanismgenerators.'],
    mekanism_extras: ['gas.mekanism_extras.'],
    evolvedmekanism: ['infuse_type.evolvedmekanism.'],
    alltheores: ['slurry.alltheores.'],
    allthemodium: ['slurry.allthemodium.']
  }

  function chemicalTankEncapsulator(tank_level, chemical_id) {
    const chemID = chemical_id; // mekanism:dirty_gold
    const parts = chemID.split(':');
    const first = parts[0]; // mekanism
    const second = parts[1]; // dirty_gold

    let chemicalTK

    for (const prefix of modIDToTranslationKey[first]) {
      if(!Text.translatable(prefix + second).getString().equals(prefix + second)) {
        chemicalTK = prefix;
        break
      }
    }

    let chemical_type = chemicalTK.split('.')[0];
    chemical_type = chemical_type == 'infuse_type' ? 'infuse' : chemical_type
    
    const ingredientInput = {
      type: `mm:mekanism/${chemical_type}`,
      amount: chemicalTanks[tank_level].capacity,
    };

    ingredientInput[chemical_type] = chemical_id;

    event
      .create(`mm:${chemical_id.replace(/[:]/g, '_').toLowerCase()}_to_${tank_level.toLowerCase()}_fluid_tank_token`)
      .structureId('mm:tank_encapsulator_structure')
      .ticks(TICKS)
      .input({
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: chemicalTanks[tank_level].id,
          count: 1,
        },
      })
      .input({
        type: 'mm:input/consume',
        ingredient: ingredientInput,
      })
      .output({
        type: 'mm:output/simple',
        ingredient: {
          type: 'mm:item',
          item: 'kubejs:chemical_tank_token',
          count: 1,
          nbt_snbt: `{tank_level:'${tank_level}', chemical_id:'${chemical_id}'}`,
        },
      });
  }

  chemicalTankEncapsulator('basic', 'evolvedmekanism:plaslitherite');
  chemicalTankEncapsulator('basic', 'mekanism_extras:molten_thermonuclear');
  chemicalTankEncapsulator('basic', 'mekanism_extras:naquadah_hexafluoride');
  chemicalTankEncapsulator('basic', 'evolvedmekanism:better_gold');
  chemicalTankEncapsulator('ultimate', 'mekanism:yellow');
  chemicalTankEncapsulator('ultimate', 'mekanism:green');
  chemicalTankEncapsulator('ultimate', 'mekanism:lime');
  chemicalTankEncapsulator('ultimate', 'mekanism:cyan');
  chemicalTankEncapsulator('ultimate', 'mekanism:light_blue');
  chemicalTankEncapsulator('ultimate', 'mekanism:orange');
  chemicalTankEncapsulator('ultimate', 'mekanism:chlorine');
  chemicalTankEncapsulator('ultimate', 'mekanism:fissile_fuel');
  chemicalTankEncapsulator('ultimate', 'mekanismgenerators:tritium');
  chemicalTankEncapsulator('ultimate', 'mekanism:red');
  chemicalTankEncapsulator('ultimate', 'mekanism:brown');
  chemicalTankEncapsulator('absolute', 'mekanism:oxygen');
  chemicalTankEncapsulator('advanced', 'mekanism:antimatter');
  chemicalTankEncapsulator('absolute', 'mekanism:hydrogen');
  chemicalTankEncapsulator('ultimate', 'mekanism:uranium_hexafluoride');
  chemicalTankEncapsulator('ultimate', 'mekanism:sulfuric_acid');
  chemicalTankEncapsulator('elite', 'allthemodium:clean_allthemodium');
  chemicalTankEncapsulator('elite', 'allthemodium:clean_unobtainium');
  chemicalTankEncapsulator('elite', 'allthemodium:clean_vibranium');
  chemicalTankEncapsulator('ultimate', 'mekanism:blue');
  chemicalTankEncapsulator('ultimate', 'mekanism:purple');
  chemicalTankEncapsulator('ultimate', 'mekanismgenerators:deuterium');
  chemicalTankEncapsulator('ultimate', 'mekanism:sulfur_trioxide');
  chemicalTankEncapsulator('ultimate', 'mekanism:sodium');
  chemicalTankEncapsulator('ultimate', 'mekanism:magenta');
  chemicalTankEncapsulator('ultimate', 'mekanism:black');
  chemicalTankEncapsulator('ultimate', 'mekanism:gray');
  chemicalTankEncapsulator('ultimate', 'mekanism:light_gray');
  chemicalTankEncapsulator('ultimate', 'mekanism:white');
  chemicalTankEncapsulator('ultimate', 'mekanism:pink');
});
