(function () {

    var AUDIO = document.getElementById('audio');
    AUDIO.volume = 0.6;

    var SOUNDPROGRESSBAR = document.getElementById('soundProgressBar');

    var MUSIC = new Music();

    var PLAYLIST = null;
    var CURRENTPLAY = 0;

    var MODAL_ID = null;

    var PROCESS_INTERVAL = null;
    var PROCESS_TIME = 100;

    MUSIC.songsLoadReq({ "tags": 'countryside' }, function (info) {
        PLAYLIST = info.data;
        updatePlayList(info.data);
        AUDIO.src = '/music/' + PLAYLIST[CURRENTPLAY].url;
    });

    MUSIC.musicLoadReq(function (info) {
        console.log('load all songs', info);
    });

    //
    var Router = Backbone.Router.extend({
        routes: {
            '': "home",
            'library': 'library',
            'foryou': 'foryou',
            'messages': 'messages',
            'explore': 'explore'
        },

        home: function () {
            MUSIC.loadBasicData(function (data) {
                console.log('basic data...', data);
                homeRender();
            });
        },

        library: function() {
            // MUSIC.loadModuleInfo('library', function (info) {
            //     libraryRender(info);
            // });
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

        explore: function () {
            // MUSIC.songsLoadReq('foryou', function (belong, info) {
                exploreRender();
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
            songsPlay(info.data);
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
    $(document).on('click', '.glyphicon-heart-collect', function() {
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
        
        var that = this;
        MUSIC.collectSong(info, function (result) {
            console.log('collection....', result);
            $(that).css("color", "#fc2347");
        });
    });
    
    //
    //
    $(document).on('click', '.glyphicon-share-share', function() {
        // console.log($(this).attr('name'));
        if (!isLogin()) {
            return;
        }

        var arr = $(this).attr('name').split('&');

        $('.modal').each(function () {
            if ($(this).hasClass('in')) {
                MODAL_ID = $(this).attr('id');
            }
        });
        
        songShareComment(arr);

        if (MODAL_ID) {
            $('#' + MODAL_ID).css('display', 'none');
        }
    });

    //
    $(document).on('click', '.alert-close', function () {
        if (MODAL_ID) {
            $('#' + MODAL_ID).css('display', 'block');
        }
        $('.alert-bg').css('display', 'none');
    });

    //
    $(document).on('click', '.share-publish', function () {
        var songid = parseInt($(this).attr('name').substring(10));
        var accountid = parseInt($('.dropdow-menu-account-photo').attr('alt'));
        var comment = $('#shareComment').val();
        var time = (new Date()).getFullYear() + '-' + ((new Date()).getMonth() + 1) + '-' + (new Date()).getDate();
        var info = {
            songID: songid,
            accountID: accountid,
            comment: comment,
            time: time
        };
console.log('share...', info);
        MUSIC.publishComment(info, function (result) {
            console.log('save......', result);
            if (MODAL_ID) {
                $('#' + MODAL_ID).css('display', 'block');
            }
            $('.alert-bg').css('display', 'none');
        });
    });

    //
    $(document).on('click', '.lib-play', function () {
        console.log('pause....');
        $('.lib-play span').each(function () {
            if ($(this).hasClass('glyphicon-pause')) {
                $(this).removeClass('glyphicon-pause').addClass('glyphicon-play-circle');
            }
        });
        $(this).find('span').removeClass('glyphicon-play-circle').addClass('glyphicon-pause');

    });

    //
    $(document).on('change', '.lib-songs-select', function () {
        var label = $(this).val();
        var html = allSongsClassify(label);
        $('.lib-songs-list ul').html(html);
    });

    //
    $(document).on('click', '.lib-songs-play', function () {
        var label = $('.lib-songs-select').val().toLocaleLowerCase();
        var songs = getSongsByTag(label);
        songsPlay(songs);
    });  

    //
    $(document).on('click', '#commentRefresh', function () {
        MUSIC.messagesLoadReq(function (info) {
            messagesRender(info);
            $('#comRefreshAlert').html('<div class="alert alert-warning" role="alert">Has been refreshed!</div>');
            $('#comRefreshAlert').slideDown();
            setTimeout(function () {
                $('#comRefreshAlert').slideUp();
            }, 1500);
        });
    });

    //
    $(document).on('click', '#foryouSongsPlay', function () {
        if (!MUSIC.foryouData.songs) {
            return;
        }

        songsPlay(MUSIC.foryouData.songs);
    });

    $(document).on('click', '.lib-top-play', function () {
        
        songsPlay(MUSIC.basicData.library.songs);
    });

    //
    $(document).on('click', '.fy-account-songs', function () {
        var name = $(this).attr('name');
        console.log('this.......', name);
        if (name == 'account-collect') {
            personalCollectSongsShow();
        }

        if (name == 'account-share') {
            personalShareSongsShow();
        }
    });

    //
    $(document).on('click', '.person-songs-play', function () {
        var songs = MUSIC.foryouData.account.collectSongs;
        songsPlay(songs);
    });

    //
    $(document).on('click', '.messages-thumbs-up', function () {
        var id = parseInt($(this).attr('name'));
        var num = parseInt($(this).next('.thumbs-up-num').html());

        var that = this;
        MUSIC.messagesThumbsUp(id, function (result) {
            console.log('thtt...', $(that).next('.thumbs-up-num').html());
            $(that).next('.thumbs-up-num').html((num+1));
        });
    });

    //
    $(document).on('click', '.explore-search', function () {
        var value = $('.explore-search-value').val().toLocaleLowerCase();
        if (!value) {
            return;
        }

        MUSIC.getExploreSongs(value, function (data) {
            exploreSongsRender(data);
        });
    });

    //
    $(document).on('click', '.explore-play', function () {
        var name = $(this).attr('name');
        songsPlay(MUSIC.exploreSongs[name]);
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
    function homeRender() {
        var info = MUSIC.basicData.home;
        $('#containerNavContent').html(AppHTML.homeFrame(info));
    }

    // 
    function libraryRender() {        
        $('#containerNavContent').html(AppHTML.libraryFrame(MUSIC.basicData.library));

        $('.l-item').tooltip({
            placement: 'top',
            title: function () {
                return '<div>' + $(this).attr('name').substring(8) + '&nbsp;&nbsp;<span class="glyphicon glyphicon-headphones"></span></div>';
            },
            html: true,
        });

    }

    //
    function foryouRender() {
        var accountid = -1;
        if ($('.navbar-brand-account-photo').attr('src').indexOf('default-account') == -1) {
            accountid = parseInt($('.dropdow-menu-account-photo').attr('alt'));
        }
        MUSIC.fetchForYouData(accountid, function (data) {
            console.log('info....', data);
            $('#containerNavContent').html(AppHTML.foryouFrame(data));
        });
    }

    //
    function messagesRender(info) {
        $('#containerNavContent').html(AppHTML.messagesFrame(info));
    }

    //
    function exploreRender() {
        $('#containerNavContent').html(AppHTML.exploreFrame(MUSIC.exploreSongs.default));
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
                        <span class="glyphicon glyphicon-share glyphicon-share-share list-group-item-option" name="' + name + '"></span>\
                        <span class="glyphicon glyphicon-heart glyphicon-heart-collect list-group-item-option" name="' + name + '"></span>\
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
                    <textarea class="form-control" id="shareComment" placeholder="Your Comment" rows="3"></textarea>\
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
        var html = '<div class="lib-song-seemore"><div class="row lib-songs-option">\
                        <div class="col-xs-6">\
                            <select class="form-control lib-songs-select">\
                                <option value="countryside">Countryside</option>\
                                <option value="light">Light</option>\
                                <option value="jazz">Jazz</option>\
                                <option value="british">British</option>\
                                <option value="rock">Rock</option>\
                                <option value="classical">Classical</option>\
                                <option value="electronic">Electronic</option>\
                            </select>\
                        </div>\
                        <div class="col-xs-6" style="text-align: right;">\
                            <span class="glyphicon glyphicon-headphones lib-songs-play"></span>\
                        </div>\
                    </div>';
        html += '<div class="row lib-songs-list"><ul class="list-group">';

        html += allSongsClassify('countryside');
        
        
        
        html += '</ul></div></div>';

        $('#myModal').html(AppHTML.libSeeMore('song', html));
        $('.lib-modal').animate({'marginLeft': '0'}, 500);
        $('#myModal').modal('show');
       
    }

    //
    function allSongsClassify(label) {
        var songs = getSongsByTag(label);
        var html = '';
        if (songs.length == 0) {
            html += '<li><div class="alert alert-danger" role="alert">Sorry, Nothing!</div></li>';
        } else {
            songs.forEach(function (d, i) {
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
                                    <span class="glyphicon glyphicon-heart glyphicon-heart-collect" name="' + name + '"></span>\
                                    <span class="glyphicon glyphicon-share glyphicon-share-share" name="' + name + '"></span>\
                                </div>\
                            </li>';
            });
        }

        return html;
    }

    //
    function getSongsByTag(label) {
        var songs = [];
        if (MUSIC.songs) {
            MUSIC.songs.forEach(function (d, i) {
                if (d.tags.indexOf(label) != -1) {
                    songs.push(d);
                }
            });
        }

        return songs;
    }

    //
    function allAlbumsRender() {
        var html = '<div class="row lib-album-seemore">';

        if (MUSIC.albums.length == 0) {
            html += '<div class="alert alert-danger" role="alert">Sorry, Nothing!</div>';
        } else {            
            MUSIC.albums.forEach(function (d, i) {
                html += '<div class="col-xs-6 col-sm-4 song-play" name="albums-' + d.name + '">\
                            <div class="thumbnail">\
                                <img src="./music' + d.image + '" alt="...">\
                                <div class="caption">\
                                    <h5>' + d.name + '</h5>\
                                    <p>taylor</p>\
                                </div>\
                            </div>\
                        </div>';
            });
        }
        
        html += '</div>';

        $('#myModal').html(AppHTML.libSeeMore('album', html));
        $('.lib-modal').animate({'marginLeft': '0'}, 500);
        $('#myModal').modal('show');
     
    }

    //
    function allArtistsRender(info) {
        var html = '<div class="row lib-artist-seemore">';

        if (MUSIC.artists.length == 0) {
            html += '<div class="alert alert-danger" role="alert">Sorry, Nothing!</div>';
        } else {
            MUSIC.artists.forEach(function (d, i) {
                html += '<div class="col-xs-6 col-sm-4 lib-artist-seemore-item song-play" name="artists-' + d.name + '">\
                            <img src="./music' + d.image + '">\
                            <p>' + d.name + '</p>\
                        </div>';
            });
        }
        
        html += '</div>';

        $('#myModal').html(AppHTML.libSeeMore('artist', html));
        $('.lib-modal').animate({'marginLeft': '0'}, 500);
        $('#myModal').modal('show');
     
    }



    function personalCollectSongsShow() {
        
        var html = '<div class="fy-person"><div class="row">\
                        <div class="col-xs-6">\
                        </div>\
                        <div class="col-xs-6" style="text-align: right;">\
                            <span class="glyphicon glyphicon-headphones person-songs-play"></span>\
                        </div>\
                    </div>';
        html += '<div class="row"><ul class="list-group">';

        MUSIC.foryouData.account.collectSongs.forEach(function (d, i) {
            html += '<li class="list-group-item collect-item">\
                        <img src="./music' + d.image + '">\
                        <div class="collect-item-info">\
                            <p>' + d.name + '</p>\
                            <p>' + d.artist + '</p>\
                        </div>\
                    </li>'
        });     
        
        html += '</ul></div></div>';

        $('#myModal').html(AppHTML.libSeeMore('Collect', html));
        $('.lib-modal').animate({'marginLeft': '0'}, 500);
        $('#myModal').modal('show');
    }

    function personalShareSongsShow() {
     
        var html = '<div class="fy-person"><div class="row">\
                    </div>';
        html += '<div class="row"><ul class="list-group">';

        MUSIC.foryouData.account.shareSongs.forEach(function (d, i) {
            html += '<li class="list-group-item">\
                        <h4 class="list-group-item-heading">' + d.time + '</h4>\
                        <p class="list-group-item-text">' + d.comment + '</p>\
                        <div class="share-item">\
                            <img src="./music' + d.song.image + '">\
                            <div class="share-item-info">\
                                <p>' + d.song.name + '</p>\
                                <p>' + d.song.artist + '</p>\
                            </div>\
                        </div>\
                    </li>';
        });     
        
        html += '</ul></div></div>';
        

        $('#myModal').html(AppHTML.libSeeMore('Share', html));
        $('.lib-modal').animate({'marginLeft': '0'}, 500);
        $('#myModal').modal('show');
    }

    //
    function songsPlay(data) {
        PLAYLIST = data;
        CURRENTPLAY = 0;
        updatePlayList(data);
        AUDIO.src = '/music/' + PLAYLIST[CURRENTPLAY].url;
        AUDIO.play();
        // console.log('volume', AUDIO.volume);
        $('#musicStatus').removeClass('glyphicon-play');
        $('#musicStatus').addClass('glyphicon-pause');
    }

    //
    function exploreSongsRender(data) {
        var html = '<ul class="list-group">';
        if (data.length == 0) {
            html += '<li class="list-group-item"><span class="glyphicon glyphicon-cloud"></span>&nbsp;&nbsp;None !</li>'
        } else {
            html +='<li class="list-group-item"><span class="glyphicon glyphicon-headphones explore-play" name="search"></li>'
            data.forEach(function (d, i) {
                html += '<li class="list-group-item">\
                            <img src="./music' + d.image + '">\
                            <div class="song-info">\
                                <p>' + d.name + '</p>\
                                <p>' + d.artist + '</p>\
                            </div>\
                        </li>'
            });
        }
        html += '</ul>';

        $('.search-list').slideUp(function () {
            $('.search-list').html(html);
            $('.search-list').slideDown(); 
        });
              
    }

    window.foryouRender = foryouRender;
}());