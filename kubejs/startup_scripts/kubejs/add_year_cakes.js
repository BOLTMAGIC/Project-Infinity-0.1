let $CakeBlock = Java.loadClass('net.minecraft.world.level.block.CakeBlock')
let $BlockProperties = Java.loadClass('net.minecraft.world.level.block.state.BlockBehaviour$Properties')
let $BlockItem = Java.loadClass('net.minecraft.world.item.BlockItem')
const $Item = Java.loadClass('net.minecraft.world.item.Item')

let year_1_cake
let year_2_cake
let year_3_cake
let year_4_cake
let year_5_cake
let year_6_cake
let year_7_cake
let year_8_cake
let year_9_cake
let year_10_cake
let year_11_cake
let year_12_cake

StartupEvents.registry('block', event => {
  year_1_cake = event.createCustom(
    'kubejs:year_1_cake',
    () => new $CakeBlock(new $BlockProperties().copy(Block.getBlock('cake')))
  )
  year_2_cake = event.createCustom(
    'kubejs:year_2_cake',
    () => new $CakeBlock(new $BlockProperties().copy(Block.getBlock('cake')))
  )
  year_3_cake = event.createCustom(
    'kubejs:year_3_cake',
    () => new $CakeBlock(new $BlockProperties().copy(Block.getBlock('cake')))
  )
  year_4_cake = event.createCustom(
    'kubejs:year_4_cake',
    () => new $CakeBlock(new $BlockProperties().copy(Block.getBlock('cake')))
  )
  year_5_cake = event.createCustom(
    'kubejs:year_5_cake',
    () => new $CakeBlock(new $BlockProperties().copy(Block.getBlock('cake')))
  )
  year_6_cake = event.createCustom(
    'kubejs:year_6_cake',
    () => new $CakeBlock(new $BlockProperties().copy(Block.getBlock('cake')))
  )
  year_7_cake = event.createCustom(
    'kubejs:year_7_cake',
    () => new $CakeBlock(new $BlockProperties().copy(Block.getBlock('cake')))
  )
  year_8_cake = event.createCustom(
    'kubejs:year_8_cake',
    () => new $CakeBlock(new $BlockProperties().copy(Block.getBlock('cake')))
  )
  year_9_cake = event.createCustom(
    'kubejs:year_9_cake',
    () => new $CakeBlock(new $BlockProperties().copy(Block.getBlock('cake')))
  )
  year_10_cake = event.createCustom(
    'kubejs:year_10_cake',
    () => new $CakeBlock(new $BlockProperties().copy(Block.getBlock('cake')))
  )
  year_11_cake = event.createCustom(
    'kubejs:year_11_cake',
    () => new $CakeBlock(new $BlockProperties().copy(Block.getBlock('cake')))
  )
  year_12_cake = event.createCustom(
    'kubejs:year_12_cake',
    () => new $CakeBlock(new $BlockProperties().copy(Block.getBlock('cake')))
  )
})

StartupEvents.registry('item', event => {
  event.createCustom(
    'kubejs:year_1_cake',
    () => new $BlockItem(year_1_cake.get(), new $Item.Properties())
  )
  event.createCustom(
    'kubejs:year_2_cake',
    () => new $BlockItem(year_2_cake.get(), new $Item.Properties())
  )
  event.createCustom(
    'kubejs:year_3_cake',
    () => new $BlockItem(year_3_cake.get(), new $Item.Properties())
  )
  event.createCustom(
    'kubejs:year_4_cake',
    () => new $BlockItem(year_4_cake.get(), new $Item.Properties())
  )
  event.createCustom(
    'kubejs:year_5_cake',
    () => new $BlockItem(year_5_cake.get(), new $Item.Properties())
  )
  event.createCustom(
    'kubejs:year_6_cake',
    () => new $BlockItem(year_6_cake.get(), new $Item.Properties())
  )
  event.createCustom(
    'kubejs:year_7_cake',
    () => new $BlockItem(year_7_cake.get(), new $Item.Properties())
  )
  event.createCustom(
    'kubejs:year_8_cake',
    () => new $BlockItem(year_8_cake.get(), new $Item.Properties())
  )
  event.createCustom(
    'kubejs:year_9_cake',
    () => new $BlockItem(year_9_cake.get(), new $Item.Properties())
  )
  event.createCustom(
    'kubejs:year_10_cake',
    () => new $BlockItem(year_10_cake.get(), new $Item.Properties())
  )
  event.createCustom(
    'kubejs:year_11_cake',
    () => new $BlockItem(year_11_cake.get(), new $Item.Properties())
  )
  event.createCustom(
    'kubejs:year_12_cake',
    () => new $BlockItem(year_12_cake.get(), new $Item.Properties())
  )
})
