(function () {

    var ACCOUNT = new Account;

    ACCOUNT.registerWrong = function () {

    };

    ACCOUNT.registerFinished = function (info) {
        console.log('registerF...', info);
        dropdownStyleChange(info)
    };

    ACCOUNT.loginWrong = function () {

    };

    ACCOUNT.loginFinished = function (info) {
        console.log('loginF...', info);
        dropdownStyleChange(info);
    };

    ACCOUNT.updateFinished = function (info) {
        console.log('updateF...', info);
        dropdownStyleChange(info);
    };


    $('.account-register').on('click', function () {
        $('#myModal').html(AppHTML.registerModal);
        $('#myModal').modal();

        // $('#register-photo-choose').on('click', function () {
        var filechooser = document.getElementById('registerPhotoChoose');
        var previewer = document.getElementById('registerPhoto');
        accountPhotoChoose(filechooser, previewer);
        // });

        $('#registerSubmit').on('click', function () {
            accountInfoSubmit();
        });
    });

    $('.account-login').on('click', function () {
        $('#myModal').html(AppHTML.loginModal);
        $('#myModal').modal();

        $('#loginSubmit').on('click', function () {
            accountInfoConfirm();
        });
    });

    var PHOTO = null;
    function accountPhotoChoose(filechooser, previewer) {

        filechooser.onchange = function () {
            var files = this.files;
            var file = files[0];

            // 接受 jpeg, jpg, png 类型的图片
            if (!/\/(?:jpeg|jpg|png)/i.test(file.type)) return;

            var reader = new FileReader();

            reader.onload = function () {
                var result = this.result;

                previewer.src = result;

                PHOTO = result;

                // 清空图片上传框的值
                // filechooser.value = '';
            };

            reader.readAsDataURL(file);
        };
    }

    function accountInfoSubmit() {
        var email = document.getElementById('registerEmail').value;
        var password = document.getElementById('registerPassword').value;
        var name = document.getElementById('registerName').value;
        var tags = document.getElementById('registerTags').value;
        var region = document.getElementById('registerRegion').value;

        var info = {
            "email": email,
            "password": password,
            "name": name,
            "photo": PHOTO,
            "tags": tags,
            "region": region
        };
        ACCOUNT.registerReq(info);
    }

    function accountInfoConfirm() {
        var email = document.getElementById('loginEmail').value;
        var password = document.getElementById('loginPassword').value;

        var info = { "email": email, "password": password };
        ACCOUNT.loginReq(info);
    }

    function dropdownStyleChange(info) {
        console.log('dropdownStyleChange..........');
        $('.navbar-brand-account-photo').attr('src', './music' + info.photo);
        $('.nav-dropdown-account-detail-info').html(AppHTML.accountInfo(info));

        $('#myModal').modal('hide');

        $('.account-settings').on('click', function () {
            accountInfoChange(info);
        });

        $('.account-logout').on('click', function () {
            window.location.reload();
        });
    }

    function accountInfoChange(info) {
        $('#myModal').html(AppHTML.settingsModal(info));
        $('#myModal').modal();

        var filechooser = document.getElementById('settingsPhotoChoose');
        var previewer = document.getElementById('settingsPhoto');
        accountPhotoChoose(filechooser, previewer);

        $('#settingsSubmit').on('click', function () {
            accountInfoUpdate(info);
        })
    }

    function accountInfoUpdate(info) {
        var name = document.getElementById('settingsName').value;
        var email = document.getElementById('settingsEmail').value;
        var password = document.getElementById('settingsPassword').value;
        var tags = document.getElementById('settingsTags').value;
        var region = document.getElementById('settingsRegion').value;

        var info = {
            "photo": PHOTO,
            "name": name,
            "email": email,
            "password": password,
            "tags": tags,
            "region": region
        };
        ACCOUNT.updateReq(info);
    }

} ());