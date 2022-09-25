var capitals = function (word) {
  return [...Array(word.length).keys()].filter(x => word[x] == word[x].toUpperCase())
};