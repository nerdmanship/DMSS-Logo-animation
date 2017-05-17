"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SvgNode = function () {
  function SvgNode() {
    _classCallCheck(this, SvgNode);

    this.target = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.target.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    this.target.setAttribute("xlinkns", "http://www.w3.org/1999/xlink");
    this.target.setAttribute("style", "overflow: visible; position: absolute;");
  }

  _createClass(SvgNode, [{
    key: "appendTo",
    value: function appendTo(parent) {
      parent.appendChild(this.target);
    }
  }, {
    key: "prependIn",
    value: function prependIn(parent) {
      parent.insertBefore(this.target, parent.childNodes[0]);
    }
  }, {
    key: "setViewbox",
    value: function setViewbox(x, y, w, h) {
      this.target.setAttribute("viewBox", x + " " + y + " " + w + " " + h);
    }
  }, {
    key: "setPosition",
    value: function setPosition(x, y) {
      this.target.setAttribute("left", x);
      this.target.setAttribute("top", y);
    }
  }, {
    key: "setDimensions",
    value: function setDimensions(w, h) {
      this.target.setAttribute("width", w);
      this.target.setAttribute("height", h);
    }
  }, {
    key: "setDepth",
    value: function setDepth(z) {
      this.target.setAttribute("z-index", z);
    }

    // Break out to own extended class : particleContainer

  }, {
    key: "addParticles",
    value: function addParticles(count) {}

    // Break out to own extended class

  }, {
    key: "addProxy",
    value: function addProxy(obj) {
      this.proxy = obj;
    }

    // Break out to own extended class

  }, {
    key: "updateViewboxFromProxy",
    value: function updateViewboxFromProxy() {
      this.setViewbox(0, 0, this.proxy.w, this.proxy.h);
    }
  }, {
    key: "updateFromProxy",
    value: function updateFromProxy() {
      var string = "overflow: visible; position: absolute; height: " + this.proxy.h + "px; width: " + this.proxy.w + "px; top: " + this.proxy.y + "px; left: " + this.proxy.x + "px; z-index: " + this.proxy.z + ";";
      this.target.setAttribute("style", string);
    }
  }]);

  return SvgNode;
}();
