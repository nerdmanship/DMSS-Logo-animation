class Particle2 {
  
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

class svgNode {
  constructor(w, h) {
    this.target = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.target.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    this.target.setAttribute("xlinkns", "http://www.w3.org/1999/xlink");
    this.target.setAttribute("viewBox", "0 0 " + w + " " + h);
  }
  
  appendTo(parent) {
    parent.appendChild(this.target);
  }
}