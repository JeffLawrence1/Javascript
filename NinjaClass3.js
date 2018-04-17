class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`Name: ${this.name}`);
        return this;
    }
    showStats() {
        console.log(`Strength: ${this.strength} Speed: ${this.speed} Health: ${this.health}`);
        return this;
    }
    drinkSake() {
        this.health += 10;
        console.log(`${this.name}'s health increased by 10`);
        return this;
    }
}
class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.strength = 10;
        this.speed = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
        let message = super.drinkSake();
        console.log(message);
        console.log("A sensei becomes wiser as he drinks more sake!");
        return this;
    }
}

var n1 = new Ninja("Fred");
n1.sayName();
n1.showStats();
n1.drinkSake();

let super_sensei = new Sensei("Master Splinter");
super_sensei.speakWisdom();
super_sensei.showStats();