ServerEvents.recipes((event) => {
  exdeorum.removeDefaultSieveRecipes(event);
  event.remove({ type: 'exdeorum:compressed_sieve' });
  event.remove({ output: /exdeorum:.+_compressed_sieve/ });
});
