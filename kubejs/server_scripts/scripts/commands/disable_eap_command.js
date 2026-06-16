ServerEvents.command((event) => {
  const command = event.input;
  const commandArguments = command.split(' ');
  if (commandArguments[0] === 'eap') {
    event.cancel();
  }
});
