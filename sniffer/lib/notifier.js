var es = require("event-stream");
var request = require("request");

module.exports = es.through(function write(data){

  console.log("notifier", data);
  //Post to REST API here



});
