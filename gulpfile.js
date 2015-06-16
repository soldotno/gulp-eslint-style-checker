"use strict";

var gulp = require('gulp');
var styleCheck = require('./lib/eslintChecker');

gulp.task('style-check', function() {
    return styleCheck('**/*.js');
});

gulp.task('default', ['style-check']);
