"use strict";

function createBtnParticles(obj) {
  p = new ParticleNode("10", obj.w / 2, obj.h / 2);
  p.target.setAttribute("fill", o.data.colors.rects[randomInt(0, 3)]);
  p.appendTo(particleContainer.target);
}
