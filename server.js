var express = require('express');
var path = require('path');
var app = new express();
// var config = require('./config');
app.use("/test", express.static('app_h5/test.html'));
app.use("/appDetail", express.static('app_h5/detail.html'));
app.use("/js", express.static('app_h5/js'));
app.use("/css", express.static('app_h5/css'));
app.use("/img", express.static('app_h5/img'));
app.use("/app/data", express.static('/app/data'));
require('http').createServer(app).listen('5000', function(err) {
	console.log('Express server listening');
});
