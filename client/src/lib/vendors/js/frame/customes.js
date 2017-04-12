(function () {
    var AppHTML = {
        //
        accountInfo: function(info) {
            return (
                '<li class="dropdown-header"><img class="account-photo dropdow-menu-account-photo" alt="Brand" src="./music' + info.photo + '">&nbsp;&nbsp;\
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
                        <p><button type="button" class="btn btn-sm song-play home-music-listen >" name="countryside"><span class="glyphicon glyphicon-headphones"></span>&nbsp;&nbsp;Play it now*</button></p>\
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
                                            <p><span class="what-ever-listen">Play it now ></span></p>\
                                        </div>\
                                    </div>\
                                </div>\
                                <div class="col-sm-6 col-md-6">\
                                    <div class="thumbnail">\
                                        <img src="./music' + info.Whatever[1].url + '" alt="">\
                                        <div class="caption">\
                                            <h3>Jazz music</h3>\
                                            <p>Cras justo odio, dapibus .&nbsp;&nbsp;<a href="javascript:;" class="song-play" name="jazz"></a></p>\
                                            <p><span class="what-ever-listen">Play it now ></span></p>\
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
                                            <p><span class="what-ever-listen">Play it now ></span></p>\
                                        </div>\
                                    </div>\
                                </div>\
                                <div class="col-sm-6 col-md-6">\
                                    <div class="thumbnail">\
                                        <img src="./music' + info.Whatever[3].url + '" alt="">\
                                        <div class="caption">\
                                            <h3>Rock music</h3>\
                                            <p>Cras justo odio, dapibus.&nbsp;&nbsp;<a href="javascript:;" class="song-play" name="rock"></a></p>\
                                            <p><span class="what-ever-listen">Play it now ></span></p>\
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
                                            <p><span class="what-ever-listen">Play it now ></span></p>\
                                        </div>\
                                    </div>\
                                </div>\
                                <div class="col-sm-6 col-md-6">\
                                    <div class="thumbnail">\
                                        <img src="./music' + info.Whatever[5].url + '" alt="">\
                                        <div class="caption">\
                                            <h3>Electronic music</h3>\
                                            <p>Cras justo odio, dapibus.&nbsp;&nbsp;<a href="javascript:;" class="song-play" name="electronic"></a></p>\
                                            <p><span class="what-ever-listen">Play it now ></span></p>\
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
            return (
                '<div id="libraryFrame">\
                    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">\
                        <div class="panel panel-default">\
                            <div class="panel-heading" role="tab" id="headingOne">\
                                <div class="lib-category-header">\
                                    <div class="lib-category-title">Song</div>\
                                    <div class="lib-category-option">\
                                        <span class="glyphicon glyphicon-menu-right option-item"></span>\
                                    </div>\
                                </div>\
                                <div class="row">\
                                    <div class="col-sm-5">\
                                        <a href="#" class="thumbnail">\
                                            <img src="./images/q.jpg" alt="">\
                                        </a>\
                                    </div>\
                                    <div class="col-sm-7">\
                                        <div>\
                                            <ul class="list-group" id="libSongList">\
                                                <li class="list-group-item">Something Just Like This</li>\
                                                <li class="list-group-item">Something Just Like This</li>\
                                                <li class="list-group-item">Something Just Like This</li>\
                                            </ul>\
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
                                <div class="lib-category-header">\
                                    <div class="lib-category-title">Album</div>\
                                    <div class="lib-category-option">\
                                        <span class="glyphicon glyphicon-menu-right option-item"></span>\
                                    </div>\
                                </div>\
                                <div class="row">\
                                    <div class="col-sm-5">\
                                        <a href="#" class="thumbnail">\
                                            <img src="./images/q.jpg" alt="">\
                                        </a>\
                                    </div>\
                                    <div class="col-sm-7">\
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
                                <div class="lib-category-header">\
                                    <div class="lib-category-title">Artist</div>\
                                    <div class="lib-category-option">\
                                        <span class="glyphicon glyphicon-menu-right option-item"></span>\
                                    </div>\
                                </div>\
                                <div class="row">\
                                    <div class="col-sm-5">\
                                        <a href="#" class="thumbnail">\
                                            <img src="./images/q.jpg" alt="">\
                                        </a>\
                                    </div>\
                                    <div class="col-sm-7" id="libArtistChart">\
                                        <div class="l-item" style="width: 100px; height: 100px; border-radius: 50px;">Taylor</div>\
                                        <div class="l-item" style="width: 140px; height: 140px; border-radius: 70px;">Taylor Swift</div>\
                                        <div class="l-item" style="width: 80px; height: 80px; border-radius: 40px;">Jay</div>\
                                        <div class="l-item" style="width: 90px; height: 90px; border-radius: 45px;"></div>\
                                        <div class="l-item" style="width: 130px; height: 130px; border-radius: 65px;"></div>\
                                        <div class="l-item" style="width: 100px; height: 100px; border-radius: 50px;"></div>\
                                        <div class="l-item" style="width: 120px; height: 120px; border-radius: 60px;"></div>\
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
        }


    }

    window.AppHTML = AppHTML;
}());