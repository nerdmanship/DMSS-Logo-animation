"use strict";

function expandBtnParticles() {
  var len = btnParticles.length;
  var i = 0;

  for (; i < 1; i++) {
    var p = btnParticles[i];
    TweenMax.to(p.target, 1, { x: 1, y: 1, scale: 1, repeat: -1, modifiers: {
        x: function x(_x, target) {

          var current = target._gsTransform.x;

          // Point and radius around point depending on state of animation
          var rad = o.data.playing ? p.minRadX : p.maxRadX;
          var point = o.data.playing ? p.minPointX : p.maxPointX;

          // Defining next destination for particle
          var nextX = rad * Math.sin(p.sinX) + point;

          // New X towards next X
          var newX = current + (current - nextX) * p.acc;

          // update values for next iteration
          p.sinX = +p.speed;

          return newX;
        }
      } });
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

/*
TweenMax.to(p.target, 1, { x: 1, y: 1, scale: 1, repeat: -1, modifiers: {
    x: function(x, p) {
      var rad = (playing) ? p.minRadX : p.maxRadX;
      var point = (playing) ? p.minPointX : p.maxPointX;

      var next = rad * Math.sin(p.sinX) + point;

      var newX = p.current + (p.current - next) * p.acc;

      sinX =+ 0.1;
      current = newX;

      return newX;
     
    },
    y: function(y, p) {
     return 1; 
    },
    scale: function(scale, p) {
     return 1; 
    }
  }
});


Attach to p object:
currentX: this.target._gsTransform.x,
minRadX: 0,
maxRadX: random(10, 20),
minPointX: 0,
maxPointX: obj.w * random(-1, 1),
sinX: random(0, 2 * Math.PI ),
cosY: random(0, 2 * Math.PI ),
acc: random(0.1, 0.2),
speed: random(0.1, 0.2)
*/
