function factorial(n) {
    if(n < 0 || n > 12) throw RangeError;
    else {
        let fact = 1
        while(n > 1) {
        fact *= n
        n--
        }
        return fact
    }
}