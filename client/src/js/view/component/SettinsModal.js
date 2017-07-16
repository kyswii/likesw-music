(function () {

    var SettingsModal = function (data) {

        var photo = data.photo;
        var email = data.email;
        var name = data.name;
        var password = data.password;
        var region = data.region;

        return (
                '<div class="modal-dialog" role="document">'
                    + '<div class="modal-content">'
                        + '<div class="modal-header">'
                            + '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
                            + '<h4 class="modal-title" id="myModalLabel">Settings</h4>'
                        + '</div>'
                        + '<div class="modal-body">'
                            + '<form class="form-horizontal">'
                                + '<div class="form-group" style="text-align: center;">'
                                    + '<div class="col-sm-4">'
                                        + '<img class="account-photo account-current-photo" id="settingsPhoto" alt="Brand" src="./music' + photo + '">'
                                    + '</div>'
                                    + '<div class="col-sm-4">'
                                        + '<button type="button" class="btn btn-default register-photo-choose-btn">Choose</button>'
                                        + '<input type="file" name="photo" class="modal-file-input hidden" id="settingsPhotoChoose"/>'
                                    + '</div>'
                                + '</div>'
                                + '<div class="form-group">'
                                    + '<label class="col-sm-2 control-label">Name</label>'
                                    + '<div class="col-sm-10">'
                                        + '<input type="text" class="form-control" id="settingsName" value="' + name + '">'
                                    + '</div>'
                                + '</div>'
                                + '<div class="form-group">'
                                    + '<label for="inputEmail3" class="col-sm-2 control-label">Email</label>'
                                    + '<div class="col-sm-10">'
                                        + '<input type="email" class="form-control" id="settingsEmail" value="' + email + '">'
                                    + '</div>'
                                + '</div>'
                                + '<div class="form-group">'
                                    + '<label for="inputPassword3" class="col-sm-2 control-label">Password</label>'
                                    + '<div class="col-sm-10">'
                                        + '<input type="password" class="form-control" id="settingsPassword" value="' + password + '">'
                                    + '</div>'
                                + '</div>'
                                + '<div class="form-group">'
                                    + '<label class="col-sm-2 control-label">tags</label>'
                                    + '<div class="col-sm-10">'
                                        + '<input type="text" class="form-control" id="settingsTags" value="' + tags + '">'
                                    + '</div>'
                                + '</div>'
                                + '<div class="form-group">'
                                    + '<label class="col-sm-2 control-label">Region</label>'
                                    + '<div class="col-sm-10">'
                                        + '<input type="text" class="form-control" id="settingsRegion" value="' + region + '">'
                                    + '</div>'
                                + '</div>'
                            + '</form>'
                        + '</div>'
                        + '<div class="modal-footer">'
                            + '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'
                            + '<button type="button" class="btn btn-primary" id="settingsSubmit">Save changes</button>'
                        + '</div>'
                    + '</div>'
                + '</div>'
            );
    }

    window.SettingsModal = SettingsModal;
}());