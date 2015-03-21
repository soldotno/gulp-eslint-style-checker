Sol style checker
===========

Performs code style check by using jscs. Is by default setup with the style Sol is using. and is by default checking all `.js` files in the repo. (Exlcuding node_modules). Also support React. 


## Usage 

We use gulp as our build tool, and this package exposes a style-checker function 
that has 2 parameters;

* files  
 The files to check Same as the first argument to `jscs`

* config  
 Path to the configfile. Same as `--config` option in `jscs`

## Example 

```js
var styleCheck = require('sol-style-check');
gulp.task('style-check', styleCheck());
``` 

