
class EventEmitter {
	
	constructor() {
		this.escuchadores = {};
	}

	on(event, escuchador){
		if(!this.escuchadores[event]){
			this.escuchadores[event] = [];
		}
		this.escuchadores[event].push(escuchador);
	}

	emit(event, args){
		const evento = this.escuchadores[event];
		if (evento){
			evento.forEach(cb => cb.call(null, args))
		}
	}
}

exports = module.exports = EventEmitter;