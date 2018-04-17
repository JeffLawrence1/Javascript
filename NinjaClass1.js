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

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();