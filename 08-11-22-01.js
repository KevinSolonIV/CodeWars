function towerBuilder(nFloors) {
  return [...Array(nFloors)].map((_, i) => ' '.repeat(nFloors - i - 1) + '*'.repeat(2 * i + 1) + ' '.repeat(nFloors - i - 1))
}