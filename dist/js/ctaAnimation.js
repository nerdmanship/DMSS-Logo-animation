"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Target = function () {
  function Target(id) {
    _classCallCheck(this, Target);

    this.target = document.querySelector("#" + id);
    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;
    this.cx = 0;
    this.cy = 0;
    this.updateData();
  }

  _createClass(Target, [{
    key: "updateData",
    value: function updateData() {
      // pixels from top
      this.y = window.pageYOffset + this.target.getBoundingClientRect().top;
      // pixels from left
      this.x = window.pageXOffset + this.target.getBoundingClientRect().left;
      // width of el
      this.w = this.target.offsetWidth;
      // height of el
      this.h = this.target.offsetHeight;
      // particle center
      this.cx = this.x + this.w / 2;
      this.cy = this.y + this.h / 2;
    }
  }]);

  return Target;
}();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ParticleNode = function () {
  function ParticleNode(radius, cx, cy) {
    _classCallCheck(this, ParticleNode);

    this.target = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    this.target.setAttribute("r", radius);

    if (cx && cy) {
      this.target.setAttribute("cx", cx);
      this.target.setAttribute("cy", cy);
    }
  }

  _createClass(ParticleNode, [{
    key: "appendTo",
    value: function appendTo(parent) {
      parent.appendChild(this.target);
    }
  }]);

  return ParticleNode;
}();

var SvgNode = function () {
  function SvgNode(w, h) {
    _classCallCheck(this, SvgNode);

    this.target = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.target.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    this.target.setAttribute("xlinkns", "http://www.w3.org/1999/xlink");
    this.target.setAttribute("viewBox", "0 0 " + w + " " + h);
  }

  _createClass(SvgNode, [{
    key: "appendTo",
    value: function appendTo(parent) {
      parent.appendChild(this.target);
    }
  }, {
    key: "prependFirstChildOf",
    value: function prependFirstChildOf(parent) {
      parent.insertBefore(this.target, parent.childNodes[0]);
    }
  }, {
    key: "style",
    value: function style(string) {
      this.target.setAttribute("style", "overflow: visible; position: absolute; " + string);
    }
  }, {
    key: "setDepth",
    value: function setDepth(z) {
      var string = this.target.getAttribute("style");
      this.target.setAttribute("style", string + " z-index: " + z + ";");
    }
  }]);

  return SvgNode;
}();
"use strict";

var particleContainer;
var btnParticles = [];
var obj;

function ctaAnimation(btn) {
  createParticleTarget(btn);
}

function createParticleTarget(btn) {
  obj = new Target(btn);
  createParticleContainer();
  styleParticleContainer();
  createBtnParticles();
  bindBtnEvents();
}

function createParticleContainer() {
  particleContainer = new SvgNode(obj.w, obj.h);
  particleContainer.prependFirstChildOf(document.body);
}

function styleParticleContainer() {
  var styles = "top: " + obj.y + "px; left: " + obj.x + "px; width: " + obj.w + "px; height: " + obj.h + "px;";
  particleContainer.style(styles);
  particleContainer.setDepth(100);
}

function createBtnParticles() {
  for (var i = 0; i < 40; i++) {
    var p = new ParticleNode("10", obj.w / 2, obj.h / 2);
    p.target.setAttribute("fill", o.data.colors.rects[randomInt(0, 3)]);
    p.xMax = obj.w * random(-1, 1);
    p.yMax = obj.h * random(-1, 1);

    p.appendTo(particleContainer.target);
    btnParticles.push(p);
  }
}

function bindBtnEvents() {
  window.addEventListener("resize", function () {
    resize();
  });
}

function resize() {
  updateTargets();
  setTimeout(function () {
    styleParticleContainer();
  }, 50);
}

function updateTargets() {
  obj.updateData();
}

/*
function init(target) {
  var target = createParticleTarget();
  createParticleContainer(target);
  styleParticleContainer(target);
  createBtnParticles(target);
  animBtnParticles(target);
  bindEvents(target);
}*/
"use strict";

function expandBtnParticles() {
  var len = btnParticles.length;
  var i = 0;

  for (; i < len; i++) {
    var p = btnParticles[i];
    TweenMax.to(p.target, 1, { y: p.yMax, x: p.xMax });
  }
}

function contractBtnParticles() {
  var len = btnParticles.length;
  var i = 0;

  for (; i < len; i++) {
    var p = btnParticles[i];
    TweenMax.to(p.target, 1, { y: 0, x: 0 });
  }
}
"use strict";

// DEFINITION
// When the logo animation stops, the cta animation starts
// Particles are born below the button
// Particles have same colors and scale variations as in logo
// Expands with same force as logotype contracts
// Floats softly around the button
// Contracts when the logo animation starts
// Contracts with same force as logotype expands

// TASKS

// Get needed data
// Check button in dmss.io and make replica 
// Find button position and dimensions dynamically
// Get position on call and update on resize


// Functionality for one
// Generate a particle at button center
// Expand at right time
// Expand to random position on a x-range and y-range based on buttons dimensions
// Contract at right time

// Functionality for all
// Generate multiple particles
// Apply timing of expansion
// Apply random position on particle range
// Apply timing of contraction

// Add idle float animation
// All particles move randomly around a point all the time
// Add modifiers plugin with a switch
// If playing, move value to 0
// Not playing, organic movement


// @codekit-prepend '../assets/js/particles';
// @codekit-prepend 'ctaSetup';
// @codekit-prepend 'ctaParticles';

ctaAnimation("button");
