Sol style checker
===========

[![Build Status](https://travis-ci.org/soldotno/sol-style-check.svg?branch=develop)](https://travis-ci.org/soldotno/sol-style-check.svg?branch=develop)

Performs code style check by using jscs. Is by default setup with the style Sol is using.
And is by default checking all `.js` files in the repo. (Excluding node_modules).

### Requirments / Peer Dependencies
Gulp.

## Usage 

We use gulp as our build tool, and this package exposes a style-checker function 
that has 2 parameters;

* files  
 The files to check Same as the first argument to `jscs`

* config  
 Path to the configfile. Same as `--config` option in `jscs`. Also 'esprima-fb' can be used.
 Then you will use the default sol check style with support for jsx.

## React / JSX / esprima-fb
If you are using react with jsx or need to validate against esprima-fb.
jscs support that by using the esprima-fb package.

```js
const styleCheck = require('sol-style-check');
gulp.task('style-check', styleCheck(null, 'esprima-fb'));
```

## Example

```js
const styleCheck = require('sol-style-check');
gulp.task('style-check', styleCheck());
``` 

