ServerEvents.recipes(event => {
  event.shapeless('kubejs:universal_wireless_terminal_uncrafter', ['ae2wtlib:wireless_universal_terminal'])
    .modifyResult((grid, result) => {

    let model = grid.find(Item.of('ae2wtlib:wireless_universal_terminal'));

    let data = model.nbt;

    delete data.currentTerminal;
    delete data.internalMaxPower;

    return Item.of('kubejs:universal_wireless_terminal_uncrafter', `${data}`)
  })
})
