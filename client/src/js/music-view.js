(function () {

    var AUDIO = document.getElementById('audio');

    var MUSIC = new Music();

    var PLAYLIST = null;
    var CURRENTPLAY = 0;

    var PROCESS_INTERVAL = null;
    var PROCESS_TIME = 100;

    MUSIC.imagesLoadReq('home');

    MUSIC.songsLoadReq({ "tags": 'countryside' }, function (info) {
        PLAYLIST = info.data;
        updatePlayList(info.data);
        AUDIO.src = '/music/' + PLAYLIST[CURRENTPLAY].url;
    });

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

    //
    $('#navMusic').click(function () {
        $('#musicModal').modal();
    });

    //
    $('#musicStatus').click(function () {
        if ($(this).hasClass('glyphicon-play')) {
            $(this).removeClass('glyphicon-play');
            $(this).addClass('glyphicon-pause');
            AUDIO.play();
        } else {
            $(this).removeClass('glyphicon-pause');
            $(this).addClass('glyphicon-play');
            AUDIO.pause();
        }
    });

    //
    $('#musicBackward').click(function () {
        console.log('back...', CURRENTPLAY);
        if (CURRENTPLAY <= 0) {
            return;
        }
        
        CURRENTPLAY -= 1;
        AUDIO.src = '/music/' + PLAYLIST[CURRENTPLAY].url;
        updateCurrentPlayInfo();
        AUDIO.play();
    });

    //
    $('#musicForward').click(function () {
        console.log('for...', CURRENTPLAY);
        if ((CURRENTPLAY + 1) >= PLAYLIST.length) {
            return;
        }
      
        CURRENTPLAY += 1;
        AUDIO.src = '/music/' + PLAYLIST[CURRENTPLAY].url;
        updateCurrentPlayInfo();
        AUDIO.play();
    });


    //
    AUDIO.onended = function () {
        console.log('ended......');
        if (CURRENTPLAY + 1 < PLAYLIST.length) {
            CURRENTPLAY += 1;
            
            updateCurrentPlayInfo();
            $('#musicProgressBar').css('width', '0');
            AUDIO.src = '/music/' + PLAYLIST[CURRENTPLAY].url;
            AUDIO.play();
        }
    }

    //
    AUDIO.onpause = function () {
        $('#musicStatus').removeClass('glyphicon-pause');
        $('#musicStatus').addClass('glyphicon-play');
        clearInterval(PROCESS_INTERVAL);
    }

    //
    AUDIO.onplay = function () {
        $('#musicStatus').removeClass('glyphicon-play');
        $('#musicStatus').addClass('glyphicon-pause');

        PROCESS_INTERVAL = setInterval(function () {
            var percent = AUDIO.currentTime/AUDIO.duration * 100 + '%';
            $('#musicProgressBar').css('width', percent);
        }, PROCESS_TIME);
    }

    //
    function songPlay() {
        $('.song-play').click(function () {
            var name = $(this).attr('name');
            var label = { "tags": name };

            MUSIC.songsLoadReq(label, function (info) {
                PLAYLIST = info.data;
                CURRENTPLAY = 0;
                updatePlayList(info.data);
                AUDIO.src = '/music/' + PLAYLIST[CURRENTPLAY].url;
                AUDIO.play();
                $('#musicStatus').removeClass('glyphicon-play');
                $('#musicStatus').addClass('glyphicon-pause');
            });

        });
    }

    //
    function updatePlayList(playlist) {
        var group = '';
        var data = playlist;

        updateCurrentPlayInfo();

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

    //
    function updateCurrentPlayInfo() {
        document.getElementById('musicImage').src = '/music/' + PLAYLIST[CURRENTPLAY].image;
        document.getElementById('musicName').innerText = PLAYLIST[CURRENTPLAY].name;
        document.getElementById('musicInfo').innerText = PLAYLIST[CURRENTPLAY].artist + ' - ' + PLAYLIST[CURRENTPLAY].album;
    }

}());