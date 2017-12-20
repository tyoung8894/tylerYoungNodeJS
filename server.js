var http = require("http");
var url = require("url");

function start(route, handle){
    function onRequest(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " receieved");
        //expect encoding of received data to be utf8
        request.setEncoding("utf8");
        //fill postData when new chunk of POST data arrives
        request.addListener("data", function(postDataChunk){
            postData += postDataChunk;
            console.log("received POST data chunk '" +
            postDataChunk + "'.");
        });
        //call to router for end event callback when all POST data gathered
        request.addListener("end", function() {
            route(handle, pathname, response, postData);
        });
         
         
        }


        //route(handle,pathname, response);
        //route(handle, pathname);

        //response.writeHead(200, {"Content-Type": "text/plain"});
        //var content = route(handle, pathname);
        ////response.write("Hello World");
       // response.write(content);
        //response.end();
    //}
    http.createServer(onRequest).listen(8888);
    console.log("Server has started");
}
exports.start = start;