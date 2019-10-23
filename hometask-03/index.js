class Tamagochi {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.health = 50;
        this.food = 25;
        this.sleep = 25;
        this.happiness = 50;
        this.playfullness = 25;
        this.away = {
            status: false,
            time: 0
        };
    }
    static Statistics(character) {
        console.log(this, character)
    }
    growUp(character) {
        character.age += 0.5;
    }
    takeFood(character) {
        character.food += 10;
        character.health += 5;
        character.sleep += 10;
        character.happiness += 5;
        character.playfullness -= 10;
    }
    takeSleep(character) {
        character.sleep += 20;
        character.health += 10;
        character.food -= 10;
        character.playfullness += 15;
    }
    letsPlay(character) {
        character.playfullness += 20;
        character.happiness += 15;
        character.health -= 10;
        character.food -= 15;
    }
    runAway(character) {
        if (character.playfullness > 125 && character.food > 100 && character.happiness > 75) {
            character.away['status'] = true;
            character.away['time'] = Math.floor(Math.random() * (10 - 1) + 1) * 60 * 1000; // random number * 60 sec * 1000 mls
        }
        if (character.food < 0 && character.happiness < 20 && character.health < 20) {
            character.away['status'] = true;
            character.away['time'] = Math.floor(Math.random() * (20 - 10) + 10) * 60 * 1000; // random number * 60 sec * 1000 mls
        }
        if ((character.age > 50 && character.health < 50 && character.happiness < 50) || (character.age > 75 && character.health < 25) || (character.age > 100)) {
            character.away['status'] = true;
            character.away['time'] = false; //setting false value. character is die :'(
        }
    }
    needFood(character) {
        if (character.food < 25 && character.health < 50) {
            character.health -= 10;
            character.happiness -= 10;
            character.playfullness -=20;
        }
    }
    needSleep(character) {
        if (character.sleep < 25 && character.health < 50) {
            character.health -= 10;
            character.happiness -= 10;
            character.playfullness -=20;

        }
    }
    needPlay(character) {
        if (character.playfullness < 25 && character.happiness < 50) {
            character.playfullness -= 15;
            character.happiness -= 20;
            character.sleep -= 20;
            character.health -= 5;
        }
    }
}

class Character extends Tamagochi{
    constructor(...args){
        super(...args);
    }
    async Start(){
        let character = this;
        await function(character) {
            setInterval(function () {
                character.growUp(character);
            }, 2000);
        }
    }
    feedCharacter() {
        super.takeFood(this);
    }
    takeSleep() {
        super.takeSleep(this);
    }
    letsPlay() {
        super.letsPlay(this);
    }
}
const Zippy = new Character('Zippy');

setInterval(() => {
    Zippy.Start();
    Zippy.feedCharacter();
    Zippy.letsPlay();
    Zippy.takeSleep();
    Zippy.feedCharacter();
    Zippy.letsPlay();
    Zippy.takeSleep();
    Zippy.feedCharacter();
    Zippy.letsPlay();
    Zippy.takeSleep();
    Zippy.feedCharacter();
    Zippy.letsPlay();
    Zippy.letsPlay();
    Zippy.takeSleep();
    Zippy.feedCharacter();
    Zippy.letsPlay();
    Zippy.letsPlay();
    Zippy.takeSleep();
    Zippy.feedCharacter();
    Zippy.letsPlay();
    Zippy.feedCharacter();
    Zippy.takeSleep();
    Zippy.feedCharacter();
    Zippy.letsPlay();
    Zippy.takeSleep();
    Zippy.feedCharacter();
    Zippy.letsPlay();
    Zippy.takeSleep();
    Zippy.letsPlay();
    Zippy.letsPlay();
    Zippy.takeSleep();
    Zippy.feedCharacter();
    Zippy.letsPlay();
    Zippy.letsPlay();

    console.log(Tamagochi.Statistics(Zippy));
}, 5000);

Tamagochi.Statistics()