(function () {

    /// 
    $('#likeswMusicTitle').click(function () {
        if (document.body.clientWidth < 768) {
            // $('#containerNav').slideToggle(400);
            console.log('home-modal');
            $('#menuModal').modal('show');
            $('#containerNav').slideToggle(400);
        }
    });

    $('#menuModal').on('hidden.bs.modal', function (e) {
    // do something...
        $('#containerNav').slideToggle(300);
    });

    $('.m-menu-list').on('click', function () {
        if (document.body.clientWidth < 768) {
            $('#menuModal').modal('hide');
        }
    });

    //

}());