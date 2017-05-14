"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Target = function () {
  function Target(id) {
    _classCallCheck(this, Target);

    this.target = document.querySelector("#" + id);
    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;
    this.cx = 0;
    this.cy = 0;
    this.updateData();
  }

  _createClass(Target, [{
    key: "updateData",
    value: function updateData() {
      // pixels from top
      this.y = window.pageYOffset + this.target.getBoundingClientRect().top;
      // pixels from left
      this.x = window.pageXOffset + this.target.getBoundingClientRect().left;
      // width of el
      this.w = this.target.offsetWidth;
      // height of el
      this.h = this.target.offsetHeight;
      // particle center
      this.cx = this.x + this.w / 2;
      this.cy = this.y + this.h / 2;
    }
  }]);

  return Target;
}();
