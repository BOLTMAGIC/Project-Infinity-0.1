JEIEvents.hideItems(event => {
  // 1 cake unlocks every year
  const unixStart = 1747346400000
  for (let i = 12; i >= 1; i--) {
    if (Date.now() > unixStart + i * 31536000000) break;
    
    event.hide(`kubejs:year_${i}_cake`)
  }
})
