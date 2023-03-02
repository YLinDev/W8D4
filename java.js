class Clock {
    constructor() {
        let time = new Date()
        this.minutes = time.getMinutes()
        this.hours = time.getHours() 
        this.seconds = time.getSeconds() 
        this.printTime();
        setInterval(this._tick.bind(this), 1000)
    }

    printTime() {
        console.log(`${this.hours.toString().padStart(2,"0")}:${this.minutes.toString().padStart(2,"0")}:${this.seconds.toString().padStart(2,"0")}`)
    }

    _tick() {
        this.seconds++
        if (this.seconds > 59) {
            this.seconds = 0
            this.minutes++
        }
        if (this.minutes > 59) {
            this.minutes = 0
            this.hours++
        }
        if (this.hours > 23) {
            this.hours = 0
        }
        debugger
        this.printTime();
    }
}

// new Clock();
// a._tick();

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft === 0) {
        completionCallback(sum);
    }
    if (numsLeft > 0) {
        rl.question('Please enter a number:', function(answer) {
            let int = parseInt(answer);
            sum += int;
            numsLeft--;
            console.log(sum);
            return addNumbers(sum, numsLeft, completionCallback);
        });
    };
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));