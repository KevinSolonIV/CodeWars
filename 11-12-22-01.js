function high(x){
  let zero = 'a'.charCodeAt(0) - 1;
  // convert to array of words
  let words = x.split(' ')
  // map each word to word score
  let scores = words.map(str => str.split('').reduce((acc, char) => acc + char.charCodeAt(0) - zero, 0))
  // reduce array of scores to the highest score's index and return the word with the same index
  return words[scores.reduce((maxInd, score, ind) => score > scores[maxInd] ? ind : maxInd, 0)]
}