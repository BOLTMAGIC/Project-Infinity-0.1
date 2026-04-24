ServerEvents.recipes((event) => {
  //Efficiency Addons
  event.shapeless('kubejs:efficiency_addon_1', [
    Item.of(
      'industrialforegoing:efficiency_addon_1',
      '{TitaniumAugment:{Efficiency:0.9f}}'
    ).strongNBT(),
  ]);
  event.shapeless('kubejs:efficiency_addon_2', [
    Item.of(
      'industrialforegoing:efficiency_addon_2',
      '{TitaniumAugment:{Efficiency:0.8f}}'
    ).strongNBT(),
  ]);
  event.shapeless('kubejs:efficiency_addon_3', ['ifeu:efficiency_addon_3']);
  event.shapeless('kubejs:efficiency_addon_4', ['ifeu:efficiency_addon_4']);
  event.shapeless('kubejs:efficiency_addon_5', ['ifeu:efficiency_addon_5']);

  event.shapeless(
    Item.of(
      'industrialforegoing:efficiency_addon_1',
      '{TitaniumAugment:{Efficiency:0.9f}}'
    ),
    ['kubejs:efficiency_addon_1']
  );
  event.shapeless(
    Item.of(
      'industrialforegoing:efficiency_addon_2',
      '{TitaniumAugment:{Efficiency:0.8f}}'
    ),
    ['kubejs:efficiency_addon_2']
  );
  event.shapeless(
    Item.of('ifeu:efficiency_addon_3', '{TitaniumAugment:{Efficiency:0.7f}}'),
    ['kubejs:efficiency_addon_3']
  );
  event.shapeless(
    Item.of('ifeu:efficiency_addon_4', '{TitaniumAugment:{Efficiency:0.6f}}'),
    ['kubejs:efficiency_addon_4']
  );
  event.shapeless(
    Item.of('ifeu:efficiency_addon_5', '{TitaniumAugment:{Efficiency:0.5f}}'),
    ['kubejs:efficiency_addon_5']
  );
  //Speed Addons
  event.shapeless('kubejs:speed_addon_1', [
    Item.of(
      'industrialforegoing:speed_addon_1',
      '{TitaniumAugment:{Speed:2.0f}}'
    ).strongNBT(),
  ]);
  event.shapeless('kubejs:speed_addon_2', [
    Item.of(
      'industrialforegoing:speed_addon_2',
      '{TitaniumAugment:{Speed:3.0f}}'
    ).strongNBT(),
  ]);
  event.shapeless('kubejs:speed_addon_3', ['ifeu:speed_addon_3']);
  event.shapeless('kubejs:speed_addon_4', ['ifeu:speed_addon_4']);
  event.shapeless('kubejs:speed_addon_5', ['ifeu:speed_addon_5']);

  event.shapeless(
    Item.of(
      'industrialforegoing:speed_addon_1',
      '{TitaniumAugment:{Speed:2.0f}}'
    ),
    ['kubejs:speed_addon_1']
  );
  event.shapeless(
    Item.of(
      'industrialforegoing:speed_addon_2',
      '{TitaniumAugment:{Speed:3.0f}}'
    ),
    ['kubejs:speed_addon_2']
  );
  event.shapeless(
    Item.of('ifeu:speed_addon_3', '{TitaniumAugment:{Speed:4.0f}}'),
    ['kubejs:speed_addon_3']
  );
  event.shapeless(
    Item.of('ifeu:speed_addon_4', '{TitaniumAugment:{Speed:5.0f}}'),
    ['kubejs:speed_addon_4']
  );
  event.shapeless(
    Item.of('ifeu:speed_addon_5', '{TitaniumAugment:{Speed:6.0f}}'),
    ['kubejs:speed_addon_5']
  );
  //Processing Addons
  event.shapeless('kubejs:processing_addon_1', [
    Item.of(
      'industrialforegoing:processing_addon_1',
      '{TitaniumAugment:{Processing:2.0f}}'
    ).strongNBT(),
  ]);
  event.shapeless('kubejs:processing_addon_2', [
    Item.of(
      'industrialforegoing:processing_addon_2',
      '{TitaniumAugment:{Processing:3.0f}}'
    ).strongNBT(),
  ]);
  event.shapeless('kubejs:processing_addon_3', ['ifeu:processing_addon_3']);
  event.shapeless('kubejs:processing_addon_4', ['ifeu:processing_addon_4']);
  event.shapeless('kubejs:processing_addon_5', ['ifeu:processing_addon_5']);

  event.shapeless(
    Item.of(
      'industrialforegoing:processing_addon_1',
      '{TitaniumAugment:{Processing:2.0f}}'
    ),
    ['kubejs:processing_addon_1']
  );
  event.shapeless(
    Item.of(
      'industrialforegoing:processing_addon_2',
      '{TitaniumAugment:{Processing:3.0f}}'
    ),
    ['kubejs:processing_addon_2']
  );
  event.shapeless(
    Item.of('ifeu:processing_addon_3', '{TitaniumAugment:{Processing:4.0f}}'),
    ['kubejs:processing_addon_3']
  );
  event.shapeless(
    Item.of('ifeu:processing_addon_4', '{TitaniumAugment:{Processing:5.0f}}'),
    ['kubejs:processing_addon_4']
  );
  event.shapeless(
    Item.of('ifeu:processing_addon_5', '{TitaniumAugment:{Processing:6.0f}}'),
    ['kubejs:processing_addon_5']
  );
});