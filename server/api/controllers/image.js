'use strict';

const util = require('util');
const wrap = require("co-express");
const ImageAct = require("../../mysql/models/image");

var ImageApi = {};
console.log('Image controllers........')
// url: /music/image/create
ImageApi.createImage = wrap(function* (req, res, next) {
    try {
        ImageAct.createImage(req, res);
    } catch (err) {
        res.json(err);
    }
});

// url: /music/image/{belong}/load
ImageApi.loadImage = wrap(function* (req, res, next) {
    try {
        ImageAct.loadImage(req, res);
    } catch (err) {
        res.json(err);
    }
});

// url: /music/account/{email}/update
ImageApi.updateImage = wrap(function* (req, res, next) {
    try {
        ImageAct.updateImage(req, res);
    } catch (err) {
        res.json(err);
    }
});

module.exports = ImageApi;