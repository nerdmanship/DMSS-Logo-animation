class ParticleNode {
  
  constructor(radius, cx, cy) {

    this.target = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    this.target.setAttribute("r", radius);
    
    if (cx && cy) {
      this.target.setAttribute("cx", cx);
      this.target.setAttribute("cy", cy);
    }
  }

  appendTo(parent) {
    parent.appendChild(this.target);
  }

  animate(obj) {
    var p = this;
    var spread = 1.75;

    this.orbit = random(5, 30);
    this.pointX = obj.w/spread * random(-1, 1);
    this.pointY = obj.h/spread * random(-1, 1);
    this.sin = random(0, 2 * Math.PI );
    this.cos = random(0, 2 * Math.PI );
    this.acc = random(0.03, 0.2);
    this.speed = random(0.005, 0.01);
    this.interactionFactor = 0;

    function getVal(target, attr) {
      
      var orbit = p.orbit * p.interactionFactor;
      var acc = p.acc;
      var current, wave, point;

      if (attr === "x") {
        current = target._gsTransform.x;
        wave =  p.sin;
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
      x: function(x, target) { return getVal(target, "x"); },
      y: function(y, target) { return getVal(target, "y"); },
      scaleX: function() { return Math.cos(p.cos); },
      scaleY: function() { return Math.cos(p.cos); }
    }});

  }

}

class SvgNode {
  constructor(w, h) {
    this.target = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.target.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    this.target.setAttribute("xlinkns", "http://www.w3.org/1999/xlink");
    this.target.setAttribute("viewBox", "0 0 " + w + " " + h);
  }
  
  appendTo(parent) {
    parent.appendChild(this.target);
  }

  prependFirstChildOf(parent) {
    parent.insertBefore(this.target, parent.childNodes[0]);
  }

  style(string){
    this.target.setAttribute("style", "overflow: visible; position: absolute; " + string);
  }

  setDepth(z) {
    var string = this.target.getAttribute("style");
    this.target.setAttribute("style", string + " z-index: " + z + ";");
  }
}