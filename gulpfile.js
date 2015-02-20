// gulp rigging
var gulp            = require('gulp');
var $               = {};
    $.sass          = require('gulp-sass');
    $.postcss       = require('gulp-postcss');
        $.sourcemaps    = require('gulp-sourcemaps');
        $.csswring      = require('csswring');
        $.autoprefixer  = require('autoprefixer-core');
    $.browserSync   = require('browser-sync');
    $.imagemin      = require('gulp-imagemin');
    $.htmlmin       = require('gulp-htmlmin');
    $.uglify        = require('gulp-uglify');
    $.size          = require('gulp-size');
    $.newer         = require('gulp-newer');
    $.nodemon       = require('nodemon');

// paths
var source          = './src';
var distro          = './public';

gulp.task('serve', ['nodemon'], function () {

    // 
    $.browserSync.init(null, {
        proxy: 'localhost:5000'
    });

    // watch the stuff that needs a full page reload
    gulp.watch(
        [   '/views/*.jade',
            source+'/scripts/*.js', 
        ],
        function() {
            process.stdout.write('rebuilding html and js');
            $.browserSync.reload();
        }
    );

    // watch the stuff that needs injecting
    gulp.watch(
        [   source+'/styles/*.scss',
            source+'/images/**/*'
        ],
        function() {
            process.stdout.write('rebuilding css and images');
            gulp.src(source+'/styles/**/*.scss')
                .pipe($.sass())
                .pipe($.sourcemaps.init())
                .pipe($.postcss([
                    $.autoprefixer({ browsers: ['> 1%', 'IE 9'] })
                ]))
                .pipe($.sourcemaps.write('.'))
                .pipe(gulp.dest(source+'/styles'))
                .pipe($.browserSync.reload({stream: true}));
        });
});

gulp.task('build', function () {

    // html optimization
    gulp.src(source+'/*.html')
                .pipe($.newer(distro+'/'))
                .pipe($.htmlmin({
                    removeComments:true, 
                    collapseWhitespace: true,
                    minifyJS: true
                }))
                .pipe(gulp.dest(distro+'/'))
                .pipe($.size());

    // style optimization
    gulp.src(source+'/styles/**/*.scss')
        .pipe($.newer(distro+'/styles'))
        .pipe($.sass())
        .pipe($.postcss([
            $.autoprefixer({ browsers: ['> 1%', 'IE 9'] }),
            $.csswring
        ]))
        .pipe(gulp.dest(distro+'/styles'))
        .pipe($.size());

    // images
    gulp.src(source+'/images/**/*')
        .pipe($.newer(distro+'/images'))
        .pipe($.imagemin({
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest(distro+'/images'))
        .pipe($.size());

    // scripts
    gulp.src(source+'/scripts/**/*.js')
        .pipe($.newer(distro+'/scripts/'))
        .pipe($.uglify())
        .pipe(gulp.dest(distro+'/scripts/'))
        .pipe($.size());
});

gulp.task('nodemon', function (cb) {
    var called = false;
    return $.nodemon({
                script: 'server.js',
                env: { 'NODE_ENV': 'development' }
            }).on('start', function () {
                if (!called) {
                called = true;
                cb();
            }
    });
});

// Default task to be run with `gulp`
gulp.task('default', ['serve']);
