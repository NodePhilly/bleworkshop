'use strict';
var shoe = require('shoe');
var through = require('through');

$().ready(function() {

  var $stateReporter = $('#state');
  var stream = shoe('/state');

  stream.pipe(through(function (message) {
    $stateReporter.html(message.state);
  })).pipe(stream);

});
