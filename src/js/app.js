var o = {
  init: function() {
    o.cacheDOM();
    o.settings();
    o.bindEvents();
    o.revealScene();
    o.paint();
  },
  cacheDOM: function() {
    var projectName = "dmss";
    o.svg = document.querySelector("[data-" + projectName + "=svg]");
    o.createElementReferences(projectName);    
    },
  createElementReferences: function(projectName){
    o.elements = [  
      "circleD",
      "circleM",
      "circleS",
      "circleS2",
      "rectD",
      "rectM",
      "rectS",
      "rectS2",
      "charD",
      "charM",
      "charS",
      "charS2"
      ];
    o.el = {};
    var i;
    var len = o.elements.length;
    
    for (i = 0; i < len; i++) {
      o.el[ o.elements[i] ] = o.svg.querySelector("[data-" + projectName + "=" + o.elements[i] + "]");
    }
  },
  settings: function() {
    TweenLite.defaultEase = Power1.easeInOut;
    o.resize();
  },
  resize: function() {
    o.vw = window.innerWidth;
    o.vh = window.innerHeight;
    console.log(o.vw + " " + o.vh);
  },
  bindEvents: function() {
    window.addEventListener("resize", o.resize);
  },
  revealScene: function() {
      TweenMax.to(o.svg, 10, { autoAlpha: 1 });
  },
  paint: function() {
    var colors = [ "#4068B1", "#00BFE7", "#EF4223", "#D12368" ];
    var rects = [o.el.rectD, o.el.rectM, o.el.rectS, o.el.rectS2];
    var len = rects.length;
    var i;

    for(i = 0; i < len; i++) {
      TweenLite.set(rects[i], { fill: colors[i] });
    }
  },
  getTl: function() {
    var tl = new TimelineMax({ paused: true });
    
    //tl;
    
    return tl;
  }
  
};

window.addEventListener("load", o.init);

function random(min, max) {
  if (max === null) { max = min; min = 0; }
  return Math.random() * (max - min) + min;
}

function map(value, sourceMin, sourceMax, destinationMin, destinationMax) {
  return destinationMin + (destinationMax - destinationMin) * ((value - sourceMin) / (sourceMax - sourceMin)) || 0;
}


// var char = {
//   d: document.querySelector("[data-char=D]"),
//   m: document.querySelector("[data-char=M]"),
//   s: document.querySelector("[data-char=S]"),
//   s2: document.querySelector("[data-char=S2]"),
// }

// var rect = {
//   d: document.querySelector("[data-rect=D]"),
//   m: document.querySelector("[data-rect=M]"),
//   s: document.querySelector("[data-rect=S]"),
//   s2: document.querySelector("[data-rect=S2]"),
// }

// var circ = {
//   d: document.querySelector("[data-circ=D]"),
//   m: document.querySelector("[data-circ=M]"),
//   s: document.querySelector("[data-circ=S]"),
//   s2: document.querySelector("[data-circ=S2]"),
// }

