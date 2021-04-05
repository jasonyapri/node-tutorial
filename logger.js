const EventEmitter = require('events')

var url = 'http://mylogger.io/log'

// console.log(__filename)
// console.log(__dirname)
class Logger extends EventEmitter {
	// when a function reside in a class, it is called method
	log(message) {
		// Send an HTTP request
		console.log(message)
	
		// Raise an event: signaling that an event is happening
		this.emit('messageLogged', { id: 1, url: 'http://'})
	}
}

module.exports = Logger
// module.exports.log = log
// module.exports.endPoint = url