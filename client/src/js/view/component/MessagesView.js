(function () {

    var MessagesView = function(data) {
        var html = '';
        data.forEach(function (d, i) {
            html += '<div class="row">'
                        + '<div class="row me-artist">'
                            + '<img src="./music' + d.photo + '">'
                            + '<div>'
                                + '<p>' + d.aName + '</p>'
                                + '<p>' + d.time + '</p>'
                            + '</div>'
                        + '</div>'
                        + '<div class="row me-comment">'
                            + '<div class="col-sm-7 me-comment-text">'
                                + '<p>' + d.comment + '</p>'
                            + '</div>'
                            + '<div class="col-sm-5 me-comment-song">'
                                + '<img src="./music' + d.image + '">'
                                + '<div>'
                                    + '<p>' + d.sName + '</p>'
                                    + '<p>' + d.artist + '</p>'
                                + '</div>'
                            + '</div>'
                        + '</div>'
                        + '<div class="row me-option">'
                            + '<span class="glyphicon glyphicon-thumbs-up messages-thumbs-up" name="' + d.id + '"></span>'
                            + '<span class="thumbs-up-num">' + d.sumCollect + '</span>'
                            + '<span class="glyphicon glyphicon-heart glyphicon-heart-collect" style="display: none;"></span>'
                            + '<span class="glyphicon glyphicon-share glyphicon-share-share" style="display: none;"></span>'
                            + '<span class="glyphicon glyphicon-comment" style="display: none;"></span>'
                        + '</div>'
                    + '</div>'
        });
        return (
            '<div id="messagesFrame">'
                + '<div class="row">'
                    + '<div class="me-header">'
                        + '<p class="me-title">Messages</p>'
                        + '<p class="me-refresh">'
                            + '<span class="glyphicon glyphicon-refresh" id="commentRefresh"></span>'
                        + '</p>'
                    + '</div>'
                + '</div>'
                + '<div id="comRefreshAlert">'
                + '</div>'
                + html
            + '</div>'
        );
    }

    window.MessagesView = MessagesView;
}());