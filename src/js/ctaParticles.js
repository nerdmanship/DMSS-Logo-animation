function expandBtnParticles() {
  var len = btnParticles.length;
  var i = 0;

  for ( ; i < len; i++) {
    var p = btnParticles[i];
    TweenMax.to(p.target, 1, { y: p.yMax, x: p.xMax });
  }
}


function contractBtnParticles() {
  var len = btnParticles.length;
  var i = 0;

  for ( ; i < len; i++) {
    var p = btnParticles[i];
    TweenMax.to(p.target, 1, { y: 0, x: 0 });
  }
}