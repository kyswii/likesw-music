'use strict';

const util = require('util');
const wrap = require("co-express");
const CollectAct = require("../../mysql/models/collect");

var CollectApi = {};

CollectApi.collectSong = wrap(function* (req, res, next) {
    console.log('collect');
    try {
        CollectAct.collectSong(req, res);
    } catch (err) {
        res.json(err);
    }
});

module.exports = CollectApi;