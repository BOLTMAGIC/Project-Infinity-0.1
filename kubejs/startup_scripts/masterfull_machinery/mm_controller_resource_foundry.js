MMEvents.registerControllers((event) => {
  event
    .create('resource_foundry_controller')
    .name('Resource Foundry Machine Controller')
    .type('mm:machine');
});
