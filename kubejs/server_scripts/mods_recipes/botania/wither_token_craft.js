ServerEvents.recipes(event => {

  event.shapeless(
    'kubejs:wither_token',
    [
      Item.of('hostilenetworks:data_model', '{data_model:{id:"hostilenetworks:wither"}}').weakNBT(),
    ]
  ).modifyResult((grid, result) => {

    let model = grid.find(Item.of('hostilenetworks:data_model'));

    return Item.of('kubejs:wither_token', {
      data_model: {
        data: model.nbt.data_model.data,
        id: model.nbt.data_model.id,
        iterations: model.nbt.data_model.iterations
      },
      self_aware: model.nbt.data_model.data >= 1254,
    })
  })

  event.shapeless(
    Item.of('hostilenetworks:data_model', '{data_model:{id:"hostilenetworks:wither"}}').weakNBT(),
    [
      'kubejs:wither_token',
    ]
  ).modifyResult((grid, result) => {

    let token = grid.find(Item.of('kubejs:wither_token'));

    return Item.of('hostilenetworks:data_model', {
      data_model: {
        data: token.nbt.data_model.data,
        id: token.nbt.data_model.id,
        iterations: token.nbt.data_model.iterations
      }
    })
  })
})
