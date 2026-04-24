const mythicBotanyFlowers = [
    'exoblaze',
    'wither_aconite',
    'aquapanthus',
    'hellebore',
    'raindeletia',
    //'feysythia', this one is disable because the mod feywild is not present
    'petrunia'
]

ServerEvents.recipes((event) => {
    mythicBotanyFlowers.forEach((flower) => {
        event.shapeless(`mythicbotany:${flower}`, `mythicbotany:${flower}_floating`);
    });
});