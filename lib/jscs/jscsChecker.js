var jscs = require('gulp-jscs');
var gulp = require('gulp');

exports = module.exports = function(targetsToCheck, rulesPath) {

    if (typeof targetsToCheck === 'string') {
        targetsToCheck = [targetsToCheck];
    }

    var defaultTargets = [
        '!node_modules{,/**}',
        '**/*.{js}',//,json
        '*.{js}'];//,json

    return function() {

        var finalTargets = targetsToCheck ? targetsToCheck.concat(defaultTargets) : defaultTargets;
        return gulp.src(finalTargets).pipe(jscs(rulesPath || "node_modules/sol-style-check/lib/jscs/.jscsrc"));
    }
};
