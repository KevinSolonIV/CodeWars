function solution(str){
    let res = [];
    for(let i = 0; i < str.length; i += 2) {
      if(str[i+1]) res.push(str[i] + str[i+1]);
      else res.push(str[i] + '_');
    }
    return res;
  }