ServerEvents.recipes((event) => {
  shapeless(event, 'bloodmagic:blankslate', 'bloodmagic:blankrune');
  shapeless(event, '2x bloodmagic:blankslate', 'bloodmagic:speedrune');
  shapeless(event, 'bloodmagic:reinforcedslate', 'bloodmagic:sacrificerune');
  shapeless(event, 'bloodmagic:reinforcedslate', 'bloodmagic:selfsacrificerune');
  shapeless(event, 'bloodmagic:infusedslate', 'bloodmagic:dislocationrune');
  shapeless(event, 'bloodmagic:infusedslate', 'bloodmagic:altarcapacityrune');
  shapeless(event, 'bloodmagic:demonslate', 'bloodmagic:bettercapacityrune');
  shapeless(event, 'bloodmagic:demonslate', 'bloodmagic:accelerationrune');
  shapeless(event, 'bloodmagic:demonslate', 'bloodmagic:chargingrune');

  shapeless(event, '2x bloodmagic:blankrune', 'bloodmagic:orbcapacityrune');

  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AAAAAAA',
        'ABBCDDA',
        'ABBEDDA',
        'ACEFECA',
        'ADDEBBA',
        'ADDCBBA',
        'AAAAAAA'
      ],
      key: {
        A: {
          item: 'bloodmagic:largebloodstonebrick'
        },
        B: {
          item: 'bloodmagic:altarcapacityrune'
        },
        C: {
          type: 'forge:partial_nbt',
          item: 'mekanism:elite_fluid_tank',
          count: 1,
          nbt: '{mekData:{FluidTanks:[{Tank:0b,stored:{Amount:128000,FluidName:"bloodmagic:life_essence_fluid"}}]}}'
        },
        D: {
          item: 'bloodmagic:speedrune'
        },
        E: {
          item: 'expatternprovider:ex_molecular_assembler'
        },
        F: {
          item: 'bloodmagic:altar'
        }
      },
      result: {
        item: 'bmaddon:blood_altar_assembler',
      }
    })
    .id('bmaddon:blood_altar_assembler');
});
