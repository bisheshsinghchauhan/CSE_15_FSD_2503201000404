//Using node.js built in events module , create an eventemitter . register multiple listeners for a resposne
//event, then emit the event by passing name and id as arguments and display them in the console.
const http = require("http");
const EventEmitter = require("events");
const myEmitter = new EventEmitter();

myEmitter.on("response", () => {
    console.log("Data received successfully");
});

myEmitter.on("response", () => {
    console.log("Some other logic here");
});

myEmitter.on("response", (name, id) => {
    console.log(`Data received ${name} with id ${id}`);
});

myEmitter.emit("response", "harish", 34);

