ServerEvents.recipes((event) => {
  shapeless(event, 'refinedstorage:creative_storage_block', [
    'refinedstorage:creative_storage_disk',
    'refinedstorage:machine_casing',
  ]);

  shapeless(event, 'refinedstorage:creative_fluid_storage_block', [
    'refinedstorage:creative_fluid_storage_disk',
    'refinedstorage:machine_casing',
  ]);
});
