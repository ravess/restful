let events = require('events')

// creating an event emitter
let eventEmitter =  new events.EventEmitter();

// Listening to an event which will be fired later on by emitting it
eventEmitter.on('connection', () => {
    console.log('connection successful.')
})

// Firing the connection event
eventEmitter.emit('connection');