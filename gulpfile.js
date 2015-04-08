'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var wrench = require('wrench');

var options = {
    src : 'src',
    dist : 'dist',
    tmp : '.tmp',
    e2e : 'e2e',
    errorHandler: function(title) {
        return function(err) {
          gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
          this.emit('end');
        };
    },
    wiredep: {
        directory: 'bower_components'
    }
};

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});
