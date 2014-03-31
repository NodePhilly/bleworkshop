var subscriber = require("./lib/subscriber");
var popup = require("./lib/popup");


subscriber.on('event', function(data){


  if(data.status === 'near'){
    popup("Bryan is Back");
  }else{
    popup("Bryan has left");
  }

});

