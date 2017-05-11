//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');

var async = require('async');

//[no number] this designed to test a select statement...........................................
//var mysql = require('./MysqlConnection');
var express = require("express");
var app = express();



module.exports = app; /*for testing purposes I'm exporting the server to import it into the test I am going to write */
//
app.get('/get_outages', function (req, res, error) {

    var a = JSON.stringify([{"id":647,"name":"UD not working properly after release. Worklist issue has been resolved. Intermittent problems with ticket update are still under investigation.","time":"2017-03-14T16:06:30.000Z","ticket":"228817228"}]);
    var b = JSON.parse(a);
    console.log(b);
    res.send(b);
    res.end();
});

app.listen(3000, function () {
    console.log("listening on port 3000");
});


