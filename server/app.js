var express = require("express");
var app = express();
var http = require("http");

app.listen("19999", function () {
    console.log("http://localhost:19999/");
});

app.get("/comment", function (req, res, next) {
    res.send("Hey!");
});