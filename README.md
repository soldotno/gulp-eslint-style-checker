Sol style checker
===========

[![Build Status](https://travis-ci.org/soldotno/gulp-eslint-style-checker.svg)](https://travis-ci.org/soldotno/gulp-eslint-style-checker.svg)
[![Dependencies Status](https://david-dm.org/soldotno/gulp-eslint-style-checker.svg?style=flat)](https://david-dm.org/soldotno/gulp-eslint-style-checker.svg)
[![DevDependencies Status](https://david-dm.org/soldotno/gulp-eslint-style-checker/dev-status.svg?style=flat)](https://david-dm.org/soldotno/gulp-eslint-style-checker/#info=devDependencies)
[![npm version](https://badge.fury.io/js/gulp-eslint-style-checker.svg)](http://badge.fury.io/js/gulp-eslint-style-checker)
[![Code Climate](https://codeclimate.com/github/soldotno/gulp-eslint-style-checker/badges/gpa.svg)](https://codeclimate.com/github/soldotno/gulp-eslint-style-checker)

Performs code style check by using eslint. Is by default setup with the style Sol is using.

### Requirements / Peer Dependencies
Gulp.

## Usage 

We use gulp as our build tool, and this package exposes a style-checker function 
that has one parameters;

* directory  
 The directory to check, in reality the argument is passed straigt to `gulp.src(directory)` 

## Example

if your gulp config is in the gulpfile of your root directory

```js
const styleChecker = require('gulp-eslint-style-checker');
gulp.task('style-check', styleChecker(__dirname));
``` 

