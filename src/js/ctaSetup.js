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
  var styles = `top: ${obj.y}px; left: ${obj.x}px; width: ${obj.w}px; height: ${obj.h}px;`;
  particleContainer.style(styles);
  particleContainer.setDepth(100);
}

function createBtnParticles() {
  for ( var i = 0; i < countBtnParticles; i++) {
    var p = new ParticleNode("8", obj.w/2, obj.h/2);
    p.target.setAttribute("fill", o.data.colors.rects[randomInt(0,3)]);
    
    
    p.appendTo(particleContainer.target);
    btnParticles.push(p);
    
    p.animate(obj);
  }
}


function bindBtnEvents() {
  var btn = obj.target;
  var svg = document.querySelector("[data-dmss=svg]");

  window.addEventListener("resize", function() { resize(); });
  
  // Button interaction: over, out and click
  btn.addEventListener("mouseover", function() { 
    setInteractionFactor("over");
   });
  btn.addEventListener("mouseout", function() { 
    setInteractionFactor("out");
   });
  btn.addEventListener("mousedown", function() { 
    setInteractionFactor("down");
   });
  btn.addEventListener("mouseup", function() { 
    setInteractionFactor("up");
   });
  // Button interaction: over, out and click
  svg.addEventListener("mouseover", function() { 
    setInteractionFactor("over");
   });
  svg.addEventListener("mouseout", function() { 
    setInteractionFactor("out");
   });
  svg.addEventListener("mousedown", function() { 
    setInteractionFactor("down");
   });
  svg.addEventListener("mouseup", function() { 
    setInteractionFactor("up");
  });
}

function setInteractionFactor(type) {
  var factor;
  var update = false;

  switch (type) {
  case 'over':
    if ( !o.data.playing ) {
      factor = 0.9;
      update = true;
    }
    break;
  case 'out':
    if ( !o.data.playing ) {
      factor = 1;
      update = true;
    }
    break;
  case 'down':
    if ( !o.data.playing ) {
      factor = 0.8;
      update = true;
    }
    break;
  case 'up':
    if ( !o.data.playing ) {
      factor = 0.9;
      update = true;
    }
    break;
  case 'expand':
    if ( o.data.playing ) {
      factor = 0;
      update = true;
    }
    break;
  case 'contract':
    if ( o.data.playing ) {
      factor = 1;
      update = true;
    }
    break;
  default:
    update = false;
  }

  // Apply factor
  if (update) {
    
    for(var i = 0; i < countBtnParticles; i++) {
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
  setTimeout(function() {
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