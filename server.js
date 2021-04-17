var express = require('express');
var moment = require('moment');
var app=express()

app.use(express.static(__dirname + '/public'));

var printMessage  = function(message){
    console.log('[Server] ' + moment().format()+' '+message)
}

var port = 3000;
app.listen(port);
printMessage("Listening on port: "+port);

