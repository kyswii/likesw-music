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
        });
        conn.release();
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

        var sql = 'SELECT * FROM songs WHERE tags like "%' + label.tags + '%"';

        if (label.tags.indexOf('hot-') != -1) {
            var arr = label.tags.split('-');
            if (arr[1] == 'songs') {
                sql = 'SELECT * FROM songs ORDER BY sumCollect DESC LIMIT 10';
            } else if (arr[1] == 'albums') {
                sql = 'SELECT * FROM songs ORDER BY sumCollect DESC LIMIT 10';
            } else if (arr[1] == 'artist') {
                sql = 'SELECT * FROM songs ORDER BY sumCollect DESC LIMIT 10';
            }
        } else {
            if (label.tags.indexOf('albums-') != -1) {
                var arr = label.tags.split('-');
                sql = 'SELECT * FROM songs WHERE album = "' + arr[1] + '"';
            }

            if (label.tags.indexOf('artists-') != -1) {
                var arr = label.tags.split('-');
                sql = 'SELECT * FROM songs WHERE artist = "' + arr[1] + '"';
            }
        }

        
        
        console.log('sql...', sql);
        conn.query(sql, function (err, result) {
            if (err) throw err;
            SongMethods.songClassify(label, result, function (info) {
                // console.log('song-info...', info);
                res.json(info);
            });
        });
        conn.release();
    })
}

//
SongAct.updateSong = function (req, res) {

}

module.exports = SongAct;