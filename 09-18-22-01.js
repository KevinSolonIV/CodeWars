const points = (games) => games.reduce((a, e) => {
  let [homeScore, oppScore] = e.split(':')
  if(+homeScore > +oppScore) return a + 3
  if(+homeScore === +oppScore) return a + 1
  return a
}, 0)