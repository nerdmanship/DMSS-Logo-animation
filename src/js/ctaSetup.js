
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
  for ( var i = 0; i < 40; i++) {
    var p = new ParticleNode("10", obj.w/2, obj.h/2);
    p.target.setAttribute("fill", o.data.colors.rects[randomInt(0,3)]);
    p.xMax = obj.w * random(-1,1);
    p.yMax = obj.h * random(-1,1);

    p.appendTo(particleContainer.target);
    btnParticles.push(p);
  }
}


function bindBtnEvents() {
  window.addEventListener("resize", function() { resize(); });
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