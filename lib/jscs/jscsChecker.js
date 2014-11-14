var jscs = require('gulp-jscs');
var gulp = require('gulp');

exports = module.exports = function(mainFile, rulesPath) {
    return function() {
        return gulp.src(mainFile).pipe(jscs(rulesPath || "node_modules/style-check/lib/jscs/.jscsrc"));
    }
};
