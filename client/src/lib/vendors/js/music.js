(function () {

    //
    var Music = function () {

        //
        this.basicData = null;
        //
        this.images = {};

        //
        this.songs = null;

        //
        this.playlist = null;
        
        //
        this.albums = {};

        //
        this.artists = {};

        //
        this.foryouData = null;
    };

    //
    Music.prototype.loadBasicData = function (callback) {
        var that = this;

        $.ajax('/music/basic/load', {
            type: 'GET',
            contentType: 'application/json',
            success: function (result) {
                that.basicData = result;
                callback(result);
            },
            error: function (err) {
                console.log('error...');
            }
        });
    }

    //
    Music.prototype.imagesLoadReq = function (belong, callback) {
        //
        if (this.imagesAlreadyLoad(belong)) {
            callback(belong, this.images[belong]);
            return;
        }
        //
        var that = this;
        var url = '/music/image/' + belong + '/load'; 
        console.log('url....', url);
        $.ajax(url, {
            type: 'GET',
            contentType: 'application/json',
            success: function (result) {
                that.images[belong] = result;
                callback(belong, result);
                // that.imagesLoadFinished(belong, result);
            },
            error: function (err) {
                console.log('homeImagesLoadReq err...');
            }
        })
    }

    // callback
    Music.prototype.imagesLoadFinished = function (belong, info) {}

    //
    Music.prototype.messagesLoadReq = function (callback) {

        $.ajax('/music/messages/load', {
            type: 'GET',
            contentType: 'application/json',
            success: function (result) {
                callback(result);
            },
            error: function (err) {
                console.log('messages load error...');
            }
        });
    }

    //
    Music.prototype.imagesAlreadyLoad = function (belong) {
        if (belong in this.images) {
            return true;
        }
        
        return false;
    }

    //
    Music.prototype.musicLoadReq = function (callback) {
        var that = this;

        $.ajax('/music/all/load', {
            type: 'GET',
            contentType: 'application/json',
            success: function (result) {
                callback(result);
                that.songs = result.songs;
                that.albums = result.albums;
                that.artists = result.artists;
            },
            error: function (err) {
                console.log('error...');
            }
        })
    }

    //
    Music.prototype.songsLoadReq = function (label, callback) {
        var that = this;
        console.log('songsLoadReq.. info', label);
        $.ajax('/music/song/load', {
            type: 'GET',
            data: label,
            contentType: 'application/json',
            success: function (result) {
                callback(result);
            },
            error: function (err) {
                console.log('songsLoadReq error...');
            }
        })
    }

    //
    Music.prototype.collectSong = function (info, callback) {
        $.ajax('/music/collect/save', {
            type: 'POST',
            data: JSON.stringify(info),
            contentType: 'application/json',
            success: function (result) {
                callback(result);
            },
            error: function (err) {
                console.log('collectSong error...');
            }
        });
    }

    //
    Music.prototype.publishComment = function (info, callback) {

        $.ajax('/music/share/save', {
            type: 'POST',
            data: JSON.stringify(info),
            contentType: 'application/json',
            success: function (result) {
                callback(result);
            },
            error: function (err) {
                console.log('publish error...');
            }
        });
    }

    //
    Music.prototype.fetchForYouData = function (id, callback) {
        
        var that = this;
        $.ajax('/music/foryou/' + id + '/load', {
            type: 'GET',
            contentType: 'application/json',
            success: function (result) {
                that.foryouData = result;
                callback(result);
            },
            error: function (err) {
                console.log('err...');
            }
        })
    }

    //
    Music.prototype.messagesThumbsUp = function (id, callback) {
        var that = this;

        $.ajax('/music/messages/' + id + '/thumbsup', {
            type: 'GET',
            contentType: 'application/json',
            success: function (result) {
                callback(result);
            },
            error: function (err) {
                console.log('err...');
            }
        })
    }

    //
    Music.prototype.exploreSongs = function (value, callback) {
        var songs = [];
        this.songs.forEach(function (d, i) {
            if (d.name.toLocaleLowerCase().indexOf(value) != -1 || d.artist.toLocaleLowerCase().indexOf(value) != -1) {
                songs.push(d);
            }
        });

        callback(songs);
    }



    window.Music = Music;
}());