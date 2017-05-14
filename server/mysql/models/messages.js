'use strict';

var pool = require('../pool');


var MessagesAct = {};

MessagesAct.loadMessages = function (req, res) {
    pool.getConnection(function (err, conn) {
        if (err) throw err;

        var sql = 'SELECT song_share.id, song_share.comment, song_share.time, song_share.sumCollect, account.name as aName, account.photo, songs.name as sName, songs.artist, songs.image FROM song_share LEFT JOIN account ON account.id = song_share.accountID LEFT JOIN songs ON songs.id = song_share.songID ORDER BY song_share.id DESC';
        conn.query(sql, function (err, result) {
            if (err) throw err;

            console.log('result....', result.toString());
            
            res.json(result);
        });

        conn.release();
    });
}

MessagesAct.thumbsUp = function (req, res) {
    pool.getConnection(function (err, conn) {
        if (err) throw err;

        var id = req.swagger.params.id.value;
        var sql = 'UPDATE song_share SET sumCollect = sumCollect + 1 WHERE id = ?';
        console.log('id...', id);
        conn.query(sql, id, function (err, result) {
            if (err) throw err;

            res.json('SUCCESS');
        });

        conn.release();
    })
}

module.exports = MessagesAct;