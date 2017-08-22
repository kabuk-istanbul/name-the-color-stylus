# name-the-color-stylus
Creates name for colors by [Chirag Mehta](http://chir.ag/)'s [ntc.js](http://chir.ag/projects/ntc/) and turn it into class name.

## Installation

```bash
$ npm install name-the-color-stylus
```

## With JavaScript

```javascript
var nameTheColor = require('name-the-color-stylus'),
    stylu = require('stylus');

function compile(str) {
  return stylus(str)
    .use(nameTheColor());
}
```


## With Gulp

```javascript
var nameTheColor = require('name-the-color-stylus'),
    stylu = require('gulp-stylus');

gulp.task('stylus', function(){
    gulp.src('./your_stylus_file.styl')
        .pipe(stylus({ use: nameTheColor()}))
        .pipe(gulp.dest('./dist'));
});
```

## Stylus Functions

### name

Returns name of color

```stylus
name(#2574FF) // 'Dodger Blue'
```

### class-name

Returns class name of color

```stylus
class-name(#2574FF) // 'dodger-blue'
```

### hue-name

Returns approximate hue name of color

```stylus
hue-name(#2574FF) // 'Blue'


### name-that-color

Returns color's all information as a list (ntc.name() method in ntc.js)

```stylus
name-that-color(#2574FF) // '#1E90FF' 'Dodger Blue' '#0000FF' 'Blue' false
