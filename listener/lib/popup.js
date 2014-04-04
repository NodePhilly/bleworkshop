var growl = require('notify-send');
var es = require('event-stream');

// Specify different urgency levels
// growl.low.notify('Announcement', 'Clear skies and sunshine today');
// growl.normal.notify('Announcement', 'Meeting in 15 minutes');
// growl.critical.notify('Announcement', 'Red Alert!');

module.exports = es.through(function write(data){


  console.log("popping up an alert");
  growl.normal.timeout(1000).notify('Announcement', "bryan is " + data);


});
