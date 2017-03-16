(function () {

    var AUDIO = document.getElementById('audio');

    var PLAYLISTDATA = null;

    var MUSIC = new Music();

    MUSIC.imagesLoadReq('home');

    MUSIC.songsLoadReq({ "tags": 'countryside' })

    MUSIC.songsLoadFinished = function (info) {

        PLAYLISTDATA = info.data;
    }

    MUSIC.imagesLoadFinished = function (belong, info) {
        if (belong == 'home') {
            console.log('imagesLoadFinished....', info)
            $('#containerNavContent').html(AppHTML.homeFrame(info));

            //
            songPlay();
        }

        if (belong == 'library') {
            $('#containerNavContent').html(AppHTML.libraryFrame(info));
        }

        // ...
    }

    $('#containerNavHome').click(function () {
        MUSIC.imagesLoadReq('home');
    });

    $('#containerNavLibrary').click(function () {
        // MUSIC.songsLoadReq('library');
        $('#containerNavContent').html(AppHTML.libraryFrame(''));
    });

    function songPlay() {
        $('.song-play').click(function () {
            var name = $(this).attr('name');
            var label = { "tags": name };

            MUSIC.songsLoadReq(label);

        });
    }


    $('#navMusic').click(function () {
        $('#myModal').html(AppHTML.musicModal);
        updatePlayList();
        $('#myModal').modal();
    });

    function updatePlayList() {
        var group = '';
        var data = PLAYLISTDATA;
        console.log('item.....', data.length);
        for (var item = 0; item < data.length; item++) {
            console.log('item.....', data[item]);
            group += '<li class="list-group-item">\
                        <img class="list-group-item-img" src="./music/' + data[item].image + '">&nbsp;&nbsp;\
                        <span>' + data[item].artist + '-' + data[item].name + '</span>\
                        <span class="glyphicon glyphicon-plus-sign list-group-item-open"></span>\
                    </li>'
        }

        $('#musicPlaylist').html(group);
    }


}());