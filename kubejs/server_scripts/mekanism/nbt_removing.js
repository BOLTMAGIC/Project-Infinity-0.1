ServerEvents.recipes(event => {
  const chemical_tanks = [
    'mekanism:basic_chemical_tank',
    'mekanism:advanced_chemical_tank',
    'mekanism:elite_chemical_tank',
    'mekanism:ultimate_chemical_tank',
    'mekanism_extras:absolute_chemical_tank',
    'mekanism_extras:supreme_chemical_tank',
    'mekanism_extras:cosmic_chemical_tank',
    'mekanism_extras:infinite_chemical_tank'
  ];

  chemical_tanks.forEach(tank => {
    event.shapeless(
      tank,
      [
        tank,
        'kubejs:tank_nbt_remover'
      ]
    ).modifyResult((grid, result) => {
        let inputTank = grid.find(Item.of(tank));
        
        if (!inputTank || !inputTank.nbt || !inputTank.nbt.mekData) {
            return result;
        }
        
        let mekData = inputTank.nbt.mekData;
        
        if (mekData.GasTanks && mekData.GasTanks.length > 0 && mekData.GasTanks[0].stored) {
            let originalGas = mekData.GasTanks[0].stored;
            
            return Item.of(tank, {
                mekData: {
                    GasTanks: [{
                        Tank: false,
                        stored: {
                            amount: originalGas.amount,
                            gasName: originalGas.gasName
                        }
                    }]
                }
            });
        }
        
        if (mekData.InfusionTanks && mekData.InfusionTanks.length > 0 && mekData.InfusionTanks[0].stored) {
            let originalInfusion = mekData.InfusionTanks[0].stored;
            
            return Item.of(tank, {
                mekData: {
                    InfusionTanks: [{
                        Tank: false,
                        stored: {
                            amount: originalInfusion.amount,
                            infuseTypeName: originalInfusion.infuseTypeName
                        }
                    }]
                }
            });
        }
        
        if (mekData.PigmentTanks && mekData.PigmentTanks.length > 0 && mekData.PigmentTanks[0].stored) {
            let originalPigment = mekData.PigmentTanks[0].stored;
            
            return Item.of(tank, {
                mekData: {
                    PigmentTanks: [{
                        Tank: false,
                        stored: {
                            amount: originalPigment.amount,
                            pigmentName: originalPigment.pigmentName
                        }
                    }]
                }
            });
        }
        
        if (mekData.SlurryTanks && mekData.SlurryTanks.length > 0 && mekData.SlurryTanks[0].stored) {
            let originalSlurry = mekData.SlurryTanks[0].stored;
            
            return Item.of(tank, {
                mekData: {
                    SlurryTanks: [{
                        Tank: false,
                        stored: {
                            amount: originalSlurry.amount,
                            slurryName: originalSlurry.slurryName
                        }
                    }]
                }
            });
        }
        
        return result;
    });
  });

  const fluid_tanks = [
    'mekanism:basic_fluid_tank',
    'mekanism:advanced_fluid_tank',
    'mekanism:elite_fluid_tank',
    'mekanism:ultimate_fluid_tank',
    'mekanism_extras:absolute_fluid_tank',
    'mekanism_extras:supreme_fluid_tank',
    'mekanism_extras:cosmic_fluid_tank',
    'mekanism_extras:infinite_fluid_tank'
  ];

  fluid_tanks.forEach(tank => {
    event.shapeless(
      tank,
      [
        tank,
        'kubejs:tank_nbt_remover'
      ]
    ).modifyResult((grid, result) => {
        let inputTank = grid.find(Item.of(tank));
        
        if (!inputTank || !inputTank.nbt || !inputTank.nbt.mekData) {
            return result;
        }
        
        let mekData = inputTank.nbt.mekData;
        
        if (mekData.FluidTanks && mekData.FluidTanks.length > 0 && mekData.FluidTanks[0].stored) {
            let originalFluid = mekData.FluidTanks[0].stored;
            
            return Item.of(tank, {
                mekData: {
                    FluidTanks: [{
                        Tank: false,
                        stored: {
                            Amount: originalFluid.Amount,
                            FluidName: originalFluid.FluidName
                        }
                    }]
                }
            });
        }
        
        return result;
    });
  });
});
