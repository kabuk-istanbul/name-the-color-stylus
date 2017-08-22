# name-the-color-stylus
Creates names for colors by [Chirag Mehta](http://chir.ag/)'s [ntc.js](http://chir.ag/projects/ntc/) and turn them into class names.

## Installation

```bash
$ npm install name-the-color-stylus
```

## With JavaScript

```javascript
var nameTheColor = require('name-the-color-stylus'),
    stylus = require('stylus');

function compile(str) {
  return stylus(str)
    .use(nameTheColor());
}
```


## With Gulp

```javascript
var nameTheColor = require('name-the-color-stylus'),
    stylus = require('gulp-stylus');

gulp.task('stylus', function(){
    gulp.src('./your_stylus_file.styl')
        .pipe(stylus({ use: nameTheColor()}))
        .pipe(gulp.dest('./dist'));
});
```

## Stylus Functions

### name

Returns name of the color

```stylus
name(#2574FF) // 'Dodger Blue'
```

### class-name

Returns class name of the color

```stylus
class-name(#2574FF) // 'dodger-blue'
```

### hue-name

Returns approximate hue name of the color

```stylus
hue-name(#2574FF) // 'Blue'
```

### name-that-color

Returns the color's all information as a list (ntc.name() method in ntc.js)

```stylus
name-that-color(#2574FF) // '#1E90FF' 'Dodger Blue' '#0000FF' 'Blue' false
```

## Licence

MIT License

Copyright (c) 2017 Kabuk Istanbul Ltd

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.