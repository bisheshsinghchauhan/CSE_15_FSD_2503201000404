class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }

    emit(event) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback());
        }
    }
}


const emitter = new EventEmitter();


emitter.on("greet", () => {
    console.log("Hello! Welcome.");
});
emitter.on("exit", () => {
    console.log("Goodbye! Exiting...");
});
emitter.emit("greet");
emitter.emit("exit");