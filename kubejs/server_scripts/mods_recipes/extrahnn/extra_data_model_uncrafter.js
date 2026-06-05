ServerEvents.recipes(event => {
  event.shapeless(
    Item.of('kubejs:extra_data_model_uncrafter'),
    [
      'extrahnn:extra_data_model',
      Item.of('kubejs:extra_data_model_uncrafter').strongNBT()
    ]
  )
    .modifyResult((grid, result) => {
      let extraModel = grid.find(Item.of('extrahnn:extra_data_model'));
      
      if (!extraModel || !extraModel.nbt) {
        return Item.of('kubejs:extra_data_model_uncrafter');
      }
      
      let data = extraModel.nbt;
      return Item.of('kubejs:extra_data_model_uncrafter').withNBT(data);
    });

  event.shapeless(
    'extrahnn:extra_data_model',
    [
      'kubejs:extra_data_model_uncrafter'
    ]
  )
    .modifyResult((grid, result) => {
      let extraModelUncrafter = grid.find(Item.of('kubejs:extra_data_model_uncrafter'));

      if (!extraModelUncrafter || !extraModelUncrafter.nbt) {
        return 'extrahnn:extra_data_model';
      }

      let data = extraModelUncrafter.nbt;
      return Item.of('extrahnn:extra_data_model').withNBT(data);
    });

  event.shapeless(
    'kubejs:extra_data_model_uncrafter',
    [
      'extrahnn:blank_extra_data_model'
    ]
  )
});