Eslint Style Checker
===========

[![Greenkeeper badge](https://badges.greenkeeper.io/soldotno/gulp-eslint-style-checker.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/soldotno/gulp-eslint-style-checker.svg)](https://travis-ci.org/soldotno/gulp-eslint-style-checker.svg)
[![Dependencies Status](https://david-dm.org/soldotno/gulp-eslint-style-checker.svg?style=flat)](https://david-dm.org/soldotno/gulp-eslint-style-checker.svg)
[![DevDependencies Status](https://david-dm.org/soldotno/gulp-eslint-style-checker/dev-status.svg?style=flat)](https://david-dm.org/soldotno/gulp-eslint-style-checker/#info=devDependencies)
[![npm version](https://badge.fury.io/js/gulp-eslint-style-checker.svg)](http://badge.fury.io/js/gulp-eslint-style-checker)
[![Code Climate](https://codeclimate.com/github/soldotno/gulp-eslint-style-checker/badges/gpa.svg)](https://codeclimate.com/github/soldotno/gulp-eslint-style-checker)

Performs code style check by using eslint and gulp (optional)

## Code style
We make use of the [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) package with a few custom rules inspired by [this blog post](http://blog.javascripting.com/2015/09/07/fine-tuning-airbnbs-eslint-config/).

## Usage 

Eslint style checker used by the development team in Scandinavia Online. 

### Gulp 
If you use gulp as a build tool, this package exposes a style-checker function 
that has two parameters;

* file-pattern  
 The directory to check, in reality the argument is passed straight to `gulp.src(file-pattern)` 
* config  
 If you want to use a custom config, the path to it can be passed as the second parameter.

```js
import { styleCheck } from 'gulp-eslint-style-checker';

gulp.task('style-check', () => {
    return styleCheck('**/*.js', 'optional/path/to/custom/eslintrc.json');
});
```
 if you use this option we expect you to have installed gulp in your application. 

#### Custom config
You can use your own eslint config by either passing the path to it as a second parameter to `styleCheck` or by passing the path as a command line argument: `gulp style-check --config path/to/eslintrc.json`.

### NPM Script 
If you want to skip gulp and just use eslint directly that is also possible by adding this to your `package.json` file 
 
```json
"scripts": {
    "style-check": "./node_modules/gulp-eslint-style-checker/node_modules/.bin/eslint -c ./node_modules/gulp-eslint-style-checker/eslintrc.json **/*.js"
}
```

then this can be executed by running `npm run style-check`. This is not dependent on any packages 

### Integrating with build server
You might run into trubble if you suddenly start to lint all of your files. E.g. too many files that needs to be updated.
To avoid this you can run ci-runner.rb to only lint the files that has been changed.

Add this to your build steps:

```bash
 curl -s https://raw.githubusercontent.com/soldotno/gulp-eslint-style-checker/master/ci-runner.rb | ruby
 ```
Remember to set `$GITHUB_TOKEN`.
