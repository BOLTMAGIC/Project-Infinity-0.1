ServerEvents.recipes((event) => {
  //Chaos Heart
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABBCBBA',
        'BDDDDDB',
        'BDEFEDB',
        'CDFGFDC',
        'HDEFEDH',
        'HDDDDDH',
        'AHHCHHA',
      ],
      key: {
        A: {
          item: 'draconicevolution:draconium_core',
        },
        B: {
          item: 'draconicevolution:wyvern_core',
        },
        C: {
          item: 'born_in_chaos_v1:ethereal_spirit',
        },
        D: {
          item: 'draconicevolution:small_chaos_frag',
        },
        E: {
          item: 'bloodmagic:ritualstone',
        },
        F: {
          item: 'armorplus:soul_slayer',
        },
        G: {
          item: 'draconicevolution:chaotic_core',
        },
        H: {
          item: 'draconicevolution:awakened_core',
        },
      },
      result: {
        item: 'draconicadditions:chaos_heart',
      },
    })
    .id('draconicadditions:chaos_heart');
});
