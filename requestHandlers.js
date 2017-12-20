//var exec = require("child_process").exec;
var querystring = require("querystring");

function start(response, postData) {
    console.log("Request handler 'start' was called");

    //return /upload when submit button is clicked
    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" method="post">' +
        '<textarea name ="text" rows="20" cols="60"></textarea>' +
        '<input type="submit" value="Submit text" />'+
        '</form>'+
        '</body>'+
        '</html>';
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(body);
        response.end();

    //var content = 'empty';
    //exec non-blocking operation gets all files in current 
    //directory, fill content variable with result
    //exec("find /",
        //{ timeout: 10000, maxBuffer: 20000*1024 },
        //function (error, stdout, stderr) {
            //response.writeHead(200, {"Content-Type": "text/plain"});
           // response.write(stdout);
            //response.end();
    //});
    //exec("ls -lah", function (error, stdout, stderr){
        //response.writeHead(200, {"Content-Type": "text/plain"});
        //response.write(stdout);
        //response.end();
        ////content = stdout;
    //});

    //function sleep(milliSeconds){
        //var startTime = new Date().getTime();
        //while(new Date().getTime() < startTime + milliSeconds);
    //}
    //return content;
    //sleep(10000);
    //return "Hello Start";
}

function upload(response, postData){
    console.log("Request handler 'upload' was called");
    response.writeHead(200, {"Content-Type": "text/plain"});
    //only show user-entered text
    response.write("You've sent the text: " + querystring.parse(postData).text);
    response.end();
    //return "Hello Upload";
}

exports.start = start;
exports.upload = upload;