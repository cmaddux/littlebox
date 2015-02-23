// include gulp
var gulp = require('gulp'); 

// include plug-ins
var less = require('gulp-less');
var concat = require('gulp-concat');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');

// CSS concat, auto-prefix and minify
gulp.task('less', function() {
  return gulp.src(['./src/littlebox.less'])
  	.pipe(less())
    .pipe(gulp.dest('./dist/')) //copy css file to dist directory
    .pipe(concat('littlebox.min.css'))
    .pipe(autoprefix('last 2 versions'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/')); //copy minified version to dist directory
});

// watch task
gulp.task('watch', ['less'], function() {
  // watch for CSS changes
  return gulp.watch('./src/**', function() {
  	gulp.run('less');
  });
});

//default gulp task
gulp.task('default', ['less']);
