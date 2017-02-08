'use strict';

const util = require('util');
const wrap = require("co-express");
const AccountAct = require("../../mysql/models/account");

var AccountApi = {};
console.log('........')
// url: /music/account/create
AccountApi.createAccount = wrap(function* (req, res, next) {
    try {
        console.log('........')
        AccountAct.createAccount(req, res);
    } catch (err) {
        res.json(err);
    }
});

// url: /music/account/load
AccountApi.loadAccount = wrap(function* (req, res, next) {
    try {
        AccountAct.loadAccount(req, res);
    } catch (err) {
        res.json(err);
    }
});

// url: /music/account/{email}/update
AccountApi.updateAccount = wrap(function* (req, res, next) {
    try {
        AccountAct.updateAccount(req, res);
    } catch (err) {
        res.json(err);
    }
});

module.exports = AccountApi;