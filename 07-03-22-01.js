function validatePIN (pin) {
    if (pin.length !== 4 && pin.length !== 6) return false;
    for(let digit of pin) {
      if(isNaN(parseInt(digit, 10))) return false;
    }
    return true;
  }