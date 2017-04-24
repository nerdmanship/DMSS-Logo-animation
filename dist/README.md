# Logo animation for DMSS – Digital Marketing Skill Share
## The next iteration of Digital Marketing Conferences

#### Purpose
The animation illustrates how DMSS is a conference all about sharing actionable skills. The logotype iterates from its first static state into a new dynamic state in which each node organically fuels the collective center.

Cool stuff about this project:
* The project consists of one javascript file only (47KB compressed)
* All graphics are dynamically created and animated
* You just choose a div and push start

## Links

### [Nerdmanship Custom](http://www.nerdmanship.com/) (Author)
### [Launch project](https://nerdmanship.github.io/DMSS-Logo-animation/dist)
### [Live website](https://www.dmss.io/) (Coming soon)

## How to install
  
Could not be easier.

1. Grab [logoAnimation.min.js](https://github.com/nerdmanship/DMSS-Logo-animation/blob/master/dist/js/logoAnimation.min.js) in /dist/js/ and link in the page head.

`<script type="text/javascript" src="logoAnimation.min.js"></script>`

2. Create a div wherever you want the logo on your page.

`<div id="wrapper"></div>`

3. Pass the div id as a string when you initialise the animation on page load.

`window.addEventListener("load", animateLogo("wrapper");`

You can position and style the div as you would with any normal image wrapper, including media queries. The logotype takes the dimension you give the wrapper, but the animation will go beyond those boarders in its expanded state.

## Dependencies
(Included in logoAnimation.min.js)
* GSAP TweenMax
* GSAP MorphSVGPlugin
* GSAP ModifiersPlugin

## Follow Nerdmanship Custom
* [Facebook](http://www.facebook.com/nerdmanship)
* [Twitter](http://www.twitter.com/stromqvist)
* [Dribbble](http://www.dribbble.com/stromqvist)
* [Codepen](http://www.codepen.io/nerdmanship)

## License

The code is available under the [MIT license](LICENSE.txt), but conference name (DMSS) and logotype is not.