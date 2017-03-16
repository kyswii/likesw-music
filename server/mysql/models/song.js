'use strict';

var pool = require('../pool');
var SongMethods = require('../../models/song-methods')


var SongAct = {};

// 
SongAct.createSong = function (req, res) {
    pool.getConnection(function (err, conn) {
        if (err) throw err;
        console.log('createSong', req.body);
        var info = req.body;
        info.url = '/public/songs/' + info.artist + ' - ' + info.name + '.mp3';
        conn.query('INSERT INTO songs SET ?', info, function (err, result) {
            if (err) throw err;

            res.json('SAVED');
        })
    });
}

//
SongAct.loadSong = function (req, res) {
    pool.getConnection(function (err, conn) {
        if (err) throw err;

        var label = {};
        for (var item in req.swagger.params) {
            if (req.swagger.params[item].value) {
                label[item] = req.swagger.params[item].value;
            }            
        }
  console.log('label.......', label);
        conn.query('SELECT * FROM songs WHERE ?', label, function (err, result) {
            if (err) throw err;
            SongMethods.songClassify(label, result, function (info) {
                res.json(info);
            });
        });
    })
}

//
SongAct.updateSong = function (req, res) {

}

module.exports = SongAct;