function pattern(n){
    var output="";
    for(let i = 1; i < n; i ++) {
      output += i + "\n1";
      for(let j = 0; j < i; j ++) {
        output += "*";
      }
    }
    return output + n;
  }

// Avoiding nesting loops:
function pattern2(n){
    let output="";
    let starStr = "";
    for(let i = 1; i < n; i ++) {
      starStr += "*";
      output += i + "\n1" + starStr;
    }
    return output + n;
  }

// One line?
let pattern = n => [...Array(n)].map((_, i) => "1" + "*".repeat(i) + (i > 0 ? i + 1 : "")).join("\n");