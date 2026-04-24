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
});
