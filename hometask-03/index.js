class Tamagochi {
    constructor(name) {
        this.character = {
            name: name,
            age: 0,
            food: 100,
            health: 100,
            sleep: 100,
            happiness: 100,
            playfullness: 100
        };
    };
    startGame() { // start new game and counters
        this.startGrowTimer();
        this.startFoodTimer();
        this.startSleepTimer();
        this.startPlayTimer();
        this.checkLifeProperties();
        this.startDate = Date.now();
        console.log(
            `***\t\t\t Character Control \t\t\t***\n`+
            `*\t Zippy.feedMe() – for feed character\n`+
            `*\t Zippy.takeSleep() – for take a sleep character\n`+
            `*\t Zippy.playMe() – for play with character\n`+
            `*\t Zippy.Statictics() – for show character statistic\n`+
            `*\t Zippy.gameOver() – for end game\n`
        );
    };
    startGrowTimer() { // set grow up character for 10 minutes
        this.growTimer = setInterval(() => this.character.age += 1, 10 * 60 * 1000);
    };
    startFoodTimer() {//set needs food timer for 3 minutes
        this.foodTimer = setInterval(() => {
           this.character.food -= 10; //decrease food
           // checking minimal food point and send warning + decrease health/happiness/playfullness/sleep
           if (this.character.food < 25) {
               this.character.health -= 15;
               this.character.happiness -= 10;
               this.character.playfullness -= 10;
               this.character.sleep -= 10;
               console.log(`${this.character.name} needs a food! Please, feed me`);
           }
        }, 3 * 60 * 1000);
    };
    startSleepTimer() {//set needs sleep timer for 6 minutes
        this.sleepTimer = setInterval(() => {
            this.character.sleep -= 20; //decrease sleep
            //checking minimal sleep point and send warning + decrease health/happiness/playfullness/food
            if (this.character.sleep < 25) {
                this.character.health -= 15;
                this.character.happiness -= 10;
                this.character.playfullness -= 10;
                this.character.food -=10;
                console.log(`${this.character.name} needs to sleep. Can i go to bed?`);
            }
        }, 6 * 60 * 1000);
    }
    startPlayTimer() { //set needs play with character timer for 4 minutes
        this.playTimer = setInterval(() => {
            this.character.playfullness -= 15; //decrease happiness
            //checking minimal play point and send warning + decrease happiness/health/sleep
            if (this.character.playfullness < 25) {
                this.character.happiness -= 15;
                this.character.health -= 10;
                this.character.sleep -= 10;
                console.log(`I'm bored. Play with ${this.character.name}!`);
            }
        }, 4 * 60 * 1000);
    };
    checkLifeProperties() { //set checking life properties each 2 minutes
        this.liveOrNot = setInterval(() => {
            if (this.character.age > 50 || this.character.food < 0 || this.character.health < 0) {
                console.log(`${this.character.name} is going on road to Heaven`);
                return this.gameOver();
            }
            if (this.character.health > 100 && this.character.happiness > 100 && this.character.playfullness > 100) {
                console.log(`${this.character.name} had to much fun. So he decided to run away`);
                return this.gameOver();
            }
        }, 2 * 60 * 1000);
    };
    Statistics() { // character statistics method
        console.log(
            `***\t\t\t${this.character.name} Statistics\t\t\t***\n` +
            `*\t${this.character.name} is ${this.character.age} years old\n`+
            `*\tCreated at: ${new Date(this.startDate)}\n`+
            `*\tEnds game at: ${this.endDate ? new Date(this.endDate) : 'steel playing'}\n`+
            `*\t${this.character.name} has ${this.character.health} health points\n`+
            `*\t${this.character.food} food point\n`+
            `*\t${this.character.sleep} sleep point\n`+
            `*\t${this.character.happiness} points of happiness\n`+
            `*\t${this.character.playfullness} playfullness points`
        );
    };
    gameOver() { // game over method and send statistic
        clearInterval(this.growTimer);
        clearInterval(this.foodTimer);
        clearInterval(this.sleepTimer);
        clearInterval(this.playTimer);
        this.endDate = Date.now();
        this.Statistics();
    };

    //character control methods
    feedMe() {
        clearInterval(this.foodTimer); //clear foodTimer because we feed character
        this.character.food += 15;
        this.character.health += 10;
        this.character.sleep -= 10;
        this.character.happiness -= 10;
        this.character.playfullness -= 10;
        this.startFoodTimer(); //restart foodTimer for next feed or timer interval
    };
    takeSleep() {
        clearInterval(this.sleepTimer); //clear sleepTimer because we give him a sleep
        this.character.sleep += 20;
        this.character.food -= 15;
        this.character.health += 10;
        this.character.happiness += 5;
        this.character.playfullness -= 15;
        this.startSleepTimer(); //restart sleepTimer for next sleep or timer interval
    };
    playMe() {
        clearInterval(this.playTimer); //clear playTimer because we played with character
        this.character.playfullness += 20;
        this.character.happiness += 15;
        this.character.food -= 20;
        this.character.sleep -= 20;
        this.character.health -= 10;
        this.startPlayTimer();  //restart playTimer for next play or timer interval
    };
}

const Zippy = new Tamagochi('Zippy');

Zippy.startGame();
Zippy.feedMe();
Zippy.takeSleep();
Zippy.playMe();
Zippy.Statistics();
Zippy.gameOver();