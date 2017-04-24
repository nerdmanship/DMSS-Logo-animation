function animateLogo(id) {
  o.init(id);
}

class Particle {
  
  constructor(rect, rectIndex, particleIndex) {

    // Create a reference to a normalised exponential number based on particle index
    var expStrength = 1.8;
    var indexSq = Math.pow(particleIndex, expStrength);
    var countSq = Math.pow(20, expStrength);
    var normalisedIndex = (indexSq / countSq);

    // Create element and set attributes
    this.target = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    this.target.setAttribute("data-dmss", "circle" + rectIndex + particleIndex);
    this.target.setAttribute("cx", "300");
    this.target.setAttribute("cy", "300");
    this.target.setAttribute("r", "15");
    this.target.setAttribute("fill", o.data.colors.rects[rectIndex]);

    // Alias for this particle
    var particle = this.target;

    // Data used to animate this particle
    particle.data = {
      xMin: 0,
      xMax: -300 * normalisedIndex,
      xOffset: 0,
      xAcceleration: random(0.01,0.5),
      sineSpeed: random(40,70), // Random tween speed to each particle: higher is slower
      y: random(-50,50),
      yVariation: random(10,50),
      scale: random(0.2, 0.8) + (1 - normalisedIndex)/4,
      scaleVariation: 0.3
    };

    TweenMax.to(particle, 1, { x: 0, y: 0, scaleX: 0, scaleY: 0, repeat: -1, ease: Linear.easeNone,
      modifiers: {
        x: function(x, particle) {

          // Tween particle smoothly from pMin to pMax when rect tween from rectMin to rectMax
          
          var currentX = particle._gsTransform.x; // Current position of particle
          var rectX = o.data.rect.current.x || 0; // Current position of rect
          var offsetX = particle.data.xOffset; // Min value for particle
          var acc = particle.data.xAcceleration; // Slugginess

          // Range values
          var rectMin = o.data.rect.xMin;
          var rectMax = o.data.rect.xMax;
          var particleMin = particle.data.xMin;
          var particleMax = particle.data.xMax;

          // Get a new particle position on particle range based on rects position on rect range
          var nextX = map(rectX, rectMin, rectMax, particleMin, particleMax) + particle.data.xOffset;
          var modifiedVal = currentX + (nextX - currentX) * acc;
          return modifiedVal;
        },

        y: function(y, particle) {
          
          // Move particle vertically on y range
          var ticker = o.data.ticker;
          var sineSpeed = particle.data.sineSpeed;
          var yMin = particle.data.y * (1 - normalisedIndex) - particle.data.yVariation;
          var yMax = particle.data.y * (1 - normalisedIndex) + particle.data.yVariation;

          // Make a wave with unique speed
          var wave = Math.sin(ticker/sineSpeed);

          // Get a value on y range based on wave on wave range
          var modifiedVal = map(wave, -1, 1, yMin, yMax);

          return modifiedVal;
        },

        scaleX: function(scale, particle) {
          // Scale particle up and down
          var ticker = o.data.ticker;
          var sineSpeed = particle.data.sineSpeed;
          var scaleX = particle.data.scale;
          var scaleVariation = particle.data.scaleVariation;
          var scaleMin = scaleX - scaleVariation; // Make this acutal min value
          var scaleMax = scaleX + scaleVariation;

          // Make a wave with unique speed
          var wave = Math.sin(ticker/sineSpeed);

          // Get a value on y range based on wave on wave range
          var newScaleX = map(wave, -1, 1, scaleMin, scaleMax);

          var index = o.data.particles.count - particleIndex-1;
          var val = o.data.scales.particles[index].value;
        
          return newScaleX + newScaleX * val;
        },
        scaleY: function(scale, particle) {
          // Scale particle up and down
          var ticker = o.data.ticker;
          var sineSpeed = particle.data.sineSpeed;
          var scaleY = particle.data.scale;
          var scaleVariation = particle.data.scaleVariation;
          var scaleMin = scaleY - scaleVariation;
          var scaleMax = scaleY + scaleVariation;

          // Make a wave with unique speed
          var wave = Math.sin(ticker/sineSpeed);

          // Get a value on y range based on wave on wave range
          var newScaleY = map(wave, -1, 1, scaleMin, scaleMax);
        
          var index = o.data.particles.count - particleIndex-1;
          var val = o.data.scales.particles[index].value;
        
          return newScaleY + newScaleY * val;
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
    ticker: 0,
    particles: {
      count: 20
    },
    rotations: {
      pContainer: [225, 315, 135, 45]
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
        x: [ random(50,60), -random(50,60), random(50,60), -random(50,60) ],
        y: [ random(50,60), random(50,60), -random(50,60), -random(50,60) ]
      }
    },
    scales: {
      rectAnt: [ 0.86, 0.83, 0.88, 0.8],
      charCont: [ 0.7, 0.65, 0.8, 0.75 ],
      particles: [
        {value: 0 },
        {value: 0 },
        {value: 0 },
        {value: 0 },
        {value: 0 },
        {value: 0 },
        {value: 0 },
        {value: 0 },
        {value: 0 },
        {value: 0 },
        {value: 0 },
        {value: 0 },
        {value: 0 },
        {value: 0 },
        {value: 0 },
        {value: 0 },
        {value: 0 },
        {value: 0 },
        {value: 0 },
        {value: 0 }
        ]
    },
    colors: {
      rects: [ "#4068B1", "#00BFE7", "#EF4223", "#D12368" ],
      charCont: [ "hsl(200,100,100)", "hsl(200,100,97)", "hsl(200,100,92)", "hsl(200,100,94)" ]
    },
    rect: {
      xMin: 0,
      xMax: 175,
      current: {}
    }
  },
  init: function(id) {
    o.createSVG(id);
    o.cacheDOM();
    o.settings();
    o.bindEvents();
    o.createParticles();
    o.start();
  },
  createSVG: function(id) {
    var rectNames = [ "rectS2", "rectS", "rectM", "rectD"];
    var charNames = [ "charS2", "charS", "charM", "charD"];

    var rectPaths = ['M312 312h288v288H312z', 'M0 312h288v288H0z', 'M312 0h288v288H312z', 'M0 0h288v288H0z'];

    // Make SVG element
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    document.querySelector("#" + id).appendChild(svg);

    svg.setAttribute("data-dmss", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("xlinkns", "http://www.w3.org/1999/xlink");
    svg.setAttribute("viewBox", "0 0 600 600");
    svg.setAttribute("style", "position: absolute; overflow: visible; opacity: 0;");

    // Make particle group
    var particleGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    particleGroup.setAttribute("data-dmss", "particles");
    particleGroup.setAttribute("opacity", "0");
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

    if ( array === o.elements ) {
      o.el = {};
      obj = o.el;
      
      for (i = 0; i < len; i++) {
        obj[ array[i] ] = parent.querySelector("[data-" + name + "=" + array[i] + "]");
      }
    } else if ( array === o.lists ) {
      o.list = {};
      obj = o.list;
      
      for (i = 0; i < len; i++) {
        obj[ array[i] ] = parent.querySelectorAll("[data-" + name + "=" + array[i] + "]");
      }
    } else {
      console.error("Tried to create references on invalid array. Valid arrays: o.elements, o.lists");
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
    master.play().timeScale(1);
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

    var tl = new TimelineMax({ paused: false, onUpdate: o.recordValues });

    tl
      .add("anticipation", 0)
      .to([group, particles], 0.8, { rotation: -5, ease: Power3.easeInOut }, "anticipation")
      .staggerTo(rects, 0.8, { cycle: { x: o.data.positions.rectAnt.x, y: o.data.positions.rectAnt.y }, scale: 0.9, ease: Power3.easeInOut }, 0, "anticipation")

      .add("spin")
      .to([group, particles], 1.3, { rotation: 315, ease: Power4.easeInOut }, "spin")

      .add("expand", "anticipation =+1.3")
      .staggerTo(rects, 0.8, { cycle: { x: o.data.positions.rectExp.x, y: o.data.positions.rectExp.y }, scale: 0.6, ease: Back.easeIn.config(5) }, 0, "expand")
      .set(particles, { autoAlpha: 1 }, "expand =+0.5")

      .add("idle", "spin =+1.3")
      .to([group, particles], 5, { rotation: "-=15", ease: Linear.easeNone }, "idle")
      .staggerTo(rects, 1, { scale: 0.59, ease: Power1.easeInOut }, 0, "idle")
      .staggerTo(rects, 0.5, { scale: 0.65, ease: Power2.easeIn }, 0, "idle =+1")
      .staggerTo(rects, 0.5, { scale: 0.63, ease: Power1.easeOut }, 0, "idle =+1.5")

      .staggerTo(rects, 1, { scale: 0.59, ease: Power1.easeInOut }, 0, "idle =+2.5")
      .staggerTo(rects, 0.5, { scale: 0.65, ease: Power2.easeIn }, 0, "idle =+3.5")
      .staggerTo(rects, 1, { scale: 0.6, ease: Power1.easeOut }, 0, "idle =+4")

      .staggerTo( o.data.scales.particles, 0.4, { value: 1, ease: Power1.easeInOut, repeat: 1, yoyo:true }, 0.05, "idle =+1.15")
      .staggerTo( o.data.scales.particles, 0.4, { value: 1, ease: Power1.easeInOut, repeat: 1, yoyo:true }, 0.05, "idle =+3.75")

      .add("contraction", "idle =+5")
      .to([group, particles], 0.8, { rotation: 360, ease: Power4.easeInOut }, "contraction")
      .to(particles, 0, { autoAlpha: 0 }, "contraction =+0.4")
      .staggerTo(rects, 0.7, { x: 0, y: 0, scale: 1, ease: Back.easeOut.config(2) }, 0, "contraction")
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
      .to(group, 0.8, { rotation: -5, ease: Power3.easeInOut }, "anticipation")
      .staggerTo(chars, 0.8, { cycle: { x: o.data.positions.charAnt.x, y: o.data.positions.charAnt.y }, scale: 0.9, ease: Power3.easeInOut }, 0, "anticipation")
      
      .add("spin")
      .to(group, 1.3, { rotation: "+=355", ease: Power4.easeInOut }, "spin")
      
      .add("contraction", "spin =+0.5")
      .staggerTo(chars, 0.8, { cycle: { x: o.data.positions.charCont.x, y: o.data.positions.charCont.y }, ease: Back.easeOut.config(1) }, 0, "contraction")
      .staggerTo(chars, 0.4, { scale: 0.4, ease: Power4.easeInOut }, 0, "contraction")
      .staggerTo(chars, 0.3, { cycle: { morphSVG: o.data.paths.morph } }, 0, "contraction")

      .add("idle")
      .staggerTo(chars, 1.25, { scale: 0, ease: Power1.easeInOut, repeat: 3, yoyo: true }, 0.15, "spin =+0.9") // 5.45 duration
      .to(group, 1.25, { scale: 1.5, ease: Power1.easeInOut, repeat: 3, yoyo:true }, "spin =+0.9")
      .to(group, 5, { rotation: "+=200", ease: Linear.easeNone }, "idle")

      
      .add("morphBack", "idle =+5")
      .to(group, 0.5, { rotation: 720, ease: Power1.easeInOut }, "morphBack")

      .staggerTo(chars, 0.5, { cycle: { morphSVG: o.data.paths.original }, rotation: 0 }, 0, "morphBack =+0.1")
      
      .staggerTo(chars, 0.5, { scale: 1, ease: Power4.easeInOut }, 0, "morphBack =+0.2")
      .staggerTo(chars, 0.5, { x: 0, y: 0, ease: Power4.easeInOut }, 0, "morphBack =+0.2")

      .set(group, { rotation: 0 })
    ;
    
    return tl;
  },
  recordValues: function() {
    o.data.rect.current = o.el.rectD._gsTransform;
    o.data.ticker++;
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

function random(min, max) {
  if (max === null) { max = min; min = 0; }
  return Math.random() * (max - min) + min;
}

function map(value, sourceMin, sourceMax, destinationMin, destinationMax) {
  return destinationMin + (destinationMax - destinationMin) * ((value - sourceMin) / (sourceMax - sourceMin)) || 0;
}