priority: 1;
MMEvents.createStructures((event) => {
  event
    .create('mm:auto_crusher_structure1')
    .controllerId('mm:auto_crusher_controller')
    .name('Auto Crusher Tier 1')
    .layout((a) => {
      a.layer(['1A1', 'ABA', '1A1'])
        .layer(['171', '797', '171'])
        .layer(['171', '565', '171'])
        .layer(['181', '434', '1C1'])
        .layer(['121', '111', '121'])
        .key('1', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit',
        })
        .key('2', {
          portType: 'mm:fluid',
          input: true,
        })
        .key('3', {
          block: 'mekanism:ultimate_crushing_factory',
        })
        .key('4', {
          portType: 'mm:item',
          input: true,
        })
        .key('5', {
          portType: 'mm:item',
          input: false,
        })
        .key('6', {
          block: 'mekanism:ultimate_purifying_factory',
        })
        .key('7', {
          block: 'tconstruct:clear_glass',
        })
        .key('8', {
          portType: 'mm:energy',
          input: true,
        })
        .key('9', {
          block: 'mekanism:ultimate_enriching_factory',
        })
        .key('A', {
          block: 'chisel_chipped_integration:technical_fan',
        })
        .key('B', {
          block: 'mekanism:block_refined_glowstone',
        });
    });

  event
    .create('mm:auto_crusher_structure1.5')
    .controllerId('mm:auto_crusher_controller')
    .name('Auto Crusher Tier 1.5')
    .layout((a) => {
      a.layer([
        'FFFFFFF',
        'FFFFFFF',
        'FFFFFFF',
        'FFFFFFF',
        'FFFFFFF',
        'FFFFFFF',
        'FFFFFFF',
      ])
        .layer([
          'DDDDDDD',
          'DDDDDDD',
          'DDDDDDD',
          'DDDDDDD',
          'DDDDDDD',
          'DDDDDDD',
          'DDDDDDD',
        ])
        .layer([
          '       ',
          '       ',
          '  1A1  ',
          '  ABA  ',
          '  1A1  ',
          '       ',
          '       ',
        ])
        .layer([
          '       ',
          '       ',
          '  171  ',
          '  797  ',
          '  1E1  ',
          '       ',
          '       ',
        ])
        .layer([
          '       ',
          '       ',
          '  171  ',
          '  565  ',
          '  171  ',
          '       ',
          '       ',
        ])
        .layer([
          '       ',
          '       ',
          '  181  ',
          '  434  ',
          '  1C1  ',
          '       ',
          '       ',
        ])
        .layer([
          '       ',
          '       ',
          '  121  ',
          '  111  ',
          '  121  ',
          '       ',
          '       ',
        ])
        .layer([
          'DDDDDDD',
          'DDDDDDD',
          'DDDDDDD',
          'DDDDDDD',
          'DDDDDDD',
          'DDDDDDD',
          'DDDDDDD',
        ])
        .layer([
          'FFFFFFF',
          'FFFFFFF',
          'FFFFFFF',
          'FFFFFFF',
          'FFFFFFF',
          'FFFFFFF',
          'FFFFFFF',
        ])
        .key('1', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit',
        })
        .key('2', {
          portType: 'mm:fluid',
          input: true,
        })
        .key('3', {
          block: 'mekanism:ultimate_crushing_factory',
        })
        .key('4', {
          portType: 'mm:item',
          input: true,
        })
        .key('5', {
          portType: 'mm:item',
          input: false,
        })
        .key('6', {
          block: 'mekanism:ultimate_purifying_factory',
        })
        .key('7', {
          block: 'tconstruct:clear_glass',
        })
        .key('8', {
          portType: 'mm:energy',
          input: true,
        })
        .key('9', {
          block: 'mekanism:ultimate_enriching_factory',
        })
        .key('A', {
          block: 'chisel_chipped_integration:technical_fan',
        })
        .key('B', {
          block: 'mekanism:block_refined_glowstone',
        })
        .key('F', {
          block: 'minecraft:blue_ice',
        })
        .key('D', {
          block: 'exdeorum:compressed_blackstone',
        })
        .key('E', {
          block: 'thermal:device_rock_gen',
        });
    });

  event
    .create('mm:auto_crusher_structure2')
    .controllerId('mm:auto_crusher_controller')
    .name('Auto Crusher Tier 2')
    .layout((a) => {
      a.layer(['1A1', 'ABA', '1A1'])
        .layer(['171', '797', '171'])
        .layer(['171', '565', '171'])
        .layer(['181', '434', '1C1'])
        .layer(['121', '1D1', '121'])
        .key('1', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit',
        })
        .key('2', {
          portType: 'mm:fluid',
          input: true,
        })
        .key('3', {
          block: 'evolvedmekanism:overclocked_crushing_factory',
        })
        .key('4', {
          portType: 'mm:item',
          input: true,
        })
        .key('5', {
          portType: 'mm:item',
          input: false,
        })
        .key('6', {
          block: 'evolvedmekanism:overclocked_purifying_factory',
        })
        .key('7', {
          block: 'tconstruct:clear_glass',
        })
        .key('8', {
          portType: 'mm:energy',
          input: true,
        })
        .key('9', {
          block: 'evolvedmekanism:overclocked_enriching_factory',
        })
        .key('A', {
          block: 'chisel_chipped_integration:technical_fan',
        })
        .key('B', {
          block: 'mekanism:block_refined_glowstone',
        })
        .key('D', {
          block: 'voidminers:azurine_block',
        });
    });

  event
    .create('mm:auto_crusher_structure3')
    .controllerId('mm:auto_crusher_controller')
    .name('Auto Crusher Tier 3')
    .layout((a) => {
      a.layer(['1A1', 'ABA', '1A1'])
        .layer(['171', '797', '171'])
        .layer(['171', '565', '171'])
        .layer(['181', '434', '1C1'])
        .layer(['121', '1D1', '121'])
        .key('1', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit',
        })
        .key('2', {
          portType: 'mm:fluid',
          input: true,
        })
        .key('3', {
          block: 'evolvedmekanism:multiversal_crushing_factory',
        })
        .key('4', {
          portType: 'mm:item',
          input: true,
        })
        .key('5', {
          block: 'mm:titanic_item_port_output',
        })
        .key('6', {
          block: 'evolvedmekanism:multiversal_purifying_factory',
        })
        .key('7', {
          block: 'tconstruct:clear_glass',
        })
        .key('8', {
          portType: 'mm:energy',
          input: true,
        })
        .key('9', {
          block: 'evolvedmekanism:multiversal_enriching_factory',
        })
        .key('A', {
          block: 'chisel_chipped_integration:technical_fan',
        })
        .key('B', {
          block: 'mekanism:block_refined_glowstone',
        })
        .key('D', {
          block: 'botanicalextramachinery:crimson_dragonstone_block',
        });
    });
});
