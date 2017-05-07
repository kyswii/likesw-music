'use strict';

const util = require('util');
const wrap = require("co-express");
const ForyouAct = require("../../mysql/models/foryou");

var ForyouApi = {};

ForyouApi.loadForyouData = wrap(function* (req, res, next) {
    console.log('collect');
    try {
        ForyouAct.loadForyouData(req, res);
    } catch (err) {
        res.json(err);
    }
});

module.exports = ForyouApi;