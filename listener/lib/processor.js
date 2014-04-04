var es = require("event-stream");


module.exports = es.through(function write(data){
  console.log(data.toString('utf8'));
  
  var event = data.toString('utf8');
      
  this.emit('data', event);

});
