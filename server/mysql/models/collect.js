'use strict';

var pool = require('../pool');


var CollectAct = {};

CollectAct.collectSong = function (req, res) {
    pool.getConnection(function (err, conn) {
        if (err) throw err;

        var sql = 'SELECT collect_song FROM account WHERE id = ?';
        conn.query(sql, req.body.accountID, function (err, result) {
            if (err) throw err;

            var info = JSON.parse(result[0].collect_song);
            info.push(req.body.songID);
            console.log('collect....', info);
            conn.query('UPDATE account SET collect_song = ? WHERE id = ?', [JSON.stringify(info), req.body.accountID], function () {
                if (err) throw err;

                conn.query('UPDATE songs SET sumCollect = sumCollect + 1 WHERE id = ?', req.body.songID, function (err, result) {
                    if (err) throw err;
                });
                res.json('Success!');
            });
        });

        conn.release();
    });
}

module.exports = CollectAct;