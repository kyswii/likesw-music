'use strict';

const pool = require("../pool");
var ImageAct = require('../../models/image-act');

var AccountAct = {};
// add account
AccountAct.createAccount = function (req, res) {
    pool.getConnection(function (err, conn) {
        if (err) throw err;

        conn.query('SELECT * FROM account WHERE email = ?', req.body.email, function (err, result) {
            if (err) throw err;

            if (result.length != 0) {
                res.json('EXIST');
                return;
            }

            ImageAct.imageIn(req.body, function (d) {
                console.log('dddddddddd', d);
                if (d == 'ERROR') {
                    res.json('EXIST');
                    return;
                }

                req.body.photo = d;
                console.log(req.body);
                conn.query('INSERT INTO account SET ?', req.body, function (err, result) {
                    if (err) throw err;
                    console.log(req.body);
                    res.json(req.body);
                });
            });

            conn.release();
        });

    });
}

// load account
AccountAct.loadAccount = function (req, res) {
    pool.getConnection(function (err, conn) {
        if (err) throw err;

        var email = req.swagger.params.email.value;
        var pw = req.swagger.params.password.value;
        console.log(email, pw);
        conn.query('SELECT * FROM account WHERE email = ? and password = ?', [email, pw], function (err, result) {
            if (err) throw err;

            if (result.length == 0) {
                res.json('NULL');
                return
            }

            res.json(result[0]);

            conn.release();
        });
    });
}

// Update account
AccountAct.updateAccount = function (req, res) {
    pool.getConnection(function (err, conn) {
        if (err) throw err;
        console.log(req.body);
        // conn.query('UPDATE account SET ? WHERE email = ?', [req.body, req.swagger.params.email.value], function (err, result) {
        //     if (err) throw err;

        //     res.json('UPDATED');

        //     conn.release();
        // })
        ImageAct.imageIn(req.body, function (d) {
            console.log('dddddddddd', d);
            if (d == 'ERROR') {
                res.json('EXIST');
                return;
            }

            req.body.photo = d;
            console.log(req.body);
            conn.query('UPDATE account SET ? WHERE email = ?', [req.body, req.swagger.params.email.value], function (err, result) {
                if (err) throw err;

                res.json(req.body.photo);

                conn.release();
            })
        });

    })
}


module.exports = AccountAct;