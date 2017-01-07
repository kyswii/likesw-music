var gulp = require("gulp");
var clean = require("gulp-clean");
var connect = require("gulp-connect");
var proxy = require("http-proxy-middleware");
var sass = require("gulp-sass");

gulp.task('sass', function() {
    return gulp.src('./src/lib/sass/login.scss')
        .pipe(sass({
            outputStyle: 'nested',
            errLogToConsole: true
        }))
        .pipe(gulp.dest('./src/lib/vender/css/'));
});

gulp.task('clean', ['sass'], function () {
    return gulp.src('.ship/release', { read: false }).pipe(clean());
});

gulp.task('copy', ['clean'], function () {
    var filesToMove = [
        './src/*.html',
        './src/lib/vender/**',
        './src/thirdparty/**'
    ];

    return gulp.src(filesToMove, { base: './src/' }).pipe(gulp.dest('.ship/release/'));
});

gulp.task('serve', ['copy'], function () {
    connect.server({
        root: ".ship/release/",
        port: 19000,
        livereload: true,
        middleware: function (connect, options) {

            var p1 = proxy('/comment', {
                target: "http://localhost:19999",
            });

            return [p1];
        }
    });
});