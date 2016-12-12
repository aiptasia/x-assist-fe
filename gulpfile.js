'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('default', ['inject', 'connect', 'watch']);

gulp.task('connect', function() {
    $.connect.server({
        root: 'src',
        livereload: true,
        port: 8000,
        middleware: function(connect, opt) {
            return [connect().use('/bower_components', connect.static('bower_components'))];
        }
    });
});

gulp.task('reload', function() {
    gulp.src('./src/**/*')
        .pipe($.connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('./src/**/*', ['reload']);
});

gulp.task('inject', function() {
    gulp.src('./src/index.html')
        .pipe($.inject(
            gulp.src('./src/**/*.js')
                .pipe($.angularFilesort())
                , {relative: true}
            ))
        .pipe($.inject(
            gulp.src('./src/**/*.css'), {relative: true}
            ))
        .pipe($.inject(
            gulp.src('./bower.json')
                .pipe($.mainBowerFiles()), {relative: true, name: 'bower'}
            ))
        .pipe(gulp.dest('./src'));
});
