var es = require("event-stream");
var db = require("./memdb");

var TIMEOUT = 10000;

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
  var now = Date.now();
  data.lastSeen = now;

  var self = this; 
  var old_rec = db.get(data.uuid);

  var expirePresence = function(){
    var timerObj = setTimeout(function(){

      console.log("timeout expired device has left");
      // Change the state to away because the ble device 
      // hasnt been seen in a while
      data.state = "away";
      delete data.timeId;
      self.emit("data", data);

      // Remove the specific object from the database
      db.clear(data.uuid);
    }, data.estimateTimeout);
    return timerObj;
  };

  if(old_rec){
    clearTimeout(old_rec.timerId);
    var timeBetween = now - old_rec.lastSeen;

    console.log('clearing timer, time between packets ' + timeBetween);
    //Create a new timer

  } else {
  
    data.state = "near";
    self.emit("data", data);

  } 
    
  data.timerId =  expirePresence();
  db.set(data.uuid, data);
    
});
