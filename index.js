class Ninja {
    constructor(name , health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;

        sayName() {
            console.log(this.name);
        }

        showStats() {
            console.log(this.name, this.speed, this.strength, this.health);
        }

        drinkSake() {
            return this.health + 10;
        }
    }
}

const ninjaOne = new Ninja("Snake Eyes", 4);
console.log(ninjaOne);