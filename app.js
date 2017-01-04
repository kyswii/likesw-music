var express = require("express");
var app = express();
var http = require("http");

app.listen("9999", function () {
    console.log("http://localhost:9999/");
});
//
app.use("/", express.static(__dirname + "/client"));

//
app.get("/", function (req, res, next) {
    res.sendFile(__dirname + "/client/index.html");
});