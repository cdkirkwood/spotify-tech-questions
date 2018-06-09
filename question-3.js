const changePossibilities = (amount, denoms) => {
  const numOfWays = []
  numOfWays[0] = 1
  for (let i = 0; i < denoms.length; i++) {
    let denom = denoms[i]
    for (let interval = 1; interval <= amount; interval++) {
      if (denom <= interval) {
        numOfWays[interval] = (numOfWays[interval] || 0) + (numOfWays[interval - denom] || 0)
      }
    }
  }
  return numOfWays[amount]
}