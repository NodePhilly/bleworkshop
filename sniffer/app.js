var sniffer = require('./lib/sniffer');
var filter = require('./lib/filter');
var timeoutEstimator = require('./lib/timeoutEstimator');
var processor = require('./lib/processor'); 
var notifier = require('./lib/notifier');


//sniffer create a readStream
sniffer
.pipe(filter) // Filter is a through stream
.pipe(timeoutEstimator)
.pipe(processor) // Processor is a through stream
.pipe(notifier); // notifier is a through stream as well
