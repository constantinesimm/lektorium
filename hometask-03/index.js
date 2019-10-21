class Tamagochi {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.health = 100;
        this.hungry = 50;
        this.need = 0;
        this.happiness = 100;
        this.playfullness = 50;
    }
}

const game = new Tamagochi('Zippy');

console.log(game)