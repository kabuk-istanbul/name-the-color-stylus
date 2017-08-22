var ntc = require('./lib/ntc');
ntc.init();

exports = module.exports = plugin;

function nameThatColor(color) {
  return ntc.name(color);
}

function classNameOfColor(color) {
  return ntc.name(color)[1].toLowerCase().replace(' ', '-');
}

function nameOfColor(color) {
  return ntc.name(color)[1];
}

function hueNameOfColor(color) {
  return ntc.name(color)[3];
}

function plugin() {
  return function(style) {
    style.define('name', nameOfColor);
    style.define('class-name', classNameOfColor);
    style.define('name-that-color', nameThatColor);
    style.define('hue-name', hueNameOfColor);
  };
}