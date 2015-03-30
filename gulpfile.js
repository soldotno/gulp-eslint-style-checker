var gulp = require('gulp');
var styleCheck = require('./lib/jscs/jscsChecker');

gulp.task('style-check', styleCheck('', 'esprima-fb'));
gulp.task('default', ['style-check']);
