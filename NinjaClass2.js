function Ninja(name) {

    var self = this;
    var health = 100;
    var speed = 3;
    var strength = 3;

    this.name = name;

    this.sayName = function() {
        console.log("Hello my name is " + this.name);
    }

    this.showStats = function() {
        console.log(`Speed: ${speed} Strength: ${strength} Health: ${health}`);
    }

    this.drinkSake = function() {
        health += 10;
        console.log("added 10 health");
    }
}
Ninja.prototype.punch = function(ninja) {
    ninja.health -= 5;
    console.log(`${ninja.name} health reduced by 5`);
}

Ninja.prototype.kick = function(ninja) {
    var dmg = 15 * strength;
    ninja.health -= dmg;
    console.log(ninja.health);
    console.log(`${ninja.name} health reduced by ${dmg}`);
}

var ninja1 = new Ninja("Hyabusa");
var ninja2 = new Ninja("Ray");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
ninja1.punch(ninja2);
ninja1.punch(ninja2);
ninja1.punch(ninja2);
ninja1.kick(ninja2);