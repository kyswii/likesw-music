'use strict';

var _ = require('underscore');

var pool = require('../pool');



var ForyouAct = {};

ForyouAct.loadForyouData = function (req, res) {
    pool.getConnection(function (err, conn) {
        if (err) throw err;

        var accountId = req.swagger.params.id.value;
        var data = {
            account: null,
            songs: null,
            albums: null,
            artists: null
        };
        if (parseInt(accountId) == -1) {
            getDefaultData(data, conn, function (info) {
                res.json(info);
            });
            
        } else {
            getDataByAccount(accountId, data, conn, function (info) {
                
                getDefaultAlbumAndArtist(info, conn, function (infor) {
                    console.log('info...', infor);
                    res.json(infor);
                });
                
            });
        }
    });
}

module.exports = ForyouAct;


function getDefaultData(data, conn, callback) {
    var s_sql = 'SELECT * FROM songs ORDER BY sumCollect DESC LIMIT 15';
    conn.query(s_sql, function (err, s_result) {
        if (err) throw err;

        data.songs = s_result;

        getDefaultAlbumAndArtist(data, conn, function (info) {
            callback(info);
        });
        
    });

    conn.release();
}

//
function getDefaultAlbumAndArtist(data, conn, callback) {
    var al_sql = 'SELECT * FROM albums ORDER BY sumCollect DESC LIMIT 4';
    conn.query(al_sql, function (err, al_result) {
        if (err) throw err;

        data.albums = al_result;

        var ar_sql = 'SELECT * FROM artists ORDER BY sumCollect DESC LIMIT 1';
        conn.query(ar_sql, function (err, ar_result) {
            if (err) throw err;

            data.artists = ar_result;

            callback(data);
        });
    });
}

//
function getDataByAccount(accountId, data, conn, callback) {
    conn.query('SELECT * FROM account WHERE id = ?', accountId, function (err, acc_result) {
        if (err) throw err;
        
        data.account = acc_result[0];
        var collect_song = JSON.parse(acc_result[0].collect_song);
   
        getCollectSongs(collect_song, conn, function (songs) {
            data.account = _.extend(data.account, {collectSongs: songs});
            console.log('data.account....0', data.account);
            conn.query('SELECT * FROM song_share WHERE accountID = ?', accountId, function (err, ss_result) {
                if (err) throw err;

                data.account = _.extend(data.account, {shareSongs: []});
                
                getSongInfo(ss_result, conn, function (ss_result_0) {
                    data.account.shareSongs = ss_result_0;

                    getDataSongs(collect_song, conn, function (info) {
                        data.songs = info;
                        callback(data);
                    });
                });              

            });
        })
        
               
    });

    conn.release();
}

//
function getCollectSongs(collect_song, conn, callback) {
    var songs = [];
    if (collect_song.length == 0) {
        callback(songs);
        return;
    }

    collect_song.forEach(function (d, i) {
        conn.query('SELECT * FROM songs WHERE id = ?', d, function (err, result) {
            if (err) throw err;

            songs.push(result[0]);

            if ((i + 1) == collect_song.length) {
                callback(songs);
            }
        })
    });
}

//
function getSongInfo(ss_result, conn, callback) {
    var length = ss_result.length;

    if (length == 0) {
        callback(ss_result);
        return;
    }

    ss_result.forEach(function (d, i) {
        conn.query('SELECT * FROM songs WHERE id = ?', d.songID, function (err, result) {
            if (err) throw err;

            d = _.extend(d, {song: result[0]});

            if ((i + 1) == length) {
                callback(ss_result);
            }
        });
    });
}

//
function getDataSongs(collect_song, conn, callback) {
    var songJson = {};
    var songJsonLen = 0;
    if (collect_song.length == 0) {
        callback(collect_song);
        return;
    }
    collect_song.forEach(function (d, i) {
        conn.query('SELECT * FROM songs WHERE id = ?', d, function (err, son_result) {
            if (err) throw err;

            var label = son_result[0].tags.split('/');
    
            label.forEach(function (p, j) {
                if (p in songJson) {
                    songJson[p] += 1;
                } else {
                    songJson[p] = 1;
                    songJsonLen++;
                }
            });

            if ((i + 1) == collect_song.length) {
                filterSongs(songJson, songJsonLen, conn, function (info) {
                    callback(info);
                });                    
            }
        });
    });
}

//
function filterSongs(songJson, songJsonLen, conn, callback) {
    var sum = 0;
    var songs = [];
    var o = 0;
    for (var item in songJson) {
        sum += songJson[item];
    }
    // console.log('songJsonLen....', label, songJsonLen);
    for (var item in songJson) {
        var num = Math.ceil(15 * (songJson[item]/sum));
        var sql = 'SELECT * FROM songs WHERE tags like "%' + item + '%" ORDER BY sumCollect LIMIT ' + num;
        console.log('songs, result..', num, item);
        conn.query(sql, function (err, _result) {
            if (err) throw err;

            o++;
            songs = _.extend(songs, _result);
        
            // console.log('songs, result..', num, item, _result);
            if (songJsonLen == o) {
                // console.log('percentJson....', songs);
                callback(songs);
            }                                    

        })
    }
}