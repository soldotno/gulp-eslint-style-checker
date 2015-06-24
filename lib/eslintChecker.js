"use strict";

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var fs = require('fs');
var path = require('path');

module.exports = function (targetsToCheck) {
    var pathToEslint = './node_modules/sol-style-checker/eslintrc.json';
    var localConfig = path.join(__dirname, '/../eslintrc.json');
    var esLintStat = fs.statSync(localConfig);
    if (esLintStat.isFile()) {
        pathToEslint = localConfig;
    }

    var sources;

    if (Array.isArray(targetsToCheck)) {
        sources =  gulp.src(targetsToCheck)
    }else{
        sources = gulp.src([targetsToCheck]);
    }

    return sources
        // eslint() attaches the lint output to the eslint property
        // of the file object so it can be used by other modules.
        .pipe(eslint({configFile: pathToEslint}))
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.formatEach())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failOnError last.
        .pipe(eslint.failOnError());
};
