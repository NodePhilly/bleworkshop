var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.json());

var shoe = require('shoe');
var http = require('http');

var streams = {};
var index = 0;

var sock = shoe(function (stream) {
  console.log('Connection created');
  index++;
  streams[index] = stream;
  stream.on('close', function() {
    console.log('Connection ended');
    delete streams[index];
  });
  stream.pipe(process.stdout, { end : false });
});

app.post('/api/state', function(req, res) {
  console.log('Updating state information');
  for (i in streams) {
    streams[i].write(req.body.state);
  }
  res.writeHead(201);
  res.end();
});

sock.install(app.listen(port), '/state');
