Eslint Style Checker
===========

[![Build Status](https://travis-ci.org/soldotno/gulp-eslint-style-checker.svg)](https://travis-ci.org/soldotno/gulp-eslint-style-checker.svg)
[![Dependencies Status](https://david-dm.org/soldotno/gulp-eslint-style-checker.svg?style=flat)](https://david-dm.org/soldotno/gulp-eslint-style-checker.svg)
[![DevDependencies Status](https://david-dm.org/soldotno/gulp-eslint-style-checker/dev-status.svg?style=flat)](https://david-dm.org/soldotno/gulp-eslint-style-checker/#info=devDependencies)
[![npm version](https://badge.fury.io/js/gulp-eslint-style-checker.svg)](http://badge.fury.io/js/gulp-eslint-style-checker)
[![Code Climate](https://codeclimate.com/github/soldotno/gulp-eslint-style-checker/badges/gpa.svg)](https://codeclimate.com/github/soldotno/gulp-eslint-style-checker)

Performs code style check by using eslint and gulp (optional)

## Usage 

Eslint style checker used by the development team in Scandinavia Online. 

### Gulp 
If you use gulp as a build tool, this package exposes a style-checker function 
that has one parameters;

* file-pattern  
 The directory to check, in reality the argument is passed straight to `gulp.src(file-pattern)` 

```js
const styleChecker = require('gulp-eslint-style-checker');

gulp.task('style-check', function() {
    return styleCheck('**/*.js');
});
```
 if you use this option we expect you to have installed gulp in your application. 

### NPM Script 
If you want to skip gulp and just use eslint directly that is also possible by adding this to your `package.json` file 
 
```json
"scripts": {
    "style-check": "./node_modules/gulp-eslint-style-checker/node_modules/.bin/eslint -c ./node_modules/gulp-eslint-style-checker/eslintrc.json **/*.js"
}
```

then this can be executed by running `npm run style-check`. This is not dependent on any packages 
