function queueTime(customers, n) {
    // index of next customer in customers array
    let queuePos = 0
    // array tracking the length of queue for each register
    let registers = new Array(n).fill(0)
    
    while(queuePos < customers.length) {
      // next customer goes to the next open register
      let nextOpen = registers.indexOf(Math.min(...registers))
      registers[nextOpen] += customers[queuePos]
      // increment queuePos to the next customer
      queuePos ++
    }
    // return longest individual register queue time
    return Math.max(...registers)
  }