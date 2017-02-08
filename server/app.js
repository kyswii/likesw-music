'use strict';

var SwaggerExpress = require('swagger-express-mw');
// var mysql = require("mysql");
var express = require('express');
var app = express();
var fs = require("fs");
var server = require("http").Server(app);

var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


app.use('/swagger-ui', express.static(__dirname + '/swagger-ui'));
app.use('/swagger', express.static(__dirname + '/api/swagger'));
app.use('/music/public', express.static(__dirname + '/public'));

var config = {
  appRoot: __dirname // required config
};
  

SwaggerExpress.create(config, function (err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);
  console.log("server start at port 19001");

  var port = process.env.PORT || 19001;
  server.listen(port);
 
  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log("swagger.......");
  }
});

