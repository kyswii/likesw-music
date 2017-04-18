(function () {

    var AUDIO = document.getElementById('audio');
    AUDIO.volume = 0.6;

    var SOUNDPROGRESSBAR = document.getElementById('soundProgressBar');

    var MUSIC = new Music();

    var PLAYLIST = null;
    var CURRENTPLAY = 0;

    var PROCESS_INTERVAL = null;
    var PROCESS_TIME = 100;

    MUSIC.imagesLoadReq('home', function (belong, info) {
        homeRender(belong, info);
    });

    MUSIC.songsLoadReq({ "tags": 'countryside' }, function (info) {
        PLAYLIST = info.data;
        updatePlayList(info.data);
        AUDIO.src = '/music/' + PLAYLIST[CURRENTPLAY].url;
    });

    //
    var Router = Backbone.Router.extend({
        routes: {
            'home': "home",
            'library': 'library',
            'foryou': 'foryou',
            'messages': 'messages',
            'playlist': 'playlist'
        },

        home: function () {
            MUSIC.imagesLoadReq('home', function (belong, info) {
                homeRender(belong, info);
            });
        },

        library: function() {
            // MUSIC.songsLoadReq('library', function (belong, info) {
                libraryRender();
            // });
        },

        foryou: function () {
            // MUSIC.songsLoadReq('foryou', function (belong, info) {
                foryouRender();
            // });
        },

        messages: function () {
            // MUSIC.songsLoadReq('foryou', function (belong, info) {
                messagesRender();
            // });
        },

        playlist: function () {
            // MUSIC.songsLoadReq('foryou', function (belong, info) {
                playlistRender();
            // });
        }
    });

    new Router();
    Backbone.history.start();

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
    $('#soundDown').click(function () {
        var width = SOUNDPROGRESSBAR.style.width.match(/\d+/g);
        if (width < 20) {
            return;
        }
        SOUNDPROGRESSBAR.style.width = (parseInt(width) - 20) + '%';
        AUDIO.volume = (Math.ceil(AUDIO.volume * 10) - 2) / 10;
        console.log('down..', AUDIO.volume);
    });

    //
    $('#soundUp').click(function () {
        var width = SOUNDPROGRESSBAR.style.width.match(/\d+/g);
        console.log('width', width, width >= 100);
        if (width >= 100) {
            return;
        }
        SOUNDPROGRESSBAR.style.width = (parseInt(width) + 20) + '%';
        AUDIO.volume = (Math.ceil(AUDIO.volume * 10) + 2) / 10;
        console.log('up..', AUDIO.volume);
    });

    //
    $(document).on("click", '#optionItem1', function () {
        console.log('.........');
        // $('.lib-content').addClass('lib-content-in');
    });

    //
    $(document).on('click', '#libraryFrame .option-item', function () {
        var name = $(this).attr('name');
        if (name == 'song') {
            var html = '<ul class="list-group lib-song-seemore">';
            for (var i=0; i<14; i++) {
                html += '<li class="list-group-item">\
                                <div class="rank">\
                                    <span>' + (i + 1) + '</span>\
                                </div>\
                                <div class="song-info">\
                                    <p>Taylor Swift</p>\
                                    <p>Swift</p>\
                                </div>\
                                <div class="song-option">\
                                    <span class="glyphicon glyphicon-heart" name="' + i + '"></span>\
                                    <span class="glyphicon glyphicon-share" name="' + i + '"></span>\
                                </div>\
                            </li>';
            };
            html += '</ul>';

            $('#myModal').html(AppHTML.libSeeMore('song', html));

        } else if (name == 'album') {
            var html = '<div class="row lib-album-seemore">'
            for (var i=0; i<9; i++) {
                html += '<div class="col-xs-6 col-sm-4">\
                            <div class="thumbnail">\
                                <img src="./images/q.jpg" alt="...">\
                                <div class="caption">\
                                    <h5>Thumbnail label</h5>\
                                    <p>taylor</p>\
                                </div>\
                            </div>\
                        </div>';
            }
            html += '</div>';

            $('#myModal').html(AppHTML.libSeeMore('album', html));
        } else if (name == 'artist') {
            var html = '<div class="row lib-artist-seemore">';
            for (var i = 0; i < 10; i++) {
                html += '<div class="col-xs-6 col-sm-4 lib-artist-seemore-item">\
                            <img src="./images/q.jpg">\
                            <p>Taylor Swift</p>\
                        </div>';
            }
            html += '</div>';

            $('#myModal').html(AppHTML.libSeeMore('artist', html));
        }

        // $('.lib-modal').addClass('lib-modal-in');
        $('.lib-modal').animate({'marginLeft': '0'}, 500);
        $('#myModal').modal('show');
    });

    //
    $(document).on('click', '.glyphicon-heart', function() {
        if ($('.navbar-brand-account-photo').attr('src').indexOf('default-account') != -1) {
            $('#myModal').html(AppHTML.loginModalPrompt);
            $('#myModal').modal('show');
        }
    })

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
            var percent = AUDIO.currentTime / AUDIO.duration * 100 + '%';
            $('#musicProgressBar').css('width', percent);
        }, PROCESS_TIME);
    }

    //
    function homeRender(belong, info) {
        $('#containerNavContent').html(AppHTML.homeFrame(info));

        //
        songPlay();
    }

    // 
    function libraryRender() {
        $('#containerNavContent').html(AppHTML.libraryFrame(''));

    }

    //
    function foryouRender() {
        $('#containerNavContent').html(AppHTML.foryouFrame());
    }

    //
    function messagesRender() {
        $('#containerNavContent').html(AppHTML.messagesFrame());
    }

    //
    function playlistRender() {
        $('#containerNavContent').html(AppHTML.playlistFrame());
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
                // console.log('volume', AUDIO.volume);
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
                        <span class="glyphicon glyphicon-share list-group-item-option" name="' + data[item].id + '"></span>\
                        <span class="glyphicon glyphicon-heart list-group-item-option" name="' + data[item].id + '"></span>\
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