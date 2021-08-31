class Ninja {
    constructor(name , health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log(this.name, this.speed, this.strength, this.health);
    }

    drinkSake() {
        this.health += 10//increment the health 
        return this.health;
    }
    
}

const ninjaOne = new Ninja("Snake Eyes", 4);
console.log(ninjaOne);
ninjaOne.sayName();
ninjaOne.drinkSake();
ninjaOne.drinkSake();
ninjaOne.drinkSake();
ninjaOne.showStats();
console.log(ninjaOne.drinkSake());
console.log(ninjaOne);