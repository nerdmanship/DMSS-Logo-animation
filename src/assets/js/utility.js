function random(min, max) {
  if (max === null) { max = min; min = 0; }
  return Math.random() * (max - min) + min;
}

function map(value, sourceMin, sourceMax, destinationMin, destinationMax) {
  return destinationMin + (destinationMax - destinationMin) * ((value - sourceMin) / (sourceMax - sourceMin)) || 0;
}

// exponential index normalization = index^pow / count^pow
function expNorm(val, min, max, power) {
  var expValue = Math.pow((val-min), power);
  var expRange = Math.pow((max-min), power);

  // Test this to make sure...
  return expValue/expRange;
}

function degreesToRads(degrees) {
  return degrees * Math.PI / 180;
}

function radsToDegrees(rads) {
  return rads / Math.PI * 180;
}

/*

data = {
  x: [],
  y: [],
  scale: []
}

TweenMax.staggerFromTo(obj.property, 1, { obj.property.value[i]: 0 }, { obj.property.value[i]: 1 }, 0.1)

*/

/*

extend particle class

followLeader(leader, acceleration) {
  
}

*/