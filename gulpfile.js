var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
  return browserify({
    entries: 'src/main.js',
    extensions: ['.js'],
    debug: true
  })
    .transform('babelify', { presets: ['es2015'] })
    .bundle()
    .on('error', (err) => {
      console.log('ERROR: ', err);
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build'], function () {
  gulp.watch('src/**/*.js', ['build']);
});

gulp.task('default', ['watch']);
