class ParticleNode {
  
  constructor(radius) {
    this.target = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    this.target.setAttribute("r", radius);
  }

  appendTo(parent) {
    parent.appendChild(this.target);
  }

  setPositionData(cx, cy) {
    this.target.setAttribute("cx", cx);
    this.target.setAttribute("cy", cy);
  }

  setColor(color) {
    this.target.setAttribute("fill", color);
  }

  setAnimationData() {
    this.orbit = random(5, 30);
    this.sin = random(0, 2 * Math.PI );
    this.cos = random(0, 2 * Math.PI );
    this.acc = random(0.03, 0.2);
    this.speed = random(0.005, 0.01);
  }

  setInteractionData(data) {
    var factor = data || 0;
    this.interactionFactor = factor;
  }

  updateFromProxy(proxy) {
    this.pointX = proxy.w/1.75 * random(-1, 1);
    this.pointY = proxy.h/1.75 * random(-1, 1);
  }

  swarm() {
    var p = this;

    TweenMax.to(this.target, 1, { x: 1, y: 1, scaleX: 1, scaleY: 1, transformOrigin: "center", repeat: -1, modifiers: {
      x: function(x, target) { return p.getVal(target, "x"); },
      y: function(y, target) { return p.getVal(target, "y"); },
      scaleX: function() { return Math.cos(p.cos); },
      scaleY: function() { return Math.cos(p.cos); }
    }});

  }

  getVal(target, attr) {

        var orbit = this.orbit * this.interactionFactor;
        var acc = this.acc;
        var current, wave, point;

        if (attr === "x") {
          current = target._gsTransform.x;
          wave =  this.sin;
          point = this.pointX * this.interactionFactor;
          this.sin += this.speed;
        } else if (attr === "y") {
          current = target._gsTransform.y;
          wave = this.cos;
          point = this.pointY * this.interactionFactor;
          this.cos += this.speed;
        }
              
        var dest = orbit * Math.sin(wave) + point;
        var newVal = current + (dest - current) * acc;
        
        return newVal;
      }
}

