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
    // $('#musicOption').popover({
    //     placement: 'top',
    //     title: '<h3>Option</h3>',
    //     template: '<div><span class="glyphicon glyphicon-share"></span><span class="glyphicon glyphicon-heart"></span><span class=""></span></div>',
    //     html: true,
    // });

    //

}());