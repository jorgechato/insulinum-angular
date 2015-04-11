'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

function isOnlyChange(event) {
  return event.type === 'changed';
}

module.exports = function(options) {
  gulp.task('watch', ['markups', 'inject'], function () {

    gulp.watch([options.src + '/views/*.html', 'bower.json'], ['inject']);

    gulp.watch([
      options.src + '/styles/**/*.css',
      options.src + '/styles/**/*.styl'
    ], function(event) {
      if(isOnlyChange(event)) {
        gulp.start('styles');
      } else {
        gulp.start('inject');
      }
    });

    gulp.watch(options.src + '/scripts/**/*.js', function(event) {
      if(isOnlyChange(event)) {
        gulp.start('scripts');
      } else {
        gulp.start('inject');
      }
    });

    gulp.watch(options.src + '/views/**/*.jade', ['markups']);

    gulp.watch(options.src + '/views/**/*.html', function(event) {
      browserSync.reload(event.path);
    });
  });
};
