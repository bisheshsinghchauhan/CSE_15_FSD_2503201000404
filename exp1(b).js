const EventEmitter = require('events');
const myEmitter = new EventEmitter();
//Evenet listener
myEmitter.on('click', () => {
    console.log('Button clicked!');
});
//trigger the event
myEmitter.emit('click');
//abcd