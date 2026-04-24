ServerEvents.recipes((event) => {
  function enderCrafter (event, inputs, outputCount, outputItem) {
    const pattern = ['ABC', 'DEF', 'GHI'];
    const key = {};

    'ABCDEFGHI'.split('').forEach((char, index) => {
      const value = inputs[index];
      key[char] = value.startsWith('#')
        ? { tag: value.substring(1) }
        : { item: value };
    });

    event
      .custom({
        type: 'extendedcrafting:shaped_ender_crafter',
        pattern: pattern,
        key: key,
        result: {
          item: outputItem,
          count: outputCount,
        },
      })
      .id('ender_crafter_' + outputItem.replace(/[:]/g, '_').toLowerCase());
  }

  function enderCrafter2 (event, inputs, outputItem) {
    event
      .custom({
        type: 'extendedcrafting:shaped_ender_crafter',
        pattern: [' 0 ', '010', ' 0 '],
        key: {
          0: {
            item: inputs[0],
          },
          1: {
            item: inputs[1],
          },
        },
        result: {
          item: outputItem,
          count: 4,
        },
      })
      .id('ender_crafter_' + outputItem.replace(/[:]/g, '_').toLowerCase());
  }

  function fluxCrafter (event, inputs, outputItem) {
    event
      .custom({
        type: 'extendedcrafting:shaped_flux_crafter',
        powerRequired: 400000,
        pattern: [' 0 ', '010', ' 0 '],
        key: {
          0: {
            item: inputs[0],
          },
          1: {
            item: inputs[1],
          },
        },
        result: {
          item: outputItem,
          count: 4,
        },
      })
      .id('flux_crafter_' + outputItem.replace(/[:]/g, '_').toLowerCase());
  }

  enderCrafter(
    event,
    [
      'bloodmagic:blankrune',
      'thermal:enderium_ingot',
      'bloodmagic:blankrune',
      'thermal:enderium_ingot',
      'extendedcrafting:enhanced_redstone_ingot',
      'thermal:enderium_ingot',
      'actuallyadditions:empowered_void_crystal',
      'thermal:enderium_ingot',
      'actuallyadditions:empowered_void_crystal',
    ],
    4,
    'extendedcrafting:black_iron_ingot'
  );

  enderCrafter(
    event,
    [
      'kubejs:compressed_slate',
      'thermal:enderium_block',
      'kubejs:compressed_slate',
      'thermal:enderium_block',
      'extendedcrafting:enhanced_redstone_ingot_block',
      'thermal:enderium_block',
      'actuallyadditions:empowered_void_crystal_block',
      'thermal:enderium_block',
      'actuallyadditions:empowered_void_crystal_block',
    ],
    4,
    'extendedcrafting:black_iron_block'
  );

  enderCrafter(
    event,
    [
      'actuallyadditions:empowered_enori_crystal_block',
      'actuallyadditions:empowered_restonia_crystal_block',
      'actuallyadditions:empowered_palis_crystal_block',
      'actuallyadditions:empowered_void_crystal_block',
      'actuallyadditions:empowered_diamatine_crystal_block',
      'actuallyadditions:empowered_emeradic_crystal_block',
      'actuallyadditions:empowered_enori_crystal_block',
      'actuallyadditions:empowered_restonia_crystal_block',
      'actuallyadditions:empowered_palis_crystal_block',
    ],
    2,
    'kubejs:empowered_super_block'
  );

  enderCrafter2(
    event,
    ['cyclic:eye_redstone', 'extendedcrafting:nether_star_block'],
    'extendedcrafting:ender_star_block'
  );
  enderCrafter2(
    event,
    ['extendedcrafting:ender_ingot_block', 'extendedcrafting:ender_star_block'],
    'extendedcrafting:enhanced_ender_ingot_block'
  );
  fluxCrafter(
    event,
    [
      'extendedcrafting:redstone_ingot_block',
      'extendedcrafting:flux_star_block',
    ],
    'extendedcrafting:enhanced_redstone_ingot_block'
  );
  fluxCrafter(
    event,
    ['minecraft:gold_block', 'extendedcrafting:nether_star_block'],
    'extendedcrafting:flux_star_block'
  );
});
