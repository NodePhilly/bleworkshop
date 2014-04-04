var es = require("event-stream");


module.exports = es.through(function write(data){
  
  var event = JSON.parse(data.toString('utf8'));
  console.log(event);
      
  this.emit('data', event.state);

});
