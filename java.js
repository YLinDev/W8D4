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

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

Function.prototype.myBind = function(ctx) {
    return () => {
        return this.apply(ctx)
    }
}

class Lamp {
    constructor() {
      this.name = "a lamp";
    }
  }
  
  const turnOn = function() {
    console.log("Turning on " + this.name);
  };
  
  const lamp = new Lamp();
  
//   turnOn(); // should not work the way we want it to
  
  const boundTurnOn = turnOn.bind(lamp);
  const myBoundTurnOn = turnOn.myBind(lamp);
  
  boundTurnOn(); // should say "Turning on a lamp"
  myBoundTurnOn(); // should say "Turning on a lamp"