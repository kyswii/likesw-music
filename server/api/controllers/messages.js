'use strict';

const util = require('util');
const wrap = require("co-express");
const MessagesAct = require("../../mysql/models/messages");

var MessagesApi = {};

MessagesApi.loadMessages = wrap(function* (req, res, next) {
    console.log('collect');
    try {
        MessagesAct.loadMessages(req, res);
    } catch (err) {
        res.json(err);
    }
});

module.exports = MessagesApi;