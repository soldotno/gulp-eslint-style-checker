Sol style checker
===========

[![Build Status](https://travis-ci.org/soldotno/sol-style-checker.svg?branch=develop)](https://travis-ci.org/soldotno/sol-style-checker.svg?branch=develop)
[![Dependencies Status](https://david-dm.org/soldotno/sol-style-checker.svg?style=flat)](https://david-dm.org/soldotno/sol-style-checker.svg)
[![DevDependencies Status](https://david-dm.org/soldotno/sol-style-checker/dev-status.svg?style=flat)](https://david-dm.org/soldotno/sol-style-checker/#info=devDependencies)
[![npm version](https://badge.fury.io/js/sol-style-checker.svg)](http://badge.fury.io/js/sol-style-checker)
[![Code Climate](https://codeclimate.com/github/soldotno/sol-style-checker/badges/gpa.svg)](https://codeclimate.com/github/soldotno/sol-style-checker)

Performs code style check by using eslint. Is by default setup with the style Sol is using.

### Requirements / Peer Dependencies
Gulp.

## Usage 

We use gulp as our build tool, and this package exposes a style-checker function 
that has one parameters;

* directory  
 The directory to check, in reality the argument is passed straigt to `gulp.src(directory)` 

## Example

```js
const styleCheck = require('sol-style-check');
gulp.task('style-check', styleCheck(.));
``` 

