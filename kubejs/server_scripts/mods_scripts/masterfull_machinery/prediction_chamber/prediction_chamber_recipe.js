//priority: 1;

const dataModelsVanillaArray = [
  'blaze',
  'chicken',
  'cod',
  'cow',
  'creeper',
  'drowned',
  'enderman',
  'ghast',
  'glow_squid',
  'guardian',
  'hoglin',
  'iron_golem',
  'magma_cube',
  'mooshroom',
  'phantom',
  'pig',
  'polar_bear',
  'rabbit',
  'sheep',
  'shulker',
  'skeleton',
  'slime',
  'snow_golem',
  'spider',
  'squid',
  'vindicator',
  'witch',
  'wither_skeleton',
  'zombie',
  'zombified_piglin',
];

const dataModelsBossArray = [
  'twilightforest/alpha_yeti',
  'cataclysm/ancient_remnant',
  'draconicevolution/draconic_guardian',
  'elder_guardian',
  'ender_dragon',
  'cataclysm/ender_golem',
  'evoker',
  'botania/gaia_spirit',
  'twilightforest/hydra',
  'twilightforest/knight_phantom',
  'twilightforest/lich',
  'cataclysm/maledictus',
  'twilightforest/minoshroom',
  'twilightforest/naga',
  'bomd/gauntlet',
  'bomd/lich',
  'bomd/obsidilith',
  'allthemodium/piglich',
  'twilightforest/snow_queen',
  'cataclysm/harbinger',
  'twilightforest/ur_ghast',
  'bomd/void_blossom',
  'warden',
  'wither',
  'born_in_chaos/lord_pumpkinhead',
];

const dataModelsMiscArray = [
  'thermal/basalz',
  'thermal/blitz',
  'thermal/blizz',
  'twilightforest/carminite_golem',
  'born_in_chaos/maggot',
  'born_in_chaos/dark_vortex',
  'twilightforest/death_tome',
  'cataclysm/deepling_warlock',
  'twilightforest/deer',
  'born_in_chaos/dire_hound_leader',
  'twilightforest/fire_beetle',
  'born_in_chaos/glutton_fish',
  'twilightforest/helmet_crab',
  'twilightforest/kobold',
  'twilightforest/minotaur',
  'born_in_chaos/missioner',
  'twilightforest/raven',
  'twilightforest/redcap',
  'born_in_chaos/restless_spirit',
  'twilightforest/skeleton_druid',
  'born_in_chaos/spirit_guide',
  'the_outer_end/stalker',
  'twilightforest/towerwood_borer',
  'twilightforest/troll',
  'twilightforest/giant',
  'twilightforest/goblin',
  'twilightforest/stable_ice_core',
  'twilightforest/winter_wolf',
  'twilightforest/wraith',
  'twilightforest/yeti',
];



function safeIdPart (str) {
  return str.split(':').join('_').split('/').join('_');
}

function createPredictionChamberRecipes (event, mobs) {
  mobs.forEach((mob) => {
    const mobHNN = `hostilenetworks:${mob}`;
    const rid = `mm:prediction_chamber_recipe_${safeIdPart(mob)}`;

    event
      .create(rid)
      .structureId('mm:prediction_chamber_structure')
      .ticks(100)
      .input({
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: 'extrahnn:extra_data_model',
          count: 1,
          nbt_snbt: `{data_model:{data:22375,ids:["${mobHNN}","${mobHNN}","${mobHNN}","${mobHNN}"]}}`,
        },
        chance: 0.0,
      })
      .input({
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: 'hostilenetworks:prediction_matrix',
          count: 256,
        },
        chance: 0.5,
      })
      .input({
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:energy',
          amount: 2147483647,
        },
      })
      .output({
        type: 'mm:output/simple',
        ingredient: {
          type: 'mm:item',
          item: 'hostilenetworks:prediction',
          count: 1024,
          nbt_snbt: `{data_model:{id:"${mobHNN}"}}`,
        },
        perTick: true,
      });
  });
}

MMEvents.createProcesses((event) => {
  createPredictionChamberRecipes(event, dataModelsVanillaArray);
  createPredictionChamberRecipes(event, dataModelsBossArray);
  createPredictionChamberRecipes(event, dataModelsMiscArray);
});
