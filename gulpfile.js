// include gulp
var gulp = require('gulp'); 

// include plug-ins
var concat = require('gulp-concat');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
 
// CSS concat, auto-prefix and minify
gulp.task('css', function() {
  gulp.src(['./lib/littlebox.css'])
    .pipe(concat('littlebox.min.css'))
    .pipe(autoprefix('last 2 versions'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./build/'));
});

// default gulp task
gulp.task('default', ['css'], function() {
  // watch for CSS changes
  gulp.watch('./lib/littlebox.css', function() {
	gulp.run('css');
  });
});