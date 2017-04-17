"use strict";

var o = {
  name: "dmss",
  elements: ["circleD", "circleM", "circleS", "circleS2", "rectD", "rectM", "rectS", "rectS2", "charD", "charM", "charS", "charS2", "chars", "rects"],
  lists: [],
  data: {
    eases: {
      customEase: CustomEase.create("custom", "M0,0 C0.64,-5.29 0.9,0.23 1,1"),
      customBack: CustomEase.create("custom", "M0,0,C0.068,0,0.128,-0.061,0.175,-0.081,0.224,-0.102,0.267,-0.107,0.315,-0.065,0.384,-0.004,0.449,0.253,0.465,0.323,0.505,0.501,0.509,0.602,0.548,0.779,0.576,0.908,0.702,1.026,0.82,1.026,0.924,1.026,0.938,0.998,1,1"),
      customBack2: CustomEase.create("custom", "M0,0,C0.068,0,0.102,-0.056,0.175,-0.056,0.252,-0.056,0.402,0.253,0.418,0.323,0.458,0.501,0.462,0.602,0.501,0.779,0.529,0.908,0.702,1.014,0.82,1.014,0.924,1.014,0.938,0.998,1,1"),
      customExpo: CustomEase.create("custom", "M0,0,C0.322,-0.15,0.466,0.292,0.498,0.502,0.532,0.73,0.586,0.88,0.64,0.928,0.679,0.962,0.698,1,1,1")
    },
    paths: {
      original: ['M78.795 231V56.82h51.44c15.393 0 29.05 3.43 40.973 10.288 11.923 6.86 21.155 16.59 27.694 29.19 6.54 12.6 9.81 27.036 9.81 43.306v8.732c0 16.51-3.29 31.024-9.87 43.545-6.58 12.523-15.95 22.173-28.112 28.952-12.162 6.78-26.1 10.168-41.81 10.168H78.795zM109.06 81.225v125.61h19.74c15.87 0 28.053-4.965 36.547-14.894 8.493-9.928 12.82-24.184 12.98-42.766v-9.69c0-18.902-4.108-33.337-12.322-43.306-8.215-9.97-20.138-14.953-35.77-14.953H109.06z', 'M405.856 55.097L456.1 188.603l50.124-133.506h39.12v174.18h-30.148v-57.422l2.99-76.802-51.44 134.224h-21.652l-51.32-134.104 2.99 76.682v57.422h-30.147V55.097z', 'M175.833 498.235c0-7.656-2.692-13.558-8.075-17.705-5.384-4.147-15.093-8.334-29.13-12.56-14.036-4.228-25.202-8.933-33.496-14.117-15.87-9.97-23.806-22.97-23.806-39 0-14.036 5.722-25.6 17.167-34.69 11.444-9.093 26.298-13.64 44.56-13.64 12.124 0 22.93 2.234 32.42 6.7 9.49 4.466 16.948 10.826 22.37 19.08 5.425 8.255 8.136 17.407 8.136 27.456h-30.147c0-9.093-2.85-16.21-8.554-21.355-5.703-5.144-13.858-7.716-24.465-7.716-9.89 0-17.565 2.112-23.028 6.34-5.464 4.226-8.195 10.128-8.195 17.704 0 6.38 2.95 11.704 8.852 15.97 5.902 4.268 15.632 8.415 29.19 12.442 13.558 4.028 24.444 8.613 32.66 13.758 8.213 5.144 14.234 11.045 18.063 17.705 3.828 6.658 5.742 14.454 5.742 23.386 0 14.515-5.564 26.06-16.69 34.633-11.125 8.572-26.218 12.86-45.28 12.86-12.6 0-24.184-2.334-34.75-7-10.568-4.665-18.783-11.105-24.645-19.32-5.862-8.214-8.792-17.784-8.792-28.71h30.266c0 9.89 3.268 17.545 9.808 22.968 6.54 5.423 15.91 8.135 28.113 8.135 10.528 0 18.444-2.133 23.747-6.4 5.304-4.267 7.956-9.91 7.956-16.928z', 'M491.833 498.235c0-7.656-2.692-13.558-8.075-17.705-5.384-4.147-15.093-8.334-29.13-12.56-14.036-4.228-25.202-8.933-33.496-14.117-15.87-9.97-23.806-22.97-23.806-39 0-14.036 5.722-25.6 17.167-34.69 11.444-9.093 26.298-13.64 44.56-13.64 12.124 0 22.93 2.234 32.42 6.7 9.49 4.466 16.948 10.826 22.37 19.08 5.425 8.255 8.136 17.407 8.136 27.456h-30.147c0-9.093-2.85-16.21-8.554-21.355-5.703-5.144-13.858-7.716-24.465-7.716-9.89 0-17.565 2.112-23.028 6.34-5.464 4.226-8.195 10.128-8.195 17.704 0 6.38 2.95 11.704 8.852 15.97 5.902 4.268 15.632 8.415 29.19 12.442 13.558 4.028 24.444 8.613 32.66 13.758 8.213 5.144 14.234 11.045 18.063 17.705 3.828 6.658 5.742 14.454 5.742 23.386 0 14.515-5.564 26.06-16.69 34.633-11.125 8.572-26.218 12.86-45.28 12.86-12.6 0-24.184-2.334-34.75-7-10.568-4.665-18.783-11.105-24.645-19.32-5.862-8.214-8.792-17.784-8.792-28.71h30.266c0 9.89 3.268 17.545 9.808 22.968 6.54 5.423 15.91 8.135 28.113 8.135 10.528 0 18.444-2.133 23.747-6.4 5.304-4.267 7.956-9.91 7.956-16.928z'],
      morph: ['M144 236c50.81 0 92-43.19 92-92s-41.19-92-92-92-92 41.19-92 92 41.19 92 92 92z', 'M456 236c50.81 0 92-41.19 92-92s-41.19-92-92-92-92 41.19-92 92 41.19 92 92 92z', 'M144 548c50.81 0 92-41.19 92-92s-41.19-92-92-92-92 41.19-92 92 41.19 92 92 92z', 'M456 548c50.81 0 92-41.19 92-92s-41.19-92-92-92-92 41.19-92 92 41.19 92 92 92z']
    }
  },
  init: function init() {
    o.cacheDOM();
    o.settings();
    o.bindEvents();
    o.start();
  },
  cacheDOM: function cacheDOM() {
    o.svg = document.querySelector("[data-" + o.name + "=svg]");
    o.createReferences(o.svg, o.elements);
  },
  createReferences: function createReferences(parent, array) {
    var name = o.name;
    var i;
    var len = array.length;
    var obj;

    if (array === o.elements) {
      o.el = {};
      obj = o.el;

      for (i = 0; i < len; i++) {
        obj[array[i]] = parent.querySelector("[data-" + name + "=" + array[i] + "]");
      }
    } else {
      o.list = {};
      obj = o.list;

      for (i = 0; i < len; i++) {
        obj[array[i]] = parent.querySelectorAll("[data-" + name + "=" + array[i] + "]");
      }
    }
  },
  // Settings
  settings: function settings() {
    TweenLite.defaultEase = Power1.easeInOut;

    o.setChars();
    o.hide("chars");
    o.paint();
    o.resize();
    o.revealScene();
  },
  setChars: function setChars() {
    var chars = [o.el.charD, o.el.charM, o.el.charS, o.el.charS2];
    var len = chars.length;
    var i;

    for (i = 0; i < len; i++) {
      TweenLite.set(chars[i], { fill: "#fff", attr: { d: o.data.paths.original[i] } });
    }
  },
  hide: function hide(el) {
    var hide;

    if (el === "chars") {
      hide = [o.el.charD, o.el.charM, o.el.charS, o.el.charS2];
    } else if (el === "rects") {
      hide = [o.el.rectD, o.el.rectM, o.el.rectS, o.el.rectS2];
    } else {
      return;
    }

    var len = hide.length;
    var i;

    for (i = 0; i < len; i++) {
      TweenLite.set(hide[i], { autoAlpha: 0 });
    }
  },
  paint: function paint() {
    var colors = ["#4068B1", "#00BFE7", "#EF4223", "#D12368"];
    var rects = [o.el.rectD, o.el.rectM, o.el.rectS, o.el.rectS2];
    var len = rects.length;
    var i;

    for (i = 0; i < len; i++) {
      TweenLite.set(rects[i], { fill: colors[i] });
    }
  },
  resize: function resize() {
    o.vw = window.innerWidth;
    o.vh = window.innerHeight;
    console.log(o.vw + " " + o.vh);
  },
  revealScene: function revealScene() {

    TweenMax.set(o.svg, { autoAlpha: 1 });
  },
  // Bind events
  bindEvents: function bindEvents() {

    window.addEventListener("resize", o.resize);
  },
  start: function start() {
    var master = o.getMasterTl();
    master.play();
  },
  getMasterTl: function getMasterTl() {
    var tl = new TimelineMax({ paused: true });

    tl.add("start", 1).add(o.getCharsTl, "start").add(o.getRectsTl, "start");

    return tl;
  },
  getRectsTl: function getRectsTl() {
    var tl = new TimelineMax({ paused: false });

    var D = o.el.rectD;
    var M = o.el.rectM;
    var S = o.el.rectS;
    var S2 = o.el.rectS2;
    var all = o.el.rects;

    var contractVal = 12;
    var expandVal = 120;
    var scaleVal = 0.7;

    tl.add("anticipate", 0).to(o.el.rects, 1, { rotation: -15, transformOrigin: "center", ease: Power1.easeInOut }, "anticipate").to(D, 0.8, { x: -50, y: -50, scale: 0.86, transformOrigin: "center", ease: Power1.easeInOut }, "anticipate =+0.1").to(M, 0.7, { x: 50, y: -50, scale: 0.83, transformOrigin: "center", ease: Power1.easeInOut }, "anticipate =+0.15").to(S, 1, { x: -50, y: 50, scale: 0.88, transformOrigin: "center", ease: Power1.easeInOut }, "anticipate").to(S2, 0.85, { x: 50, y: 50, scale: 0.8, transformOrigin: "center", ease: Power1.easeInOut }, "anticipate =+0.1").add("spin", 1).to(o.el.rects, 1.4, { rotation: 315, transformOrigin: "center", ease: Power3.easeInOut }, "spin").add("expand", 1.15).to(D, 0.65, { x: -expandVal, y: -expandVal, scale: scaleVal, ease: Back.easeIn.config(7) }, "expand").to(M, 0.7, { x: expandVal, y: -expandVal, scale: scaleVal, ease: Back.easeIn.config(7) }, "expand").to(S, 0.7, { x: -expandVal, y: expandVal, scale: scaleVal, ease: Back.easeIn.config(7) }, "expand").to(S2, 0.65, { x: expandVal, y: expandVal, scale: scaleVal, ease: Back.easeIn.config(7) }, "expand").add("counterSpin", 2.4).to(o.el.rects, 5, { rotation: "-=15", transformOrigin: "center", ease: Linear.easeNone }, "counterSpin").add("back", 7.4).to(o.el.rects, 0.7, { rotation: 360, transformOrigin: "center", ease: Back.easeInOut }, "straight").to(D, 0.74, { x: 0, y: 0, scale: 1, ease: Back.easeInOut.config(1) }, "straight").to(M, 0.8, { x: 0, y: 0, scale: 1, ease: Back.easeInOut.config(1) }, "straight").to(S, 0.77, { x: 0, y: 0, scale: 1, ease: Back.easeInOut.config(1) }, "straight").to(S2, 0.75, { x: 0, y: 0, scale: 1, ease: Back.easeInOut.config(1) }, "straight");

    return tl;
  },
  getCharsTl: function getCharsTl() {
    var tl = new TimelineMax({ paused: false });

    var positionVal = 130;
    var scales = [0.7, 0.65, 0.8, 0.75];
    var colors = ["hsl(200,100,94)", "hsl(200,100,92)", "hsl(200,100,97)", "hsl(200,100,100)"];

    tl.add("move", 0).to(o.el.charD, 1.4, { x: positionVal, y: positionVal, scale: scales[0], transformOrigin: "center", ease: Back.easeInOut.config(4) }, "move").to(o.el.charM, 1.3, { x: -positionVal, y: positionVal, scale: scales[1], transformOrigin: "center", ease: Back.easeInOut.config(4) }, "move").to(o.el.charS, 1.2, { x: positionVal, y: -positionVal, scale: scales[2], transformOrigin: "center", ease: Back.easeInOut.config(4) }, "move").to(o.el.charS2, 1.3, { x: -positionVal, y: -positionVal, scale: scales[3], transformOrigin: "center", ease: Back.easeInOut.config(4) }, "move").add("color", 0.5).to(o.el.charD, 0.5, { fill: colors[3] }, "color").to(o.el.charM, 0.5, { fill: colors[2] }, "color").to(o.el.charS, 0.5, { fill: colors[1] }, "color").to(o.el.charS2, 0.5, { fill: colors[0] }, "color").add("morph", 0.8).to(o.el.charD, 0.3, { morphSVG: o.data.paths.morph[0] }, "morph").to(o.el.charM, 0.3, { morphSVG: o.data.paths.morph[1] }, "morph").to(o.el.charS, 0.3, { morphSVG: o.data.paths.morph[2] }, "morph").to(o.el.charS2, 0.3, { morphSVG: o.data.paths.morph[3] }, "morph")

    // .add("spin", 0)
    // .to(o.el.charD, 0.9, { rotation: 50, transformOrigin: "center", ease: Back.easeIn }, "spin")
    // .to(o.el.charM, 0.9, { rotation: 110, transformOrigin: "center", ease: Back.easeIn }, "spin")
    // .to(o.el.charS, 0.9, { rotation: 90, transformOrigin: "center", ease: Back.easeIn }, "spin")
    // .to(o.el.charS2, 0.9, { rotation: 70, transformOrigin: "center", ease: Back.easeIn }, "spin")
    ;

    return tl;
  }

};

window.addEventListener("load", o.init);

function random(min, max) {
  if (max === null) {
    max = min;min = 0;
  }
  return Math.random() * (max - min) + min;
}

function map(value, sourceMin, sourceMax, destinationMin, destinationMax) {
  return destinationMin + (destinationMax - destinationMin) * ((value - sourceMin) / (sourceMax - sourceMin)) || 0;
}
