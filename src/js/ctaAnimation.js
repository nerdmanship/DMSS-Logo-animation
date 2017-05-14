// DEFINITION
// When the logo animation stops, the cta animation starts
// Particles are born below the button
// Particles have same colors and scale variations as in logo
// Expands with same force as logotype contracts
// Floats softly around the button
// Contracts when the logo animation starts
// Contracts with same force as logotype expands

// TASKS

// Get needed data
  // Check button in dmss.io and make replica 
  // Find button position and dimensions dynamically
    // Get position on call and update on resize


// Functionality for one
  // Generate a particle at button center
  // Expand at right time
    // Expand to random position on a x-range and y-range based on buttons dimensions
  // Contract at right time

// Functionality for all
  // Generate multiple particles
  // Apply timing of expansion
    // Apply random position on particle range
  // Apply timing of contraction






var targets = [];
var btn = new Target("button");
targets.push(btn);

window.addEventListener("resize", updateTargets);

function updateTargets() {
  targets.forEach(function(target){
    target.updateData();
  });
}
var svgNode = new svgNode(btn.cx, btn.cy);
svgNode.appendTo(document.body);

var p = new Particle2("20");
p.target.setAttribute("fill", "black");
p.appendTo(svgNode.target);