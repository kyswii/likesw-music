(function () {

    //
    var Music = function () {

        //
        this.images = {};

        //
        this.songs = null;
    };

    //
    Music.prototype.imagesLoadReq = function (belong) {
        //
        if (this.imagesAlreadyLoad(belong)) {
            this.imagesLoadFinished(belong, this.images[belong]);
            return;
        }
        //
        var that = this;
        var url = '/music/image/' + belong + '/load'; 
        $.ajax(url, {
            type: 'GET',
            contentType: 'application/json',
            success: function (result) {
                that.images[belong] = result;
                that.imagesLoadFinished(belong, result);
            },
            error: function (err) {
                console.log('homeImagesLoadReq err...');
            }
        })
    }

    // callback
    Music.prototype.imagesLoadFinished = function (belong, info) {}

    //
    Music.prototype.imagesAlreadyLoad = function (belong) {
        if (belong in this.images) {
            return true;
        }
        
        return false;
    }

    Music.prototype.songsLoadReq = function (label) {
        var that = this;
        console.log('songsLoadReq.. info', label);
        $.ajax('/music/song/load', {
            type: 'GET',
            data: label,
            contentType: 'application/json',
            success: function (result) {
                that.songs = result;
                that.songsLoadFinished(result);
            },
            error: function (err) {
                console.log('songsLoadReq error...');
            }
        })
    }

    // callback
    Music.prototype.songsLoadFinished = function (info) { }



    window.Music = Music;
}());