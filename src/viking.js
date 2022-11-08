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
    let saxonRandom = Math.floor(Math.random() * numberSaxons);
    let oneSaxon = this.saxonArmy[saxonRandom];
    oneSaxon.receiveDamage(Viking.strength);
    if (oneSaxon.health < 0) {
      this.saxonArmy.splice(saxonRandom, 1);
    }
  }
  saxonAttack() {
    let numberVikings = this.vikingArmy.length;
    let numberSaxons = this.saxonArmy.length;
    let Saxon = this.saxonArmy[Math.floor(Math.random() * numberSaxons)];
    let vikingRandom = Math.floor(Math.random() * numberVikings);
    let oneViking = this.vikingArmy[vikingRandom];
    oneViking.receiveDamage(Saxon.strength);
    if (oneViking.health < 0) {
      this.vikingArmy.splice(vikingRandom, 1);
    }
  }
  showStatus() {
    if (this.saxonArmy.length <= 0)
      return "Vikings have won the war of the century!";
    else if (this.vikingArmy.length <= 0)
      return "Saxons have fought for their lives and survived another day...";
    else if (this.vikingArmy.length == 1 && this.saxonArmy.length == 1)
      return "Vikings and Saxons are still in the thick of battle.";
  }
}
