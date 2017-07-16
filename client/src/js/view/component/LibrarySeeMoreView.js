(function () {

    var LibrarySeeMoreView = function(title, list) {
        return (
            '<div class="lib-modal">'
                + '<div class="lib-modal-header">'
                    + '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
                    + '<h4 class="modal-title" id="myModalLabel">' + title + '</h4>'
                + '</div>'
                + '<div class="lib-modal-body">' + list + '</div>'
            + '</div>'
        );
    }

    window.LibrarySeeMoreView = LibrarySeeMoreView;

}());