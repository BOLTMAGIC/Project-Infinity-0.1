ServerEvents.recipes((event) => {
  event.shaped(
    Item.of('botania:infinite_fruit', 1),
    [
      'A  ',
      '   ',
      '   '
    ],
    {
      A: 'botania:dice'
    }
  ).noShrink()
  event.shaped(
    Item.of('botania:king_key', 1),
    [
      ' A ',
      '   ',
      '   '
    ],
    {
      A: 'botania:dice'
    }
  ).noShrink()
  event.shaped(
    Item.of('botania:flugel_eye', 1),
    [
      '  A',
      '   ',
      '   '
    ],
    {
      A: 'botania:dice'
    }
  ).noShrink()
  event.shaped(
    Item.of('botania:thor_ring', 1),
    [
      '   ',
      'A  ',
      '   '
    ],
    {
      A: 'botania:dice'
    }
  ).noShrink()
  event.shaped(
    Item.of('botania:odin_ring', 1),
    [
      '   ',
      ' A ',
      '   '
    ],
    {
      A: 'botania:dice'
    }
  ).noShrink()
  event.shaped(
    Item.of('botania:loki_ring', 1),
    [
      '   ',
      '  A',
      '   '
    ],
    {
      A: 'botania:dice'
    }
  ).noShrink()

  event.smelting('actuallyadditions:black_quartz', 'botania:quartz_dark');

  create3x3(event, 'botania:blacker_lotus', [
    'actuallyadditions:empowered_enori_crystal',
    Item.of(
      'hostilenetworks:prediction',
      '{data_model:{id:"hostilenetworks:botania/gaia_spirit"}}'
    ).weakNBT(),
    'actuallyadditions:empowered_diamatine_crystal',
    'botanicalextramachinery:crystal_dragonstone',
    'botania:black_lotus',
    'botanicalextramachinery:crystal_dragonstone',
    'actuallyadditions:empowered_emeradic_crystal',
    'botanicalextramachinery:crystal_dragonstone',
    'actuallyadditions:empowered_void_crystal',
  ]);

  create2x2same(event, 'minecraft:cobblestone', ['botania:pebble']);
});
