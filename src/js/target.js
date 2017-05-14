class Target {
  
  constructor(id) {
    this.target = document.querySelector("#" + id);
    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;
    this.cx = 0;
    this.cy = 0;
    this.updateData();
  }
  
  updateData() {
    // pixels from top
    this.y = window.pageYOffset + this.target.getBoundingClientRect().top;
    // pixels from left
    this.x = window.pageXOffset + this.target.getBoundingClientRect().left;
    // width of el
    this.w = this.target.offsetWidth;
    // height of el
    this.h = this.target.offsetHeight;
    // particle center
    this.cx = this.x + this.w/2;
    this.cy = this.y + this.h/2;
  }
}