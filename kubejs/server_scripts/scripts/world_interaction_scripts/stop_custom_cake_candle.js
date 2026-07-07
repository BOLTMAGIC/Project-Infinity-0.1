const cakeBlacklist = [
  'kubejs:year_1_cake',
  'kubejs:year_2_cake',
  'kubejs:year_3_cake',
  'kubejs:year_4_cake',
  'kubejs:year_5_cake',
  'kubejs:year_6_cake',
  'kubejs:year_7_cake',
  'kubejs:year_8_cake',
  'kubejs:year_9_cake',
  'kubejs:year_10_cake',
  'kubejs:year_11_cake',
  'kubejs:year_12_cake'
]

cakeBlacklist.forEach(cake => {
  BlockEvents.rightClicked(cake, event => {
    if (event.item.hasTag('minecraft:candles')) event.cancel()
  })
})
