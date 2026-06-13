priority: 1;
MMEvents.createStructures((event) => {
  event
    .create('mm:resource_foundry_structure')
    .controllerId('mm:resource_foundry_controller')
    .name('Resource Foundry')
    .layout((a) => {
      a.layer([' BBBBB ', 'ADDDDDA', 'BEFEGEB', 'ADDDDDA', ' BBBBB ']);
      a.layer([' ILLLI ', 'HJJJJJR', 'HKMOMKR', 'HJJJJJR', ' INPQI ']);
      a.layer([' ITVTI ', 'HJJJJJR', 'HSUOUSR', 'HJJJJJR', ' ITCTI ']);
      a.layer([' BBBBB ', 'BDDDDDB', 'BDGDFDB', 'BDDDDDB', ' BBBBB '])
        .key('A', {
          block: 'enderio:dark_steel_block',
        })
        .key('B', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit',
        })
        .key('D', {
          block: 'kubejs:starmetal_block',
        })
        .key('E', {
          block: 'mm:gigantic_energy_port_input',
        })
        .key('F', {
          block: 'botanicalextramachinery:shadow_dragonstone_block',
        })
        .key('G', {
          block: 'mysticalexpansion:divinium_gemstone_block',
        })
        .key('H', {
          block: 'mm:super_compressed_titanic_item_port_input',
        })
        .key('I', {
          block: 'bloodmagic:dungeon_metal',
        })
        .key('J', {
          block: 'advancednetherite:netherite_diamond_block',
        })
        .key('K', {
          block: 'mekanism_extras:block_naquadah',
        })
        .key('L', {
          block: 'kubejs:empowered_super_block',
        })
        .key('M', {
          block: 'justdirethings:time_crystal_block',
        })
        .key('N', {
          block: 'allthemodium:allthemodium_block',
        })
        .key('O', {
          block: 'crazyae2addons:super_singularity_block',
        })
        .key('P', {
          block: 'allthemodium:vibranium_block',
        })
        .key('Q', {
          block: 'allthemodium:unobtainium_block',
        })
        .key('R', {
          block: 'mm:super_compressed_titanic_item_port_output',
        })
        .key('S', {
          block: 'pneumaticcraft:smooth_plastic_brick_blue',
        })
        .key('T', {
          block: 'evolvedmekanism:block_alloy_exoversal',
        })
        .key('U', {
          block: 'kubejs:sculk_alloy_block',
        })
        .key('V', {
          block: 'mm:gigantic_fluid_port_input',
        });
    });
});
