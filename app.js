
/**
 * Module dependencies.
 */
var fs = require('fs')
var express = require('express');
require("express-resource");
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
//载入路由总配置文件
require("./routes_load.js")(app)
//载入model文件
require("./models_load.js")()

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
