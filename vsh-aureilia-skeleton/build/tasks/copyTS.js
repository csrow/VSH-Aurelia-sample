var gulp = require('gulp');
var paths = require('../paths');

// move js and map files from ts to dist
gulp.task('copyTS', function () {
  gulp.src('ts/**/*.{html,js,map}')
  .pipe(gulp.dest('dist'));
});