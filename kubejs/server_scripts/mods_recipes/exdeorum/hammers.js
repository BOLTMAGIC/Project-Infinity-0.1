ServerEvents.recipes((event) => {
    const RECIPES = [
        //Netherite Varient Hammers
        {
            id: 'netherite_iron_hammer',
            output: 'kubejs:netherite_iron_hammer',
            template: 'minecraft:netherite_upgrade_smithing_template',
            base_item: 'exdeorum:netherite_hammer',
            addition_item: 'advancednetherite:netherite_iron_block',
            disabled: 'exdeorum:netherite_hammer'
        },
        {
            id: 'netherite_gold_hammer',
            output: 'kubejs:netherite_gold_hammer',
            template: 'minecraft:netherite_upgrade_smithing_template',
            base_item: 'kubejs:netherite_iron_hammer',
            addition_item: 'advancednetherite:netherite_gold_block'
        },
        {
            id: 'netherite_emerald_hammer',
            output: 'kubejs:netherite_emerald_hammer',
            template: 'minecraft:netherite_upgrade_smithing_template',
            base_item: 'kubejs:netherite_gold_hammer',
            addition_item: 'advancednetherite:netherite_emerald_block'
        },
        {
            id: 'netherite_diamond_hammer',
            output: 'kubejs:netherite_diamond_hammer',
            template: 'minecraft:netherite_upgrade_smithing_template',
            base_item: 'kubejs:netherite_emerald_hammer',
            addition_item: 'advancednetherite:netherite_diamond_block'
        },
        //ATM Varient Hammers
        {
            id: 'netherite_hammer',
            output: 'exdeorum:netherite_hammer',
            template: 'minecraft:netherite_upgrade_smithing_template',
            base_item: 'exdeorum:diamond_hammer',
            addition_item: 'minecraft:netherite_block'
        },
        {
            id: 'allthemodium_hammer',
            output: 'kubejs:allthemodium_hammer',
            template: 'allthemodium:allthemodium_upgrade_smithing_template',
            base_item: 'exdeorum:netherite_hammer',
            addition_item: 'allthemodium:allthemodium_block'
        },
        {
            id: 'vibranium_hammer',
            output: 'kubejs:vibranium_hammer',
            template: 'allthemodium:vibranium_upgrade_smithing_template',
            base_item: 'kubejs:allthemodium_hammer',
            addition_item: 'allthemodium:vibranium_block'
        },
        {
            id: 'unobtainium_hammer',
            output: 'kubejs:unobtainium_hammer',
            template: 'allthemodium:unobtainium_upgrade_smithing_template',
            base_item: 'kubejs:vibranium_hammer',
            addition_item: 'allthemodium:unobtainium_block'
        }
    ]

    

  RECIPES.forEach(r => {
    event.smithing(
        r.output,
        r.template,
        r.base_item,
        r.addition_item
    ).id(`kubejs:exdeorum/smithing/hammers/${r.id}`);

  //event.remove({ output: r.disabled });


  });

})


ServerEvents.recipes((event) => {

    event.shapeless(
    'kubejs:allthemodium_alloy_hammer',
    [
        'kubejs:allthemodium_hammer',
        'kubejs:vibranium_hammer',
        'kubejs:unobtainium_hammer'
    ]
    ).id('kubejs:exdeorum/hammers/allthemodium_alloy')


})