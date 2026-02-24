priority: 1;
MMEvents.createStructures((event) => {
  event
    .create('mm:loot_fabrication_plant_structure')
    .controllerId('mm:loot_fabrication_plant_controller')
    .name('Loot Fabrication Plant')
    .layout((a) => {
      a.layer(['ABBBBBA', 'BEEEEEB', 'BEEOEEB', 'BEEEEEB', 'ABBBBBA'])
        .layer(['ADEEEDA', 'DF   GD', 'E     E', 'DH   ID', 'ADENEDA'])
        .layer(['MDEEEDM', 'D     D', 'E     E', 'D     D', 'MDEEEDM'])
        .layer(['ADEEEDA', 'DF   GD', 'E     E', 'DH   ID', 'ALECEJA'])
        .layer(['ABBBBBA', 'BBBBBBB', 'BBBBBBB', 'BBBBBBB', 'ABBBBBA'])
        .key('A', {
          block: 'evolvedmekanism:apt_casing',
        })
        .key('B', {
          block: 'actuallyadditions:ender_casing',
        })
        .key('D', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit',
        })
        .key('E', {
          block: 'tconstruct:clear_glass',
        })
        .key('F', {
          block: 'extrahnn:ultimate_loot_fabricator_v4',
        })
        .key('G', {
          block: 'extrahnn:ultimate_sim_chamber_v4',
        })
        .key('H', {
          block: 'extrahnn:simulator_modeling',
        })
        .key('I', {
          block: 'extrahnn:merger_camera',
        })
        .key('J', {
          block: 'mm:compressed_titanic_item_port_output'
        })
        .key('L', {
          portType: 'mm:item',
          input: true,
        })
        .key('M', {
          block: 'chisel_chipped_integration:laboratory_small_steel',
        })
        .key('N', {
          block: 'mm:gigantic_energy_port_input'
        })
        .key('O', {
          block: 'mekanism:block_refined_glowstone',
        });
    });
});
