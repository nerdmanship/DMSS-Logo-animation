var count = 20;
var rects = [];

rects.forEach(createParticles);

function createParticles(rect) {
  for (var i = 0; i < count; i++) {
    new Particle(rect);
  }
}

class Particle {
  
  constructor(parent) {

    this.target = $(`<div class="box"/>`);
    this.timeline = new TimelineMax();

    this.scaleX = parent._gsTransform.scaleX;
    this.scaleY = parent._gsTransform.scaleY;
  }

}

new Particle (rectD)
// class
// circle
// radius: fixed

// parent_x
// parent_y
// parent_scale
// parent_color



class Box {
  
  constructor(width, height, color) {
    
    this.target = $(`<div class="box"/>`);
    this.timeline = new TimelineMax({ autoRemoveChildren: true });

    TweenLite.set(this.target, { 
      width: width, 
      height: height, 
      backgroundColor: color 
    });
  }
  
  appendTo(parent) {
    this.target.appendTo(parent);
    return this;
  }
  
  setPosition(x, y) {
    TweenLite.set(this.target, { x: x, y: y });
    return this;
  }
  
  moveTo(x, y) {
    this.timeline.to(this.target, 1, { x: x, y: y });
    return this;
  }
}

var stage = $(`<div class="stage" />`).appendTo(document.body);

var box = new Box(100, 100, "blue");

box
  .appendTo(stage)
  .setPosition(200, 300)
  .moveTo(0, 100)
  .moveTo(100, 0)
  .moveTo(200, 200)
  
console.log("BOX", box);