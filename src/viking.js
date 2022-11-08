// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(theDamage) {
    this.health -= theDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(theDamage) {
    this.health -= theDamage;
    if (health > 0)
      return `${this.name}has received ${theDamage} points of damage`;
    else return `${this.name} has died in act of combat`;
  }
  battlecry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(theDamage) {
    this.health -= theDamage;
    if (health > 0) return `A Saxon has received ${theDamage} points of damage`;
    else return `A Saxon has died in combat`;
  }
}

// War

class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(Viking) {
    vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    saxonArmy.push(Saxon);
  }
  vikingAttack() {
    let numberVikings = this.vikingArmy.length;
    let numberSaxons = this.saxonArmy.length;
    let Viking = this.vikingArmy[Math.floor(Math.random() * numberVikings)];
    let SaxonRandom = Math.floor(Math.random() * numberSaxons);
    let oneSaxon = this.saxonArmy[SaxonRandom];
    oneSaxon.receiveDamage(Viking.strength);
    if (oneSaxon.health < 0) return this.saxonArmy.pull(oneSaxon);
  }
  saxonAttack() {}
  showStatus() {}
}
