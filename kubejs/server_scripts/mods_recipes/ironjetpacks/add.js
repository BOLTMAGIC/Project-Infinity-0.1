ServerEvents.recipes((event) => {
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:wood"}'),
    [
      '#minecraft:planks',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:wood"}'),
      'ironjetpacks:strap',
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:wood"}'),
    ]
  );
  //Tier 1
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:stone"}'),
    [
      '#forge:stone',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:stone"}'),
      Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:wood"}').weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:stone"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:copper"}'),
    [
      '#forge:ingots/copper',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:copper"}'),
      Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:wood"}').weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:copper"}'),
    ]
  );
  //Tier 2
  //Copper to Iron/Bronze/Silver
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:iron"}'),
    [
      '#forge:ingots/iron',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:iron"}'),
      Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:copper"}').weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:iron"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:bronze"}'),
    [
      '#forge:ingots/bronze',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:bronze"}'),
      Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:copper"}').weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:bronze"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:silver"}'),
    [
      '#forge:ingots/silver',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:silver"}'),
      Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:copper"}').weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:silver"}'),
    ]
  );
  //Stone to Iron/Bronze/Silver
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:iron"}'),
    [
      '#forge:ingots/iron',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:iron"}'),
      Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:stone"}').weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:iron"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:bronze"}'),
    [
      '#forge:ingots/bronze',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:bronze"}'),
      Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:stone"}').weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:bronze"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:silver"}'),
    [
      '#forge:ingots/silver',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:silver"}'),
      Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:stone"}').weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:silver"}'),
    ]
  );
  //Tier 3
  //Iron to Gold/Steel/Electrum/Invar
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:gold"}'),
    [
      '#forge:ingots/gold',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:gold"}'),
      Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:iron"}').weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:gold"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:steel"}'),
    [
      '#forge:ingots/steel',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:steel"}'),
      Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:iron"}').weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:steel"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:electrum"}'),
    [
      '#forge:ingots/electrum',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:electrum"}'),
      Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:iron"}').weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:electrum"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:invar"}'),
    [
      '#forge:ingots/invar',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:invar"}'),
      Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:iron"}').weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:invar"}'),
    ]
  );
  //Bronze to Gold/Steel/Electrum/Invar
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:gold"}'),
    [
      '#forge:ingots/gold',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:gold"}'),
      Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:bronze"}').weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:gold"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:steel"}'),
    [
      '#forge:ingots/steel',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:steel"}'),
      Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:bronze"}').weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:steel"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:electrum"}'),
    [
      '#forge:ingots/electrum',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:electrum"}'),
      Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:bronze"}').weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:electrum"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:invar"}'),
    [
      '#forge:ingots/invar',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:invar"}'),
      Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:bronze"}').weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:invar"}'),
    ]
  );
  //Silver to Gold/Steel/Electrum/Invar
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:gold"}'),
    [
      '#forge:ingots/gold',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:gold"}'),
      Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:silver"}').weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:gold"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:steel"}'),
    [
      '#forge:ingots/steel',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:steel"}'),
      Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:silver"}').weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:steel"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:electrum"}'),
    [
      '#forge:ingots/electrum',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:electrum"}'),
      Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:silver"}').weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:electrum"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:invar"}'),
    [
      '#forge:ingots/invar',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:invar"}'),
      Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:silver"}').weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:invar"}'),
    ]
  );
  //Tier 4
  //Gold to Diamond/Platinum
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:diamond"}'),
    [
      '#forge:gems/diamond',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:diamond"}'),
      Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:gold"}').weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:diamond"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:platinum"}'),
    [
      '#forge:ingots/platinum',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:platinum"}'),
      Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:gold"}').weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:platinum"}'),
    ]
  );
  //Steel to Diamond/Platinum
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:diamond"}'),
    [
      '#forge:gems/diamond',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:diamond"}'),
      Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:steel"}').weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:diamond"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:platinum"}'),
    [
      '#forge:ingots/platinum',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:platinum"}'),
      Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:steel"}').weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:platinum"}'),
    ]
  );
  //Electrum to Diamond/Platinum
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:diamond"}'),
    [
      '#forge:gems/diamond',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:diamond"}'),
      Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:electrum"}').weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:diamond"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:platinum"}'),
    [
      '#forge:ingots/platinum',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:platinum"}'),
      Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:electrum"}').weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:platinum"}'),
    ]
  );
  //Invar to Diamond/Platinum
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:diamond"}'),
    [
      '#forge:gems/diamond',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:diamond"}'),
      Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:invar"}').weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:diamond"}'),
    ]
  );
  create3x3jetpack(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:platinum"}'),
    [
      '#forge:ingots/platinum',
      Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:platinum"}'),
      Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:invar"}').weakNBT(),
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:platinum"}'),
    ]
  );
  //Tier 5
  //Diamond to Emerald
  create3x3(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:emerald"}'),
    [
      'minecraft:emerald',
      Item.of(
        'ironjetpacks:capacitor',
        '{Id:"ironjetpacks:emerald"}'
      ).weakNBT(),
      'minecraft:emerald',
      'minecraft:emerald',
      Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:diamond"}').weakNBT(),
      'minecraft:emerald',
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:emerald"}').weakNBT(),
      'kubejs:infinity_1',
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:emerald"}').weakNBT(),
    ]
  );
  //Platinum to Emerald
  create3x3(
    event,
    Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:emerald"}'),
    [
      'minecraft:emerald',
      Item.of(
        'ironjetpacks:capacitor',
        '{Id:"ironjetpacks:emerald"}'
      ).weakNBT(),
      'minecraft:emerald',
      'minecraft:emerald',
      Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:platinum"}').weakNBT(),
      'minecraft:emerald',
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:emerald"}').weakNBT(),
      'kubejs:infinity_1',
      Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:emerald"}').weakNBT(),
    ]
  );
});
