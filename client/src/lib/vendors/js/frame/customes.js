(function () {
    var AppHTML = {
        accountInfo: function(info) {
            return (
                '<li class="dropdown-header"><img class="account-photo dropdow-menu-account-photo" alt="Brand" src="./music' + info.photo + '">&nbsp;&nbsp;\
                    <span class="dropdow-menu-account-name">' + info.name + '</span>\
                </li>\
                <li class="dropdown-header"><span class="glyphicon glyphicon-envelope"></span>&nbsp;&nbsp;<span class="dropdow-menu-accout-email">' + info.email + '</span></li>\
                <li class="dropdown-header"><span class="glyphicon glyphicon-map-marker"></span>&nbsp;&nbsp;<span class="dropdow-menu-account-region">' + info.region + '</span></li>\
                <li class="dropdown-header"><span class="glyphicon glyphicon-tag"></span>&nbsp;&nbsp;<span class="dropdow-menu-account-tags">' + info.tags + '</span></li>\
                <li role="separator" class="divider"></li>\
                <li><a href="javascript:;" class="account-settings"><span class="glyphicon glyphicon-cog"></span>&nbsp;&nbsp;Settings</a></li>\
                <li role="separator" class="divider"></li>\
                <li><a href="javascript:;" class="account-logout"><span class="glyphicon glyphicon-log-out"></span>&nbsp;&nbsp;Log out</a></li>'
            );
        },

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
                                    <input type="file" name="photo" class="btn btn-warning" id="registerPhotoChoose" placeholder="Upload"/>\
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
                                    <div class="alert alert-danger" role="alert">...</div>\
                                </div>\
                            </div>\
                        </form>\
                    </div>\
                    <div class="modal-footer">\
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
                        <button type="button" class="btn btn-primary" id="loginSubmit">Log in</button>\
                    </div>\
                </div>\
            </div>',

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
                                        <input type="file" name="photo" class="btn btn-warning" id="settingsPhotoChoose"/>\
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
        homeFrame: function(info) {
            return (
                '<div class="jumbotron">\
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
                                <img src="./images/taylor0.jpg" alt="">\
                                <div class="carousel-caption">\
                                    TAYLOR\
                                </div>\
                            </div>\
                            <div class="item">\
                                <img src="./images/taylor1.jpg" alt="">\
                                <div class="carousel-caption">\
                                    <h3>Taylor</h3>\
                                    <p>Music is beatiful like Taylor</p>\
                                </div>\
                            </div>\
                            <div class="item">\
                                <img src="./images/taylor2.jpg" alt="">\
                                <!--<div class="carousel-caption">\
                                    ...\
                                </div>-->\
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
                    <div class="row">\
                        <div class="col-xs-6 col-md-3">\
                            <a href="#" class="thumbnail">\
                            <img src="./images/thumbnail1.jpg" alt="">\
                            </a>\
                        </div>\
                        <div class="col-xs-6 col-md-3">\
                            <a href="#" class="thumbnail">\
                            <img src="./images/thumbnail2.jpg" alt="">\
                            </a>\
                        </div>\
                        <div class="col-xs-6 col-md-3">\
                            <a href="#" class="thumbnail">\
                            <img src="./images/thumbnail0.jpg" alt="">\
                            </a>\
                        </div>\
                        <div class="col-xs-6 col-md-3">\
                            <a href="#" class="thumbnail">\
                            <img src="./images/thumbnail3.jpg" alt="">\
                            </a>\
                        </div>\
                    </div>\
                    <h1>Likesw-Music</h1>\
                    <p>If you are my girlfriend, you will be happy!</p>\
                </div>\
                <div class="jumbotron">\
                    <h1>Likesw-Music</h1>\
                    <p>If you are my girlfriend, you will be happy!</p>\
                    <div class="row">\
                        <div class="col-sm-6 col-md-4">\
                            <div class="thumbnail">\
                                <img src="./images/thumbnail-a.jpg" alt="">\
                                <div class="caption">\
                                    <h3>Thumbnail label</h3>\
                                    <p>Cras justo odio, dapibus .</p>\
                                    <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="col-sm-6 col-md-4">\
                            <div class="thumbnail">\
                                <img src="./images/thumbnail-d.jpg" alt="">\
                                <div class="caption">\
                                    <h3>Thumbnail label</h3>\
                                    <p>Cras justo odio, dapibus .</p>\
                                    <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="col-sm-6 col-md-4">\
                            <div class="thumbnail">\
                                <img src="./images/thumbnail-c.jpg" alt="">\
                                <div class="caption">\
                                    <h3>Thumbnail label</h3>\
                                    <p>Cras justo odio, dapibus.</p>\
                                    <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                <div class="jumbotron">\
                    <h1>Likesw-Music</h1>\
                    <p>If you are my girlfriend, you will be happy!</p>\
                </div>'
            );
        },
        libraryFrame: function(info) {
            return (
                '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">\
                    <div class="panel panel-default">\
                        <div class="panel-heading" role="tab" id="headingOne">\
                            <h3>Songs</h3>\
                            <div class="row">\
                                <div class="col-sm-3">\
                                    <a href="#" class="thumbnail">\
                                        <img src="./images/thumbnail1.jpg" alt="">\
                                    </a>\
                                </div>\
                                <div class="col-sm-8">\
                                    <h4 class="panel-title">\
                                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">\
                                            Collapsible Group Item #1\
                                        </a>\
                                    </h4>\
                                </div>\
                            </div>\
                        </div>\
                        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">\
                            <div class="panel-body">\
                                Anim pariatur cliche reprehenderit,\
                            </div>\
                        </div>\
                    </div>\
                    <div class="panel panel-default">\
                        <div class="panel-heading" role="tab" id="headingTwo">\
                            <h3>Albums</h3>\
                            <div class="row">\
                                <div class="col-sm-3">\
                                    <a href="#" class="thumbnail">\
                                        <img src="./images/thumbnail0.jpg" alt="">\
                                    </a>\
                                </div>\
                                <div class="col-sm-8">\
                                    <h4 class="panel-title">\
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false"\
                                            aria-controls="collapseTwo">\
                                            Collapsible Group Item #2\
                                        </a>\
                                    </h4>\
                                </div>\
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
                            <h3>MV</h3>\
                            <div class="row">\
                                <div class="col-sm-3">\
                                    <a href="#" class="thumbnail">\
                                        <img src="./images/thumbnail3.jpg" alt="">\
                                    </a>\
                                </div>\
                                <div class="col-sm-8">\
                                    <h4 class="panel-title">\
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false"\
                                            aria-controls="collapseThree">\
                                            Collapsible Group Item #3\
                                        </a>\
                                    </h4>\
                                </div>\
                            </div>\
                        </div>\
                        <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">\
                            <div class="panel-body">\
                                Anim pariatur cliche reprehenderit,\
                            </div>\
                        </div>\
                    </div>\
                </div>'
            );
        }
    }

    window.AppHTML = AppHTML;
}());