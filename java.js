class Clock {
    constructor() {
        let time = new Date()
        this.minutes = time.getMinutes()
        this.hours = time.getHours() 
        this.seconds = time.getSeconds() 
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
        this.printTime()
    }
}

a = new Clock();
a.printTime();
a._tick();
