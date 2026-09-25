# Runs once, when the player first gets Infinity 1. EnchantLimiter itself grants the exemption
# (via "exempt advancements" in enchantlimiter-server.toml); this only tells the player.
tellraw @s [{"text":"✦ ","color":"light_purple"},{"text":"Enchantment limit lifted","color":"gold","bold":true},{"text":" for you and your team.","color":"yellow"}]
playsound minecraft:ui.toast.challenge_complete master @s ~ ~ ~ 0.6 1
