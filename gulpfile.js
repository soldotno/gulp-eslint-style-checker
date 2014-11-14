var gulp = require('gulp');
var styleCheck = require('./lib/jscs/jscsChecker');

// Run code style check
gulp.task('style-check', styleCheck('lib/index.js', "lib/jscs/.jscsrc"));

// Default Task
gulp.task('default', ['develop']);
