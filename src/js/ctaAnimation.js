// @codekit-prepend '../assets/js/Proxy';
// @codekit-prepend '../assets/js/SvgNode';
// @codekit-prepend '../assets/js/ParticleNode';


var animateButton = (function(id, count) {
  
  var els = [];

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

  bindEvents();


function addParticles(el) {
  for ( var i = 0; i < el.proxy.count; i++) {
    var color = el.proxy.colors[randomInt(0, el.proxy.colors.length -1 )]; 
    var p = new ParticleNode("8");
    el.proxy.particles.push(p);
    
    p.setPositionData(el.proxy.w/2, el.proxy.h/2);
    p.setColor(color);
    p.setAnimationData();
    p.setInteractionData();
    p.updateFromProxy(el.proxy);
    p.swarm();
    
    p.appendTo(el.target);
  }
}

function bindEvents() {
  els.forEach(function(el) {
    el.proxy.parentElement.addEventListener("mouseover", function(e) { filterEvent(e); });
    el.proxy.parentElement.addEventListener("mouseout", function(e) { filterEvent(e); });
    el.proxy.parentElement.addEventListener("mousedown", function(e) { filterEvent(e); });
    el.proxy.parentElement.addEventListener("mouseup", function(e) { filterEvent(e); });
  });
  events.on("logoInteraction", filterEvent);
  events.on("logoMotion", filterEvent);
  window.addEventListener("resize", updateElements);
}

function filterEvent(data) {
  // Set event to mouse event or timeline event
  var event = data.type || data;

  switch (event) {
  case 'mouseover':
  case 'mouseup':
    if ( !o.data.playing ) {
      updateParticles(0.9);
    }
    break;
  case 'mouseout':
    if ( !o.data.playing ) {
      updateParticles(1);
    }
    break;
  case 'mousedown':
    if ( !o.data.playing ) {
      updateParticles(0.8);
    }
    break;
  case 'expansion':
    if ( o.data.playing ) {
      updateParticles(0);
    }
    break;
  case 'contraction':
    if ( o.data.playing ) {
      updateParticles(1);
    }
    break;
  }
}

function updateParticles(data) {
  els.forEach(function(el) {
  
    el.proxy.particles.forEach(function(p) {
      p.setInteractionData(data);
    });
  
  });
}

function updateElements() {
  els.forEach(function(el) {
    el.proxy.updateData();
    el.updateFromProxy();
  });
}

});