'use strict';

var pool = require('../pool');
var ImageMethods = require('../../models/image-methods')


var ImageAct = {};

// 
ImageAct.createImage = function (req, res) {
    pool.getConnection(function (err, conn) {
        if (err) throw err;

        var info = req.body;
        var time = (new Date()).getTime();
        info.url = '/public/images/' + info.belong + '/' + time + '.jpg';

        conn.query('INSERT INTO images SET ?', info, function (err, result) {
            if (err) throw err;

            res.json('SAVED');
        })
    });
}

//
ImageAct.loadImage = function (req, res) {
    pool.getConnection(function (err, conn) {
        if (err) throw err;

        var belong = req.swagger.params.belong.value;
        conn.query('SELECT * FROM images WHERE belong = ?', belong, function (err, result) {
            if (err) throw err;
            ImageMethods.imageClassify(belong, result, function (info) {
                res.json(info);
            });
        });
    })
}

//
ImageAct.updateImage = function (req, res) {

}

module.exports = ImageAct;