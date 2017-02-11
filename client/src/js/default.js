(function () {

    /// 
    $('#likeswMusicTitle').click(function () {
        if (document.body.clientWidth < 768) {
            $('#containerNav').slideToggle(500);
        }        
    });

    //
    $('#navMusic').click(function () {
        $('#myModal').html(AppHTML.musicModal);
        $('#myModal').modal();
    })

}());