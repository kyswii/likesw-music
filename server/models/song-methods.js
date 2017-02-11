'use strict';

//
var SongMethods = {};

//
SongMethods.songClassify = function (label, data, callback) {
      var info = {"label": label, "data": data};

      callback(info);
}

module.exports = SongMethods;