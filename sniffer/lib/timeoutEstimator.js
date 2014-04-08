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

  var old_rec = db.get(data.uuid + ":times");

  if(old_rec){
    var timeBetween = now - old_rec.lastSeen;
    console.log(' time between packets ' + timeBetween);
    data.history = old_rec.history;
    data.history.push(timeBetween);

    var estimateTimeout;

    if (data.history.length < 10){
      estimateTimeout = TIMEOUT;
    }else{
      var total = 0;
      data.history.forEach(function(time){
        total += time;
      });

      // Take the average timeout and multiple it by 2.5
      estimateTimeout = (total / data.history.length) * 2.5;
     
    }

    if(data.history.length > 40){
      data.history.shift();
    }


    console.log("Setting estmiated Timeout to " + estimateTimeout);
    data.estimateTimeout = estimateTimeout;

  }else{
    data.history = [];
  }

  db.set(data.uuid + ":times", data);


  // no need to pass history to the next stage
  
  this.emit("data", data);

      
});
