var express = require('express'),
    app = require ('./app'),
    server  = require('http').createServer(app);

server.listen(3000, function(err) {
        console.log("Im running");
});