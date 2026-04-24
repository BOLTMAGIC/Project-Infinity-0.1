ServerEvents.recipes((event) => {
  event
    .custom({
      type: 'actuallyadditions:empowering',
      base: {
        tag: 'forge:dusts/coal',
      },
      color: 8522184,
      energy: 5000,
      modifiers: [
        {
          item: 'enderio:energetic_alloy_ingot',
        },
        {
          item: 'enderio:energetic_alloy_ingot',
        },
        {
          item: 'enderio:basic_capacitor',
        },
        {
          item: 'enderio:basic_capacitor',
        },
      ],
      result: {
        item: 'enderio:double_layer_capacitor',
      },
      time: 50,
    })
    .id('empowering_enderio:double_layer_capacitor');

  event
    .custom({
      type: 'actuallyadditions:empowering',
      base: {
        item: 'minecraft:glowstone',
      },
      color: 2562634,
      energy: 5000,
      modifiers: [
        {
          item: 'enderio:vibrant_alloy_ingot',
        },
        {
          item: 'enderio:vibrant_alloy_ingot',
        },
        {
          item: 'enderio:double_layer_capacitor',
        },
        {
          item: 'enderio:double_layer_capacitor',
        },
      ],
      result: {
        item: 'enderio:octadic_capacitor',
      },
      time: 50,
    })
    .id('empowering_enderio:octadic_capacitor');
});
