var subscriber = require("./lib/subscriber");
var processor = require("./lib/processor");
var popup = require("./lib/popup");


subscriber
.pipe(processor)
.pipe(popup);
