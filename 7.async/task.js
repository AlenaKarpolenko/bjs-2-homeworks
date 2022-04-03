class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, callback, id) {
        if (typeof id === 'undefined') {
            throw new Error('id таймера не передан');
        } else if (typeof this.alarmCollection.find(clock => clock.id === id) !== 'undefined') {
            return console.error('звонок существует');
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
        let outArrLength = this.alarmCollection.length;
        return outArrLength < arrLength;
    }
    getCurrentFormattedTime() {
        let date = new Date();
        let hourse = date.getHours();
        let minutes = date.getMinutes();

        if (date.getHours() < 10) {
            hourse = '0' + date.getHours();
        }
        if (date.getMinutes() < 10) {
            minutes = '0' + date.getMinutes
        }
        return hourse + ':' + minutes;
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
            return this.timer = null;
        }
    }
    printAlarms() {
        return this.alarmCollection.forEach(clock => console.log(clock.id + ': ' + clock.time));
    }
    clearAlarms() {
        this.stop();
        return this.alarmCollection = [];
    }
}





let PhoneClock = new AlarmClock();
PhoneClock.addClock('08:01', () => console.log('пора вствать'), 1);
PhoneClock.addClock('08:02', () => console.log('вствай, а то проспишь'), 2);
PhoneClock.removeClock(2);
PhoneClock.addClock('08:03', () => console.log('вставай уже'), 3);
PhoneClock.start();
PhoneClock.stop();
PhoneClock.printAlarms();