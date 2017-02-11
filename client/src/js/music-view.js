(function () {

    var AUDIO = document.getElementById('audio');

    var MUSIC = new Music();

    MUSIC.imagesLoadReq('home');

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

    MUSIC.songsLoadFinished = function (info) {
        console.log('.........', info);
        
        AUDIO.src = '/music' + info.data[0].url;
        AUDIO.play();
    }


    $('#containerNavHome').click(function () {
        MUSIC.imagesLoadReq('home');
    });

    // $('#containerNavLibrary').click(function () {
    //     SONG.songsLoadReq('library');
    // });

    function songPlay() {
        $('.song-play').click(function () {
            var name = $(this).attr('name');
            var label = {"tags": name};

            MUSIC.songsLoadReq(label);

        });
    }


}());