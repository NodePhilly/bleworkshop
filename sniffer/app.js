var sniffer = require('./lib/sniffer');
var processor = require('./lib/processor');
var notifier = require('./lib/notifier');


//sniffer create a readStream
sniffer
.pipe(processor) // Processor is a through stream
.pipe(notifier); // notifier is a through stream as well
