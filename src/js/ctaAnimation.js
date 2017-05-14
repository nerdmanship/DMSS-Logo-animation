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

  // Add idle float animation
    // All particles move randomly around a point all the time
    // Add modifiers plugin with a switch
      // If playing, move value to 0
      // Not playing, organic movement




// @codekit-prepend '../assets/js/particles';
// @codekit-prepend 'ctaSetup';
// @codekit-prepend 'ctaParticles';

ctaAnimation("button");