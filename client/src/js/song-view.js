(function() {

    var SONG = new Song();

    SONG.songsLoadReq('home');

    SONG.songsLoadFinished = function (belong, info) {
        if (belong == 'home') {
            console.log('songsLoadFinished....', info)
            $('#containerNavContent').html(AppHTML.homeFrame(info));
        }

        if (belong == 'library') {
            $('#containerNavContent').html(AppHTML.libraryFrame(info));
        }

        // ...
    }

    
    $('#containerNavHome').click(function () {
        SONG.songsLoadReq('home');
    });

    // $('#containerNavLibrary').click(function () {
    //     SONG.songsLoadReq('library');
    // });

    

}());