const sortByStrings = (unsortedStr, targetStr) => {
  let sortedStr = ''
  const unsortedArr = unsortedStr.split('')
  for (let i = 0; i < targetStr.length; i++) {
    const filteredLetters = unsortedArr.filter(curLetter => targetStr[i] === curLetter)
    sortedStr += filteredLetters.join('')
  }
  return sortedStr
}