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

    MUSIC.songsLoadReq({"tags": 'all-songs'}, function (info) {
        console.log('load all songs');
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
         
            libraryRender();              
        },

        foryou: function () {
            // MUSIC.songsLoadReq('foryou', function (belong, info) {
                foryouRender();
            // });
        },

        messages: function () {
            MUSIC.messagesLoadReq(function (info) {
                // console.log('messages....', info);
                messagesRender(info);
            });
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
    //
    
    $(document).on('click', '.song-play', function () {
        var name = $(this).attr('name');
        var label = { "tags": name };
console.log('label...', label);
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
    

    //
    $(document).on("click", '#optionItem1', function () {
        console.log('.........');
        // $('.lib-content').addClass('lib-content-in');
    });

    //
    $(document).on('click', '#libraryFrame .option-item', function () {
        var name = $(this).attr('name');
        if (name == 'song') {
            allSongsRender();

        } else if (name == 'album') {
            allAlbumsRender();
            
        } else if (name == 'artist') {
            allArtistsRender();
            
        }

        // $('.lib-modal').addClass('lib-modal-in');
        
    });

    //
    $(document).on('click', '.glyphicon-heart', function() {
        if (!isLogin()) {
            return;
        }
        var arr = $(this).attr('name').split('&');
        var songid = parseInt(arr[0]);
        var accountid = parseInt($('.dropdow-menu-account-photo').attr('alt'));
        var info = {
            songID: songid,
            accountID: accountid
        };

        MUSIC.collectSong(info, function (result) {
            console.log('collection....');
        });
    });
    
    //
    //
    $(document).on('click', '.glyphicon-share', function() {
        // console.log($(this).attr('name'));
        if (!isLogin()) {
            return;
        }

        var arr = $(this).attr('name').split('&');
        
        songShareComment(arr);

    });

    //
    $(document).on('click', '.alert-close', function () {
        $('.alert-bg').css('display', 'none');
    });

    //
    $(document).on('click', '.share-publish', function () {
        var songid = parseInt($(this).attr('name').substring(10));
        var accountid = parseInt($('.dropdow-menu-account-photo').attr('alt'));
        var time = (new Date()).getFullYear() + '-' + ((new Date()).getMonth() + 1) + '-' + (new Date()).getDate();
        var info = {
            songID: songid,
            accountID: accountid,
            comment: 'comment',
            time: time
        };
console.log('share...', info);
        MUSIC.publishComment(info, function (result) {
            console.log('save......', result);
            $('.alert-bg').css('display', 'none');
        });
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
            var percent = AUDIO.currentTime / AUDIO.duration * 100 + '%';
            $('#musicProgressBar').css('width', percent);
        }, PROCESS_TIME);
    }

    //
    function homeRender(belong, info) {
        $('#containerNavContent').html(AppHTML.homeFrame(info));

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
    function messagesRender(info) {
        $('#containerNavContent').html(AppHTML.messagesFrame(info));
    }

    //
    function playlistRender() {
        $('#containerNavContent').html(AppHTML.playlistFrame());
    }

    //
    function updatePlayList(playlist) {
        var group = '';
        var data = playlist;

        updateCurrentPlayInfo();

        for (var item = 0; item < data.length; item++) {
            console.log('item.....', data[item]);
            var name = data[item].id + '&' + data[item].artist + '&' + data[item].name + '&' + data[item].image + '&' + data[item].url;
            group += '<li class="list-group-item">\
                        <img class="list-group-item-img" src="./music/' + data[item].image + '">&nbsp;&nbsp;\
                        <span>' + data[item].artist + '-' + data[item].name + '</span>\
                        <span class="glyphicon glyphicon-share list-group-item-option" name="' + name + '"></span>\
                        <span class="glyphicon glyphicon-heart list-group-item-option" name="' + name + '"></span>\
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
    
    //
    function isLogin() {
        if ($('.navbar-brand-account-photo').attr('src').indexOf('default-account') != -1) {
            $('.m-alert-header').text('Sorry');
            $('.m-alert-body').html('<div class="alert alert-danger" role="alert">You are not logged in yet!</div>');
            $('.m-alert-footer').html('<button type="button" class="btn btn-default alert-close">Close</button>');
            $('.alert-bg').css('display', 'block');

            return false;
        }

        return true;
    }

    //
    function songShareComment(arr) {
        $('.m-alert-header').text('Share');
        $('.m-alert-body').html(
            '<div class="row m-alert-share">\
                <div class="share-song">\
                    <img src="./music/' + arr[3] + '" alt="">\
                    <div>\
                        <p>' + arr[2] + '</p>\
                        <p>' + arr[1] + '</p>\
                    </div>\
                </div>\
            </div>\
            <div class="row m-alert-share">\
                <form>\
                    <textarea class="form-control" placeholder="Your Comment" rows="3"></textarea>\
                </form>\
            </div>'
        );

        $('.m-alert-footer').html(
            '<button type="button" class="btn btn-danger share-publish" name="shareSong-' + arr[0] + '">Publish</button>\
            <button type="button" class="btn btn-default alert-close">Close</button>'
        );
        $('.alert-bg').css('display', 'block');
    }

    //
    function allSongsRender() {
   
        // var songs = info.data;
        var html = '<ul class="list-group lib-song-seemore">';
        if (!MUSIC.songs) {
            html += '<li><div class="alert alert-danger" role="alert">Sorry, Nothing!</div></li>';
        } else {
            MUSIC.songs.forEach(function (d, i) {
                var name = d.id + '&' + d.artist + '&' + d.name + '&' + d.image + '&' + d.url;
                html += '<li class="list-group-item">\
                                <div class="rank">\
                                    <span>' + (i + 1) + '</span>\
                                </div>\
                                <div class="song-info">\
                                    <p>' + d.name + '</p>\
                                    <p>' + d.artist + '</p>\
                                </div>\
                                <div class="song-option">\
                                    <span class="glyphicon glyphicon-heart" name="' + name + '"></span>\
                                    <span class="glyphicon glyphicon-share" name="' + name + '"></span>\
                                </div>\
                            </li>';
            });
        }
        
        
        html += '</ul>';

        $('#myModal').html(AppHTML.libSeeMore('song', html));
        $('.lib-modal').animate({'marginLeft': '0'}, 500);
        $('#myModal').modal('show');
       
    }

    //
    function allAlbumsRender() {
        var html = '<div class="row lib-album-seemore">';

        if (_.isEmpty(MUSIC.albums)) {
            html += '<div class="alert alert-danger" role="alert">Sorry, Nothing!</div>';
        } else {            
            for (var item in MUSIC.albums) {
                html += '<div class="col-xs-6 col-sm-4">\
                            <div class="thumbnail">\
                                <img src="./music' + MUSIC.albums[item].img + '" alt="...">\
                                <div class="caption">\
                                    <h5>' + item + '</h5>\
                                    <p>taylor</p>\
                                </div>\
                            </div>\
                        </div>';
            }
        }
        
        html += '</div>';

        $('#myModal').html(AppHTML.libSeeMore('album', html));
        $('.lib-modal').animate({'marginLeft': '0'}, 500);
        $('#myModal').modal('show');
     
    }

    //
    function allArtistsRender(info) {
        var html = '<div class="row lib-artist-seemore">';

        if (_.isEmpty(MUSIC.artists)) {
            html += '<div class="alert alert-danger" role="alert">Sorry, Nothing!</div>';
        } else {
            for (var item in MUSIC.artists) {
                html += '<div class="col-xs-6 col-sm-4 lib-artist-seemore-item">\
                            <img src="./music' + MUSIC.artists[item].img + '">\
                            <p>' + item + '</p>\
                        </div>';
            }
        }
        
        html += '</div>';

        $('#myModal').html(AppHTML.libSeeMore('artist', html));
        $('.lib-modal').animate({'marginLeft': '0'}, 500);
        $('#myModal').modal('show');
     
    }
}());