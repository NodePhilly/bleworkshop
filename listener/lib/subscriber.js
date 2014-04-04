var sockjs = require('sockjs-stream');

var stream = sockjs('ws://localhost:3000/state', function(){
                 
    console.log("sockjs connected");
});


module.exports = stream;


