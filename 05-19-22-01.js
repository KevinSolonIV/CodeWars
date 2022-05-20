function tribonacci(signature,n){
    let seq = [];
    for(let i = 0; i < n; i ++) {
      seq.push(signature[i] || (seq[i - 1] + seq[i - 2] + seq[i - 3]) || 0);
    }
    return seq;
  }