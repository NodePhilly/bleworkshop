var growl = require('notify-send');

// Specify different urgency levels
// growl.low.notify('Announcement', 'Clear skies and sunshine today');
// growl.normal.notify('Announcement', 'Meeting in 15 minutes');
// growl.critical.notify('Announcement', 'Red Alert!');

module.exports = function popup(message){

  growl.normal.timeout(1000).notify('Announcement', message);


}
