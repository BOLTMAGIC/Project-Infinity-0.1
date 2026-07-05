MMEvents.registerControllers((event) => {
  event
    .create('prediction_chamber_controller')
    .name('Prediction Chamber Controller')
    .type('mm:machine')
    .recipeSelectionMode('round_robin_input_item');
});