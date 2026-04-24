ServerEvents.recipes((event) => {
  //Energy Condenser MK2
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABBBBBBBC',
        'BDEFFFEDB',
        'BEGDHDGEB',
        'BIJKHKJIB',
        'BILMNMLIB',
        'BIJKHKJIB',
        'BEGDHDGEB',
        'BDEIIIEDB',
        'OBBBBBBBP',
      ],
      key: {
        A: {
          item: 'extradisks:1048576k_storage_disk',
        },
        B: {
          item: 'projecte:dark_matter',
        },
        C: {
          item: 'extradisks:1048576k_storage_disk',
        },
        D: {
          item: 'projecte:red_matter',
        },
        E: {
          item: 'compressium:obsidian_5',
        },
        F: {
          type: 'forge:nbt',
          item: 'sophisticatedstorage:diamond_chest',
          count: 1,
          nbt: '{woodType:"oak"}',
        },
        G: {
          item: 'ae2additions:disk_item_65536k',
        },
        H: {
          item: 'cyclic:user',
        },
        I: {
          item: 'draconicevolution:infused_obsidian',
        },
        J: {
          item: 'cyclic:charm_creeper',
        },
        K: {
          item: 'projectexpansion:blue_matter',
        },
        L: {
          item: 'mutantmonsters:creeper_shard',
        },
        M: {
          item: 'enderio:extraction_speed_upgrade_4',
        },
        N: {
          item: 'projecte:condenser_mk1',
        },
        O: {
          item: 'extradisks:1048576k_storage_disk',
        },
        P: {
          item: 'extradisks:1048576k_storage_disk',
        },
      },
      result: {
        item: 'projecte:condenser_mk2',
      },
    })
    .id('projecte:condenser_mk2');
});
