"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Particle2 = function () {
  function Particle2(radius, cx, cy) {
    _classCallCheck(this, Particle2);

    this.target = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    this.target.setAttribute("r", radius);

    if (cx && cy) {
      this.target.setAttribute("cx", cx);
      this.target.setAttribute("cy", cy);
    }
  }

  _createClass(Particle2, [{
    key: "appendTo",
    value: function appendTo(parent) {
      parent.appendChild(this.target);
    }
  }]);

  return Particle2;
}();

var svgNode = function () {
  function svgNode(w, h) {
    _classCallCheck(this, svgNode);

    this.target = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.target.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    this.target.setAttribute("xlinkns", "http://www.w3.org/1999/xlink");
    this.target.setAttribute("viewBox", "0 0 " + w + " " + h);
  }

  _createClass(svgNode, [{
    key: "appendTo",
    value: function appendTo(parent) {
      parent.appendChild(this.target);
    }
  }]);

  return svgNode;
}();
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


var targets = [];
var btn = new Target("button");
targets.push(btn);

window.addEventListener("resize", updateTargets);

function updateTargets() {
  targets.forEach(function (target) {
    target.updateData();
  });
}
var svgNode = new svgNode(btn.cx, btn.cy);
svgNode.appendTo(document.body);

var p = new Particle2("20");
p.target.setAttribute("fill", "black");
p.appendTo(svgNode.target);
"use strict";

animateLogo("wrapper");
