var jscs = require('gulp-jscs');
var gulp = require('gulp');

exports = module.exports = function(targetsToCheck, rulesPath) {

    if (targetsToCheck && typeof targetsToCheck === 'string') {
        targetsToCheck = [targetsToCheck];
    }

    var defaultTargets = [
        '!node_modules{,/**}',
        '**/*.js',//{js,json}
        '*.js'];//{js,json}

    var defaultRulesPath = __dirname + '/default.jscsrc';

    if (rulesPath === 'esprima-fb') {
        rulesPath =  __dirname + '/esprima-fb.jscsrc';
    }

    return function() {
        var finalTargets = targetsToCheck ? targetsToCheck.concat(defaultTargets) : defaultTargets;
        return gulp.src(finalTargets).pipe(jscs(rulesPath || defaultRulesPath));
    };
};
