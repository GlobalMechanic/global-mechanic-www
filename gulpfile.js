// gulp rigging
var gulp            = require('gulp');
var fs              = require('fs');
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

gulp.task('server', ['nodemon'], function () {

    // 
    $.browserSync.init(null, {
        proxy : 'localhost:5000'
    });

    // watch the stuff that needs a full page reload
    gulp.watch(
        [   'views/*.jade',
            source + '/scripts/*.js', 
        ],
        function() {
            process.stdout.write('rebuilding html and js');
            $.browserSync.reload();
        }
    );

    var rebuild_css_and_images = function() {
        process.stdout.write('rebuilding css and images');
        gulp.src(source + '/styles/**/*.scss')
            .pipe($.sass())
            .pipe($.sourcemaps.init())
            .pipe($.postcss([
                $.autoprefixer({ browsers: ['> 1%', 'IE 9'] })
            ]))
            .pipe($.sourcemaps.write('.'))
            .pipe(gulp.dest(source + '/styles'))
            .pipe($.browserSync.reload({stream : true}));
    }

    //if we've just pulled from the repository, there will be no main.css or main.css.map in the src folder, because they're
    //in the ignore folder. 
    if (!fs.exists(source + "/styles/main.css"))
        rebuild_css_and_images();

    // watch the stuff that needs injecting
    gulp.watch(
        [   
            source + '/styles/*.scss',
            source + '/images/**/*'
        ], rebuild_css_and_images);
});

gulp.task('build', function () {

    // html optimization
    gulp.src(source + '/*.html')
                .pipe($.newer(distro + '/'))
                .pipe($.htmlmin({
                    removeComments:true, 
                    collapseWhitespace: true,
                    minifyJS: true
                }))
                .pipe(gulp.dest(distro + '/'))
                .pipe($.size());

    // style optimization
    var distro_styles = distro + "/styles/";
    gulp.src(source + '/styles/**/*.scss')
        .pipe($.newer(distro_styles))
        .pipe($.sass())
        .pipe($.postcss([
            $.autoprefixer({ browsers: ['> 1%', 'IE 9'] }),
            $.csswring
        ]))
        .pipe(gulp.dest(distro_styles))
        .pipe($.size());

    // images
    var distro_images = distro + "/images/";
    gulp.src(source + '/images/**/*')
        .pipe($.newer(distro_images))
        .pipe($.imagemin({
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest(distro_images))
        .pipe($.size());

    // scripts
    var distro_scripts = distro + "/scripts/";
    gulp.src(source + '/scripts/**/*.js')
        .pipe($.newer(distro_scripts))
        .pipe($.uglify())
        .pipe(gulp.dest(distro_scripts))
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
gulp.task('default', ['server']);
