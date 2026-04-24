priority: 1;
MMEvents.createStructures((event) => {
  event
    .create('mm:advanced_awakening_altar_structure1')
    .controllerId('mm:advanced_awakening_altar_controller')
    .name('Advanced Awakening Altar Tier 1')
    .layout((a) => {
      a.layer([
        '           ',
        '    AAA    ',
        '  AAAAAAA  ',
        '  AAAAAAA  ',
        ' AAAAAAAAA ',
        ' AAAAAAAAA ',
        ' AAAAAAAAA ',
        '  AAAAAAA  ',
        '  AAAAAAA  ',
        '    AAA    ',
        '           ',
      ])
        .layer([
          '   BBBBB   ',
          ' BBBKKKBBB ',
          ' BKKKDKKKB ',
          'BBKKKKKKKBB',
          'BKKKKKKKKKB',
          'BKDKKEKKDKB',
          'BKKKKKKKKKB',
          'BBKKKKKKKBB',
          ' BKKKDKKKB ',
          ' BBBKKKBBB ',
          '   BBBBB   ',
        ])
        .layer([
          '           ',
          '    FFF    ',
          '  FFFGFFF  ',
          '  FG   GF  ',
          ' FF     FF ',
          ' FG  G  GF ',
          ' FF     FF ',
          '  FG   GF  ',
          '  FFFGFFF  ',
          '    FFF    ',
          '           ',
        ])
        .layer([
          '           ',
          '    FFF    ',
          '  FFFHFFF  ',
          '  FI   IF  ',
          ' FF     FF ',
          ' FH  J  HF ',
          ' FF     FF ',
          '  FI   IF  ',
          '  FFFHFFF  ',
          '    FCF    ',
          '           ',
        ])
        .layer([
          '           ',
          '    FFF    ',
          '  FFFGFFF  ',
          '  FG   GF  ',
          ' FF     FF ',
          ' FG  G  GF ',
          ' FF     FF ',
          '  FG   GF  ',
          '  FFFGFFF  ',
          '    FFF    ',
          '           ',
        ])
        .layer([
          '   B321B   ',
          ' BBBKKKBBB ',
          ' BKKKDKKKB ',
          'BBKKKKKKKBB',
          '1KKKKKKKKK3',
          '2KDKKEKKDK2',
          '3KKKKKKKKK1',
          'BBKKKKKKKBB',
          ' BKKKDKKKB ',
          ' BBBKKKBBB ',
          '   B123B   ',
        ])
        .layer([
          '           ',
          '    AAA    ',
          '  AAAAAAA  ',
          '  AAAAAAA  ',
          ' AAAAAAAAA ',
          ' AAAAAAAAA ',
          ' AAAAAAAAA ',
          '  AAAAAAA  ',
          '  AAAAAAA  ',
          '    AAA    ',
          '           ',
        ])
        .key('A', {
          block: 'chisel_chipped_integration:factory_ice_ice_ice',
        })
        .key('B', {
          block: 'chisel_chipped_integration:factory_blue_wireframe',
        })
        .key('K', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit',
        })
        .key('D', {
          block: 'mysticalagriculture:awakened_supremium_ingot_block',
        })
        .key('E', {
          block: 'draconicevolution:awakened_draconium_block',
        })
        .key('1', {
          portType: 'mm:item',
          input: true,
        })
        .key('2', {
          portType: 'mm:energy',
          input: true,
        })
        .key('3', {
          portType: 'mm:item',
          input: false,
        })
        .key('F', {
          block: 'tconstruct:clear_glass',
        })
        .key('G', {
          block: 'minecraft:end_rod',
        })
        .key('H', {
          block: 'mysticalagriculture:awakening_pedestal',
        })
        .key('I', {
          block: 'mysticalagriculture:essence_vessel',
        })
        .key('J', {
          block: 'mysticalagriculture:awakening_altar',
        });
    });

  event
    .create('mm:advanced_awakening_altar_structure2')
    .controllerId('mm:advanced_awakening_altar_controller')
    .name('Advanced Awakening Altar Tier 2')
    .layout((a) => {
      a.layer([
        '           ',
        '    AAA    ',
        '  AAAAAAA  ',
        '  AAAAAAA  ',
        ' AAAAAAAAA ',
        ' AAAAAAAAA ',
        ' AAAAAAAAA ',
        '  AAAAAAA  ',
        '  AAAAAAA  ',
        '    AAA    ',
        '           ',
      ])
        .layer([
          '   BBBBB   ',
          ' BBBKKKBBB ',
          ' BKKKDKKKB ',
          'BBKKKKKKKBB',
          'BKKKKKKKKKB',
          'BKDKKEKKDKB',
          'BKKKKKKKKKB',
          'BBKKKKKKKBB',
          ' BKKKDKKKB ',
          ' BBBKKKBBB ',
          '   BBBBB   ',
        ])
        .layer([
          '           ',
          '    FFF    ',
          '  FFFGFFF  ',
          '  FG   GF  ',
          ' FF     FF ',
          ' FG  G  GF ',
          ' FF     FF ',
          '  FG   GF  ',
          '  FFFGFFF  ',
          '    FFF    ',
          '           ',
        ])
        .layer([
          '           ',
          '    FFF    ',
          '  FFFHFFF  ',
          '  FI   IF  ',
          ' FF     FF ',
          ' FH  J  HF ',
          ' FF     FF ',
          '  FI   IF  ',
          '  FFFHFFF  ',
          '    FCF    ',
          '           ',
        ])
        .layer([
          '           ',
          '    FFF    ',
          '  FFFGFFF  ',
          '  FG   GF  ',
          ' FF     FF ',
          ' FG  G  GF ',
          ' FF     FF ',
          '  FG   GF  ',
          '  FFFGFFF  ',
          '    FFF    ',
          '           ',
        ])
        .layer([
          '   B321B   ',
          ' BBBKKKBBB ',
          ' BKKKDKKKB ',
          'BBKKKKKKKBB',
          '1KKKKKKKKK3',
          '2KDKKEKKDK2',
          '3KKKKKKKKK1',
          'BBKKKKKKKBB',
          ' BKKKDKKKB ',
          ' BBBKKKBBB ',
          '   B123B   ',
        ])
        .layer([
          '           ',
          '    AAA    ',
          '  AAAAAAA  ',
          '  AAAAAAA  ',
          ' AAAAAAAAA ',
          ' AAAAAAAAA ',
          ' AAAAAAAAA ',
          '  AAAAAAA  ',
          '  AAAAAAA  ',
          '    AAA    ',
          '           ',
        ])
        .key('A', {
          block: 'chisel_chipped_integration:factory_ice_ice_ice',
        })
        .key('B', {
          block: 'chisel_chipped_integration:factory_blue_wireframe',
        })
        .key('K', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit',
        })
        .key('D', {
          block: 'mysticalagriculture:awakened_supremium_ingot_block',
        })
        .key('E', {
          block: 'botanicalextramachinery:crimson_dragonstone_block',
        })
        .key('1', {
          portType: 'mm:item',
          input: true,
        })
        .key('2', {
          portType: 'mm:energy',
          input: true,
        })
        .key('3', {
          portType: 'mm:item',
          input: false,
        })
        .key('F', {
          block: 'tconstruct:clear_glass',
        })
        .key('G', {
          block: 'minecraft:end_rod',
        })
        .key('H', {
          block: 'mysticalagriculture:awakening_pedestal',
        })
        .key('I', {
          block: 'mysticalagriculture:essence_vessel',
        })
        .key('J', {
          block: 'mysticalagriculture:awakening_altar',
        });
    });
});
