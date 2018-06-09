//helper function to multiply strings
const stringMultiplier = (numTimesToRepeat, substring) => {
  let repeatedStr = ''
  for (let i = 0; i < numTimesToRepeat; i++) {
    repeatedStr += substring
  }
  return repeatedStr
}

const decodeString = (strToDecode) => {
  let bracketsRemoved = strToDecode.replace(/[\[\]']+/g, '')
  const removedLetters = strToDecode.split('').filter(elem => !isNaN(+elem))
  let decodedArr = []
  for (let i = 0; i < removedLetters.length; i++) {
    let curMultiplier = removedLetters[i]
    let substring;
    const indexOfMultiplier = bracketsRemoved.indexOf(curMultiplier)
    if (i !== removedLetters.length - 1) {
      const indexOfNextNum = bracketsRemoved.indexOf(removedLetters[i + 1])
      substring = bracketsRemoved.slice(indexOfMultiplier + 1, indexOfNextNum)
      //needed for duplicate multipliers
      bracketsRemoved = bracketsRemoved.slice(indexOfNextNum - 1)
    } else {
      substring = bracketsRemoved.slice(indexOfMultiplier + 1)
    }
    const repeatedStr = stringMultiplier(curMultiplier, substring)
      if (i === 0) {
        decodedArr = repeatedStr.split('')
      } else {
        decodedArr = decodedArr.map(str => {
          str += repeatedStr
          return str
        })
      }
    }
  return decodedArr.join('')
}