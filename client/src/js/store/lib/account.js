(function () {
    /** */
    var Account = function () {
        //
        this.id = null;
        //
        this.email = "";
        //
        this.password = "";
        //
        this.name = "";
        //
        this.photo = "";
        //
        this.region = "";
        //
        this.tags = "";
    }

    //
    Account.prototype.setAccountInfo = function (info) {
        for (item in info) {
            if (item in this) {
                this[item] = info[item];
            }
        }
    }

    //
    Account.prototype.registerReq = function (info) {
        var that = this;
        $.ajax('/music/account/create', {
            type: 'POST',
            data: JSON.stringify(info),
            contentType: 'application/json',
            success: function (result) {
                if (result == 'EXIST') {
                    that.registerWrong();
                } else {
                    that.setAccountInfo(result);
                    that.registerFinished(result);
                }
            },
            error: function (err) {
                console.log('err...');
            }
        })
    }

    // Callback
    Account.prototype.registerWrong = function () { }

    // Callback
    Account.prototype.registerFinished = function (info) { }

    //
    Account.prototype.loginReq = function (info) {
        var that = this;
        $.ajax('/music/account/load', {
            type: 'GET',
            data: info,
            contentType: 'application/json',
            success: function (result) {
                if (result == 'NULL') {
                    that.loginWrong();
                } else {
                    that.setAccountInfo(result);
                    that.loginFinished(result);
                }
            },
            error: function (err) {
                console.log('err...');
            }
        })
    }

    // Callback
    Account.prototype.loginWrong = function () { }

    // Callback
    Account.prototype.loginFinished = function () { }

    //
    Account.prototype.updateReq = function (info) {
        var that = this;
        var url = '/music/account/' + this.email + '/update';
        $.ajax(url, {
            type: 'PUT',
            data: JSON.stringify(info),
            contentType: 'application/json',
            success: function (result) {
                info.photo = result;
                that.setAccountInfo(info);
                that.updateFinished(info);
            },
            error: function (err) {
                console.log('err...');
            }
        })
    }

    // Callback
    Account.prototype.updateFinished = function (info) { }

    //
    Account.prototype.uploadPhoto = function () {

    }


    window.Account = Account;

} ());