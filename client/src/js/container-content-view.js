(function() {

    $('#containerNavContent').html(AppHTML.homeFrame());
    $('#containerNavHome').click(function () {
        $('#containerNavContent').html(AppHTML.homeFrame());
    });

    $('#containerNavLibrary').click(function () {
        $('#containerNavContent').html(AppHTML.libraryFrame());
    })

}());