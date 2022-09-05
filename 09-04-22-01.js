function tops(msg) {
    let ans = '';
    let substr = msg;
     for(let i = 0; substr.length > 0; i++) {
       substr = substr.slice(i * 4);
       ans = substr[i + 1] ? substr[i + 1] + ans : ans;
     }
    return ans;
  }