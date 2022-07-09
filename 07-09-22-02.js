var number = function(busStops){
  return busStops.reduce((a, e) => a + e[0] - e[1], 0)
}