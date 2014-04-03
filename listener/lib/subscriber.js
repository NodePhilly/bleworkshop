var util = require('util');
var EventEmitter = require('events').EventEmitter;

function Subscriber(){

  var self = this;
  setTimeout(function(){
    self.emit('event', {status: "near"});


  }, 2000);
  
  setTimeout(function(){
    self.emit('event', {status: "away"});

  }, 5000);



}

util.inherits(Subscriber, EventEmitter);


//Exports a single instance of subscribe so that multiple listeners can bind to 
//one subscription
var instance = new Subscriber();

module.exports = instance;

