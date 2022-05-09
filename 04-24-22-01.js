function nbYear(population, percentGrowth, immigration, populationGoal) {
    let yearOfOurLord = 0;
    while(population < populationGoal) {
      let anumGrowth = (population * percentGrowth / 100) + immigration;
      // Avoid infinite loops by returning early if population is decreasing
      if(anumGrowth < 0) {
        return -1;
      }
      population += Math.floor(anumGrowth);
      yearOfOurLord ++;
    }
    return yearOfOurLord;
  }