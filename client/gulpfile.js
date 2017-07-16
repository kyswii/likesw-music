var gulp = require("gulp");
var clean = require("gulp-clean");
var connect = require("gulp-connect");
var proxy = require("http-proxy-middleware");
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var minify = require("gulp-minify-css");

gulp.task('sass-app', function () {
    return gulp.src('./src/css/sass/style.scss')
        .pipe(sass({
            outputStyle: 'nested',
            errLogToConsole: true
        }))
        .pipe(gulp.dest('./src/css/'));
});

gulp.task('concat-comp', ['sass-app'], function () {
    return gulp.src('./src/js/view/component/*.js')
        .pipe(concat('LSWMusicApp.js'))
        .pipe(gulp.dest('./src/js/view/'));
});

gulp.task('clean', ['concat-comp'], function () {
    return gulp.src('.ship/release', { read: false }).pipe(clean());
});

gulp.task('copy', ['clean'], function () {
    var filesToMove = [
        './src/*.html',
        './src/css/**',
        './src/js/**',
        './src/images/**',
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

            var p1 = proxy('/music', {
                target: "http://localhost:19001",
            });

            return [p1];
        }
    });
});