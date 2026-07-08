ServerEvents.recipes((event) => {
  const tartaricGems = {
    soulgempetty: 64.0,
    soulgemlesser: 256.0,
    soulgemcommon: 1024.0,
    soulgemgreater: 4096.0,
  };

  Object.keys(tartaricGems).forEach((gem) => {
    const gemId = `bloodmagic:${gem}`;
    const baseSoulId = 'bloodmagic:basemonstersoul';

    event
      .shapeless(Item.of(gemId), [baseSoulId, gemId])
      .modifyResult((grid, result) => {
        const tartaricGem = grid.find(Item.of(gemId));
        const baseMonsterSoul = grid.find(Item.of(baseSoulId));

        const gemSouls = tartaricGem?.nbt?.souls ?? 0;
        const baseSouls = baseMonsterSoul?.nbt?.souls ?? 0;

        if (gemSouls === 0 && baseSouls === 0) {
          return Item.of(gemId);
        }

        const newSoul = Math.min(gemSouls + baseSouls, tartaricGems[gem]);
        return Item.of(gemId).withNBT({ souls: newSoul });
      });
  });
});
