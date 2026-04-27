StartupEvents.registry('block', (event) => {
  event
    .create('compressed_block_of_gunpowder')
    .displayName('Compressed Block of Gunpowder')
    .soundType('gravel')
    .hardness(0.8)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/compressed_block_of_gunpowder');

  event
    .create('infinity_9_block')
    .displayName('Infinity 9 Block')
    .soundType('metal')
    .hardness(1.2)
    .resistance(2.0)
    .textureAll('kubejs:block/silent/infinity_9_block');

  event
    .create('infinity_8_block')
    .displayName('Infinity 8 Block')
    .soundType('metal')
    .hardness(1.2)
    .resistance(2.0)
    .textureAll('kubejs:block/silent/infinity_8_block');

  event
    .create('compressed_slate')
    .displayName('Compressed Slate')
    .soundType('metal')
    .hardness(0.8)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/compressed_slate');

  event
    .create('compressed_hellforgedparts')
    .displayName('Compressed Hellforged Parts')
    .soundType('metal')
    .hardness(1.0)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/compressed_hellforgedparts');

  event
    .create('double_compressed_slate')
    .displayName('Double Compressed Slate')
    .soundType('metal')
    .hardness(0.8)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/double_compressed_slate');

  event
    .create('double_compressed_iron_block')
    .displayName('Double Compressed Iron Block')
    .soundType('metal')
    .hardness(0.8)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/double_compressed_iron_block');

  event
    .create('radiance_alloy_block')
    .displayName('Radiance Alloy Block')
    .soundType('metal')
    .hardness(0.8)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/radiance_alloy_block');

  event
    .create('thermonuclear_alloy_block')
    .displayName('Thermonuclear Alloy Block')
    .soundType('metal')
    .hardness(0.8)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/thermonuclear_alloy_block');

  event
    .create('shining_alloy_block')
    .displayName('Shining Alloy Block')
    .soundType('metal')
    .hardness(0.8)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/shining_alloy_block');

  event
    .create('spectrum_alloy_block')
    .displayName('Spectrum Alloy Block')
    .soundType('metal')
    .hardness(0.8)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/spectrum_alloy_block');

  event
    .create('triple_compressed_iron_block')
    .displayName('Triple Compressed Iron Block')
    .soundType('metal')
    .hardness(0.8)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/triple_compressed_iron_block');

  event
    .create('pink_slime_block')
    .displayName('Pink Slime Block')
    .soundType('metal')
    .hardness(0.8)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/pink_slime_block');

  event
    .create('compressed_glass')
    .displayName('Compressed Glass')
    .soundType('glass')
    .glassSoundType()
    .hardness(0.5)
    .resistance(0.7)
    .defaultCutout()
    .textureAll('kubejs:block/silent/compressed_glass');

  event
    .create('chaotic_essence_block')
    .displayName('§5Chaotic Essence Block')
    .soundType('metal')
    .hardness(1.5)
    .resistance(3.0)
    .textureAll('kubejs:block/silent/chaotic_essence_block')
    .tag('kubejs:chaotic_essence_block');

  event
    .create('starmetal_block')
    .displayName('§1Starmetal Block')
    .soundType('metal')
    .hardness(1.0)
    .resistance(1.5)
    .textureAll('kubejs:block/silent/starmetal_block')
    .tag('kubejs:starmetal_block');

  event
    .create('empowered_super_block')
    .displayName('§dEmpowered Super Block')
    .soundType('metal')
    .hardness(1.0)
    .resistance(1.5)
    .textureAll('kubejs:block/silent/empowered_super_block')
    .tag('kubejs:empowered_super_block');
  event
    .create('auto_mechanical_sieve')
    .displayName('Auto Mechanical Sieve')
    .soundType('metal')
    .hardness(1.0)
    .resistance(1.5)
    .textureAll('kubejs:block/silent/auto_mechanical_sieve')
    .tag('kubejs:auto_mechanical_sieve');

  event
    .create('fake_mob_masher')
    .displayName('Fake Mob Masher')
    .soundType('metal')
    .hardness(1.0)
    .resistance(1.0)
    .textureAll('kubejs:block/silent/fake_mob_masher');
});

StartupEvents.registry('block', (e) => {
  function createblock(e, input1, input2) {
    e.create(input1)
      .displayName(input2)
      .tag('forge:storage_blocks/' + input1)
      .tag('forge:storage_blocks')
      .tag('c:storage_blocks')
      .tagBlock('mineable/pickaxe')
      .soundType('metal')
      .resistance(6)
      .hardness(5)
      .requiresTool(true)
      .textureAll('kubejs:block/silent/' + input1);
  }

  createblock(e, 'arcmetal_block', 'Arcmetal Block');
  createblock(e, 'azure_electrum_block', 'Azure Electrum Block');
  createblock(e, 'azure_silver_block', 'Azure Silver Block');
  createblock(e, 'blaze_gold_block', 'Blaze Gold Block');
  createblock(e, 'bunny_steel_block', 'Bunny Steel Block');
  createblock(e, 'midnight_iron_block', 'Midnight Iron Block');
  createblock(e, 'plasteel_block', 'Plasteel Block');
  createblock(e, 'sculk_alloy_block', 'Sculk Alloy Block');
  createblock(e, 'solarmetal_block', 'Solarmetal Block');
  createblock(e, 'voidmetal_block', 'Voidmetal Block');

  function createore(e, input1, input2) {
    e.create(input1)
      .displayName(input2)
      .tagBlock('mineable/pickaxe')
      .soundType('metal')
      .resistance(6)
      .hardness(5)
      .requiresTool(true)
      .textureAll('kubejs:block/silent/' + input1);
  }

  createore(e, 'arcmetal_ore', 'Arcmetal Ore');
  createore(e, 'azure_silver_ore', 'Azure Silver Ore');
  createore(e, 'plasteel_ore', 'Plasteel Ore');
  createore(e, 'solarmetal_ore', 'Solarmetal Ore');
  createore(e, 'voidmetal_ore', 'Voidmetal Ore');
});

// Nuclearcraft
StartupEvents.registry('block', (e) => {
  function createblock(e, input1, input2) {
    e.create(input1)
      .displayName(input2)
      .tag('forge:storage_blocks/' + input1)
      .tag('forge:storage_blocks')
      .tag('c:storage_blocks')
      .tagBlock('mineable/pickaxe')
      .soundType('metal')
      .resistance(6)
      .hardness(5)
      .requiresTool(true)
      .textureAll('kubejs:block/silent/nuclearcraft/' + input1);
  }

  createblock(e, 'ferroboron_block', 'Ferroboron Block');
  createblock(e, 'hard_carbon_block', 'Hard Carbon Block');
  createblock(e, 'extreme_block', 'Extreme Block');
  createblock(e, 'tough_alloy_block', 'Tough Alloy Block');
});