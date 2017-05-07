(function () {
    var AppHTML = {
        //
        accountInfo: function(info) {
            return (
                '<li class="dropdown-header"><img class="account-photo dropdow-menu-account-photo" alt="' + info.id + '" src="./music' + info.photo + '">&nbsp;&nbsp;\
                    <span class="dropdow-menu-account-name">' + info.name + '</span>\
                </li>\
                <li class="dropdown-header"><span class="glyphicon glyphicon-envelope icon-active-color"></span>&nbsp;&nbsp;<span class="dropdow-menu-accout-email dropdow-menu-accout-info-style">' + info.email + '</span></li>\
                <li class="dropdown-header"><span class="glyphicon glyphicon-map-marker icon-active-color"></span>&nbsp;&nbsp;<span class="dropdow-menu-account-region dropdow-menu-accout-info-style">' + info.region + '</span></li>\
                <li class="dropdown-header"><span class="glyphicon glyphicon-tag icon-active-color"></span>&nbsp;&nbsp;<span class="dropdow-menu-account-tags dropdow-menu-accout-info-style">' + info.tags + '</span></li>\
                <li role="separator" class="divider"></li>\
                <li><a href="javascript:;" class="account-settings"><span class="glyphicon glyphicon-cog icon-active-color"></span>&nbsp;&nbsp;Settings</a></li>\
                <li role="separator" class="divider"></li>\
                <li><a href="javascript:;" class="account-logout"><span class="glyphicon glyphicon-log-out icon-active-color"></span>&nbsp;&nbsp;Log out</a></li>'
            );
        },

        //
        registerModal: 
            '<div class="modal-dialog" role="document">\
                <div class="modal-content">\
                    <div class="modal-header">\
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
                        <h4 class="modal-title" id="myModalLabel">Register</h4>\
                    </div>\
                    <div class="modal-body">\
                        <form method="post" name="registerForm" enctype="multipart/form-data" action="javascript:;" class="form-horizontal" id="registerAccountInfo">\
                            <div class="form-group" style="text-align: center;">\
                                <div class="col-sm-4">\
                                    <img class="account-photo account-default-photo" id="registerPhoto" alt="Brand" src="./images/logo.png">\
                                </div>\
                                <div class="col-sm-2">\
                                    <button type="button" class="btn btn-default register-photo-choose-btn">Choose</button>\
                                    <input type="file" name="photo" class="modal-file-input hidden" id="registerPhotoChoose" placeholder="Upload"/>\
                                </div>\
                            </div>\
                            <div class="form-group">\
                                <label for="inputEmail3" class="col-sm-2 control-label">Email</label>\
                                <div class="col-sm-10">\
                                    <input type="email" name="email" class="form-control" id="registerEmail" placeholder="Email">\
                                </div>\
                            </div>\
                            <div class="form-group">\
                                <label for="inputPassword3" class="col-sm-2 control-label">Password</label>\
                                <div class="col-sm-10">\
                                    <input type="password" name="password" class="form-control" id="registerPassword" placeholder="Password">\
                                </div>\
                            </div>\
                            <div class="form-group">\
                                <label class="col-sm-2 control-label">Name</label>\
                                <div class="col-sm-10">\
                                    <input type="text" name="name" class="form-control" id="registerName" placeholder="kyswii">\
                                </div>\
                            </div>\
                            <div class="form-group">\
                                <label class="col-sm-2 control-label">tags</label>\
                                <div class="col-sm-10">\
                                    <input type="text" name="tags" class="form-control" id="registerTags" placeholder="...">\
                                </div>\
                            </div>\
                            <div class="form-group">\
                                <label class="col-sm-2 control-label">Region</label>\
                                <div class="col-sm-10">\
                                    <input type="text" name="region" class="form-control" id="registerRegion" placeholder="England">\
                                </div>\
                            </div>\
                        </form>\
                    </div>\
                    <div class="modal-footer">\
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
                        <button type="button" class="btn btn-primary" id="registerSubmit">Submit</button>\
                    </div>\
                </div>\
            </div>',
        
        //
        loginModal:
            '<div class="modal-dialog modal-sm" role="document">\
                <div class="modal-content">\
                    <div class="modal-header">\
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
                        <h4 class="modal-title" id="myModalLabel">Log in</h4>\
                    </div>\
                    <div class="modal-body">\
                        <form class="form-horizontal">\
                            <div class="form-group">\
                                <label for="inputEmail3" class="col-sm-3 control-label">Email</label>\
                                <div class="col-sm-9">\
                                    <input type="email" class="form-control" id="loginEmail" placeholder="Email">\
                                </div>\
                            </div>\
                            <div class="form-group">\
                                <label for="inputPassword3" class="col-sm-3 control-label">Password</label>\
                                <div class="col-sm-9">\
                                    <input type="password" class="form-control" id="loginPassword" placeholder="Password">\
                                </div>\
                            </div>\
                            <div class="container-fulid login-wrong">\
                                <div class="alert alert-danger" role="alert"><strong>Error:&nbsp;&nbsp;</strong>The user is not consistent with the password.</div>\
                            </div>\
                        </form>\
                    </div>\
                    <div class="modal-footer">\
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
                        <button type="button" class="btn btn-primary" id="loginSubmit">Log in</button>\
                    </div>\
                </div>\
            </div>',
        
        //

        //
        settingsModal: function(info) {
            return (
                '<div class="modal-dialog" role="document">\
                    <div class="modal-content">\
                        <div class="modal-header">\
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
                            <h4 class="modal-title" id="myModalLabel">Settings</h4>\
                        </div>\
                        <div class="modal-body">\
                            <form class="form-horizontal">\
                                <div class="form-group" style="text-align: center;">\
                                    <div class="col-sm-4">\
                                        <img class="account-photo account-current-photo" id="settingsPhoto" alt="Brand" src="./music' + info.photo + '">\
                                    </div>\
                                    <div class="col-sm-4">\
                                        <button type="button" class="btn btn-default register-photo-choose-btn">Choose</button>\
                                        <input type="file" name="photo" class="modal-file-input hidden" id="settingsPhotoChoose"/>\
                                    </div>\
                                </div>\
                                <div class="form-group">\
                                    <label class="col-sm-2 control-label">Name</label>\
                                    <div class="col-sm-10">\
                                        <input type="text" class="form-control" id="settingsName" value="' + info.name + '">\
                                    </div>\
                                </div>\
                                <div class="form-group">\
                                    <label for="inputEmail3" class="col-sm-2 control-label">Email</label>\
                                    <div class="col-sm-10">\
                                        <input type="email" class="form-control" id="settingsEmail" value="' + info.email + '">\
                                    </div>\
                                </div>\
                                <div class="form-group">\
                                    <label for="inputPassword3" class="col-sm-2 control-label">Password</label>\
                                    <div class="col-sm-10">\
                                        <input type="password" class="form-control" id="settingsPassword" value="' + info.password + '">\
                                    </div>\
                                </div>\
                                <div class="form-group">\
                                    <label class="col-sm-2 control-label">tags</label>\
                                    <div class="col-sm-10">\
                                        <input type="text" class="form-control" id="settingsTags" value="' + info.tags + '">\
                                    </div>\
                                </div>\
                                <div class="form-group">\
                                    <label class="col-sm-2 control-label">Region</label>\
                                    <div class="col-sm-10">\
                                        <input type="text" class="form-control" id="settingsRegion" value="' + info.region + '">\
                                    </div>\
                                </div>\
                            </form>\
                        </div>\
                        <div class="modal-footer">\
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
                            <button type="button" class="btn btn-primary" id="settingsSubmit">Save changes</button>\
                        </div>\
                    </div>\
                </div>'
            );
        },

        //
        homeFrame: function(info) {
            return (
                '<div id="homeFrame">\
                    <div class="jumbotron">\
                        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">\
                            <!-- Indicators -->\
                            <ol class="carousel-indicators">\
                                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>\
                                <li data-target="#carousel-example-generic" data-slide-to="1"></li>\
                                <li data-target="#carousel-example-generic" data-slide-to="2"></li>\
                            </ol>\
                            <!-- Wrapper for slides -->\
                            <div class="carousel-inner" role="listbox">\
                                <div class="item active">\
                                    <img src="./music' + info.Do[0].url + '" class="carousel-inner-img" alt="">\
                                    <div class="carousel-caption">\
                                        <h3>Taylor Swift<h3>\
                                    </div>\
                                </div>\
                                <div class="item">\
                                    <img src="./music' + info.Do[1].url + '" class="carousel-inner-img" alt="">\
                                    <div class="carousel-caption">\
                                        <h3>Jay Chou</h3>\
                                    </div>\
                                </div>\
                                <div class="item">\
                                    <img src="./music' + info.Do[2].url + '" class="carousel-inner-img" alt="">\
                                    <div class="carousel-caption">\
                                        <h3>Wuclef Jean</h3>\
                                    </div>\
                                </div>\
                            </div>\
                            <!-- Controls -->\
                            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">\
                                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>\
                                <span class="sr-only">Previous</span>\
                            </a>\
                            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">\
                                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>\
                                <span class="sr-only">Next</span>\
                            </a>\
                        </div>\
                    </div>\
                    <div class="jumbotron">\
                        <h1>Do you like it ?</h1>\
                        <p>Countryside music -- Cordial and warm without losing the popular elements</p>\
                        <p><button type="button" class="btn btn-sm song-play home-music-listen" name="countryside"><span class="glyphicon glyphicon-headphones"></span>&nbsp;&nbsp;Play it now*</button></p>\
                    </div>\
                    <div class="jumbotron">\
                        <div class="row">\
                            <div class="col-sm-6">\
                                <h1>Or this ?</h1>\
                                <p>Light music -- Simple structure, Lively rhythm, beautiful melody</p>\
                                <p><button type="button" class="btn btn-sm song-play home-music-listen" name="light"><span class="glyphicon glyphicon-headphones"></span>&nbsp;&nbsp;Play it now*</button></p>\
                            </div>\
                            <div class="col-sm-6">\
                                <div class="thumbnail">\
                                    <img src="./music' + info.Or[0].url + '" alt="">\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="jumbotron">\
                        <h1>Whatever you like</h1>\
                        <p>Here, you can find what you want</p>\
                        <p><button type="button" class="btn btn-sm song-play home-music-listen" name="other"><span class="glyphicon glyphicon-headphones"></span>&nbsp;&nbsp;Play it now*</button></p>\
                        <div class="what-ever">\
                            <div class="row">\
                                <div class="col-sm-6 col-md-6">\
                                    <div class="thumbnail">\
                                        <img src="./music' + info.Whatever[0].url + '" alt="">\
                                        <div class="caption">\
                                            <h3>Popular music</h3>\
                                            <p>Cras justo odio, dapibus .&nbsp;&nbsp;<a href="javascript:;" class="song-play" name="popular"></a></p>\
                                            <p><span class="what-ever-listen song-play" name="popular">Play it now ></span></p>\
                                        </div>\
                                    </div>\
                                </div>\
                                <div class="col-sm-6 col-md-6">\
                                    <div class="thumbnail">\
                                        <img src="./music' + info.Whatever[1].url + '" alt="">\
                                        <div class="caption">\
                                            <h3>Jazz music</h3>\
                                            <p>Cras justo odio, dapibus .&nbsp;&nbsp;<a href="javascript:;" class="song-play" name="jazz"></a></p>\
                                            <p><span class="what-ever-listen song-play" name="jazz">Play it now ></span></p>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
                            <div class="row">\
                                <div class="col-sm-6 col-md-6">\
                                    <div class="thumbnail">\
                                        <img src="./music' + info.Whatever[2].url + '" alt="">\
                                        <div class="caption">\
                                            <h3>British music</h3>\
                                            <p>Cras justo odio, dapibus.&nbsp;&nbsp;<a href="javascript:;" class="song-play" name="british"></a></p>\
                                            <p><span class="what-ever-listen song-play" name="british">Play it now ></span></p>\
                                        </div>\
                                    </div>\
                                </div>\
                                <div class="col-sm-6 col-md-6">\
                                    <div class="thumbnail">\
                                        <img src="./music' + info.Whatever[3].url + '" alt="">\
                                        <div class="caption">\
                                            <h3>Rock music</h3>\
                                            <p>Cras justo odio, dapibus.&nbsp;&nbsp;<a href="javascript:;" class="song-play" name="rock"></a></p>\
                                            <p><span class="what-ever-listen song-play" name="rock">Play it now ></span></p>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
                            <div class="row">\
                                <div class="col-sm-6 col-md-6">\
                                    <div class="thumbnail">\
                                        <img src="./music' + info.Whatever[4].url + '" alt="">\
                                        <div class="caption">\
                                            <h3>Classical music</h3>\
                                            <p>Cras justo odio, dapibus.&nbsp;&nbsp;<a href="javascript:;" class="song-play" name="classical"></a></p>\
                                            <p><span class="what-ever-listen song-play" name="classical">Play it now ></span></p>\
                                        </div>\
                                    </div>\
                                </div>\
                                <div class="col-sm-6 col-md-6">\
                                    <div class="thumbnail">\
                                        <img src="./music' + info.Whatever[5].url + '" alt="">\
                                        <div class="caption">\
                                            <h3>Electronic music</h3>\
                                            <p>Cras justo odio, dapibus.&nbsp;&nbsp;<a href="javascript:;" class="song-play" name="electronic"></a></p>\
                                            <p><span class="what-ever-listen song-play" name="electronic">Play it now ></span></p>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="jumbotron">\
                        <h1>Likesw-Music</h1>\
                    </div>\
                </div>'
            );
        },

        //
        libraryFrame: function(info) {
            var s_html = '<li class="list-group-item"><div class="alert alert-danger" role="alert">Sorry, Nothing!</div></li>';
            var al_html = '<div class="alert alert-danger" role="alert">Sorry, Nothing!</div>';
            var ar_html = ar_html;
            if (info.songs) {
                s_html = '';
                info.songs.forEach(function (d, i) {
                    s_html += '<li class="list-group-item"><img src="./music' + d.image + '" alt=""><span class="rank">' + (i + 1) + '</span>' + d.name + '</li>';
                });
            }

            if (info.albums) {
                al_html = '';
                info.albums.forEach(function (d, i) {
                    al_html += '<div class="col-xs-6 col-sm-4 lib-album-item song-play" name="albums-' + d.name + '">\
                                    <img src="./music' + d.image + '" alt="...">\
                                    <div class="caption">\
                                        <p class="lib-album-name">' + d.name + '</p>\
                                        <p class="lib-album-info">' + d.tags + '</p>\
                                    </div>\
                                </div>'
                });
            }

            return (
                '<div id="libraryFrame">\
                    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">\
                        <div class="panel panel-default">\
                            <div class="panel-heading" role="tab" id="headingOne">\
                                <div class="row lib-category-header">\
                                    <div class="col-xs-4 lib-category-title">Song</div>\
                                    <div class="col-xs-8 lib-category-option">\
                                        <span class="option-item" name="song">See More</span>\
                                    </div>\
                                </div>\
                                <div class="row lib-category-container">\
                                    <div class="col-sm-5 lib-theme">\
                                        <a href="javascript:;" class="thumbnail">\
                                            <img src="./images/q.jpg" alt="">\
                                            <div class="lib-play song-play" name="hot-songs">\
                                                <span class="glyphicon glyphicon-play-circle"></span>\
                                            </div>\
                                        </a>\
                                    </div>\
                                    <div class="col-sm-7 lib-content">\
                                        <div class="lib-content-item">\
                                            <div class="lib-theme-option">\
                                                <span class="glyphicon glyphicon-menu-right"></span>\
                                            </div>\
                                            <div>\
                                                <ul class="list-group" id="libSongList">' 
                                                    + s_html +
                                                '</ul>\
                                            </div>\
                                        </div>\
                                    </div>\
                                </div>\
                                <div class="see-more">\
                                    <p class="panel-title">\
                                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">\
                                            See More&nbsp;&nbsp;\
                                            <span class="glyphicon glyphicon-menu-down"></span>\
                                        </a>\
                                    </p>\
                                </div>\
                            </div>\
                            <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">\
                                <div class="panel-body">\
                                    Anim pariatur cliche reprehenderit,\
                                </div>\
                            </div>\
                        </div>\
                        <div class="panel panel-default">\
                            <div class="panel-heading" role="tab" id="headingTwo">\
                                <div class="row lib-category-header">\
                                    <div class="col-xs-4 lib-category-title">Album</div>\
                                    <div class="col-xs-8 lib-category-option">\
                                        <span class="option-item" name="album">See More</span>\
                                    </div>\
                                </div>\
                                <div class="row lib-category-container">\
                                    <div class="col-sm-5 lib-theme">\
                                        <a href="javascript:;" class="thumbnail">\
                                            <img src="./images/q.jpg" alt="">\
                                            <div class="lib-play song-play" name="hot-albums">\
                                                <span class="glyphicon glyphicon-play-circle"></span>\
                                            </div>\
                                        </a>\
                                    </div>\
                                    <div class="col-sm-7 lib-content">\
                                        <div class="lib-content-item">\
                                            <div class="lib-theme-option">\
                                                <span class="glyphicon glyphicon-menu-right"></span>\
                                            </div>\
                                            <div class="row" id="libAlbumList">'
                                                + al_html +
                                            '</div>\
                                        </div>\
                                    </div>\
                                </div>\
                                <div class="see-more">\
                                    <p class="panel-title">\
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false"\
                                            aria-controls="collapseTwo">\
                                            See More&nbsp;&nbsp;\
                                            <span class="glyphicon glyphicon-menu-down"></span>\
                                        </a>\
                                    </p>\
                                </div>\
                            </div>\
                            <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">\
                                <div class="panel-body">\
                                    Anim pariatur cliche reprehenderit,\
                                </div>\
                            </div>\
                        </div>\
                        <div class="panel panel-default">\
                            <div class="panel-heading" role="tab" id="headingThree">\
                                <div class="row lib-category-header">\
                                    <div class="col-xs-4 lib-category-title">Artist</div>\
                                    <div class="col-xs-8 lib-category-option">\
                                        <span class="option-item" name="artist">See More</span>\
                                    </div>\
                                </div>\
                                <div class="row lib-category-container">\
                                    <div class="col-sm-5 lib-theme">\
                                        <a href="javascript:;" class="thumbnail">\
                                            <img src="./images/q.jpg" alt="">\
                                            <div class="lib-play song-play" name="hot-artist">\
                                                <span class="glyphicon glyphicon-play-circle"></span>\
                                            </div>\
                                        </a>\
                                    </div>\
                                    <div class="col-sm-7 lib-content">\
                                        <div class="lib-content-item">\
                                            <div class="lib-theme-option">\
                                                <span class="glyphicon glyphicon-menu-right"></span>\
                                            </div>\
                                            <div id="libArtistList">\
                                                <div class="l-item song-play" name="artists-' + info.artists[0].name + '" style="width: 100px; height: 100px; border-radius: 50px;"><img src="./music' + info.artists[0].image + '" alt="..."></div>\
                                                <div class="l-item song-play" name="artists-' + info.artists[1].name + '" style="width: 140px; height: 140px; border-radius: 70px;"><img src="./music' + info.artists[1].image + '" alt="..."></div>\
                                                <div class="l-item song-play" name="artists-' + info.artists[2].name + '" style="width: 80px; height: 80px; border-radius: 40px;"><img src="./music' + info.artists[2].image + '" alt="..."></div>\
                                                <div class="l-item song-play" name="artists-' + info.artists[3].name + '" style="width: 90px; height: 90px; border-radius: 45px;"><img src="./music' + info.artists[3].image + '" alt="..."></div>\
                                                <div class="l-item song-play" name="artists-' + info.artists[4].name + '" style="width: 130px; height: 130px; border-radius: 65px;"><img src="./music' + info.artists[4].image + '" alt="..."></div>\
                                                <div class="l-item song-play" name="artists-' + info.artists[5].name + '" style="width: 100px; height: 100px; border-radius: 50px;"><img src="./music' + info.artists[5].image + '" alt="..."></div>\
                                                <div class="l-item song-play" name="artists-' + info.artists[6].name + '" style="width: 120px; height: 120px; border-radius: 60px;"><img src="./music' + info.artists[6].image + '" alt="..."></div>\
                                            </div>\
                                        </div>\
                                    </div>\
                                </div>\
                                <div class="see-more">\
                                    <p class="panel-title">\
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false"\
                                            aria-controls="collapseThree">\
                                            See More&nbsp;&nbsp;\
                                            <span class="glyphicon glyphicon-menu-down"></span>\
                                        </a>\
                                    </p>\
                                </div>\
                            </div>\
                            <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">\
                                <div class="panel-body">\
                                    Anim pariatur cliche reprehenderit,\
                                </div>\
                            </div>\
                        </div>\
                        <div class="panel">\
                        </div>\
                    </div>\
                </div>'
            );
        },

        //
        foryouFrame: function(info) {
            var account = info.account;
            var songs = info.songs;
            var albums = info.albums;
            var artists = info.artists;

            var ac_html = '';
            if (!account) {
                ac_html += '<div class="col-sm-4 fy-user-img">\
                                <img src="./images/q.jpg"　alt="No login">\
                            </div>';
            } else {
                ac_html += '<div class="col-sm-4 fy-user-img">\
                                <img src="./music' + account.photo + '">\
                            </div>\
                            <div class="col-sm-8 fy-user-info">\
                                <div class="row">\
                                    <span class="m-title">' + account.name + '</span>\
                                </div>\
                                <div class="row">\
                                    <span class="label">\
                                        <span class="glyphicon glyphicon-heart"></span>\
                                        <span class="badge">' + account.collectSongs.length + '</span>\
                                    </span>\
                                    <span class="label">\
                                        <span class="glyphicon glyphicon-share"></span>\
                                        <span class="badge">' + account.shareSongs.length + '</span>\
                                    </span>\
                                </div>\
                            </div>'
            }
            var s_html = '';
            songs.forEach(function (d, i) {
                s_html += '<li class="list-group-item">\
                            <span class="m-list-rank">' + (i + 1) + '</span>\
                            <div class="m-list-info">\
                                <p>' + d.name + '</p>\
                            </div>\
                            <div class="m-list-option">\
                                <span class="glyphicon glyphicon-heart"></span>\
                                <span class="glyphicon glyphicon-share"></span>\
                            </div>\
                        </li>'
            });
            
            var al_html = '';
            albums.forEach(function (d, i) {
                al_html += '<div class="fy-album-item">\
                                <div class="fy-album-item-img"><img src="./music/' + d.image + '"></div>\
                                <div class="fy-album-item-info">\
                                    <p>' +　d.name　+ '</p>\
                                    <p>' + d.tags + '</p>\
                                </div>\
                            </div>';
            });
            return (
                '<div id="foryouFrame">\
                    <div class="row">'
                        + ac_html +
                    '</div>\
                    <div class="row">\
                        <p class="m-title"><span>For You</span></p>\
                        <div class="col-sm-7 fy-song-list">\
                            <div class="m-list-group">\
                                <div class="m-list-group-option">\
                                    <span class="glyphicon glyphicon-random"></span>\
                                    <span class="">See More</span>\
                                </div>\
                                <ul class="list-group">'
                                    + s_html +
                                '</ul>\
                            </div>\
                        </div>\
                        <div class="col-sm-5 fy-song-intro">\
                            <div class="m-thumbnail">\
                                <div class="m-thumbnail-img">\
                                    <img src="./music/' + artists[0].image + '">\
                                </div>\
                                <div class="caption">\
                                    <div class="fy-album">'
                                        + al_html +
                                    '</div>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>'
            );
        },

        //
        messagesFrame: function(info) {
            var html = '';
            info.forEach(function (d, i) {
                html += '<div class="row">\
                        <div class="row me-artist">\
                            <img src="./music' + d.photo + '">\
                            <div>\
                                <p>' + d.aName + '</p>\
                                <p>' + d.time + '</p>\
                            </div>\
                        </div>\
                        <div class="row me-comment">\
                            <div class="col-sm-7 me-comment-text">\
                                <p>' + d.comment + '</p>\
                            </div>\
                            <div class="col-sm-5 me-comment-song">\
                                <img src="./music' + d.image + '">\
                                <div>\
                                    <p>' + d.sName + '</p>\
                                    <p>' + d.artist + '</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="row me-option">\
                            <span class="glyphicon glyphicon-heart"></span>\
                            <span class="glyphicon glyphicon-share"></span>\
                            <span class="glyphicon glyphicon-comment"></span>\
                        </div>\
                    </div>'
            });
            return (
                '<div id="messagesFrame">\
                    <div class="row">\
                        <div class="me-header">\
                            <p class="me-title">Messages</p>\
                            <p class="me-refresh">\
                                <span class="glyphicon glyphicon-refresh"></span>\
                            </p>\
                        </div>\
                    </div>'
                    + html
                + '</div>'
            );
        },

        //
        playlistFrame: function(info) {
            return (
                '<div>\
                    <h1>Hello world</h1>\
                </div>'
            );
        },

        //
        libSeeMore: function(title, list) {
            return (
                '<div class="lib-modal">\
                    <div class="lib-modal-header">\
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
                        <h4 class="modal-title" id="myModalLabel">' + title + '</h4>\
                    </div>\
                    <div class="lib-modal-body">' + list + '</div>\
                </div>'
            )
        }

    }

    window.AppHTML = AppHTML;
}());