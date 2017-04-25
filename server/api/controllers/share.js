'use strict';

const util = require('util');
const wrap = require("co-express");
const ShareAct = require("../../mysql/models/share");

var ShareApi = {};

ShareApi.saveComment = wrap(function* (req, res, next) {
    try {
        ShareAct.saveComment(req, res);
    } catch (err) {
        res.json(err);
    }
});

module.exports = ShareApi;