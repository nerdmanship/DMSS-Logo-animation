// var CSS_COLOR_NAMES = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];

// Check pub-sub pattern and rework event listeners
// Make class related functionality into methods of extended classes
  // findZofTarget method of Proxy
  // SvgNode extends Proxy
    // SvgNode : updateContainerStyles
  // ParticleNode extends SvgNode
// Make particle button class
  // Options: particleRadius, particleCount, particleColors animation{}


var els = [];

function animateButton(id, count) {

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

  
  bindBtnEvents(proxy);
}

function addParticles(el) {
  for ( var i = 0; i < el.proxy.count; i++) {

    var p = new ParticleNode("8", el.proxy.w/2, el.proxy.h/2);
    
    p.setColor(el.proxy.colors[randomInt(0, el.proxy.colors.length -1 )]);
    
    p.appendTo(el.target);
    el.proxy.particles.push(p);
    
    //p.animate();
  }
}


function bindBtnEvents(proxy) {
  
  var svg = document.querySelector("[data-dmss=svg]");

  window.addEventListener("resize", function() { resize(); });
  
  // Button interaction: over, out and click
  proxy.element.addEventListener("mouseover", function(proxy) { 
    setInteractionFactor("over", proxy);
   });
  proxy.element.addEventListener("mouseout", function(proxy) { 
    setInteractionFactor("out", proxy);
   });
  proxy.element.addEventListener("mousedown", function(proxy) { 
    setInteractionFactor("down", proxy);
   });
  proxy.element.addEventListener("mouseup", function(proxy) { 
    setInteractionFactor("up", proxy);
   });
  // Button interaction: over, out and click
  svg.addEventListener("mouseover", function(proxy) { 
    setInteractionFactor("over", proxy);
   });
  svg.addEventListener("mouseout", function(proxy) { 
    setInteractionFactor("out", proxy);
   });
  svg.addEventListener("mousedown", function(proxy) { 
    setInteractionFactor("down", proxy);
   });
  svg.addEventListener("mouseup", function(proxy) { 
    setInteractionFactor("up", proxy);
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
    els.forEach(function(el) {
      for(var i = 0; i < el.proxy.count; i++) {
        el.proxy.particles[i].interactionFactor = factor;
      }
    });

  }
}

function resize() {
  els.forEach(function(el) {
    el.proxy.updateData();
    el.updateFromProxy();
  });
}









/*

// createContainer(proxy);

function createContainer(proxy) {
  //proxy.parent = new SvgNode(proxy.w, proxy.h);
  //proxy.parent.prependIn(document.body);
  //updateContainerStyles(proxy);
  //addParticles(proxy);
}

function updateElement(el) {
  //el.updateFromProxy();
}


function updateTargets() {
  proxies.forEach(function(proxy) {
    
  });
}

*/