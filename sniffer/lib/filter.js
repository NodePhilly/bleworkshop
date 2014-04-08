var es = require("event-stream");

// Filter from ENV or Bryans fitbit
var filtered = process.env.UUID || 'f44e22f2ef25';

module.exports = es.through(function write(data){
  /* example data
   *
   * { uuid: 'f44e22f2ef25',
   *   advertisement: 
   *     { localName: 'Force',
   *       txPowerLevel: -6,
   *       manufacturerData: undefined,
   *       serviceData: [ [Object] ],
   *       serviceUuids: [ 'adab19396e7d4601bda2bffaa68956ba' ] },
   *   rssi: -61,
   *   services: null,
   *   state: 'disconnected' }
   */
  
  if(data.uuid !== filtered) return;

  // Pass data on to the next stream
  this.emit("data", data);

    
});
