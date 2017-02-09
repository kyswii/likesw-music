'use strict';

const util = require('util');
const wrap = require("co-express");
const SongAct = require("../../mysql/models/song");

var SongApi = {};
console.log('Song controllers........')
// url: /music/account/create
SongApi.createSong = wrap(function* (req, res, next) {
    try {
        console.log('........')
        SongAct.createSong(req, res);
    } catch (err) {
        res.json(err);
    }
});

// url: /music/account/load
SongApi.loadSong = wrap(function* (req, res, next) {
    try {
        SongAct.loadSong(req, res);
    } catch (err) {
        res.json(err);
    }
});

// url: /music/account/{email}/update
SongApi.updateSong = wrap(function* (req, res, next) {
    try {
        SongAct.updateSong(req, res);
    } catch (err) {
        res.json(err);
    }
});

module.exports = SongApi;