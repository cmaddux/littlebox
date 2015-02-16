// include gulp
var gulp = require('gulp'); 

// include plug-ins
var concat = require('gulp-concat');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
 
// CSS concat, auto-prefix and minify
gulp.task('css', function() {
  return gulp.src(['./lib/littlebox.css'])
    .pipe(concat('littlebox.min.css'))
    .pipe(autoprefix('last 2 versions'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./build/'));
});

// watch task
gulp.task('watch', ['css'], function() {
  // watch for CSS changes
  return gulp.watch('./lib/**', function() {
  	gulp.run('css');
  });
});

//default gulp task
gulp.task('default', ['css']);
