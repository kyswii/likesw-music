(function () {

    var AccountInfo = function (data) {

        var id = data.id;
        var photo = data.photo;
        var name = data.name;
        var email = data.email;
        var region = data.region;
        var tags = data.tags;

        return ('<li class="dropdown-header"><img class="account-photo dropdow-menu-account-photo" alt="' + id + '" src="./music' + photo + '">&nbsp;&nbsp;'
                    + '<span class="dropdow-menu-account-name">' + name + '</span>'
                + '</li>'
                + '<li class="dropdown-header"><span class="glyphicon glyphicon-envelope icon-active-color"></span>&nbsp;&nbsp;<span class="dropdow-menu-accout-email dropdow-menu-accout-info-style">' + email + '</span></li>'
                + '<li class="dropdown-header"><span class="glyphicon glyphicon-map-marker icon-active-color"></span>&nbsp;&nbsp;<span class="dropdow-menu-account-region dropdow-menu-accout-info-style">' + region + '</span></li>'
                + '<li class="dropdown-header"><span class="glyphicon glyphicon-tag icon-active-color"></span>&nbsp;&nbsp;<span class="dropdow-menu-account-tags dropdow-menu-accout-info-style">' + tags + '</span></li>'
                + '<li role="separator" class="divider"></li>'
                + '<li><a href="javascript:;" class="account-settings"><span class="glyphicon glyphicon-cog icon-active-color"></span>&nbsp;&nbsp;Settings</a></li>'
                + '<li role="separator" class="divider"></li>'
                + '<li><a href="javascript:;" class="account-logout"><span class="glyphicon glyphicon-log-out icon-active-color"></span>&nbsp;&nbsp;Log out</a></li>'
            );
    }

    window.AccountInfo = AccountInfo;

}());