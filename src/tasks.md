# DEFINITION
* When the logo animation stops, the cta animation starts
* Particles are born below the button
* Particles have same colors and scale variations as in logo
* Expands with same force as logotype contracts
* Floats softly around the button
* Contracts when the logo animation starts
* Contracts with same force as logotype expands

# TASKS
## Get needed data
* Check button in dmss.io and make replica 
* Find button position and dimensions dynamically
* Get position on call and update on resize

## Functionality for one
* Generate a particle at button center
* Expand at right time
* Expand to random position on a x-range and y-range based on buttons dimensions
* Contract at right time

## Functionality for all
* Generate multiple particles
* Apply timing of expansion
* Apply random position on particle range
* Apply timing of contraction

## Add idle float animation
* All particles move randomly around a point all the time
* Add modifiers plugin with a switch
* If playing, move value to 0
* Not playing, organic movement

## Make interactive
* Hover logo - factor : 0.9
* Unhover logo - factor : 1
* Click logo - factor : 0.8
* Hover button - factor : 0.9
* Unhover button - factor : 1
* When logo expands - factor : 0
* When logo contracts - factor : 1

## Functionality, usability, aestetics, tweak, API

## Make private?


* Check pub-sub pattern and rework event listeners
* Make class related functionality into methods of extended classes
  * findZofTarget method of Proxy
* SvgNode extends Proxy
  * SvgNode : updateContainerStyles
* ParticleNode extends SvgNode
* Make particle button class
  * Options: particleRadius, particleCount, particleColors animation{}

## Break apart classes
* Make ParticleNode pure
  * Extend to Animated
  * Extend Animated to Interactive