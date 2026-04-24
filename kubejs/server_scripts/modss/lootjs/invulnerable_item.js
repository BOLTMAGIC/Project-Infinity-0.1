const InvulnerableItem = Item.of("mythicbotany:faded_nether_star")
EntityEvents.spawned("item", event=>{
    let {entity, entity:{item}} = event
    if(item != InvulnerableItem) return
    entity.mergeNbt({Age:-32768})
    entity.setInvulnerable(true)
})