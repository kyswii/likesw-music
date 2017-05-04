'use strict';

var pool = require('../pool');
var ImageMethods = require('../../models/image-methods')


var BasicAct = {};

//
BasicAct.loadBasicData = function (req, res) {
    pool.getConnection(function (err, conn) {
        if (err) throw err;

        var data = {
            home: null,
            library: {
                songs: null,
                albums: null,
                artists: null
            }
        };
        
        conn.query('SELECT * FROM images WHERE belong = ?', 'home', function (err, h_result) {
            if (err) throw err;
            ImageMethods.imageClassify('home', h_result, function (info) {
                data.home = info;

                conn.query('SELECT * FROM songs ORDER BY sumCollect DESC LIMIT 6', function (err, ls_result) {
                    if (err) throw err;

                    data.library.songs = ls_result;

                    conn.query('SELECT * FROM albums ORDER BY sumCollect DESC LIMIT 3', function (err, lal_result) {
                        if (err) throw err;

                        data.library.albums = lal_result;

                        conn.query('SELECT * FROM artists ORDER BY sumCollect DESC LIMIT 7', function (err, lar_result) {
                            if (err) throw err;

                            data.library.artists = lar_result;
                            res.json(data);
                        });
                    });
                });
            });
        });

        conn.release();
    })
}

//
BasicAct.loadAllData = function (req, res) {
    pool.getConnection(function (err, conn) {
        if (err) throw err;

        var data = {
            songs: null,
            albums: null,
            artists: null
        };

        conn.query('SELECT * FROM songs', function(err, s_result) {
            if (err) throw err;

            data.songs = s_result;

            conn.query('SELECT * FROM albums', function (err, al_result) {
                if (err) throw err;

                data.albums = al_result;

                conn.query('SELECT * FROM artists', function (err, ar_result) {
                    if (err) throw err;

                    data.artists = ar_result;

                    res.json(data);
                });
            });
        });

        conn.release();
    })
}


module.exports = BasicAct;