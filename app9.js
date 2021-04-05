// https://nodejs.org/dist/latest-v14.x/docs/api/events.html#events_class_eventemitter

const EventEmitter = require('events')

// Register a listener | must be defined before the emit functions
// emitter.on('messageLogged', function(arg) { // e, eventArg
// 	console.log('Listener called', arg)
// })

const Logger = require('./logger')
const logger = new Logger()

logger.on('messageLogged', (arg) => { // e, eventArg
	console.log('Listener called', arg)
})

logger.log('message')
