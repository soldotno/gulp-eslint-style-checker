var gulp = require('gulp');
var eslint = require('gulp-eslint');
var fs = require('fs');

exports = module.exports = function(targetsToCheck) {  
    var path = './node_modules/sol-style-checker/eslintrc.json';
    var localConfig = __dirname + '/../eslintrc.json';
    var esLintStat = fs.statSync(localConfig);
    if (esLintStat.isFile()) {
        path = localConfig;
    }

    return gulp.src([targetsToCheck])
        // eslint() attaches the lint output to the eslint property 
        // of the file object so it can be used by other modules. 
        .pipe(
            eslint({ configFile: path })
        )
        // eslint.format() outputs the lint results to the console. 
        // Alternatively use eslint.formatEach() (see Docs). 
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on 
        // lint error, return the stream and pipe to failOnError last. 
        .pipe(eslint.failOnError());
};