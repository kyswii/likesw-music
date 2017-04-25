'use strict';

var pool = require('../pool');


var ShareAct = {};

ShareAct.saveComment = function (req, res) {
    pool.getConnection(function (err, conn) {
        if (err) throw err;

        console.log('req....', req.body);
        var sql = 'INSERT INTO song_share SET ?';
        conn.query(sql, req.body, function (err, result) {
            if (err) throw err;

            res.json('Success!');
        });

        conn.release();
    });
}

module.exports = ShareAct;