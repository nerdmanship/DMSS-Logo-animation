class Proxy {
  
  constructor(id) {
    this.parentElement = document.querySelector("#" + id); // master of proxy
    this.x = 0; // x position
    this.y = 0; // y position
    this.z = 0; // z-index
    this.w = 0; // width
    this.h = 0; // height
    this.cx = 0; // center x
    this.cy = 0; // center y
    this.updateData();
  }
  
  updateData() {
    this.y = window.pageYOffset + this.parentElement.getBoundingClientRect().top;
    this.x = window.pageXOffset + this.parentElement.getBoundingClientRect().left;
    this.z = this.findElementZ() - 1;
    this.w = this.parentElement.offsetWidth;
    this.h = this.parentElement.offsetHeight;
    this.cx = this.x + this.w/2;
    this.cy = this.y + this.h/2;
  }

  findElementZ() {
    var z;
    var elZ = window.getComputedStyle(this.parentElement).getPropertyValue("z-index");
    if (isNaN(elZ)) {
        z = 0;
        throw "Error: Button must have a set z-index value.";
    } else {
        z = elZ;
    }

    return z;
  }

}



