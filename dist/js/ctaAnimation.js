"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Proxy = function () {
  function Proxy(id) {
    _classCallCheck(this, Proxy);

    this.element = document.querySelector("#" + id); // master of proxy
    this.x = 0; // x position
    this.y = 0; // y position
    this.z = 0; // z-index
    this.w = 0; // width
    this.h = 0; // height
    this.cx = 0; // center x
    this.cy = 0; // center y
    this.updateData();
  }

  _createClass(Proxy, [{
    key: "updateData",
    value: function updateData() {
      this.y = window.pageYOffset + this.element.getBoundingClientRect().top;
      this.x = window.pageXOffset + this.element.getBoundingClientRect().left;
      this.z = this.findElementZ() - 1;
      this.w = this.element.offsetWidth;
      this.h = this.element.offsetHeight;
      this.cx = this.x + this.w / 2;
      this.cy = this.y + this.h / 2;
    }
  }, {
    key: "findElementZ",
    value: function findElementZ() {
      var z;
      var elZ = window.getComputedStyle(this.element).getPropertyValue("z-index");
      if (isNaN(elZ)) {
        z = 0;
        throw "Error: Button must have a set z-index value.";
      } else {
        z = elZ;
      }

      return z;
    }
  }]);

  return Proxy;
}();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SvgNode = function () {
  function SvgNode() {
    _classCallCheck(this, SvgNode);

    this.target = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.target.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    this.target.setAttribute("xlinkns", "http://www.w3.org/1999/xlink");
    this.target.setAttribute("style", "overflow: visible; position: absolute;");
  }

  _createClass(SvgNode, [{
    key: "appendTo",
    value: function appendTo(parent) {
      parent.appendChild(this.target);
    }
  }, {
    key: "prependIn",
    value: function prependIn(parent) {
      parent.insertBefore(this.target, parent.childNodes[0]);
    }
  }, {
    key: "setViewbox",
    value: function setViewbox(x, y, w, h) {
      this.target.setAttribute("viewBox", x + " " + y + " " + w + " " + h);
    }
  }, {
    key: "setPosition",
    value: function setPosition(x, y) {
      this.target.setAttribute("left", x);
      this.target.setAttribute("top", y);
    }
  }, {
    key: "setDimensions",
    value: function setDimensions(w, h) {
      this.target.setAttribute("width", w);
      this.target.setAttribute("height", h);
    }
  }, {
    key: "setDepth",
    value: function setDepth(z) {
      this.target.setAttribute("z-index", z);
    }

    // Break out to own extended class : particleContainer

  }, {
    key: "addParticles",
    value: function addParticles(count) {}

    // Break out to own extended class

  }, {
    key: "addProxy",
    value: function addProxy(obj) {
      this.proxy = obj;
    }

    // Break out to own extended class

  }, {
    key: "updateViewboxFromProxy",
    value: function updateViewboxFromProxy() {
      this.setViewbox(0, 0, this.proxy.w, this.proxy.h);
    }
  }, {
    key: "updateFromProxy",
    value: function updateFromProxy() {
      var string = "overflow: visible; position: absolute; height: " + this.proxy.h + "px; width: " + this.proxy.w + "px; top: " + this.proxy.y + "px; left: " + this.proxy.x + "px; z-index: " + this.proxy.z + ";";
      this.target.setAttribute("style", string);
    }
  }]);

  return SvgNode;
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
    key: "setColor",
    value: function setColor(color) {
      this.target.setAttribute("fill", color);
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
"use strict";

// var CSS_COLOR_NAMES = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];

// Check pub-sub pattern and rework event listeners
// Make class related functionality into methods of extended classes
// findZofTarget method of Proxy
// SvgNode extends Proxy
// SvgNode : updateContainerStyles
// ParticleNode extends SvgNode
// Make particle button class
// Options: particleRadius, particleCount, particleColors animation{}


var els = [];

function animateButton(id, count) {

  var proxy = new Proxy(id);
  proxy.count = count || 80;
  proxy.particles = [];
  proxy.colors = o.data.colors.rects;

  var el = new SvgNode();
  el.addProxy(proxy);

  el.proxy.updateData();
  el.updateFromProxy();

  addParticles(el);

  els.push(el);
  el.prependIn(document.body);

  bindBtnEvents(proxy);
}

function addParticles(el) {
  for (var i = 0; i < el.proxy.count; i++) {

    var p = new ParticleNode("8", el.proxy.w / 2, el.proxy.h / 2);

    p.setColor(el.proxy.colors[randomInt(0, el.proxy.colors.length - 1)]);

    p.appendTo(el.target);
    el.proxy.particles.push(p);

    //p.animate();
  }
}

function bindBtnEvents(proxy) {

  var svg = document.querySelector("[data-dmss=svg]");

  window.addEventListener("resize", function () {
    resize();
  });

  // Button interaction: over, out and click
  proxy.element.addEventListener("mouseover", function (proxy) {
    setInteractionFactor("over", proxy);
  });
  proxy.element.addEventListener("mouseout", function (proxy) {
    setInteractionFactor("out", proxy);
  });
  proxy.element.addEventListener("mousedown", function (proxy) {
    setInteractionFactor("down", proxy);
  });
  proxy.element.addEventListener("mouseup", function (proxy) {
    setInteractionFactor("up", proxy);
  });
  // Button interaction: over, out and click
  svg.addEventListener("mouseover", function (proxy) {
    setInteractionFactor("over", proxy);
  });
  svg.addEventListener("mouseout", function (proxy) {
    setInteractionFactor("out", proxy);
  });
  svg.addEventListener("mousedown", function (proxy) {
    setInteractionFactor("down", proxy);
  });
  svg.addEventListener("mouseup", function (proxy) {
    setInteractionFactor("up", proxy);
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
    els.forEach(function (el) {
      for (var i = 0; i < el.proxy.count; i++) {
        el.proxy.particles[i].interactionFactor = factor;
      }
    });
  }
}

function resize() {
  els.forEach(function (el) {
    el.proxy.updateData();
    el.updateFromProxy();
  });
}

/*

// createContainer(proxy);

function createContainer(proxy) {
  //proxy.parent = new SvgNode(proxy.w, proxy.h);
  //proxy.parent.prependIn(document.body);
  //updateContainerStyles(proxy);
  //addParticles(proxy);
}

function updateElement(el) {
  //el.updateFromProxy();
}


function updateTargets() {
  proxies.forEach(function(proxy) {
    
  });
}

*/
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

// Functionality, usability, aestetics, tweak, API

// Make private?


// @codekit-prepend '../assets/js/Proxy';
// @codekit-prepend '../assets/js/SvgNode';
// @codekit-prepend '../assets/js/ParticleNode';
// @codekit-prepend 'ctaSetup';


// Button must have a z-index
animateButton("button");
