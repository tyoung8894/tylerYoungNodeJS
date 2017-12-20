var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle={};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;


//starts the application with localhost:8000/start as start page passed as the handle to router.route
server.start(router.route, handle);