(function () {

    //
    var Song = function () {

        //
        this.songs = {};
    };

    //
    Song.prototype.songsLoadReq = function (belong) {
        //
        if (this.songsAlreadyLoad(belong)) {
            that.songsLoadFinished(belong, this.songs[belong]);
            return;
        }
        //
        var that = this;
        var url = '/music/song/' + belong + '/load'; 
        $.ajax(url, {
            type: 'GET',
            contentType: 'application/json',
            success: function (result) {
                that.songs[belong] = result;
                that.songsLoadFinished(belong, result);
            },
            error: function (err) {
                console.log('homeSongsLoadReq err...');
            }
        })
    }

    // callback
    Song.prototype.songsLoadFinished = function (belong, info) {}

    //
    Song.prototype.songsAlreadyLoad = function (belong) {
        if (belong in this.songs) {
            return true;
        }
        
        return false;
    }



    window.Song = Song;
}());