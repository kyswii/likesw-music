(function () {

    var ForYouView = function(data) {
        var account = data.account;
        var songs = data.songs;
        var albums = data.albums;
        var artists = data.artists;

        var ac_html = '';
        if (!account) {
            ac_html += '<div class="col-sm-4 fy-user-img">'
                            + '<img src="./images/q.jpg"　alt="No login">'
                        + '</div>';
        } else {
            ac_html += '<div class="col-sm-4 fy-user-img">'
                            + '<img src="./music' + account.photo + '">'
                        + '</div>'
                        + '<div class="col-sm-8 fy-user-info">'
                            + '<div class="row">'
                                + '<span class="m-title">' + account.name + '</span>'
                            + '</div>'
                            + '<div class="row">'
                                + '<span class="label fy-account-songs" name="account-collect">'
                                    + '<span class="glyphicon glyphicon-heart"></span>'
                                    + '<span class="badge">' + account.collectSongs.length + '</span>'
                                + '</span>'
                                + '<span class="label fy-account-songs" name="account-share">'
                                    + '<span class="glyphicon glyphicon-share"></span>'
                                    + '<span class="badge">' + account.shareSongs.length + '</span>'
                                + '</span>'
                            + '</div>'
                        + '</div>'
        }
        var s_html = '';
        songs.forEach(function (d, i) {
            var name = d.id + '&' + d.artist + '&' + d.name + '&' + d.image + '&' + d.url;
            s_html += '<li class="list-group-item">'
                        + '<span class="m-list-rank">' + (i + 1) + '</span>'
                        + '<div class="m-list-info">'
                            + '<p>' + d.name + '</p>'
                        + '</div>'
                        + '<div class="m-list-option">'
                            + '<span class="glyphicon glyphicon-heart glyphicon-heart-collect" name="' + name + '"></span>'
                            + '<span class="glyphicon glyphicon-share glyphicon-share-share" name="' + name + '"></span>'
                        + '</div>'
                    + '</li>'
        });
        
        var al_html = '';
        albums.forEach(function (d, i) {
            al_html += '<div class="fy-album-item song-play" name="albums-' + d.name + '">'
                            + '<div class="fy-album-item-img"><img src="./music/' + d.image + '"></div>'
                            + '<div class="fy-album-item-info">'
                                + '<p>' +　d.name　+ '</p>'
                                + '<p>' + d.tags + '</p>'
                            + '</div>'
                        + '</div>';
        });

        return (
            '<div id="foryouFrame">'
                + '<div class="row">'
                    + ac_html
                + '</div>'
                + '<div class="row">'
                    + '<p class="m-title"><span>For You</span></p>'
                    + '<div class="col-sm-7 fy-song-list">'
                        + '<div class="m-list-group">'
                            + '<div class="m-list-group-option">'
                                + '<span class="glyphicon glyphicon-headphones" id="foryouSongsPlay"></span>'
                                + '<span class="" style="display: none;">See More</span>'
                            + '</div>'
                            + '<ul class="list-group">'
                                + s_html
                            + '</ul>'
                        + '</div>'
                    + '</div>'
                    + '<div class="col-sm-5 fy-song-intro">'
                        + '<div class="m-thumbnail">'
                            + '<div class="m-thumbnail-img song-play" name="artists-' + artists[0].name + '">'
                                + '<img src="./music/' + artists[0].image + '">'
                            + '</div>'
                            + '<div class="caption">'
                                + '<div class="fy-album">'
                                    + al_html
                                + '</div>'
                            + '</div>'
                        + '</div>'
                    + '</div>'
                + '</div>'
            + '</div>'
        );
    }

    window.ForYouView = ForYouView;
}());