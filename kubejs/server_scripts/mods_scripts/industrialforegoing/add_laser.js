//ether gas from piglich inside fluid laser
ServerEvents.recipes((event) => {
  event
    .custom({
      type: 'forge:conditional',
      recipes: [
        {
          conditions: [
            {
              type: 'forge:not',
              value: {
                type: 'forge:tag_empty',
                tag: 'forge:ores/ruby',
              },
            },
          ],
          recipe: {
            type: 'industrialforegoing:laser_drill_ore',
            catalyst: {
              item: 'industrialforegoing:laser_lens13',
            },
            output: {
              item: 'mekanism:uranium_ore',
            },
            pointer: 0,
            rarity: [
              {
                blacklist: {
                  type: 'minecraft:worldgen/biome',
                  values: [
                    'minecraft:the_end',
                    'minecraft:the_void',
                    'minecraft:small_end_islands',
                    'minecraft:end_barrens',
                    'minecraft:end_highlands',
                    'minecraft:end_midlands',
                  ],
                },
                depth_max: 70,
                depth_min: 30,
                weight: 8,
                whitelist: {},
              },
              {
                blacklist: {
                  type: 'minecraft:worldgen/biome',
                  values: [
                    'minecraft:the_end',
                    'minecraft:the_void',
                    'minecraft:small_end_islands',
                    'minecraft:end_barrens',
                    'minecraft:end_highlands',
                    'minecraft:end_midlands',
                  ],
                },
                depth_max: 255,
                depth_min: 0,
                weight: 1,
                whitelist: {},
              },
            ],
          },
        },
      ],
    })
    .id('kubejs:industrialforegoing/laser_ore/uranium_ore');
});
