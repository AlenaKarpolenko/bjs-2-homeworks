class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, callback, id) {
        if (isNaN(id)) {
            throw new Error('id таймера не передан');
        } else if (this.alarmCollection.some((clock) => clock.id == id)) {
            console.error('звонок существует');
            return;
        }
        this.alarmCollection.push({
            time: time,
            callback: callback,
            id: id
        });
    }
    removeClock(id) {
        let arrLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(
            clock => clock.id !== id);
        return this.alarmCollection.length < arrLength;
    }


    


start() {
    if (!this.timer) {
        this.timer = setInterval(() => {
            this.alarmCollection.forEach(clock => {
                if (clock.time == this.getCurrentFormattedTime()) {
                    clock.callback();
                }
            });
        });
    }
}

stop() {
    if (this.timer !== null) {
        clearInterval(this.timer);
        this.timer = null;
    }
}
printAlarms() {
    console.log ('Количество будильников:' + this.alarmCollection.length);
    this.alarmCollection.forEach(clock => console.log(clock.id + ': ' + clock.time));
}
clearAlarms() {
    this.stop();
   this.alarmCollection = [];
}


getCurrentFormattedTime(){
    return new Date().toLocaleTimeString("ru-Ru", {
        hour: "2-digit",
        minute: "2-digit",
      });

}
}



let phoneClock = new AlarmClock();
phoneClock.addClock('08:01', () => console.log('пора вствать'), 1);
phoneClock.addClock('08:02', () => console.log('вствай, а то проспишь'), 2);
phoneClock.removeClock(2);
phoneClock.addClock('08:03', () => console.log('вставай уже'), 3);
phoneClock.start();
phoneClock.stop();
phoneClock.printAlar