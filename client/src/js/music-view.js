(function () {

    var AUDIO = document.getElementById('audio');
    AUDIO.volume = 0.6;

    var SOUNDPROGRESSBAR = document.getElementById('soundProgressBar');

    var MUSIC = new Music();

    var PLAYLIST = null;
    var CURRENTPLAY = 0;

    var PROCESS_INTERVAL = null;
    var PROCESS_TIME = 100;

    MUSIC.imagesLoadReq('home', function (belong, info) {
        homeRender(belong, info);
    });

    MUSIC.songsLoadReq({ "tags": 'countryside' }, function (info) {
        PLAYLIST = info.data;
        updatePlayList(info.data);
        AUDIO.src = '/music/' + PLAYLIST[CURRENTPLAY].url;
    });

    //
    var Router = Backbone.Router.extend({
        routes: {
            'home': "home",
            'library': 'library',
            'foryou': 'foryou',
            'messages': 'messages',
            'playlist': 'playlist'
        },

        home: function () {
            MUSIC.imagesLoadReq('home', function (belong, info) {
                homeRender(belong, info);
            });
        },

        library: function() {
            // MUSIC.songsLoadReq('library', function (belong, info) {
                libraryRender();
            // });
        },

        foryou: function () {
            // MUSIC.songsLoadReq('foryou', function (belong, info) {
                foryouRender();
            // });
        },

        messages: function () {

        },

        playlist: function () {

        }
    });

    new Router();
    Backbone.history.start();

    //
    $('#navMusic').click(function () {
        $('#musicModal').modal();
    });

    //
    $('#musicStatus').click(function () {
        if ($(this).hasClass('glyphicon-play')) {
            $(this).removeClass('glyphicon-play');
            $(this).addClass('glyphicon-pause');
            AUDIO.play();
        } else {
            $(this).removeClass('glyphicon-pause');
            $(this).addClass('glyphicon-play');
            AUDIO.pause();
        }
    });

    //
    $('#musicBackward').click(function () {
        console.log('back...', CURRENTPLAY);
        if (CURRENTPLAY <= 0) {
            return;
        }

        CURRENTPLAY -= 1;
        AUDIO.src = '/music/' + PLAYLIST[CURRENTPLAY].url;
        updateCurrentPlayInfo();
        AUDIO.play();
    });

    //
    $('#musicForward').click(function () {
        console.log('for...', CURRENTPLAY);
        if ((CURRENTPLAY + 1) >= PLAYLIST.length) {
            return;
        }

        CURRENTPLAY += 1;
        AUDIO.src = '/music/' + PLAYLIST[CURRENTPLAY].url;
        updateCurrentPlayInfo();
        AUDIO.play();
    });

    //
    $('#soundDown').click(function () {
        var width = SOUNDPROGRESSBAR.style.width.match(/\d+/g);
        if (width < 20) {
            return;
        }
        SOUNDPROGRESSBAR.style.width = (parseInt(width) - 20) + '%';
        AUDIO.volume = (Math.ceil(AUDIO.volume * 10) - 2) / 10;
        console.log('down..', AUDIO.volume);
    });

    //
    $('#soundUp').click(function () {
        var width = SOUNDPROGRESSBAR.style.width.match(/\d+/g);
        console.log('width', width, width >= 100);
        if (width >= 100) {
            return;
        }
        SOUNDPROGRESSBAR.style.width = (parseInt(width) + 20) + '%';
        AUDIO.volume = (Math.ceil(AUDIO.volume * 10) + 2) / 10;
        console.log('up..', AUDIO.volume);
    });

    //
    $(document).on("click", '#optionItem1', function () {
        console.log('.........');
        // $('.lib-content').addClass('lib-content-in');
    });

    //
    AUDIO.onended = function () {
        console.log('ended......');
        if (CURRENTPLAY + 1 < PLAYLIST.length) {
            CURRENTPLAY += 1;

            updateCurrentPlayInfo();
            $('#musicProgressBar').css('width', '0');
            AUDIO.src = '/music/' + PLAYLIST[CURRENTPLAY].url;
            AUDIO.play();
        }
    }

    //
    AUDIO.onpause = function () {
        $('#musicStatus').removeClass('glyphicon-pause');
        $('#musicStatus').addClass('glyphicon-play');
        clearInterval(PROCESS_INTERVAL);
    }

    //
    AUDIO.onplay = function () {
        $('#musicStatus').removeClass('glyphicon-play');
        $('#musicStatus').addClass('glyphicon-pause');

        PROCESS_INTERVAL = setInterval(function () {
            var percent = AUDIO.currentTime / AUDIO.duration * 100 + '%';
            $('#musicProgressBar').css('width', percent);
        }, PROCESS_TIME);
    }

    //
    function homeRender(belong, info) {
        $('#containerNavContent').html(AppHTML.homeFrame(info));

        //
        songPlay();
    }

    // 
    function libraryRender() {
        $('#containerNavContent').html(AppHTML.libraryFrame(''));

        drawLibChart();
    }

    //
    function foryouRender() {
        $('#containerNavContent').html(AppHTML.foryouFrame());
    }

    //
    function songPlay() {
        $('.song-play').click(function () {
            var name = $(this).attr('name');
            var label = { "tags": name };

            MUSIC.songsLoadReq(label, function (info) {
                PLAYLIST = info.data;
                CURRENTPLAY = 0;
                updatePlayList(info.data);
                AUDIO.src = '/music/' + PLAYLIST[CURRENTPLAY].url;
                AUDIO.play();
                // console.log('volume', AUDIO.volume);
                $('#musicStatus').removeClass('glyphicon-play');
                $('#musicStatus').addClass('glyphicon-pause');
            });

        });
    }

    //
    function updatePlayList(playlist) {
        var group = '';
        var data = playlist;

        updateCurrentPlayInfo();

        for (var item = 0; item < data.length; item++) {
            console.log('item.....', data[item]);
            group += '<li class="list-group-item">\
                        <img class="list-group-item-img" src="./music/' + data[item].image + '">&nbsp;&nbsp;\
                        <span>' + data[item].artist + '-' + data[item].name + '</span>\
                        <span class="glyphicon glyphicon-plus-sign list-group-item-open"></span>\
                    </li>'
        }

        $('#musicPlaylist').html(group);
    }

    //
    function updateCurrentPlayInfo() {
        document.getElementById('musicImage').src = '/music/' + PLAYLIST[CURRENTPLAY].image;
        document.getElementById('musicName').innerText = PLAYLIST[CURRENTPLAY].name;
        document.getElementById('musicInfo').innerText = PLAYLIST[CURRENTPLAY].artist + ' - ' + PLAYLIST[CURRENTPLAY].album;
    }

    //
    function drawLibChart() {
        /*var hotChart = echarts.init(document.getElementById('libHotChart'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '世界人口总量',
                subtext: '数据来自网络'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['2011年']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
            },
            series: [
                {
                    name: '2011年',
                    type: 'bar',
                    data: [18203, 23489, 29034, 104970, 131744, 630230]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        hotChart.setOption(option);*/

    }

}());