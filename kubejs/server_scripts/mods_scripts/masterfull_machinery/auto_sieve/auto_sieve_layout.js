priority: 1;
MMEvents.createStructures((event) => {
  event
    .create('mm:auto_sieve_structure1')
    .controllerId('mm:auto_sieve_controller')
    .name('Auto Sieve Tier 1')
    .layout((a) => {
      a.layer(['51115', '12221', '12921', '12221', '51115'])
        .layer(['12221', '2   2', '2 A 2', '2   2', '12721'])
        .layer(['14231', '28882', '68886', '28882', '13C41'])
        .layer(['11111', '11111', '11111', '11111', '11111'])
        .key('1', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit',
        })
        .key('2', {
          block: 'tconstruct:clear_glass',
        })
        .key('3', {
          portType: 'mm:item',
          input: true,
        })
        .key('4', {
          portType: 'mm:item',
          input: false,
        })
        .key('5', {
          block: 'chisel_chipped_integration:technical_fan',
        })
        .key('6', {
          portType: 'mm:energy',
          input: true,
        })
        .key('7', {
          block: 'advancednetherite:netherite_diamond_block',
        })
        .key('8', {
          block: 'kubejs:auto_mechanical_sieve',
        })
        .key('9', {
          block: 'mekanism:block_refined_glowstone',
        })
        .key('A', {
          block: 'minecraft:air',
        });
    });

  event
    .create('mm:auto_sieve_structure2')
    .controllerId('mm:auto_sieve_controller')
    .name('Auto Sieve Tier 2')
    .layout((a) => {
      a.layer(['51115', '12221', '12921', '12221', '51115'])
        .layer(['12221', '2   2', '2 A 2', '2   2', '12721'])
        .layer(['14231', '28882', '68886', '28882', '13C41'])
        .layer(['11111', '11111', '11111', '11111', '11111'])
        .key('1', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit',
        })
        .key('2', {
          block: 'tconstruct:clear_glass',
        })
        .key('3', {
          portType: 'mm:item',
          input: true,
        })
        .key('4', {
          portType: 'mm:item',
          input: false,
        })
        .key('5', {
          block: 'chisel_chipped_integration:technical_fan',
        })
        .key('6', {
          portType: 'mm:energy',
          input: true,
        })
        .key('7', {
          block: 'advancednetherite:netherite_diamond_block',
        })
        .key('8', {
          block: 'kubejs:auto_mechanical_sieve',
        })
        .key('9', {
          block: 'mekanism:block_refined_glowstone',
        })
        .key('A', {
          block: 'voidminers:citrinetine_block',
        });
    });

  event
    .create('mm:auto_sieve_structure3')
    .controllerId('mm:auto_sieve_controller')
    .name('Auto Sieve Tier 3')
    .layout((a) => {
      a.layer(['51115', '12221', '12921', '12221', '51115'])
        .layer(['12221', '2   2', '2 A 2', '2   2', '12721'])
        .layer(['14231', '28882', '68886', '28882', '13C41'])
        .layer(['11111', '11111', '11111', '11111', '11111'])
        .key('1', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit',
        })
        .key('2', {
          block: 'tconstruct:clear_glass',
        })
        .key('3', {
          portType: 'mm:item',
          input: true,
        })
        .key('4', {
          portType: 'mm:item',
          input: false,
        })
        .key('5', {
          block: 'chisel_chipped_integration:technical_fan',
        })
        .key('6', {
          portType: 'mm:energy',
          input: true,
        })
        .key('7', {
          block: 'advancednetherite:netherite_diamond_block',
        })
        .key('8', {
          block: 'kubejs:auto_mechanical_sieve',
        })
        .key('9', {
          block: 'mekanism:block_refined_glowstone',
        })
        .key('A', {
          block: 'voidminers:amethystine_block',
        });
    });

  event
    .create('mm:auto_sieve_structure4')
    .controllerId('mm:auto_sieve_controller')
    .name('Auto Sieve Tier 4')
    .layout((a) => {
      a.layer(['51115', '12221', '12921', '12221', '51115'])
        .layer(['12221', '2   2', '2 A 2', '2   2', '12721'])
        .layer(['14231', '28882', '68886', '28882', '13C41'])
        .layer(['11111', '11111', '11111', '11111', '11111'])
        .key('1', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit',
        })
        .key('2', {
          block: 'tconstruct:clear_glass',
        })
        .key('3', {
          portType: 'mm:item',
          input: true,
        })
        .key('4', {
          portType: 'mm:item',
          input: false,
        })
        .key('5', {
          block: 'chisel_chipped_integration:technical_fan',
        })
        .key('6', {
          portType: 'mm:energy',
          input: true,
        })
        .key('7', {
          block: 'advancednetherite:netherite_diamond_block',
        })
        .key('8', {
          block: 'kubejs:auto_mechanical_sieve',
        })
        .key('9', {
          block: 'mekanism:block_refined_glowstone',
        })
        .key('A', {
          block: 'botanicalextramachinery:crimson_dragonstone_block',
        });
    });
});
