'use strict';

//
function homeSong(data) {
    var HOTSongs = [];
    var TOPSongs = [];
    var TOPAlbums = [];
    data.forEach(function (d, i) {
        if (d.tags.search(/hot-song/i) != -1) {
            HOTSongs.push(d);
        }

        if (d.tags.search(/top-song/i) != -1) {
            TOPSongs.push(d);
        }

        if (d.tags.search(/top-album/i) != -1) {
            TOPAlbums.push(d);
        }
    });

    var info = {"HOTSongs": HOTSongs, "TOPSongs": TOPSongs, "TOPAlbums": TOPAlbums};
    return info;
}

//
function librarySong(data) {

}

//
function foryouSong(data) {

}

//
function messagesSong(data) {

}

//
function playlistSong(data) {

}

//
function downloadSong(data) {

}

//
var SongMethods = {};

//
SongMethods.songClassify = function (belong, data, callback) {
    if (belong == 'home') {
        var info = homeSong(data);
        callback(info);
    } else if (belong == 'library') {
        var info = librarySong(data);
        callback(info);
    } else if (belong == 'foryou') {
        var info = foryouSong(data);
        callback(info);
    } else if (belong == 'messages') {
        var info = messagesSong(data);
        callback(info);
    } else if (belong == 'playlist') {
        var info = playlistSong(data);
        callback(info);
    } else if (belong == 'download') {
        var info = downloadSong();
        callback(info);
    }   
}

module.exports = SongMethods;