function countSheeps(arrayOfSheep) {
  if(arrayOfSheep && arrayOfSheep.length > 0) {
    return arrayOfSheep.reduce((a, e) => e ? a + 1 : a, 0);
  }
  return 0;
}