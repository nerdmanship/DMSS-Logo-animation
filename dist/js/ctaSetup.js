"use strict";

var targets = [];
var particleContainer;
var p;

function createParticleTarget() {
  var el = new Target("button");
  return el;
}

function bindEvents() {
  window.addEventListener("resize", function () {
    resize(btn);
  });
}

function resize(obj) {
  updateTargets(obj);
  setTimeout(function () {
    styleParticleContainer(obj);
  }, 50);
}

function updateTargets() {
  target.updateData();
}

function styleParticleContainer(obj) {
  var styles = "top: " + obj.y + "px; left: " + obj.x + "px; width: " + obj.w + "px; height: " + obj.h + "px;";
  particleContainer.style(styles);
  particleContainer.setDepth(100);
}

function createParticleContainer(obj) {
  particleContainer = new SvgNode(obj.w, obj.h);
  particleContainer.prependFirstChildOf(document.body);
}
