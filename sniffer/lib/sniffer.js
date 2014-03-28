
var noble = require('noble');
var es = require("event-stream");

module.exports = es.readable(function(count, cb){
  var self = this;
  console.log("starting sniffer"); 

  noble.on('stateChange', function(state) {
    if (state === 'poweredOn') {
      // We want to make sure that noble tells us about every
      // ble advertisement instead of just telling us about now devices once so that
      // we can walk away and come back
      noble.startScanning([], true);
    } else {
      noble.stopScanning();
    }
  });

  noble.on('discover', function(p) {
    // All this module needs to do is pass this discovery back to its calling function
    var annoucement =  { uuid : p.uuid,
                         advertisement :  p.advertisement,
                         rssi: p.rssi,
                         services: p.services,
                         state: p.state };


    self.emit('data',annoucement);

  });

});
