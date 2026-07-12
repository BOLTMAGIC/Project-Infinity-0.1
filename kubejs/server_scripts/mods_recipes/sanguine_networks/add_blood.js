ServerEvents.recipes((event) => {
  const tiers = {
    tier1: {
      blood: [0, 10, 22, 45, 70],
      energy: 10000,
      entities: [
        'twilightforest:death_tome',
        'twilightforest:deer',
        'twilightforest:blockchain_goblin',
        'twilightforest:redcap',
        'minecraft:squid',
        'minecraft:spider',
        'minecraft:snow_golem',
        'minecraft:slime',
        'minecraft:sheep',
        'minecraft:rabbit',
        'minecraft:polar_bear',
        'minecraft:pig',
        'minecraft:mooshroom',
        'minecraft:glow_squid',
        'minecraft:cow',
        'minecraft:cod',
        'minecraft:chicken',
      ],
    },
    tier2: {
      blood: [0, 25, 65, 95, 130],
      energy: 15000,
      entities: [
        'born_in_chaos_v1:dire_hound_leader',
        'born_in_chaos_v1:dark_vortex',
        'thermal:basalz',
        'thermal:blizz',
        'thermal:blitz',
        'twilightforest:minoshroom',
        'twilightforest:skeleton_druid',
        'twilightforest:troll',
        'minecraft:zombified_piglin',
        'minecraft:zombie',
        'minecraft:wither_skeleton',
        'minecraft:witch',
        'minecraft:vindicator',
        'minecraft:skeleton',
        'minecraft:shulker',
        'minecraft:phantom',
        'minecraft:magma_cube',
        'minecraft:hoglin',
        'minecraft:guardian',
        'minecraft:ghast',
        'minecraft:evoker',
        'minecraft:enderman',
        'minecraft:drowned',
        'minecraft:creeper',
        'minecraft:blaze',
      ],
    },
    tier3: {
      blood: [0, 40, 95, 145, 180],
      energy: 75000,
      entities: [
        'born_in_chaos_v1:missioner',
        'twilightforest:alpha_yeti',
        'twilightforest:knight_phantom',
        'twilightforest:giant_miner',
        'twilightforest:lich',
        'twilightforest:minotaur',
        'twilightforest:naga',
        'minecraft:iron_golem',
        'minecraft:ender_dragon',
        'minecraft:elder_guardian',
      ],
    },
    tier4: {
      blood: [0, 100, 150, 195, 300],
      energy: 1500000,
      entities: [
        'bosses_of_mass_destruction:gauntlet',
        'bosses_of_mass_destruction:lich',
        'bosses_of_mass_destruction:obsidilith',
        'bosses_of_mass_destruction:void_blossom',
        'born_in_chaos_v1:lord_pumpkinhead',
        'botania:doppleganger',
        'cataclysm:ender_golem',
        'cataclysm:ancient_remnant',
        'cataclysm:the_harbinger',
        'cataclysm:maledictus',
        'minecraft:wither',
        'allthemodium:piglich',
        'twilightforest:hydra',
        'twilightforest:snow_queen',
        'minecraft:warden',
      ],
    },
  };

  for (const [tierName, tierData] of Object.entries(tiers)) {
    tierData.entities.forEach((entity) => {
      event
        .custom({
          type: 'sanguine_networks:blood',
          blood: tierData.blood,
          energy: tierData.energy,
          entity: entity,
        })
        .id(
          `kubejs:sanguine_networks/blood/${entity.replace(':', '_')}_${tierName}`
        );
    });
  }
});

ServerEvents.recipes((event) => {
  event.custom({
    type: 'sanguine_networks:catalyst',
    catalyst: {
      item: 'kubejs:infinity_11',
    },
    multiplier: 6.66,
    uses: -1,
  });

  event.custom({
    type: 'sanguine_networks:catalyst',
    catalyst: {
      item: 'kubejs:infinity_12',
    },
    multiplier: 16.66,
    uses: -1,
  });
});
