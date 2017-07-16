(function () {

    var ExploreView = function(data) {
        var html = '';
        data.forEach(function (d, i) {
            html += '<div class="col-sm-2 col-xs-6">'
                        + '<div class="thumbnail">'
                            + '<img src="./music' + d.image + '" alt="...">'
                            + '<div class="caption">'
                                + '<h5>' + d.name + '</h5>'
                                + '<p>' + d.artist + '</p>'
                            + '</div>'
                        + '</div>'
                    + '</div>'
        });

        return (
            '<div id="exploreFrame">'
                + '<div class="row">'
                    + '<div class="input-group">'
                        + '<input type="text" class="form-control explore-search-value" placeholder="Search for...">'
                        + '<span class="input-group-btn">'
                            + '<button class="btn btn-default explore-search" type="button">Go!</button>'
                        + '</span>'
                    + '</div>'
                    + '<div class="search-content">'
                        + '<div class="search-default"><span class="glyphicon glyphicon-search"></span></div>'
                        + '<div class="search-list"></div>'
                    + '</div>'
                + '</div>'
                + '<div class="row">'
                    + '<div class="explore-default"><span class="glyphicon glyphicon-headphones explore-play" name="default"></span></div>'
                    + html
                + '</div>'
            + '</div>'
        );
    }

    window.ExploreView = ExploreView;
}());