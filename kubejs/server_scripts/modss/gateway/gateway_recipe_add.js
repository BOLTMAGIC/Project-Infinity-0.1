ServerEvents.recipes((event) => {
  const A = 'minecraft:obsidian';
  const B = 'minecraft:crying_obsidian';

  const gateways = [
    ['basalz_gate', 'thermal:basalz_rod'],
    ['blitz_gate', 'thermal:blitz_rod'],
    ['blizz_gate', 'thermal:blizz_rod'],
    ['born_in_chaos_gate', 'born_in_chaos_v1:transmuting_elixir'],
    ['cavespider_gate', 'minecraft:fermented_spider_eye'],
    ['chicken_gate', 'minecraft:egg'],
    ['cow_gate', 'minecraft:milk_bucket'],
    ['drowned_gate', 'minecraft:trident'],
    ['evoker_gate', 'minecraft:totem_of_undying'],
    ['elderguardian_gate', 'armorplus:guardian_scale'],
    ['glowsquid_gate', 'minecraft:glow_ink_sac'],
    ['guardian_gate', 'minecraft:prismarine_shard'],
    ['hoglin_gate', 'minecraft:porkchop'],
    ['husk_gate', 'minecraft:sand'],
    ['irongolem_gate', 'minecraft:iron_block'],
    ['pig_gate', 'minecraft:porkchop'],
    ['piglin_gate', 'minecraft:gold_ingot'],
    ['piglinbrute_gate', 'minecraft:gold_block'],
    ['pillager_raid_gate', 'minecraft:crossbow'],
    ['sheep_gate', 'minecraft:white_wool'],
    ['snowgolem_gate', 'minecraft:pumpkin'],
    ['squid_gate', 'minecraft:ink_sac'],
    ['stray_gate', 'minecraft:arrow'],
    ['turtle_gate', 'minecraft:scute'],
    ['warden_gate', 'kubejs:sculk_alloy_ingot'],
    ['wither_gate', 'mysticalagradditions:withering_soul'],
    ['witherskeleton_gate', 'minecraft:wither_skeleton_skull'],
    ['gateway_of_the_giants', 'born_in_chaos_v1:ethereal_spirit'],
    ['trials_of_ignis', 'cataclysm:ignitium_ingot'],
    ['trials_of_the_ancient_remnant', 'cataclysm:desert_eye'],
    ['trials_of_the_harbinger', 'minecraft:nether_star'],
    ['deepling_warlock_gate', 'cataclysm:athame'],
    ['coral_golem_gate', 'cataclysm:crystallized_coral_fragments'],
  ];
  Item.of('gateways:gate_pearl', '{gateway:"gateways:trials_of_ignis"}');
  gateways.forEach(([gateway, middleItem]) => {
    event
      .shaped(
        Item.of('gateways:gate_pearl', `{gateway:"gateways:${gateway}"}`),
        ['ABA', 'BMB', 'ABA'],
        {
          A: A,
          B: B,
          M: middleItem,
        }
      )
      .id(`gateways:gate_pearl/${gateway}`);
  });
});
