var sockjs = require('sockjs-stream');

var stream = sockjs('ws://192.168.1.132:3000/state', function(){
                 
    console.log("sockjs connected");
});


module.exports = stream;


