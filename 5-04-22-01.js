var min = function(list){
    return list.slice().sort((a, b) => a - b)[0];
  }
  
  var max = function(list){
    return list.slice().sort((a, b) => b - a)[0];
  }