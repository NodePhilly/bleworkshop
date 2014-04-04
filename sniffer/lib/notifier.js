var es = require("event-stream");
var request = require("request");

module.exports = es.through(function write(data){

  console.log("notifier", data);
  //Post to REST API here

  request.post({url: "http://localhost:3000/api/state", json: data}, function(e, r, b){
    if(e){
      console.log(e);
    }

    console.log(b);

  });


});
