function calculateYears(principal, interest, tax, desired) {
    let numYears = 0
    let money = principal
    while(money < desired) {
      numYears++
      money += money * interest * (1 - tax)
    }
    return numYears
  }