function titleCase(title, minorWords = '') {
    if(title.length == 0) return ''
    let ignoreList = minorWords.length > 0 ? minorWords.toLowerCase().split(' ') : []
    return title.toLowerCase().split(' ').map((x, i) => {
      let y = x.slice()
      if(!ignoreList.includes(x) || i === 0) y = y[0].toUpperCase() + y.slice(1)
      return y
    }).join(' ')
  }
  