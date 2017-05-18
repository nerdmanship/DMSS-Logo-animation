class SvgNode {
  constructor() {
    this.target = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.target.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    this.target.setAttribute("xlinkns", "http://www.w3.org/1999/xlink");
    this.target.setAttribute("style", "overflow: visible; position: absolute;");
  }
  
  appendTo(parent) {
    parent.appendChild(this.target);
  }

  prependIn(parent) {
    parent.insertBefore(this.target, parent.childNodes[0]);
  }

  setViewbox(x, y, w, h) {
    this.target.setAttribute("viewBox", x + " " + y + " " + w + " " + h);
  }

  setPosition(x, y) {
    this.target.setAttribute("left", x);
    this.target.setAttribute("top", y);
  }

  setDimensions(w, h) {
    this.target.setAttribute("width", w);
    this.target.setAttribute("height", h);
  }

  setDepth(z) {
    this.target.setAttribute("z-index", z);
  }

  // Break out to own extended class : particleContainer
  addParticles(count) {

  }

  // Break out to own extended class
  addProxy(obj) {
    this.proxy = obj;
    this.target.setAttribute("id", "proxyOf" + obj.parentElement.id);
  }
  
  // Break out to own extended class
  updateViewboxFromProxy() {
    this.setViewbox(0, 0, this.proxy.w, this.proxy.h);
  }

  updateFromProxy() {
    var string = `overflow: visible; position: absolute; height: ${this.proxy.h}px; width: ${this.proxy.w}px; top: ${this.proxy.y}px; left: ${this.proxy.x}px; z-index: ${this.proxy.z};`;
    this.target.setAttribute("style", string);
  }
}