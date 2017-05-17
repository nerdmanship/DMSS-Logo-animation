"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Proxy = function () {
  function Proxy(id) {
    _classCallCheck(this, Proxy);

    this.element = document.querySelector("#" + id); // master of proxy
    this.x = 0; // x position
    this.y = 0; // y position
    this.z = 0; // z-index
    this.w = 0; // width
    this.h = 0; // height
    this.cx = 0; // center x
    this.cy = 0; // center y
    this.updateData();
  }

  _createClass(Proxy, [{
    key: "updateData",
    value: function updateData() {
      this.y = window.pageYOffset + this.element.getBoundingClientRect().top;
      this.x = window.pageXOffset + this.element.getBoundingClientRect().left;
      this.z = this.findElementZ() - 1;
      this.w = this.element.offsetWidth;
      this.h = this.element.offsetHeight;
      this.cx = this.x + this.w / 2;
      this.cy = this.y + this.h / 2;
    }
  }, {
    key: "findElementZ",
    value: function findElementZ() {
      var z;
      var elZ = window.getComputedStyle(this.element).getPropertyValue("z-index");
      if (isNaN(elZ)) {
        z = 0;
        throw "Error: Button must have a set z-index value.";
      } else {
        z = elZ;
      }

      return z;
    }
  }]);

  return Proxy;
}();
