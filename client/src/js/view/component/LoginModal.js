(function () {
    var LoginModal = function (data) {

        return ('<div class="modal-dialog modal-sm" role="document">'
                    + '<div class="modal-content">'
                        + '<div class="modal-header">'
                            + '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
                            + '<h4 class="modal-title" id="myModalLabel">Log in</h4>'
                        + '</div>'
                        + '<div class="modal-body">'
                            + '<form class="form-horizontal">'
                                + '<div class="form-group">'
                                    + '<label for="inputEmail3" class="col-sm-3 control-label">Email</label>'
                                    + '<div class="col-sm-9">'
                                        + '<input type="email" class="form-control" id="loginEmail" placeholder="Email">'
                                    + '</div>'
                                + '</div>'
                                + '<div class="form-group">'
                                    + '<label for="inputPassword3" class="col-sm-3 control-label">Password</label>'
                                    + '<div class="col-sm-9">'
                                        + '<input type="password" class="form-control" id="loginPassword" placeholder="Password">'
                                    + '</div>'
                                + '</div>'
                                + '<div class="container-fulid login-wrong">'
                                    + '<div class="alert alert-danger" role="alert"><strong>Error:&nbsp;&nbsp;</strong>The user is not consistent with the password.</div>'
                                + '</div>'
                            + '</form>'
                        + '</div>'
                        + '<div class="modal-footer">'
                            + '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'
                            + '<button type="button" class="btn btn-primary" id="loginSubmit">Log in</button>'
                        + '</div>'
                    + '</div>'
                + '</div>'
        );

    }

    window.LoginModal = LoginModal;
}());