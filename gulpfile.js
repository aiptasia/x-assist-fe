'use strict';

var gulp = require('gulp'),
    gulpsync = require('gulp-sync')(gulp),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'del']
    });

var proxy = require('http-proxy-middleware');

// ------------------------------
// Default

gulp.task('default', gulpsync.sync(['clean', 'build', 'inject', 'serve']));

// ------------------------------
// Serve

gulp.task('serve', ['connect', 'watch']);

// ------------------------------
// Build

gulp.task('build', ['html', 'jade', 'scss', 'js', 'assets']);

// ------------------------------
// HTML

gulp.task('html', function() {
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist'));
});

// ------------------------------
// Jade

gulp.task('jade', function() {
    return gulp.src('./src/**/*.jade')
        .pipe($.jade().on('error', function(err) {
            $.util.log($.util.colors.red('[Jade]'), err.message);
            this.emit('end');
        }))
        .pipe(gulp.dest('./dist'));
});

// ------------------------------
// SCSS

gulp.task('scss', function() {
    return gulp.src('./src/**/*.scss')
        .pipe($.order([
            'app/core/style/variables.scss',
            'app/core/style/mixins.scss',
            'app/core/style/*.scss',
            '**/*.activity.scss',
            '**/*.scss']))
        .pipe($.concat('app.scss'))
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.autoprefixer())
        .pipe(gulp.dest('./dist'));
});

// ------------------------------
// JavaScript

gulp.task('js', function() {
    return gulp.src('./src/**/*.js')
        .pipe(gulp.dest('./dist'));
});

// ------------------------------
// Assets

gulp.task('assets', function() {
    return gulp.src('./src/assets/**/*')
        .pipe(gulp.dest('./dist/assets'));
});

// ------------------------------
// Inject

gulp.task('inject', function() {
    return gulp.src('./dist/index.html')
        .pipe($.inject(
            gulp.src('./bower.json')
            .pipe($.mainBowerFiles()), { relative: true, name: 'bower' }
        ))
        .pipe($.inject(
            gulp.src('./dist/**/*.css'), { relative: true }
        ))
        .pipe($.inject(
            gulp.src('./dist/**/*.js')
            .pipe($.angularFilesort().on('error', function(err) {
                $.util.log($.util.colors.red('[Filesort]'), err.message);
                this.emit('end');
            })), { relative: true }
        ))
        .pipe(gulp.dest('./dist'));
});

// ------------------------------
// Clean

gulp.task('clean', function() {
    return $.del('./dist');
});

// ------------------------------
// Watch

gulp.task('watch', function(event) {
    gulp.watch('./src/**/*.html', gulpsync.sync(['html', 'inject', 'reload']));
    gulp.watch('./src/**/*.jade', gulpsync.sync(['jade', 'inject', 'reload']));
    gulp.watch('./src/**/*.scss', gulpsync.sync(['scss', 'inject', 'reload']));
    gulp.watch('./src/**/*.js', gulpsync.sync(['js', 'inject', 'reload']));
});

// ------------------------------
// Connect

gulp.task('connect', function() {
    $.connect.server({
        root: 'dist',
        livereload: true,
        port: 8000,
        middleware: function(connect, opt) {
            return [
                connect().use('/bower_components', connect.static('bower_components')),
                proxy('/api', {
                    target: 'http://localhost:3000',
                    changeOrigin: false,
                    logLevel: 'debug'
                })];
        }
    });
});

// ------------------------------
// Reload

gulp.task('reload', function() {
    gulp.src('./dist/**/*')
        .pipe($.connect.reload());
});
