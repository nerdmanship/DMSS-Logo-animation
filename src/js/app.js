class Particle {
  
  constructor(rect, rectIndex, particleIndex) {
    this.target = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    this.target.setAttribute("data-dmss", "circle" + rectIndex + particleIndex);
    this.target.setAttribute("cx", "300");
    this.target.setAttribute("cy", "300");
    this.target.setAttribute("r", "20");
    this.target.setAttribute("fill", o.data.colors.rects[rectIndex]);
    
    // normalise current index on index range -> 0-1
    // multiply that with current rect X
    var indexSq = Math.pow(particleIndex, 1.5);
    var countSq = Math.pow(20, 1.5);

    TweenMax.to(this.target, 10, { x: 0, repeat: -1, ease: Linear.easeNone,
      modifiers: {
        x: function() {
          return (indexSq / countSq) * rect._gsTransform.x*2;
        }
      }
    });

  }

  appendTo(parent) {
    parent.appendChild(this.target);
  }
}





var o = {
  name: "dmss",
  elements: [  
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
    "charS2",
    "chars",
    "rects",
    "particles",
    "pContainer0",
    "pContainer1",
    "pContainer2",
    "pContainer3"
  ],
  lists: [],
  data: {
    // types: { section: { value: { } } },
    particles: {
      count: 20
    },
    rotations: {
      pContainer: [45, 315, 315, 45]
    },
    paths: {
      original: [
        'M78.795 231V56.82h51.44c15.393 0 29.05 3.43 40.973 10.288 11.923 6.86 21.155 16.59 27.694 29.19 6.54 12.6 9.81 27.036 9.81 43.306v8.732c0 16.51-3.29 31.024-9.87 43.545-6.58 12.523-15.95 22.173-28.112 28.952-12.162 6.78-26.1 10.168-41.81 10.168H78.795zM109.06 81.225v125.61h19.74c15.87 0 28.053-4.965 36.547-14.894 8.493-9.928 12.82-24.184 12.98-42.766v-9.69c0-18.902-4.108-33.337-12.322-43.306-8.215-9.97-20.138-14.953-35.77-14.953H109.06z',
        'M405.856 55.097L456.1 188.603l50.124-133.506h39.12v174.18h-30.148v-57.422l2.99-76.802-51.44 134.224h-21.652l-51.32-134.104 2.99 76.682v57.422h-30.147V55.097z',
        'M175.833 498.235c0-7.656-2.692-13.558-8.075-17.705-5.384-4.147-15.093-8.334-29.13-12.56-14.036-4.228-25.202-8.933-33.496-14.117-15.87-9.97-23.806-22.97-23.806-39 0-14.036 5.722-25.6 17.167-34.69 11.444-9.093 26.298-13.64 44.56-13.64 12.124 0 22.93 2.234 32.42 6.7 9.49 4.466 16.948 10.826 22.37 19.08 5.425 8.255 8.136 17.407 8.136 27.456h-30.147c0-9.093-2.85-16.21-8.554-21.355-5.703-5.144-13.858-7.716-24.465-7.716-9.89 0-17.565 2.112-23.028 6.34-5.464 4.226-8.195 10.128-8.195 17.704 0 6.38 2.95 11.704 8.852 15.97 5.902 4.268 15.632 8.415 29.19 12.442 13.558 4.028 24.444 8.613 32.66 13.758 8.213 5.144 14.234 11.045 18.063 17.705 3.828 6.658 5.742 14.454 5.742 23.386 0 14.515-5.564 26.06-16.69 34.633-11.125 8.572-26.218 12.86-45.28 12.86-12.6 0-24.184-2.334-34.75-7-10.568-4.665-18.783-11.105-24.645-19.32-5.862-8.214-8.792-17.784-8.792-28.71h30.266c0 9.89 3.268 17.545 9.808 22.968 6.54 5.423 15.91 8.135 28.113 8.135 10.528 0 18.444-2.133 23.747-6.4 5.304-4.267 7.956-9.91 7.956-16.928z',
        'M491.833 498.235c0-7.656-2.692-13.558-8.075-17.705-5.384-4.147-15.093-8.334-29.13-12.56-14.036-4.228-25.202-8.933-33.496-14.117-15.87-9.97-23.806-22.97-23.806-39 0-14.036 5.722-25.6 17.167-34.69 11.444-9.093 26.298-13.64 44.56-13.64 12.124 0 22.93 2.234 32.42 6.7 9.49 4.466 16.948 10.826 22.37 19.08 5.425 8.255 8.136 17.407 8.136 27.456h-30.147c0-9.093-2.85-16.21-8.554-21.355-5.703-5.144-13.858-7.716-24.465-7.716-9.89 0-17.565 2.112-23.028 6.34-5.464 4.226-8.195 10.128-8.195 17.704 0 6.38 2.95 11.704 8.852 15.97 5.902 4.268 15.632 8.415 29.19 12.442 13.558 4.028 24.444 8.613 32.66 13.758 8.213 5.144 14.234 11.045 18.063 17.705 3.828 6.658 5.742 14.454 5.742 23.386 0 14.515-5.564 26.06-16.69 34.633-11.125 8.572-26.218 12.86-45.28 12.86-12.6 0-24.184-2.334-34.75-7-10.568-4.665-18.783-11.105-24.645-19.32-5.862-8.214-8.792-17.784-8.792-28.71h30.266c0 9.89 3.268 17.545 9.808 22.968 6.54 5.423 15.91 8.135 28.113 8.135 10.528 0 18.444-2.133 23.747-6.4 5.304-4.267 7.956-9.91 7.956-16.928z'
      ],
      morph: [
        'M144 236c50.81 0 92-43.19 92-92s-41.19-92-92-92-92 41.19-92 92 41.19 92 92 92z',
        'M456 236c50.81 0 92-41.19 92-92s-41.19-92-92-92-92 41.19-92 92 41.19 92 92 92z',
        'M144 548c50.81 0 92-41.19 92-92s-41.19-92-92-92-92 41.19-92 92 41.19 92 92 92z',
        'M456 548c50.81 0 92-41.19 92-92s-41.19-92-92-92-92 41.19-92 92 41.19 92 92 92z'
      ]
    },
    positions: {
      svg: {
        midX: 300,
        midY: 300
      },
      rectAnt: {
        x: [ -50, 50, -50, 50 ],
        y: [ -50, -50, 50, 50 ]
      },
      rectExp: {
        x: [ -175, 175, -175, 175 ],
        y: [ -175, -175, 175, 175 ]
      },
      charAnt: {
        x: [ -50, 50, -50, 50 ],
        y: [ -50, -50, 50, 50 ]
      },
      charCont: {
        x: [ 100, -100, 100, -100 ],
        y: [ 100, 100, -100, -100 ]
      }
    },
    scales: {
      rectAnt: [ 0.86, 0.83, 0.88, 0.8],
      charCont: [ 0.7, 0.65, 0.8, 0.75 ]
    },
    colors: {
      rects: [ "#4068B1", "#00BFE7", "#EF4223", "#D12368" ],
      charCont: [ "hsl(200,100,100)", "hsl(200,100,97)", "hsl(200,100,92)", "hsl(200,100,94)" ]
    }
  },
  init: function() {
    o.createSVG();
    o.cacheDOM();
    o.settings();
    o.bindEvents();
    o.createParticles();
    o.start();
  },
  createSVG: function() {
    var rectNames = [ "rectS2", "rectS", "rectM", "rectD"];
    var charNames = [ "charS2", "charS", "charM", "charD"];

    var rectPaths = ['M312 312h288v288H312z', 'M0 312h288v288H0z', 'M312 0h288v288H312z', 'M0 0h288v288H0z'];

    // Make SVG element
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    document.querySelector(".logo-wrapper").appendChild(svg);

    svg.setAttribute("data-dmss", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("xlinkns", "http://www.w3.org/1999/xlink");
    svg.setAttribute("viewBox", "0 0 600 600");
    svg.setAttribute("style", "position: absolute; overflow: visible; opacity: 0;");

    // Make particle group
    var particleGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    particleGroup.setAttribute("data-dmss", "particles");
    svg.appendChild(particleGroup);

    // Make rects
    var rectsGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");

    rectsGroup.setAttribute("data-dmss", "rects");
    var rectColors = Array.from(o.data.colors.rects);
    var reversedColors = rectColors.reverse();
    
    for (var i = 0; i < rectNames.length; i++) {
      var rect = document.createElementNS("http://www.w3.org/2000/svg", "path");
      rect.setAttribute("data-dmss", rectNames[i]);
      rect.setAttribute("d", rectPaths[i]);
      rect.setAttribute("fill", reversedColors[i]);
      rectsGroup.appendChild(rect);
    }

    svg.appendChild(rectsGroup);


    // Make chars
    var charsGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");

    charsGroup.setAttribute("data-dmss", "chars");
    var characterPaths = Array.from(o.data.paths.original);
    var reversedPaths = characterPaths.reverse();
    
    for (var i = 0; i < charNames.length; i++) {
      var char = document.createElementNS("http://www.w3.org/2000/svg", "path");
      char.setAttribute("data-dmss", charNames[i]);
      char.setAttribute("d", reversedPaths[i]);
      char.setAttribute("fill", "#FFFFFF");
      charsGroup.appendChild(char);
    }

    svg.appendChild(charsGroup);


    // Make a particle group for each rect, put a half svg size rect in each group
    var particlesGroupD;
    var particlesGroupM;
    var particlesGroupS;
    var particlesGroupS2;
    var particlesBoxD;
    var particlesBoxM;
    var particlesBoxS;
    var particlesBoxS2;
    var groupNames = [particlesGroupD, particlesGroupM, particlesGroupS, particlesGroupS2];
    var boxNames = [particlesBoxD, particlesBoxM, particlesBoxS, particlesBoxS2];

    for (var i = 0; i < groupNames.length; i++) {
      var group = groupNames[i];
      var box = boxNames[i];
      group = document.createElementNS("http://www.w3.org/2000/svg", "g");
      group.setAttribute("data-dmss", "pContainer" + [i]);
      box = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      box.setAttribute("data-dmss", "box" + [i]);
      box.setAttribute("width", "300");
      box.setAttribute("height", "300");
      box.setAttribute("fill", "none");
      particleGroup.appendChild(group);
      group.appendChild(box);
    } 
  },
  cacheDOM: function() {
    o.svg = document.querySelector("[data-" + o.name + "=svg]");
    o.createReferences(o.svg, o.elements);
  },
  createReferences: function(parent, array){
    var name = o.name;
    var i;
    var len = array.length;
    var obj;

    if ( array === o.elements) {
      o.el = {};
      obj = o.el;
      
      for (i = 0; i < len; i++) {
        obj[ array[i] ] = parent.querySelector("[data-" + name + "=" + array[i] + "]");
      }
    } else {
      o.list = {};
      obj = o.list;
      
      for (i = 0; i < len; i++) {
        obj[ array[i] ] = parent.querySelectorAll("[data-" + name + "=" + array[i] + "]");
      }
    }
  },
  // Settings
  settings: function() {
    var allElements = [ o.el.particles, o.el.pContainer0, o.el.pContainer1, o.el.pContainer2, o.el.pContainer3, o.el.rectD, o.el.rectM, o.el.rectS, o.el.rectS2, o.el.rects, o.el.charD, o.el.charM, o.el.charS, o.el.charS2, o.el.chars ];
    TweenLite.set(allElements, { svgOrigin: "300, 300" });
    
    TweenLite.defaultEase = Power1.easeInOut;

    var pContainers = [ o.el.pContainer0, o.el.pContainer1, o.el.pContainer2, o.el.pContainer3 ];

    for (var i = 0; i < 4; i++) {
      TweenMax.set(pContainers[i], { rotation: o.data.rotations.pContainer[i] });
    }
    
    o.revealScene();
  },
  revealScene: function() {

      TweenMax.to(o.svg, 0.5, { autoAlpha: 1 });
  },
  // Bind events
  bindEvents: function() {
  },
  start: function() {
    var master = o.getMasterTl();
    master.play();
  },
  getMasterTl: function() {
    var tl = new TimelineMax({ paused: true, repeat: -1 });
    var rectsTimeline = o.getRectsTl();
    var charsTimeline = o.getCharsTl();
    
    tl
      .add(rectsTimeline, 1)
      .add(charsTimeline, 1)
    ;
    
    return tl;
  },
  getRectsTl: function() {
    
    var D = o.el.rectD;
    var M = o.el.rectM;
    var S = o.el.rectS;
    var S2 = o.el.rectS2;
    var group = o.el.rects;
    var particles = o.el.particles;
    var rects = [ D, M, S, S2 ];

    var tl = new TimelineMax({ paused: false });

    tl
      .add("anticipation", 0)
      .to([group, particles], 1, { rotation: -15, ease: Power4.easeInOut }, "anticipation")
      .staggerTo(rects, 0.8, { cycle: { x: o.data.positions.rectAnt.x, y: o.data.positions.rectAnt.y }, scale: o.data.scales.rectAnt, ease: Power4.easeInOut }, 0.05, "anticipation")

      .add("spin")
      .to([group, particles], 1.3, { rotation: 315, ease: Power4.easeInOut }, "spin")

      .add("expand", "anticipation =+1.3")
      .staggerTo(rects, 0.8, { cycle: { x: o.data.positions.rectExp.x, y: o.data.positions.rectExp.y }, scale: 0.6, ease: Back.easeIn.config(5) }, 0, "expand")
      
      .add("idle", "spin =+1.3")
      .to([group, particles], 5, { rotation: "-=15", ease: Linear.easeNone }, "idle")

      .add("contraction")
      .to([group, particles], 0.8, { rotation: 360, ease: Power4.easeInOut }, "contraction")
      .staggerTo(rects, 0.7, { x: 0, y: 0, scale: 1, ease: Back.easeInOut.config(1) }, 0.02, "contraction")
      .set([group, particles], { rotation: 0 })
    ;
    
    return tl;
  },
  getCharsTl: function() {

    var D = o.el.charD;
    var M = o.el.charM;
    var S = o.el.charS;
    var S2 = o.el.charS2;
    var group = o.el.chars;
    var chars = [ D, M, S, S2 ];

    var tl = new TimelineMax({ paused: false });
    
    tl
      .add("anticipation")
      .to(group, 1, { rotation: -15, ease: Power4.easeInOut }, "anticipation")
      .staggerTo(chars, 0.8, { cycle: { x: o.data.positions.charAnt.x, y: o.data.positions.charAnt.y }, scale: 0.8, ease: Power3.easeInOut }, 0, "anticipation")
      
      .add("spin")
      .to(group, 1.2, { rotation: "+=480", ease: Power4.easeInOut }, "spin")
      
      .add("contraction", "spin =+0.5")
      .staggerTo(chars, 0.8, { cycle: { x: o.data.positions.charCont.x, y: o.data.positions.charCont.y }, ease: Back.easeOut.config(1) }, 0, "contraction")
      .staggerTo(chars, 0.4, { cycle: { scale: o.data.scales.charCont }, ease: Back.easeOut.config(1) }, 0, "contraction")
      .staggerTo(chars, 0.5, { cycle: { fill: o.data.colors.charCont } }, 0, "contraction")
      .staggerTo(chars, 0.3, { cycle: { morphSVG: o.data.paths.morph } }, 0, "contraction")

      .add("idle")
      .staggerTo(chars, 5/4, { scale: "+=0.05", repeat: 2, yoyo: true }, 0.15, "idle")
      .to(group, 5, { rotation: "+=100", ease: Linear.easeNone }, "idle")
      
      .add("morphBack")
      .to(chars, 0.5, { fill: o.data.colors.charCont[0] }, "morphBack")
      .staggerTo(chars, 0.3, { cycle: { morphSVG: o.data.paths.original }, rotation: 0 }, 0.05, "morphBack")
      .staggerTo(chars, 0.5, { scale: 1 }, 0, "morphBack")
     
      .to(group, 0.7, { rotation: 720, ease: Back.easeInOut.config(1) }, "morphBack =+0")
      .staggerTo(chars, 0.5, { x: 0, y: 0, ease: Back.easeOut.config(1) }, 0.01, "morphBack =+0.3")
      
      .set(group, { rotation: 0 })
    ;
    
    return tl;
  },
  createParticles: function() {
    var rects = [ o.el.rectD, o.el.rectM, o.el.rectS, o.el.rectS2 ];
    var count = o.data.particles.count;
    var parents = [ o.el.pContainer0, o.el.pContainer1, o.el.pContainer2, o.el.pContainer3 ];

    rects.forEach(function(rect, rectIndex){
      
      for (var i = 0; i < count; i++) {
        var particle = new Particle(rect, rectIndex, i);
        particle.appendTo(parents[rectIndex]);
      }

    });
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