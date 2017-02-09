'use strict';

var pool = require('../pool');
var SongMethods = require('../../models/song-methods')


var SongAct = {};

// 
SongAct.createSong = function (req, res) {
    pool.getConnection(function (err, conn) {
        if (err) throw err;

        var info = req.body;
        info.songUrl = '/public/songs/' + info.belong + '/' + info.artist + ' - ' + info.song + '.mp3';
        info.imageUrl = '/public/images/' + info.belong + '/' + info.artist + ' - ' + info.song + '.jpg';
        conn.query('INSERT INTO music SET ?', info, function (err, result) {
            if (err) throw err;

            res.json('SAVED');
        })
    });
}

//
SongAct.loadSong = function (req, res) {
    pool.getConnection(function (err, conn) {
        if (err) throw err;

        var belong = req.swagger.params.label.value;
        conn.query('SELECT * FROM music WHERE belong = ?', belong, function (err, result) {
            if (err) throw err;
            SongMethods.songClassify(belong, result, function (info) {
                res.json(info);
            });
        });
    })
}

//
SongAct.updateSong = function (req, res) {

}

module.exports = SongAct;