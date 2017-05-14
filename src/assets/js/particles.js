class ParticleNode {
  
  constructor(radius, cx, cy) {

    this.target = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    this.target.setAttribute("r", radius);
    
    if (cx && cy) {
      this.target.setAttribute("cx", cx);
      this.target.setAttribute("cy", cy);
    }
  }

  appendTo(parent) {
    parent.appendChild(this.target);
  }

}

class SvgNode {
  constructor(w, h) {
    this.target = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.target.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    this.target.setAttribute("xlinkns", "http://www.w3.org/1999/xlink");
    this.target.setAttribute("viewBox", "0 0 " + w + " " + h);
  }
  
  appendTo(parent) {
    parent.appendChild(this.target);
  }

  prependFirstChildOf(parent) {
    parent.insertBefore(this.target, parent.childNodes[0]);
  }

  style(string){
    this.target.setAttribute("style", "overflow: visible; position: absolute; " + string);
  }

  setDepth(z) {
    var string = this.target.getAttribute("style");
    this.target.setAttribute("style", string + " z-index: " + z + ";");
  }
}