function declareWinner(fighter1, fighter2, firstAttacker) {
  if(fighter1.name === firstAttacker) console.log(fighter1.name + " attacks first!")
  else console.log(fighter2.name + " goes first!")
  if(fighter1.name === firstAttacker) {
    fighter2.health -= fighter1.damagePerAttack
    console.log(fighter1.name + " attacks " + fighter2.name + " for " + fighter1.damagePerAttack + " damage!")
    console.log(fighter2.name + " has " + fighter2.health + " health remaining...")
  }
  while(fighter1.health > 0 && fighter2.health > 0) {
    fighter1.health -= fighter2.damagePerAttack
    console.log(fighter2.name + " attacks " + fighter1.name + " for " + fighter2.damagePerAttack + " damage!")
    console.log(fighter1.name + " has " + fighter1.health + " health remaining...")
    if(fighter1.health <= 0) break
    fighter2.health -= fighter1.damagePerAttack
    console.log(fighter1.name + " attacks " + fighter2.name + " for " + fighter1.damagePerAttack + " damage!")
    console.log(fighter2.name + " has " + fighter2.health + " health remaining...")
  }
  if(fighter1.health > 0) return fighter1.name
  return fighter2.name
}