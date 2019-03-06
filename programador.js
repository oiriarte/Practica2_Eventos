
// Importar modulo Later.js:
const later = require('later');
const EventEmitter = require('./events');

class Programador extends EventEmitter {
	
	constructor(configuracion) {
		
		super();
		// Usar zona horaria local:
		later.date.localTime();

		if (configuracion instanceof Array){
			for(var i=0; i<configuracion.length; i++)
				var contentArray = configuracion[i];
				const temperatura = contentArray.temperatura;
				const hora = contentArray.hora;
				var sched = later.parse.text('at ' + hora);
				
				later.setInterval(() => this.emit('ideal', temperatura), sched);
		}
	}

}

exports = module.exports = Programador;
