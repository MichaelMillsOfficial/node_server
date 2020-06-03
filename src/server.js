var express = require('express');
var app = express();

app.get('/helloworld', function(req, res) {
    res.end("Hello world");
});

var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port
    console.log("Hello world api listening on http://%s:%s", host, port);
});