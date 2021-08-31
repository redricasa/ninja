class Ninja {
    constructor(name , health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;

        sayName() {

        }

        showStats() {
            console.log();
        }

        drinkSake() {

        }
    }
}

const ninjaOne = new Ninja("Snake Eyes");
console.log(ninjaOne);