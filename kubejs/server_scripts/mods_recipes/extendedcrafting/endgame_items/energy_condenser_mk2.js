ServerEvents.recipes((event) => {
  //Energy Condenser MK2
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABBBBBBBA',
        'BDEFFFEDB',
        'BEGDHDGEB',
        'BIJKHKJIB',
        'BILMNMLIB',
        'BIJKHKJIB',
        'BEGDHDGEB',
        'BDEIIIEDB',
        'ABBBBBBBA',
      ],
      key: {
        A: {
          item: 'extrastorage:storagepart_16384k',
        },
        B: {
          item: 'projecte:dark_matter',
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
          item: 'ae2omnicells:quantum_omni_cell_256m',
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
      },
      result: {
        item: 'projecte:condenser_mk2',
      },
    })
    .id('projecte:condenser_mk2');
});
