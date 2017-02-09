// var Canvas = require('canvas');
var fs = require('fs');

var ImageAct = {};

ImageAct.imageIn = function (info, callback) {
    // fs.writeFile(filename,data,[options],callback);

    /**
     * filename, 必选参数，文件名
     * data, 写入的数据，可以字符或一个Buffer对象
     * [options],flag,mode(权限),encoding
     * callback 读取文件后的回调函数，参数默认第一个err,第二个data 数据
     */


    var imgData = info.photo;
    //过滤data:URL
    var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
    var dataBuffer = new Buffer(base64Data, 'base64');

    var time = (new Date()).toString();
    var imgUrl = './public/images/accounts/' + info.email + '-' + time + '.png';
    console.log('imgUrl', imgUrl);
    fs.writeFile(imgUrl, dataBuffer, function (err) {
        if (err) {
            callback('ERROR');
        } else {
            callback('/public/images/accounts/' + info.email + '-' + time + '.png');
        }
    });
}

ImageAct.imageOut = function (info, callback) {
    //readFile(filename,[options],callback);

    /**
     * filename, 必选参数，文件名
     * [options],可选参数，可指定flag（文件操作选项，如r+ 读写；w+ 读写，文件不存在则创建）及encoding属性
     * callback 读取文件后的回调函数，参数默认第一个err,第二个data 数据
     */
    var imgUrl = info.photo;
    fs.readFile(imgUrl, { flag: 'r+', encoding: 'utf8' }, function (err, data) {
        if (err) {
            callback('ERROR');
            return;
        }
        callback(data);
    });
}



module.exports = ImageAct;
// module.exports.imageSave = function (info, callback) {
//     var base64Data = info.photo;
// 	var img = new Canvas.Image;

// 	img.onload = function(){
// 		var w = img.width;
// 		var h = img.height;
// 		var canvas = new Canvas(w, h);
// 		var ctx = canvas.getContext('2d');
// 		ctx.drawImage(img, 0, 0);

//         var imgName = info.email + '.png';
// 		var out = fs.createWriteStream('./public/images/' + imgName);
// 		var stream = canvas.createJPEGStream({
// 			bufsize : 2048,
// 			quality : 80
// 		});

// 		stream.on('data', function(chunk){
// 			out.write(chunk);
// 		});

// 		stream.on('end', function(){
// 			out.end();
// 			callback(imgName);
// 		});
// 	}

// 	img.onerror = function(err){
// 		callback('ERROR');
// 	}

// 	img.src = base64Data;
// }