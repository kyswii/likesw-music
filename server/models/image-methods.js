'use strict';

//
function homeImage(data) {
    var Do = [];
    var Or = [];
    var Whatever = [];
    data.forEach(function (d, i) {
        if (d.tags.search(/do/i) != -1) {
            Do.push(d);
        }

        if (d.tags.search(/or/i) != -1) {
            Or.push(d);
        }

        if (d.tags.search(/whatever/i) != -1) {
            Whatever.push(d);
        }
    });

    var info = {"Do": Do, "Or": Or, "Whatever": Whatever};
    return info;
}

//
function libraryImage(data) {

}

//
function foryouImage(data) {

}

//
function messagesImage(data) {

}

//
function playlistImage(data) {

}

//
function downloadImage(data) {

}

//
var ImageMethods = {};

//
ImageMethods.imageClassify = function (belong, data, callback) {
    if (belong == 'home') {
        var info = homeImage(data);
        callback(info);
    } else if (belong == 'library') {
        var info = libraryImage(data);
        callback(info);
    } else if (belong == 'foryou') {
        var info = foryouImage(data);
        callback(info);
    } else if (belong == 'messages') {
        var info = messagesImage(data);
        callback(info);
    } else if (belong == 'playlist') {
        var info = playlistImage(data);
        callback(info);
    } else if (belong == 'download') {
        var info = downloadImage();
        callback(info);
    }   
}

module.exports = ImageMethods;