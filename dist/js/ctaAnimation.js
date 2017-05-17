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
  }, {
    key: "animate",
    value: function animate(obj) {
      var p = this;
      var spread = 1.75;

      this.orbit = random(5, 30);
      this.pointX = obj.w / spread * random(-1, 1);
      this.pointY = obj.h / spread * random(-1, 1);
      this.sin = random(0, 2 * Math.PI);
      this.cos = random(0, 2 * Math.PI);
      this.acc = random(0.03, 0.2);
      this.speed = random(0.005, 0.01);
      this.interactionFactor = 0;

      function getVal(target, attr) {

        var orbit = p.orbit * p.interactionFactor;
        var acc = p.acc;
        var current, wave, point;

        if (attr === "x") {
          current = target._gsTransform.x;
          wave = p.sin;
          point = p.pointX * p.interactionFactor;
          p.sin += p.speed;
        } else if (attr === "y") {
          current = target._gsTransform.y;
          wave = p.cos;
          point = p.pointY * p.interactionFactor;
          p.cos += p.speed;
        }

        var dest = orbit * Math.sin(wave) + point;
        var newVal = current + (dest - current) * acc;

        return newVal;
      }

      TweenMax.to(this.target, 1, { x: 1, y: 1, scaleX: 1, scaleY: 1, transformOrigin: "center", repeat: -1, modifiers: {
          x: function x(_x, target) {
            return getVal(target, "x");
          },
          y: function y(_y, target) {
            return getVal(target, "y");
          },
          scaleX: function scaleX() {
            return Math.cos(p.cos);
          },
          scaleY: function scaleY() {
            return Math.cos(p.cos);
          }
        } });
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

var countBtnParticles = 80;
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
  for (var i = 0; i < countBtnParticles; i++) {
    var p = new ParticleNode("8", obj.w / 2, obj.h / 2);
    p.target.setAttribute("fill", o.data.colors.rects[randomInt(0, 3)]);

    p.appendTo(particleContainer.target);
    btnParticles.push(p);

    p.animate(obj);
  }
}

function bindBtnEvents() {
  var btn = obj.target;
  var svg = document.querySelector("[data-dmss=svg]");

  window.addEventListener("resize", function () {
    resize();
  });

  // Button interaction: over, out and click
  btn.addEventListener("mouseover", function () {
    setInteractionFactor("over");
  });
  btn.addEventListener("mouseout", function () {
    setInteractionFactor("out");
  });
  btn.addEventListener("mousedown", function () {
    setInteractionFactor("down");
  });
  btn.addEventListener("mouseup", function () {
    setInteractionFactor("up");
  });
  // Button interaction: over, out and click
  svg.addEventListener("mouseover", function () {
    setInteractionFactor("over");
  });
  svg.addEventListener("mouseout", function () {
    setInteractionFactor("out");
  });
  svg.addEventListener("mousedown", function () {
    setInteractionFactor("down");
  });
  svg.addEventListener("mouseup", function () {
    setInteractionFactor("up");
  });
}

function setInteractionFactor(type) {
  var factor;
  var update = false;

  switch (type) {
    case 'over':
      if (!o.data.playing) {
        factor = 0.9;
        update = true;
      }
      break;
    case 'out':
      if (!o.data.playing) {
        factor = 1;
        update = true;
      }
      break;
    case 'down':
      if (!o.data.playing) {
        factor = 0.8;
        update = true;
      }
      break;
    case 'up':
      if (!o.data.playing) {
        factor = 0.9;
        update = true;
      }
      break;
    case 'expand':
      if (o.data.playing) {
        factor = 0;
        update = true;
      }
      break;
    case 'contract':
      if (o.data.playing) {
        factor = 1;
        update = true;
      }
      break;
    default:
      update = false;
  }

  // Apply factor
  if (update) {

    for (var i = 0; i < countBtnParticles; i++) {
      btnParticles[i].interactionFactor = factor;
    }
  }
  /*  
    var factor;
  
    // Set factor
    if ( !o.data.playing && (type === "over" || type === "out" || type === "click") ) {
      switch (type) {
        case 'over':
          factor = 0.9;
          break;
        case 'out':
          factor = 1;
          break;
        case 'down':
          factor = 0.8;
          break;
        case 'up':
          factor = 0.9;
          break;
        default:
          factor = 1;
        }
      
    } else if( o.data.playing && (type === "expand" || type === "contract") ) {
        console.log("Request type: " + type);
        switch (type) {
        case 'expand':
          factor = 0;
          break;
        case 'contract':
          factor = 1;
          break;
        default:
          console.warn("Default triggered");
          factor = 0;
        }
    }*/
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

// Make interactive
// Hover logo - factor : 0.9
// Unhover logo - factor : 1
// Click logo - factor : 0.8
// Hover button - factor : 0.9
// Unhover button - factor : 1
// When logo expands - factor : 0
// When logo contracts - factor : 1


// @codekit-prepend '../assets/js/particles';
// @codekit-prepend 'ctaSetup';


ctaAnimation("button");
