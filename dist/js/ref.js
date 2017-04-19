"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var count = 20;
var rects = [];

rects.forEach(createParticles);

function createParticles(rect) {
  for (var i = 0; i < count; i++) {
    new Particle(rect);
  }
}

var Particle = function Particle(parent) {
  _classCallCheck(this, Particle);

  this.target = $("<div class=\"box\"/>");
  this.timeline = new TimelineMax();

  this.scaleX = parent._gsTransform.scaleX;
  this.scaleY = parent._gsTransform.scaleY;
};

new Particle(rectD);
// class
// circle
// radius: fixed

// parent_x
// parent_y
// parent_scale
// parent_color


var Box = function () {
  function Box(width, height, color) {
    _classCallCheck(this, Box);

    this.target = $("<div class=\"box\"/>");
    this.timeline = new TimelineMax({ autoRemoveChildren: true });

    TweenLite.set(this.target, {
      width: width,
      height: height,
      backgroundColor: color
    });
  }

  _createClass(Box, [{
    key: "appendTo",
    value: function appendTo(parent) {
      this.target.appendTo(parent);
      return this;
    }
  }, {
    key: "setPosition",
    value: function setPosition(x, y) {
      TweenLite.set(this.target, { x: x, y: y });
      return this;
    }
  }, {
    key: "moveTo",
    value: function moveTo(x, y) {
      this.timeline.to(this.target, 1, { x: x, y: y });
      return this;
    }
  }]);

  return Box;
}();

var stage = $("<div class=\"stage\" />").appendTo(document.body);

var box = new Box(100, 100, "blue");

box.appendTo(stage).setPosition(200, 300).moveTo(0, 100).moveTo(100, 0).moveTo(200, 200);

console.log("BOX", box);
