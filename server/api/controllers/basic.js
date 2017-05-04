'use strict';

const util = require('util');
const wrap = require("co-express");
const BasicAct = require("../../mysql/models/basic");

var BasicApi = {};

BasicApi.loadBasicData = wrap(function* (req, res, next) {
    console.log('collect');
    try {
        BasicAct.loadBasicData(req, res);
    } catch (err) {
        res.json(err);
    }
});

BasicApi.loadAllData = wrap(function* (req, res, next) {
    try {
        BasicAct.loadAllData(req, res);
    } catch (err) {
        res.json(err);
    }
});

module.exports = BasicApi;