MoreJSEvents.registerPotionBrewing((event) => {
  /**
   * Removes all potions where an awkward potion is used as theb base potion ingredient.
   * 1. Argument: The input potion id to filter.
   * 2. Argument: The ingredient to filter.
   * 3. Argument: The result potion id to filter.
   * Passing `null` counts as a wildcard.
   */
  event.removeByPotion(null, 'minecraft:popped_chorus_fruit', null);
});
