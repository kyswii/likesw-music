(function () {

    //
    var Music = function () {

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
    };

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

    Music.prototype.songsLoadReq = function (label, callback) {
        var that = this;
        console.log('songsLoadReq.. info', label);
        $.ajax('/music/song/load', {
            type: 'GET',
            data: label,
            contentType: 'application/json',
            success: function (result) {
                if (label.tags == 'all-songs') {
                    that.songsClassify(result);
                }
                callback(result);
            },
            error: function (err) {
                console.log('songsLoadReq error...');
            }
        })
    }

    //
    Music.prototype.songsClassify = function (info) {
        this.songs = info.data;
        var that = this;
        
        this.songs.forEach(function (d, i) {
            if (!that.albums[d.album]) {
                that.albums[d.album] = {img: d.image, songs: []};
            }
            that.albums[d.album].songs.push(d);

            if (!that.artists[d.artist]) {
                that.artists[d.artist] = {img: d.image, songs: []};
            }

            that.artists[d.artist].songs.push(d);
        });
        console.log(that.albums, that.artists);
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



    window.Music = Music;
}());