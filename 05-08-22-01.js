function basicOp(operation, value1, value2) {
    return typeof value1 == 'number' && typeof value2 == 'number' ? eval(value1 + operation + value2) : undefined;
  }